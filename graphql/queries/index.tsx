import type { getAllPagesMetaProps } from '@/types/prismic';
import { getApolloClient } from '@/utils/apolloClient';
import { GET_CURRENT_NAVIGATION, GET_CURRENT_FOOTER } from '@/graphql/templates/queries/app';
import { GET_ALL_PAGES_META, GET_CURRENT_LANDING_PAGE, GET_CURRENT_PROJECT } from '@/graphql/templates/queries/page';

export const getCurrentNavigation = async () => {
  const prismic = getApolloClient();

  const { data, error, errors } = await prismic.query({
    query: GET_CURRENT_NAVIGATION,
  });

  return { data, error, errors };
};

export const getCurrentFooter = async () => {
  const prismic = getApolloClient();

  const { data, error, errors } = await prismic.query({
    query: GET_CURRENT_FOOTER,
  });

  return { data, error, errors };
};

export const getAllPagesMeta = async ({ currentDocumentsID, filterDocuments, latestReference }: getAllPagesMetaProps) => {
  const prismic = getApolloClient();

  const context = {
    ...(latestReference ? { headers: { 'Prismic-ref': latestReference } } : {} ),
  };

  const { data } = await prismic.query({
    query: GET_ALL_PAGES_META,
    variables: {
      getCurrentDocumentsID: currentDocumentsID,
      filterDocuments: filterDocuments,
    },
    context,
  });

  return { data };
};

export const getCurrentLandingPage = async (currentSlug: string | string[], currentLocale: string) => {
  const prismic = getApolloClient();

  const { data, error } = await prismic.query({
    query: GET_CURRENT_LANDING_PAGE,
    errorPolicy: 'all',
    variables: {
      slug: typeof(currentSlug) === 'string' ? currentSlug : currentSlug[0],
      defaultLocale: currentLocale,
    },
  });

  return { data, error };
};

export const getCurrentProject = async (currentSlug: string | string[], currentLocale: string) => {
  const prismic = getApolloClient();

  const { data, error } = await prismic.query({
    query: GET_CURRENT_PROJECT,
    errorPolicy: 'all',
    variables: {
      slug: typeof(currentSlug) === 'string' ? currentSlug : currentSlug[0],
      defaultLocale: currentLocale,
    },
  });

  return { data, error };
};
