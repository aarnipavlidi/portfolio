import type { ContentBlockSliceProps } from '.';
import { getContentBlockSliceFragment } from '@/utils/slices';
import { getIconsListFragment, getImageGalleryFragment } from '@/utils/documents';
import ContentBlock from '@/components/ContentBlock';

const ContentBlockSlice = ({ slice }: ContentBlockSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getCurrentVariant = getSliceData && getSliceData.variation?.__typename
    ? getContentBlockSliceFragment(getSliceData.variation.__typename, getSliceData.variation)
    : null;

  const getHashtags = getCurrentVariant && (getCurrentVariant.__typename === 'ProjectSlicesContent_block_sliceDefault' || getCurrentVariant.__typename === 'Landing_pageSlicesContent_block_sliceDefault')
    ? getIconsListFragment('hashtag', getCurrentVariant)
    : null;

  const getStacks = getCurrentVariant && (getCurrentVariant.__typename === 'ProjectSlicesContent_block_sliceDefault' || getCurrentVariant.__typename === 'Landing_pageSlicesContent_block_sliceDefault')
    ? getIconsListFragment('stack', getCurrentVariant)
    : null;

  const getImages = getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesContent_block_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesContent_block_sliceDefault')
    ? getImageGalleryFragment('images', getCurrentVariant)
    : null;

  return (
    <>
      {
        getCurrentVariant && (getCurrentVariant.__typename === 'ProjectSlicesContent_block_sliceDefault' || getCurrentVariant.__typename === 'Landing_pageSlicesContent_block_sliceDefault') && <ContentBlock
          variant="primary"
          title={getCurrentVariant.primary?.title}
          subtitle={getCurrentVariant.primary?.subtitle}
          content={getCurrentVariant.primary?.content}
          hashtag={getHashtags}
          stack={getStacks}
          images={getImages}
        />
      }
      {
        getCurrentVariant && (getCurrentVariant.__typename === 'ProjectSlicesContent_block_sliceTextonly' || getCurrentVariant.__typename === 'Landing_pageSlicesContent_block_sliceTextonly') && <ContentBlock
          variant='textOnly'
          content={getCurrentVariant.textOnly?.content}
        />
      }
    </>
  );
};

export default ContentBlockSlice;

