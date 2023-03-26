import { createClient } from 'contentful';

export const spaceContentful = process.env.CONTENTFUL_SPACE_ID || '';
export const accessTokenContentful = process.env.CONTENTFUL_ACCESS_TOKEN || '';
export const environmentContentful = process.env.CONTENTFUL_ENVIRONMENT || 'master';

export const client = createClient({
  space: spaceContentful,
  accessToken: accessTokenContentful,
  environment: environmentContentful,
});
