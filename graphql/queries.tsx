import { Query } from '@/types/contentful/graphql';
import apolloClient from '@/utils/apolloClient';
import { getCurrentNavigationQuery } from './templates';

export type navigationProps = {
  'navigationCollection': Query['navigationCollection']
};

export const getCurrentNavigation = async () => {
  const { data } = await apolloClient.query<navigationProps>({
    query: getCurrentNavigationQuery,
  });

  return data;
};
