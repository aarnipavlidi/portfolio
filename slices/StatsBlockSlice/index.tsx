import type { SliceComponentProps } from '@prismicio/react';
import type { ProjectStatsBlockSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import StatsBlock from '@/components/StatsBlock';
import { PROJECT_STATS_BLOCK_SLICE_PRIMARY } from '@/graphql/templates/fragments/slices/project';

type StatsBlockSliceProps = SliceComponentProps<ProjectStatsBlockSliceFieldFragment & { type: string}>;

const StatsBlockSlice = ({ slice }: StatsBlockSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getCurrentVariant = getSliceData && getSliceData.variation?.__typename === 'ProjectSlicesStats_block_sliceDefault'
    ? getFragmentData(PROJECT_STATS_BLOCK_SLICE_PRIMARY, getSliceData.variation)
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
