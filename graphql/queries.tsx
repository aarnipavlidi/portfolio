import type { GetCurrentNavigationQuery, GetHomeLandingPageQuery } from '@/types/prismic/graphql/graphql';
import { getApolloClient } from '@/utils/apolloClient';
import { GET_CURRENT_NAVIGATION } from './templates/queries';

import { GET_HOME_LANDING_PAGE } from './templates/queries';

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

export type landingPageProps = {
  'home': GetHomeLandingPageQuery;
};

export const getHomeLandingPage = async () => {
  const prismic = getApolloClient();

  const { data } = await prismic.query<landingPageProps>({
    query: GET_HOME_LANDING_PAGE,
  });

  return data;
};
