import type { SliceVariationTypenamesProps } from '@/types/prismic';
import { getFragmentData } from '@/types/prismic/graphql';
import {
  CARD_SLICE_PRIMARY,
  CONTENT_BLOCK_SLICE_PRIMARY,
  CONTENT_BLOCK_SLICE_TEXT_ONLY,
  HERO_SLICE_PRIMARY,
  HERO_SLICE_FULL_WIDTH,
} from '@/graphql/templates/fragments/slices';
import {
  PROJECT_CONTENT_BLOCK_SLICE_PRIMARY,
  PROJECT_CONTENT_BLOCK_SLICE_TEXT_ONLY,
  PROJECT_HERO_SLICE_PRIMARY,
  PROJECT_HERO_SLICE_FULL_WIDTH,
  PROJECT_HERO_SLICE_GO_BACK,
  PROJECT_STATS_BLOCK_SLICE_PRIMARY,
} from '@/graphql/templates/fragments/slices/project';

export const getCardBlockSliceFragment = (typename: SliceVariationTypenamesProps['CardSlice'], variation: any) => {
  switch (typename) {
    case 'Landing_pageSlicesCard_sliceDefault':
      return getFragmentData(CARD_SLICE_PRIMARY, variation);
    default:
      return null;
  }
};

export const getContentBlockSliceFragment = (typename: SliceVariationTypenamesProps['ContentBlockSlice'], variation: any) => {
  switch (typename) {
    case 'ProjectSlicesContent_block_sliceDefault':
      return getFragmentData(PROJECT_CONTENT_BLOCK_SLICE_PRIMARY, variation);
    case 'ProjectSlicesContent_block_sliceTextonly':
      return getFragmentData(PROJECT_CONTENT_BLOCK_SLICE_TEXT_ONLY, variation);
    case 'Landing_pageSlicesContent_block_sliceDefault':
      return getFragmentData(CONTENT_BLOCK_SLICE_PRIMARY, variation);
    case 'Landing_pageSlicesContent_block_sliceTextonly':
      return getFragmentData(CONTENT_BLOCK_SLICE_TEXT_ONLY, variation);
    default:
      return null;
  }
};

export const getHeroSliceFragment = (typename: SliceVariationTypenamesProps['HeroSlice']['__typename'], variation: any) => {
  switch (typename) {
    case 'Landing_pageSlicesHero_sliceDefault':
      return getFragmentData(HERO_SLICE_PRIMARY, variation);
    case 'Landing_pageSlicesHero_sliceFullwidth':
      return getFragmentData(HERO_SLICE_FULL_WIDTH, variation);
    case 'ProjectSlicesHero_sliceDefault':
      return getFragmentData(PROJECT_HERO_SLICE_PRIMARY, variation);
    case 'ProjectSlicesHero_sliceFullwidth':
      return getFragmentData(PROJECT_HERO_SLICE_FULL_WIDTH, variation);
    case 'ProjectSlicesHero_sliceGoback':
      return getFragmentData(PROJECT_HERO_SLICE_GO_BACK, variation);
    default:
      return null;
  }
};

export const getStatsBlockSliceFragment = (typename: SliceVariationTypenamesProps['StatsBlockSlice'], variation: any) => {
  switch (typename) {
    case 'ProjectSlicesStats_block_sliceDefault':
      return getFragmentData(PROJECT_STATS_BLOCK_SLICE_PRIMARY, variation);
    default:
      return null;
  }
};
