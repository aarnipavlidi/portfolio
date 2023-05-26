import { gql } from '@apollo/client';

export const LINK_DOCUMENT_META = gql`
  fragment LinkDocumentMeta on _Document {
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
`;
