import { LayoutFetchProps, allLandingPagesMetaProps, landingPageProps } from '@/types/prismic';
import { getApolloClient } from '@/utils/apolloClient';

import { GET_CURRENT_NAVIGATION } from '@/graphql/templates/queries/app';
import { GET_CURRENT_LANDING_PAGE, GET_ALL_LANDING_PAGES_META } from '@/graphql/templates/queries/page';

export const getCurrentNavigation = async () => {
  const prismic = getApolloClient();

  const { data, error, errors } = await prismic.query<LayoutFetchProps['navigation']>({
    query: GET_CURRENT_NAVIGATION,
    errorPolicy: 'all',
  });

  return { data, error, errors };
};

export const getAllLandingPagesMeta = async () => {
  const prismic = getApolloClient();

  const { data } = await prismic.query<allLandingPagesMetaProps['query']>({
    query: GET_ALL_LANDING_PAGES_META,
  });

  return { data };
};

export const getCurrentLandingPage = async (currentSlug: string | string[], currentLocale: string) => {
  const prismic = getApolloClient();

  const { data, error } = await prismic.query<landingPageProps['query'], landingPageProps['variables']>({
    query: GET_CURRENT_LANDING_PAGE,
    errorPolicy: 'all',
    variables: {
      slug: typeof(currentSlug) === 'string' ? currentSlug : currentSlug[0],
      defaultLocale: currentLocale,
    },
  });

  return { data, error };
};
