import type { SliceComponentProps } from '@prismicio/react';
import type { ProjectStatsBlockSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import StatsBlockSlice from './slice';

export type StatsBlockSliceProps = SliceComponentProps<ProjectStatsBlockSliceFieldFragment & { type: string}>;

export default StatsBlockSlice;
