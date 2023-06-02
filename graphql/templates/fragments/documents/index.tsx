import { graphql } from '@/types/prismic/graphql/gql';

export const LINK_DOCUMENT_META = graphql(`
  fragment LinkDocumentMeta on _Document {
    __typename
    _meta {
      id
      uid
      type
      tags
      lang
      firstPublicationDate
      lastPublicationDate
    }
  }
`);
