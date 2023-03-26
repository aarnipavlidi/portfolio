import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { spaceContentful, accessTokenContentful, environmentContentful } from './contentful/contentful';

const baseUrlContentful = `https://graphql.contentful.com/content/v1/spaces/${spaceContentful}/environments/${environmentContentful}`;

const http = new HttpLink({
  uri: baseUrlContentful,
  headers: {
    Authorization: `Bearer ${accessTokenContentful}`,
  },
});

const link = ApolloLink.from([http]);
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: (link as any),
  cache,
});

export default apolloClient;
