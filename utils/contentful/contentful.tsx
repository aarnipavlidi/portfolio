import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || '';
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';

export const client = createClient({
  space,
  accessToken,
  environment,
});
