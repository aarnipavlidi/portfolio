import type { CardSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { SliceComponentProps } from '@prismicio/react';
import Card from '@/components/Card';

import { CARD_SLICE_PRIMARY } from '@/graphql/templates/fragments/slices';

export type CardSliceProps = SliceComponentProps<CardSliceFieldFragment & { type: string}>

const CardSlice = ({ slice }: CardSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getPrimaryVariant = getSliceData && getSliceData.variation?.__typename=== 'Landing_pageSlicesCard_sliceDefault'
    ? getFragmentData(CARD_SLICE_PRIMARY, getSliceData.variation)
    : null;

  return (
    <>
      {
        getPrimaryVariant && <Card
          title={getPrimaryVariant.primary?.title}
          subtitle={getPrimaryVariant.primary?.subtitle}
          items={getPrimaryVariant.items}
        />
      }
    </>
  );
};

export default CardSlice;
