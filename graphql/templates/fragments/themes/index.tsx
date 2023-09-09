import { gql } from '@apollo/client';
import { graphql } from '@/types/prismic/graphql/gql';

export const THEME_50_FIELDS = gql`
  fragment Theme50Fields on Theme_50 {
    light {
      name
      code
    }
  }
`;

export const THEME_100_FIELDS = gql`
  fragment Theme100Fields on Theme_100 {
    light {
      name
      code
    }
  }
`;

export const THEME_200_FIELDS = gql`
  fragment Theme200Fields on Theme_200 {
    light {
      name
      code
    }
  }
`;

export const THEME_300_FIELDS = gql`
  fragment Theme300Fields on Theme_300 {
    light {
      name
      code
    }
  }
`;

export const THEME_400_FIELDS = gql`
  fragment Theme400Fields on Theme_400 {
    light {
      name
      code
    }
  }
`;

export const THEME_500_FIELDS = gql`
  fragment Theme500Fields on Theme_500 {
    light {
      name
      code
    }
  }
`;

export const THEME_600_FIELDS = gql`
  fragment Theme600Fields on Theme_600 {
    light {
      name
      code
    }
  }
`;

export const THEME_700_FIELDS = gql`
  fragment Theme700Fields on Theme_700 {
    light {
      name
      code
    }
  }
`;

export const THEME_800_FIELDS = gql`
  fragment Theme800Fields on Theme_800 {
    light {
      name
      code
    }
  }
`;

export const THEME_900_FIELDS = gql`
  fragment Theme900Fields on Theme_900 {
    light {
      name
      code
    }
  }
`;

export const THEME_950_FIELDS = gql`
  fragment Theme950Fields on Theme_950 {
    light {
      name
      code
    }
  }
`;

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
