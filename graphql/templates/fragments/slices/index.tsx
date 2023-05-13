import { gql } from '@apollo/client';

const HERO_SLICE_PRIMARY = gql`
  fragment HeroSlicePrimary on Home_landing_pageSlicesHero_sliceDefault {
    primary {
      __typename
      heading
    }
  }
`;

export const HERO_SLICE_FIELDS = gql`
  ${HERO_SLICE_PRIMARY}
  fragment HeroSliceField on Home_landing_pageSlicesHero_slice {
    type
    label
    variation {
      __typename
      ...HeroSlicePrimary
    }
  }
`;
