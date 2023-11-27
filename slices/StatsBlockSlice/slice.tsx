import type { StatsBlockSliceProps } from '.';
import StatsBlock from '@/components/StatsBlock';
import { getStatsBlockSliceFragment } from '@/utils/slices';

const StatsBlockSlice = ({ slice }: StatsBlockSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getCurrentVariant = getSliceData && getSliceData.variation?.__typename
    ? getStatsBlockSliceFragment(getSliceData.variation.__typename, getSliceData.variation)
    : null;

  return (
    <>
      {
        getCurrentVariant && getCurrentVariant.__typename === 'ProjectSlicesStats_block_sliceDefault' && <StatsBlock
          collection={getCurrentVariant}
        />
      }
    </>
  );
};

export default StatsBlockSlice;
