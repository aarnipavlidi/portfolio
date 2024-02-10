/* eslint-disable no-magic-numbers */
import type { NextApiRequest, NextApiResponse } from 'next';
import type { PrismicPayloadProps } from '@/types/prismic';
import type { DocumentConnection } from '@/types/prismic/graphql/graphql';
import { getAllPagesMeta } from '@/graphql/queries';
import { sql } from '@vercel/postgres';
import { log } from 'next-axiom';
import { revalidateCurrentPathsTable, formatEachPagesMeta } from '@/utils/storage';

interface NextApiResponseRevalidateProps {
  message?: string;
  statusCode?: number;
  revalidated?: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<NextApiResponseRevalidateProps>) {
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
  } else if (!req.headers.actiontype || req.headers.actiontype !== 'RELEASE') {
    res.status(400).json({
      message: 'Expecting action type to be included with rest of the headers or method key was invalid value. Please try again.',
      statusCode: 400,
    });
  }

  const getCurrentPayload: PrismicPayloadProps = req.body;

  if (getCurrentPayload.type !== 'api-update') {
    res.status(417).json({
      message: 'Expecting type to be included with rest of the body or type key was invalid value. Please try again.',
      statusCode: 417,
    });

    return;
  } else if (getCurrentPayload.releases.update && !(getCurrentPayload.documents && getCurrentPayload.documents.length > 0)) {
    const getCurrentReleaseName = getCurrentPayload.releases.update[0].label || '';

    res.status(200).json({
      message: `Successfully updated following release: ${getCurrentReleaseName}. Before deploying changes into production!`,
      statusCode: 200,
    });

    return;
  };

  const getReleasedDocumentsID = getCurrentPayload.documents || [];
  const getLatestMasterRef = getCurrentPayload.masterRef || '';

  const { data } = await getAllPagesMeta({
    currentDocumentsID: getReleasedDocumentsID,
    filterDocuments: ['landing_page', 'project'],
    latestReference: getLatestMasterRef,
  });

  const getCurrentPagesMetaFromPrismic = data._allDocuments.edges as DocumentConnection['edges'];
  const formatCurrentReleasedPagesMeta = formatEachPagesMeta({ getCurrentPagesMetaFromPrismic });

  const getCurrentReleasedPagesPaths = formatCurrentReleasedPagesMeta.filter(document => document);

  if (!getCurrentReleasedPagesPaths || !getCurrentReleasedPagesPaths.length) {
    res.status(400).json({
      message: 'There was issue getting meta data from released documents or documents does not match with expected type. Please try again.',
      statusCode: 400,
    });

    return;
  }

  const client = await sql.connect();

  try {
    await client.query('BEGIN');
    let currentRevalidationRound = 0;

    const { rows: getSelectedPagesPaths, rowCount: getSelectedPagesPathsAmount } = await client.query(revalidateCurrentPathsTable, [JSON.stringify(getCurrentReleasedPagesPaths)]);

    if (!getSelectedPagesPaths) {
      throw new Error('Expected database to return paths from release. Cancelling revalidation and database changes!');
    }

    if (getSelectedPagesPathsAmount !== getCurrentReleasedPagesPaths.length) {
      throw new Error('There was different amounts of rows between paths from release and paths from database. Cancelling revalidation and database changes!');
    }

    await Promise.all(getSelectedPagesPaths.map(async currentDocumentPath => {
      const getDestination = currentDocumentPath.destination || '';
      log.info(`Doing revalidation for following path: ${getDestination}`);

      try {
        await res.revalidate(getDestination);
        log.info(`Revalidated path: ${getDestination}`);
        currentRevalidationRound++;
      } catch (error) {
        log.error(`There was a problem while doing revalidation for ${getDestination} path. Error was following:`, error as any);
      }
    }));

    if (getSelectedPagesPathsAmount !== currentRevalidationRound) {
      throw new Error('Expected to revalidate equal amount of paths between selected paths and those which were actually revalidated. Cancelling revalidation and database changes!');
    }

    await client.query('COMMIT');
    log.info(`Total of ${getSelectedPagesPathsAmount} different paths were revalidated. Paths which were revalidated are following:`, getSelectedPagesPaths);

    client.release();

    return res.json({ revalidated: true });
  } catch (error) {
    await client.query('ROLLBACK');
    log.error('There was a following problem during revalidating selected pages for release:', error as any);

    client.release();

    return res.status(500).json({
      message: 'There was issue during revalidation of new released page paths, so new page(s) not visible on the app yet. Please try again.',
      statusCode: 500,
    });
  }
};
