import type {
  HeroSliceFullWidthFragment,
  HeroSlicePrimaryFragment,
  ProjectHeroSliceFullWidthFragment,
  ProjectHeroSliceGoBackFragment,
  ProjectHeroSlicePrimaryFragment,
  ContentBlockSlicePrimaryFragment,
  ProjectContentBlockSlicePrimaryFragment,
  ContentBlockSliceRichTextFragment,
  ProjectContentBlockSliceRichTextFragment,
} from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { BUTTON, HERO_ICON, ICONS_LIST, IMAGE_GALLERY, IMAGE_MASK } from '@/graphql/templates/fragments/themes';
import { LINK_DOCUMENT_META } from '@/graphql/templates/fragments/documents';

interface DocumentIconsListProps {
  key: 'hashtag' | 'stack' | 'content';
  slice: ContentBlockSlicePrimaryFragment | ProjectContentBlockSlicePrimaryFragment;
}

interface DocumentImageGalleryProps {
  key: 'images';
  slice: ContentBlockSlicePrimaryFragment | ProjectContentBlockSlicePrimaryFragment;
}

interface DocumentVariationProps {
  ImageMask: HeroSlicePrimaryFragment | HeroSliceFullWidthFragment | ProjectHeroSlicePrimaryFragment | ProjectHeroSliceFullWidthFragment | ProjectHeroSliceGoBackFragment | ContentBlockSliceRichTextFragment | ProjectContentBlockSliceRichTextFragment;
  HeroIcon: HeroSlicePrimaryFragment | ProjectHeroSlicePrimaryFragment;
  Button: HeroSlicePrimaryFragment | ProjectHeroSlicePrimaryFragment;
  Href: HeroSlicePrimaryFragment | ProjectHeroSlicePrimaryFragment;
  IconsList: DocumentIconsListProps;
  ImageGallery: DocumentImageGalleryProps;
}

export const getImageMaskFragment = (variation: DocumentVariationProps['ImageMask']) => {
  switch (variation.__typename) {
    case 'Landing_pageSlicesHero_sliceDefault':
    case 'ProjectSlicesHero_sliceDefault':
      const getPrimaryImageMask = variation.primary?.image_mask;

      return getPrimaryImageMask?.__typename === 'Image_mask'
        ? getFragmentData(IMAGE_MASK, getPrimaryImageMask)
        : null;
    case 'Landing_pageSlicesHero_sliceFullwidth':
    case 'ProjectSlicesHero_sliceFullwidth':
      const getFullWidthImageMask = variation.fullWidth?.image_mask;

      return getFullWidthImageMask?.__typename === 'Image_mask'
        ? getFragmentData(IMAGE_MASK, getFullWidthImageMask)
        : null;
    case 'ProjectSlicesHero_sliceGoback':
      const getGoBackImageMask = variation.goBack?.image_mask;

      return getGoBackImageMask?.__typename === 'Image_mask'
        ? getFragmentData(IMAGE_MASK, getGoBackImageMask)
        : null;
    case 'Landing_pageSlicesContent_block_sliceRichtext':
    case 'ProjectSlicesContent_block_sliceRichtext':
      const getRichTextImageMask = variation.RichText?.image_mask;

      return getRichTextImageMask?.__typename === 'Image_mask'
        ? getFragmentData(IMAGE_MASK, getRichTextImageMask)
        : null;

    default:
      return null;
  }
};

export const getHeroIconFragment = (variation: DocumentVariationProps['HeroIcon']) => {
  switch (variation.__typename) {
    case 'Landing_pageSlicesHero_sliceDefault':
    case 'ProjectSlicesHero_sliceDefault':
      const getPrimaryHeroIcon = variation.primary?.icon;

      return getPrimaryHeroIcon?.__typename === 'Heroicon'
        ? getFragmentData(HERO_ICON, getPrimaryHeroIcon)
        : null;
    default:
      return null;
  }
};

export const getIconsListFragment = (
  key: DocumentVariationProps['IconsList']['key'],
  slice: DocumentVariationProps['IconsList']['slice'],
) => {
  switch (slice.__typename) {
    case 'Landing_pageSlicesContent_block_sliceDefault':
    case 'ProjectSlicesContent_block_sliceDefault':

      const getCurrentPropertyKey = key;
      const getPrimaryIconsList = slice.primary?.[getCurrentPropertyKey];

      return getPrimaryIconsList?.__typename === 'Icons_list'
        ? getFragmentData(ICONS_LIST, getPrimaryIconsList)
        : null;
    default:
      return null;
  }
};

export const getImageGalleryFragment = (
  key: DocumentVariationProps['ImageGallery']['key'],
  slice: DocumentVariationProps['ImageGallery']['slice']
) => {
  switch (slice.__typename) {
    case 'Landing_pageSlicesContent_block_sliceDefault':
    case 'ProjectSlicesContent_block_sliceDefault':

      const getCurrentPropertyKey = key;
      const getPrimaryImageGallery = slice.primary?.[getCurrentPropertyKey];

      return getPrimaryImageGallery?.__typename === 'Image_gallery'
        ? getFragmentData(IMAGE_GALLERY, getPrimaryImageGallery)
        : null;

    default:
      return null;
  }
};

export const getButtonFragment = (variation: DocumentVariationProps['Button']) => {
  switch (variation.__typename) {
    case 'Landing_pageSlicesHero_sliceDefault':
    case 'ProjectSlicesHero_sliceDefault':
      const getPrimaryButton = variation.primary?.button;

      return getPrimaryButton?.__typename === 'Button'
        ? getFragmentData(BUTTON, getPrimaryButton)
        : null;
    default:
      return null;
  }
};

export const getHrefFragment = (variation: DocumentVariationProps['Href']) => {
  switch (variation.__typename) {
    case 'Landing_pageSlicesHero_sliceDefault':
    case 'ProjectSlicesHero_sliceDefault':
      const getPrimaryHref = variation.primary?.href;

      return getPrimaryHref?.__typename === 'Landing_page'
        ? getFragmentData(LINK_DOCUMENT_META, getPrimaryHref)
        : null;
    default:
      return null;
  }
};
