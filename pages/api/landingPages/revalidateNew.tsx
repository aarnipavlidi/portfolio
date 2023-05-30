/* eslint-disable no-magic-numbers */
import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllLandingPagesMeta } from '@/graphql/queries';

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
  } else if (req.body.type !== 'api-update') {
    res.status(417).json({
      message: 'Expected specific value from request before revalidating landing pages. Please try again.',
      statusCode: 417,
    });

    return;
  } else if (!(req.body.documents) || req.body.length === 0) {
    res.status(400).json({
      message: 'Expected to get updated documents ID values from request before revalidating landing pages. Please try again.',
      statusCode: 400,
    });

    return;
  } else if (!(req.body.masterRef)) {
    res.status(400).json({
      message: 'Expected to get latest reference (version) value from request before revalidating landing pages. Plese try again.',
      statusCode: 400,
    });

    return;
  }

  const getUpdatedDocumentsID: string[] = req.body.documents;
  const getLatestMasterRef: string = req.body.masterRef;

  const { data } = await getAllLandingPagesMeta({
    // So currentID variable has to be null when deleting document
    // from prismic, because problem here is that when webhook is
    // being deleted from Prismic the payload is still telling
    // on the data which "id" value is being deleted right, and
    // because we are going to be fetching latest data from the
    // Prismic with the "Prismic-ref" headers, then that means
    // this document iD does not exist there anymore. This caused
    // following error: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // And now when I delete document and use null as variable,
    // then there is no issue on this part. TODO DELETE ME LATER
    currentID: getUpdatedDocumentsID,
    latestReference: getLatestMasterRef,
  });

  const getNewLandingPagesMeta = data.allLanding_pages.edges;

  if (!getNewLandingPagesMeta || getNewLandingPagesMeta.length === 0) {
    res.status(400).json({
      message: 'There was issue either getting latest landing pages from prismic or payload does not match with the prismic data. Please try again.',
      statusCode: 400,
    });

    return;
  }

  const formatLandingPagesMeta = (getNewLandingPagesMeta || []).map((item) => {

    const getItemID = item?.node._meta.uid;
    const getItemType = item?.node._meta.type;

    if (getItemID && getItemType === 'landing_page') {
      return getItemID;
    };

    return null;
  });

  const updatedLandingPagesMeta = formatLandingPagesMeta.filter(item => item);

  if (!updatedLandingPagesMeta || updatedLandingPagesMeta.length !== getUpdatedDocumentsID.length) {
    res.status(400).json({
      message: 'There was issue getting meta data from landing pages or payload does not match with the prismic data. Please try again.',
      statusCode: 400,
    });

    return;
  }

  try {
    for (const newPath of updatedLandingPagesMeta) {
      await res.revalidate(`/${newPath}`);
    }

    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).json({
      message: 'There was issue during revalidation of new landing page paths, so new page not visible on the app yet. Please try again.',
      statusCode: 500,
    });
  }
};
