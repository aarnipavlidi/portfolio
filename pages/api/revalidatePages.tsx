/* eslint-disable no-magic-numbers */
import type { NextApiRequest, NextApiResponse } from 'next';
import type { PrismicPayloadProps, currentPageTypesForRevalidate } from '@/types/prismic';
import { getAllPagesMeta } from '@/graphql/queries';

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
  };

  const getCurrentPayload: PrismicPayloadProps = req.body;

  if (getCurrentPayload.type !== 'api-update') {
    res.status(417).json({
      message: 'Expected specific value from request before revalidating landing pages. Please try again.',
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
  const getLatestMasterRer = getCurrentPayload.masterRef || '';

  const { data } = await getAllPagesMeta({
    currentDocumentsID: getReleasedDocumentsID,
    filterDocuments: ['landing_page', 'project'],
    latestReference: getLatestMasterRer,
  });

  const getCurrentReleasedPagesMeta = data._allDocuments.edges;

  if (!getCurrentReleasedPagesMeta || getCurrentReleasedPagesMeta.length === 0) {
    res.status(400).json({
      message: 'There was issue either getting latest pages from prismic or payload does not match with the prismic data. Please try again.',
      statusCode: 400,
    });

    return;
  };

  const formatCurrentReleasedPagesMeta = getCurrentReleasedPagesMeta.map((document) => {
    const getPagePath = document?.node._meta.uid;
    const getPageType = document?.node._meta.type as currentPageTypesForRevalidate;

    if (getPagePath && getPageType === 'landing_page') {
      const checkIfHomeLandingPage = getPagePath === 'home' ? '/' : `/${getPagePath}`;

      return checkIfHomeLandingPage;
    };

    if (getPagePath && getPageType === 'project') {
      return `/project/${getPagePath}`;
    }

    return null;
  });

  const getCurrentReleasedPagesPaths = formatCurrentReleasedPagesMeta.filter(document => document);

  if (!getCurrentReleasedPagesPaths || getCurrentReleasedPagesPaths.length === 0) {
    res.status(400).json({
      message: 'There was issue getting meta data from released documents or documents does not match with expected type. Please try again.',
      statusCode: 400,
    });

    return;
  }

  try {
    await Promise.all(getCurrentReleasedPagesPaths.map(async currentDocumentPath => {
      console.log(`Doing revalidation for following path: ${currentDocumentPath}`);

      await res.revalidate(`${currentDocumentPath}`);
    }));

    console.log('Revalidation has been completed for all new released documents.');

    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).json({
      message: 'There was issue during revalidation of new landing page paths, so new page not visible on the app yet. Please try again.',
      statusCode: 500,
    });
  }
};
