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

export interface getAllLandingPagesMetaProps {
  currentID: string | string[] | null;
  latestReference?: string;
}

export const getAllLandingPagesMeta = async ({ currentID, latestReference }: getAllLandingPagesMetaProps) => {
  const prismic = getApolloClient();

  const context = {
    ...(latestReference ? { headers: { 'Prismic-ref': latestReference } } : {} ),
  };

  const { data } = await prismic.query<allLandingPagesMetaProps['query'], allLandingPagesMetaProps['variables']>({
    query: GET_ALL_LANDING_PAGES_META,
    variables: {
      getByID: currentID,
    },
    context,
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
