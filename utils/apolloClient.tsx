import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import * as prismic from '@prismicio/client';
import { prismicRoutes, prismicRepositoryName, prismicAccessToken } from '@/utils/prismic';
import fragmentMatcher from '../graphql/fragment.matcher.json';

let client: ApolloClient<any> | null = null;

const getRepositoryEndPoint = prismic.getRepositoryEndpoint(prismicRepositoryName);

const prismicClient = prismic.createClient(getRepositoryEndPoint, {
  accessToken: prismicAccessToken,
  routes: prismicRoutes,
});

export const getApolloClient = () => {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: new HttpLink({
        uri: prismic.getGraphQLEndpoint(prismicRepositoryName),
        fetch: prismicClient.graphQLFetch,
        useGETForQueries: true,
      }),
      cache: new InMemoryCache({
        possibleTypes: fragmentMatcher.possibleTypes,
      }),
    });
  };

  return client;
};
