import type { CardSliceProps } from '.';
import Card from '@/components/Card';
import { getCardBlockSliceFragment } from '@/utils/slices';

const CardSlice = ({ slice }: CardSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getCurrentVariant = getSliceData && getSliceData.variation?.__typename
    ? getCardBlockSliceFragment(getSliceData.variation.__typename, getSliceData.variation)
    : null;

  return (
    <>
      {
        getCurrentVariant && <Card
          title={getCurrentVariant.primary?.title}
          subtitle={getCurrentVariant.primary?.subtitle}
          items={getCurrentVariant.items}
        />
      }
    </>
  );
};

export default CardSlice;
