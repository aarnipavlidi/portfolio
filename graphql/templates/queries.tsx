import { gql } from '@apollo/client';
import { LINK_DOCUMENT_META } from './fragments';

export const GET_CURRENT_NAVIGATION = gql`
  ${LINK_DOCUMENT_META}
  query getCurrentNavigation {
    allNavigations {
      edges {
        node {
          navigation_title
          navigation_links {
            link_name
            link_href {
              _linkType
              ...on _Document {
                ...LinkDocumentMeta
              }
            }
          }
        }
      }
    }
  }
`;
