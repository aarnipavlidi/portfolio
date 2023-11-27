import type { HeroSliceFieldFragment, ProjectHeroSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { SliceComponentProps } from '@prismicio/react';
import HeroSlice from './slice';

export type HeroSliceProps = SliceComponentProps<HeroSliceFieldFragment & { type: string } | ProjectHeroSliceFieldFragment & { type: string }>

export default HeroSlice;
