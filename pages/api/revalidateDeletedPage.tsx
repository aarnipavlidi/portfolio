/* eslint-disable no-magic-numbers */
import type { NextApiRequest, NextApiResponse } from 'next';
import type { PrismicPayloadProps } from '@/types/prismic';
import { sql } from '@vercel/postgres';
import { log } from 'next-axiom';
import { getCurrentPagePaths, deleteCurrentPagePaths } from '@/utils/storage';

interface NextApiResponseRevalidateProps {
  message?: string;
  statusCode?: number;
  revalidated?: boolean;
}

// TODO DELETE LATER
// Needs following testing more
// 1) Testing how Prismic with Vercel db handles deleting one document
// 2) Same thing as first one but testing with multiple documents.
async function handler(req: NextApiRequest, res: NextApiResponse<NextApiResponseRevalidateProps>) {

  if (req.body.secret !== process.env.PRISMIC_WEBHOOK_TOKEN) {
    res.status(401).json({
      message: 'You are not authorized to make request to this page. Please authenticate and try again.',
      statusCode: 401,
    });

    return;
  } else if (req.method !== 'POST') {
    res.status(405).json({
      message: 'Only POST methods are allowed when revalidating landing pages. Please try again.',
      statusCode: 405,
    });

    return;
  } else if (!req.headers.actiontype || req.headers.actiontype !== 'DELETE') {
    res.status(400).json({
      message: 'Expecting action type to be included with rest of the headers or method key was invalid value. Please try again.',
      statusCode: 400,
    });

    return;
  }

  const getCurrentPayload: PrismicPayloadProps = req.body;

  if (getCurrentPayload.type !== 'api-update') {
    res.status(417).json({
      message: 'Expecting type to be included with rest of the body or type key was invalid value. Please try again.',
      statusCode: 417,
    });

    return;
  } else if (!getCurrentPayload.documents || !getCurrentPayload.documents.length) {
    res.status(400).json({
      message: 'Expecting document(s) ID to be included, before deleting chosen document from Prismic. Please try again.',
      statusCode: 400,
    });

    return;
  };

  const getDeletedDocumentsID = getCurrentPayload.documents || [];
  const client = await sql.connect();

  try {

    const { rows: getSelectedPagesPaths, rowCount: getSelectedPagesPathsAmount } = await client.query(getCurrentPagePaths, getDeletedDocumentsID);

    if (!getSelectedPagesPaths || !getSelectedPagesPathsAmount) {
      res.status(200).json({
        message: 'Expected chosen document(s), which were deleted from Prismic to have correct type. As it was missing mentioned value, there is no need for revalidation.',
        statusCode: 200,
      });

      client.release();

      return;
    }

    await Promise.all(getSelectedPagesPaths.map(async currentDocumentPath => {
      const getDestination: string = currentDocumentPath.destination || '';
      log.info(`Doing revalidation for following path: ${getDestination}`);

      await res.revalidate(getDestination);
    }));

    await client.query('BEGIN');
    const { rows: getDeletedPagesPaths, rowCount: getDeletedPagesPathsAmount } = await client.query(deleteCurrentPagePaths, getDeletedDocumentsID);

    if (getDeletedPagesPathsAmount !== getSelectedPagesPathsAmount) {
      throw new Error('There was a different amounts of rows between selected paths and paths for deletion. Cancelling revalidation and database changes!');
    }

    await client.query('COMMIT');
    log.info(`Total of ${getDeletedPagesPathsAmount} were deleted from database during revalidation. Paths which were deleted are following:`, getDeletedPagesPaths);

    client.release();

    return res.json({ revalidated: true });
  } catch (error) {
    await client.query('ROLLBACK');
    log.error('There was a following problem during revalidating selected pages for deletion:', error as any);

    client.release();

    return res.status(500).json({
      message: 'There was issue during revalidation of selected page paths for deletion. Please try again.',
      statusCode: 500,
    });
  }
};

export default handler;
