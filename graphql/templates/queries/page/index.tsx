import { gql } from '@apollo/client';
import { HERO_SLICE_FIELDS } from '../../fragments/slices';

export const GET_ALL_LANDING_PAGES_META = gql`
  query getAllLandingPagesMeta {
    allLanding_pages {
      edges {
        node {
          _meta {
            id
            uid
            type
            tags
            lang
            alternateLanguages {
              id
              uid
              type
              lang
            }
            firstPublicationDate
            lastPublicationDate
          }
        }
      }
    }
  }
`;

export const GET_CURRENT_LANDING_PAGE = gql`
  ${HERO_SLICE_FIELDS}
  query getCurrentLandingPage($slug: String!, $defaultLocale: String!) {
    landing_page(uid: $slug, lang: $defaultLocale) {
      slices {
        ...HeroSliceField
      }
    }
  }
`;
