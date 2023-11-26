import { graphql } from '@/types/prismic/graphql';

// HERO SLICE
export const PROJECT_HERO_SLICE_PRIMARY = graphql(`
  fragment ProjectHeroSlicePrimary on ProjectSlicesHero_sliceDefault {
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
  fragment ProjectHeroSliceFullWidth on ProjectSlicesHero_sliceFullwidth {
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

export const PROJECT_HERO_SLICE_GO_BACK = graphql(`
   fragment ProjectHeroSliceGoBack on ProjectSlicesHero_sliceGoback {
    goBack: primary {
      title
      hero_image
      image_mask {
        __typename
        ...ImageMask
      }
    }
   }
`);

export const PROJECT_HERO_SLICE_FIELDS = graphql(`
  fragment ProjectHeroSliceField on ProjectSlicesHero_slice {
    type
    label
    variation {
      __typename
      ...ProjectHeroSlicePrimary
      ...ProjectHeroSliceFullWidth
      ...ProjectHeroSliceGoBack
    }
  }
`);

// CONTENT BLOCK SLICE
export const PROJECT_CONTENT_BLOCK_SLICE_PRIMARY = graphql(`
  fragment ProjectContentBlockSlicePrimary on ProjectSlicesContent_block_sliceDefault {
    primary {
      title
      subtitle
      hashtag {
        __typename
        ...IconsList
      }
      stack {
        __typename
        ...IconsList
      }
      content
      images {
        __typename
        ...ImageGallery
      }
    }
   }
`);

export const PROJECT_CONTENT_BLOCK_SLICE_TEXT_ONLY = graphql(`
   fragment ProjectContentBlockSliceTextOnly on ProjectSlicesContent_block_sliceTextonly {
    textOnly: primary {
      content
    }
   }
`);

export const PROJECT_CONTENT_BLOCK_SLICE_FIELDS = graphql(`
  fragment ProjectContentBlockSliceField on ProjectSlicesContent_block_slice {
    type
    label
    variation {
      __typename
      ...ProjectContentBlockSlicePrimary
      ...ProjectContentBlockSliceTextOnly
    }
  }
`);


// STATS BLOCK SLICE
export const PROJECT_STATS_BLOCK_SLICE_PRIMARY = graphql(`
  fragment ProjectStatsBlockSlicePrimary on ProjectSlicesStats_block_sliceDefault {
    items {
      name
      href {
        __typename
        ...ExternalLinkMeta
      }
      icon {
        __typename
        ...HeroIcon
      }
      value
    }
  }
`);

export const PROJECT_STATS_BLOCK_SLICE_FIELDS = graphql(`
  fragment ProjectStatsBlockSliceField on ProjectSlicesStats_block_slice {
    type
    label
    variation {
      __typename
      ...ProjectStatsBlockSlicePrimary
    }
  }
`);
