import type { GetCurrentNavigationQuery } from '@/types/prismic/graphql/graphql';
import { getApolloClient } from '@/utils/apolloClient';
import { GET_CURRENT_NAVIGATION } from './templates/queries';

export type navigationProps = {
  'allNavigations': GetCurrentNavigationQuery;
};

export const getCurrentNavigation = async () => {
  const prismic = getApolloClient();

  const { data } = await prismic.query<navigationProps>({
    query: GET_CURRENT_NAVIGATION,
  });

  return data;
};
