import { graphql } from '@/types/prismic/graphql/gql';

export const IMAGE_GALLERY = graphql(`
  fragment ImageGallery on Image_gallery {
    _meta {
      uid
    }
    gallery {
      image
    }
  }
`);

export const IMAGE_MASK = graphql(`
  fragment ImageMask on Image_mask {
    _meta {
      uid
    }
    variant
  }
`);

export const BUTTON = graphql(`
  fragment Button on Button {
    _meta {
      uid
    }
    variant
    size
    full_width
  }
`);

export const HERO_ICON = graphql(`
  fragment HeroIcon on Heroicon {
    _meta {
      uid
    }
    variant
    name
  }
`);

export const ICONS_LIST = graphql(`
  fragment IconsList on Icons_list {
    _meta {
      uid
    }
    show_icons
    collection {
      name
      icon
      href {
        ...ExternalLinkMeta
      }
    }
  }
`);
