require('dotenv').config({ path: './.env.local' });
import * as prismic from '@prismicio/client';
import fetch from 'node-fetch';
import { generate } from '@graphql-codegen/cli';

// TODO Script crashes when importing env variables from
// ../utils/... location. Need to find out what causes this!
async function getLatestReleaseRef() {
  const getRepositoryEndPoint = prismic.getRepositoryEndpoint(process.env.PRISMIC_REPOSITORY_NAME || '');
  const getGraphqlEndPoint = `https://${process.env.PRISMIC_REPOSITORY_NAME}.cdn.prismic.io/graphql`;

  const clientPrismic = prismic.createClient(getRepositoryEndPoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch,
  });

  const { ref } = await clientPrismic.getMasterRef();

  await generate({
    overwrite: true,
    schema: [
      {
        [getGraphqlEndPoint]: {
          method: 'GET',
          headers: {
            Authorization: `Token ${process.env.PRISMIC_ACCESS_TOKEN}`,
            'Prismic-Ref': ref,
          },
        },
      },
    ],
    config: {
      skipTypename: false,
      avoidOptionals: true,
      namingConvention: {
        typeNames: 'change-case-all#pascalCase',
        transformUnderscore: true,
      },
    },
    documents: [
      './graphql/templates/queries/*/*.tsx',
      './graphql/templates/fragments/*/*.tsx',
    ],
    generates: {
      './types/prismic/graphql/': {
        preset: 'client',
        presetConfig: {
          gqlTagName: 'gql',
        },
        plugins: [],
      },
      './graphql/fragment.matcher.json': {
        plugins: ['fragment-matcher'],
      },
    },
    ignoreNoDocuments: true,
  });
};

getLatestReleaseRef();
