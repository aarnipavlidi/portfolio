import type { GetNavigationQuery } from '@/types/hygraph/graphql';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentNavigation } from '@/hygraph/queries/api';

async function handler(req: NextApiRequest, res: NextApiResponse<GetNavigationQuery | (string | string[])>) {
    const { data: navigations, error, errors } = await getCurrentNavigation();
  
    if (error) {
      const getErrorMessage = error.message;
      const formatErrorMessage = `During api navigation query following error happened: ${getErrorMessage}.`;
  
      res.status(500).json(formatErrorMessage);
  
      return;
    }
  
    if (errors) {
      const formatErrors = errors.map(value => {
        const getEachErrorPath = value.path?.join(', ') || '';
  
        return `${value.message}${getEachErrorPath}.`;
      });
  
      res.status(500).json(formatErrors);
  
      return;
    }
  
    return res.status(200).json(navigations);
  };
  
  export default handler;