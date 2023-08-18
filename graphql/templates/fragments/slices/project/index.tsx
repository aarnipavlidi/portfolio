import { graphql } from '@/types/prismic/graphql';

// HERO SLICE
export const PROJECT_HERO_SLICE_PRIMARY = graphql(`
  fragment ProjectHeroSlicePrimary on Project_postSlicesHero_sliceDefault {
    primary {
      title
      subtitle
      hero_image
      image_mask {
        __typename
        ...ImageMask
      }
      icon {
        __typename
        ...HeroIcon
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

export const PROJECT_HERO_SLICE_FULL_WIDTH = graphql(`
  fragment ProjectHeroSliceFullWidth on Project_postSlicesHero_sliceFullwidth {
    fullWidth: primary {
      title
      subtitle
      hero_image
      image_mask {
        __typename
        ...ImageMask
      }
    }
   }
`);

export const PROJECT_HERO_SLICE_FIELDS = graphql(`
  fragment ProjectHeroSliceField on Project_postSlicesHero_slice {
    type
    label
    variation {
      __typename
      ...ProjectHeroSlicePrimary
      ...ProjectHeroSliceFullWidth
    }
  }
`);

// CONTENT BLOCK SLICE
export const PROJECT_CONTENT_BLOCK_SLICE_PRIMARY = graphql(`
  fragment ProjectContentBlockSlicePrimary on Project_postSlicesContent_block_sliceDefault {
    primary {
      title
      subtitle
    }
   }
`);

export const PROJECT_CONTENT_BLOCK_SLICE_FIELDS = graphql(`
  fragment ProjectContentBlockSliceField on Project_postSlicesContent_block_slice {
    type
    label
    variation {
      __typename
      ...ProjectContentBlockSlicePrimary
    }
  }
`);
