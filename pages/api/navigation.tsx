/* eslint-disable no-magic-numbers */
import type { LayoutFetchProps } from '@/types/prismic';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getCurrentNavigation, getCurrentFooter } from '@/graphql/queries/';

export default async function handler(req: NextApiRequest, res: NextApiResponse<LayoutFetchProps[] | (string | string[])>) {
  const [navigationResponse, footerResponse] = await Promise.all([
    getCurrentNavigation(),
    getCurrentFooter(),
  ]);

  if (navigationResponse.error || footerResponse.error) {
    const getErrorMessage = (navigationResponse || footerResponse).error?.message;

    const formatErrorMessage = `During api navigation query following error happened: ${getErrorMessage}.`;

    res.status(500).json(formatErrorMessage);

    return;
  }

  if (navigationResponse.errors) {
    const formatErrors = navigationResponse.errors.map(value => {
      const getEachErrorPath = value.path?.join(', ') || '';

      return `${value.message}${getEachErrorPath}.`;
    });

    res.status(500).json(formatErrors);

    return;
  }

  if (footerResponse.errors) {
    const formatErrors = footerResponse.errors.map(value => {
      const getEachErrorPath = value.path?.join(', ') || '';

      return `${value.message}${getEachErrorPath}.`;
    });

    res.status(500).json(formatErrors);

    return;
  }

  return res.status(200).json(
    [
      {
        navigation: navigationResponse.data,
        footer: footerResponse.data,
      },
    ]
  );
};
