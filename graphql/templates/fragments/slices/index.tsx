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
  fragment HeroSlicePrimary on Landing_pageSlicesHero_sliceDefault {
    primary {
      __typename
      title
      subtitle
      hero_image
    }
  }
`;

const HERO_SLICE_AVATAR = gql`
  fragment HeroSliceAvatar on Landing_pageSlicesHero_sliceAvatar {
    primary {
      __typename
      title
    }
  }
`;

export const HERO_SLICE_FIELDS = gql`
  ${HERO_SLICE_PRIMARY}
  ${HERO_SLICE_AVATAR}
  fragment HeroSliceField on Landing_pageSlicesHero_slice {
    type
    label
    variation {
      __typename
      ...HeroSlicePrimary
      ...HeroSliceAvatar
    }
  }
`;
