import { gql } from '@apollo/client';

// REMINDER REMOVE LATER
// "items" which can be repeated on slices needs
// to be added after the "primary" so e.g
//  {
//    primary {
//      heading
//    }
//    items {
//      valueHere
//    }
//  }

const HERO_SLICE_PRIMARY = gql`
  fragment HeroSlicePrimary on Home_landing_pageSlicesHero_sliceDefault {
    primary {
      __typename
      title
      subtitle
      hero_image
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
