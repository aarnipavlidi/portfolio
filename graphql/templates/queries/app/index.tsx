import { graphql } from '@/types/prismic/graphql/gql';

export const GET_CURRENT_NAVIGATION = graphql(`
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
              __typename
              ...LinkDocumentMeta
            }
          }
        }
      }
    }
  }
`);

export const GET_CURRENT_FOOTER = graphql(`
  query getCurrentFooter {
    allFooters {
      edges {
        node {
          slogan
          slogan_keys {
            word
          }
          social_icons {
            __typename
            ...IconsList
          }
        }
      }
    }
  }
`);
