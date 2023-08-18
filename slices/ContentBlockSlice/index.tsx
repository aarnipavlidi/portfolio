import type { ProjectContentBlockSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { SliceComponentProps } from '@prismicio/react';
import ContentBlock from '@/components/ContentBlock';
import { PROJECT_CONTENT_BLOCK_SLICE_PRIMARY } from '@/graphql/templates/fragments/slices/project';

export type ContentBlockSliceProps = SliceComponentProps<ProjectContentBlockSliceFieldFragment & { type: string}>;

const ContentBlockSlice = ({ slice }: ContentBlockSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getCurrentVariant = getSliceData && getSliceData.variation?.__typename === 'Project_postSlicesContent_block_sliceDefault'
    ? getFragmentData(PROJECT_CONTENT_BLOCK_SLICE_PRIMARY, getSliceData.variation)
    : null;

  return (
    <>
      {
        getCurrentVariant && getCurrentVariant.__typename === 'Project_postSlicesContent_block_sliceDefault' && <ContentBlock
          variant="primary"
          title={getCurrentVariant.primary?.title}
          subtitle={getCurrentVariant.primary?.subtitle}
        />
      }
    </>
  );
};

export default ContentBlockSlice;
