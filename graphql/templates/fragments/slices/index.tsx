import { graphql } from '@/types/prismic/graphql';

export const HERO_SLICE_PRIMARY = graphql(`
  fragment HeroSlicePrimary on Landing_pageSlicesHero_sliceDefault {
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

export const HERO_SLICE_FULL_WIDTH = graphql(`
   fragment HeroSliceFullWidth on Landing_pageSlicesHero_sliceFullwidth {
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

export const HERO_SLICE_FIELDS = graphql(`
  fragment HeroSliceField on Landing_pageSlicesHero_slice {
    type
    label
    variation {
      __typename
      ...HeroSlicePrimary
      ...HeroSliceFullWidth
    }
  }
`);

export const CARD_SLICE_PRIMARY = graphql(`
  fragment CardSlicePrimary on Landing_pageSlicesCard_sliceDefault {
    primary {
      title
      subtitle
    }
    items {
      card_image
      name
      collection {
        __typename
        ...IconsList
      }
      description
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

export const CARD_SLICE_FIELDS = graphql(`
  fragment CardSliceField on Landing_pageSlicesCard_slice {
    type
    label
    variation {
      __typename
      ...CardSlicePrimary
    }
  }
`);
