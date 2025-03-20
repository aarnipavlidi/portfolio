import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import fragmentMatcher from '@/hygraph/fragments/fragment.matcher.json';
import { hygraphEndpoint, hygraphAuthToken } from '@/utils/hygraph';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = createHttpLink({
  uri: hygraphEndpoint
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${hygraphAuthToken}`
    }
  };
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache({
      possibleTypes: fragmentMatcher.possibleTypes,
    }),
  });
};

export default createApolloClient;