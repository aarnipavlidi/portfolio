import type { CardSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { SliceComponentProps } from '@prismicio/react';
import CardSlice from './slice';

export type CardSliceProps = SliceComponentProps<CardSliceFieldFragment & { type: string}>;

export default CardSlice;
