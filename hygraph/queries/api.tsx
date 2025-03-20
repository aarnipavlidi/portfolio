import apolloClient from '@/utils/hygraphApolloClient';
import documents from '@/hygraph/queries/documents';

export const getCurrentNavigation = async () => {
  const hygraph = apolloClient();

  const { data, error, errors } = await hygraph.query({
    query: documents.navigations,
  });

  return {
    data,
    error,
    errors,
  };
};