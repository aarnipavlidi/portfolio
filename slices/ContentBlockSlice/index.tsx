import type { ProjectContentBlockSliceFieldFragment, ContentBlockSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { SliceComponentProps } from '@prismicio/react';
import ContentBlockSlice from './slice';

export type ContentBlockSliceProps = SliceComponentProps<ProjectContentBlockSliceFieldFragment & { type: string} | ContentBlockSliceFieldFragment & { type: string}>;

export default ContentBlockSlice;
