import type { ListBlockSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { SliceComponentProps } from '@prismicio/react';

import ListBlockSlice from './slice';

export type ListBlockSliceProps = SliceComponentProps<ListBlockSliceFieldFragment & { type: string}>

export default ListBlockSlice;
