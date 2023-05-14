import { navigationProps, landingPageProps } from '@/types/prismic';
import { getApolloClient } from '@/utils/apolloClient';

import { GET_CURRENT_NAVIGATION } from '@/graphql/templates/queries/app';
import { GET_HOME_LANDING_PAGE } from '../templates/queries/page/index';

export const getCurrentNavigation = async () => {
  const prismic = getApolloClient();

  const { data } = await prismic.query<navigationProps>({
    query: GET_CURRENT_NAVIGATION,
  });

  return data;
};

export const getHomeLandingPage = async () => {
  const prismic = getApolloClient();

  const { data } = await prismic.query<landingPageProps>({
    query: GET_HOME_LANDING_PAGE,
  });

  return data;
};
