import { gql } from '@apollo/client';

export const getCurrentNavigationQuery = gql`
  query getCurrentNavigation {
    navigationCollection {
      items {
        navigationLinksCollection {
          items {
            entryName
            linkHref
            linkName
          }
        }
      }
    }
  }
`;
