/* eslint-disable no-magic-numbers */
import type { navigationProps } from 'graphql/queries';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentNavigation } from 'graphql/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse<navigationProps[]>) {

  const [allNavigations]: [navigationProps] = await Promise.all([
    getCurrentNavigation(),
  ]);
  res.status(200).json([allNavigations]);
};
