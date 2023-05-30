/* eslint-disable no-magic-numbers */
import type { LayoutFetchProps } from '@/types/prismic';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getCurrentNavigation } from '@/graphql/queries/';

export default async function handler(req: NextApiRequest, res: NextApiResponse<LayoutFetchProps[] | (string | string[])>) {
  const [navigationResponse] = await Promise.all([
    getCurrentNavigation(),
  ]);

  if (navigationResponse.error) {
    const getErrorMessage = navigationResponse.error.message;
    const formatErrorMessage = `During navigation query following error happened: ${getErrorMessage}.`;

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

  return res.status(200).json([{ navigation: navigationResponse.data }]);
};
