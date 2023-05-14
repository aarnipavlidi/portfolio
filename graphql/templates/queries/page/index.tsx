import { gql } from '@apollo/client';
import { HERO_SLICE_FIELDS } from '../../fragments/slices';

export const GET_HOME_LANDING_PAGE = gql`
  ${HERO_SLICE_FIELDS}
  query getHomeLandingPage {
    allHome_landing_pages {
      edges {
        node {
          slices {
            ...HeroSliceField
          }
        }
      }
    }
  }
`;
