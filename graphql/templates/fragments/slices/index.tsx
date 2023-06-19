import { graphql } from '@/types/prismic/graphql';

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

export const HERO_SLICE_PRIMARY = graphql(`
  fragment HeroSlicePrimary on Landing_pageSlicesHero_sliceDefault {
    primary {
      title
      subtitle
      hero_image
      show_image_mask
      image_mask {
        __typename
        ...ImageMask
      }
      button {
        __typename
        ...Button
      }
      label
      href {
        _linkType
        __typename
        ...LinkDocumentMeta
      }
    }
  }
`);

export const HERO_SLICE_AVATAR = graphql(`
  fragment HeroSliceAvatar on Landing_pageSlicesHero_sliceAvatar {
    primary {
      title
    }
  }
`);

export const HERO_SLICE_FIELDS = graphql(`
  fragment HeroSliceField on Landing_pageSlicesHero_slice {
    type
    label
    variation {
      __typename
      ...HeroSlicePrimary
      ...HeroSliceAvatar
    }
  }
`);

// TEST SLICES FOR DEVELOPMENT <START>
export const AARNI_SLICE_PRIMARY = graphql(`
  fragment AarniSlicePrimary on Landing_pageSlicesAarni_sliceDefault {
    primary {
      __typename
      title
    }
  }
`);

export const AARNI_SLICE_FIELDS = graphql(`
  fragment AarniSliceField on Landing_pageSlicesAarni_slice {
    type
    label
    variation {
      __typename
      ...AarniSlicePrimary
    }
  }
`);
// TEST SLICES FOR DEVELOPMENT <END>
