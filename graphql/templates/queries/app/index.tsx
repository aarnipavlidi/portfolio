import { gql } from '@apollo/client';
import { LINK_DOCUMENT_META } from '../../fragments/documents/';
import { THEME_50_FIELDS, THEME_100_FIELDS, THEME_200_FIELDS, THEME_300_FIELDS, THEME_400_FIELDS, THEME_500_FIELDS, THEME_600_FIELDS, THEME_700_FIELDS, THEME_800_FIELDS, THEME_900_FIELDS } from '../../fragments/themes/';

export const GET_CURRENT_NAVIGATION = gql`
  ${LINK_DOCUMENT_META}
  ${THEME_50_FIELDS}
  ${THEME_100_FIELDS}
  ${THEME_200_FIELDS}
  ${THEME_300_FIELDS}
  ${THEME_400_FIELDS}
  ${THEME_500_FIELDS}
  ${THEME_600_FIELDS}
  ${THEME_700_FIELDS}
  ${THEME_800_FIELDS}
  ${THEME_900_FIELDS}
  query getCurrentNavigation {
    allNavigations {
      edges {
        node {
          position
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
          color {
            ...Theme50Fields
            ...Theme100Fields
            ...Theme200Fields
            ...Theme300Fields
            ...Theme400Fields
            ...Theme500Fields
            ...Theme600Fields
            ...Theme700Fields
            ...Theme800Fields
            ...Theme900Fields
          }
        }
      }
    }
  }
`;
