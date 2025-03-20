require('dotenv').config({ path: './.env.local' });
import { generate } from '@graphql-codegen/cli';

// TODO Script crashes when importing env variables from
// ../utils/... location. Need to find out what causes this!
async function getLatestReleaseRef() {
  const getHygraphEndPoint = process.env.HYGRAPH_ENDPOINT || '';
  const getHygraphAuthToken = process.env.HYGRAPH_AUTH_TOKEN || '';

  await generate({
    overwrite: true,
    schema: [
      {
        [getHygraphEndPoint]: {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getHygraphAuthToken}`,
            // 'Prismic-Ref': ref,
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
      './hygraph/queries/**/*.tsx',
      './hygraph/fragments/**/*.tsx',
      // './graphql/templates/fragments/**/*.tsx',
    ],
    generates: {
      './types/hygraph/': {
        preset: 'client',
        presetConfig: {
          fragmentMasking: {
            unmaskFunctionName: 'getFragmentData',
          },
        }
      },
      './hygraph/fragments/fragment.matcher.json': {
        plugins: ['fragment-matcher'],
      },
    },
    ignoreNoDocuments: true,
  });
};

getLatestReleaseRef();
