import type { ListBlockSliceSliceDefaultPrimary } from 'prismicio-types';
import type { ListBlockSliceProps } from '.';
import { getListBlocksSliceFragment } from '@/utils/slices';
import { getHeroIconFragment } from '@/utils/documents';
import ListBlock from '@/components/ListBlock';


const ListBlockSlice = ({ slice }: ListBlockSliceProps): JSX.Element => {

  const getSliceData = slice;

  const getCurrentVariant = getSliceData && getSliceData.variation?.__typename
    ? getListBlocksSliceFragment(getSliceData.variation.__typename, getSliceData.variation)
    : null;

  const getTitleIcon = getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesList_block_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesList_block_sliceDefault')
    ? getHeroIconFragment(getCurrentVariant)
    : null;

  return (
    <>
      {
        getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesList_block_sliceDefault') && <ListBlock
          variant='primary'
          roundedBackground={getCurrentVariant.primary?.rounded_background}
          headerPosition={getCurrentVariant.primary?.header_position as ListBlockSliceSliceDefaultPrimary['header_position']}
          headerTitle={getCurrentVariant.primary?.header_title}
          titleIcon={getTitleIcon}
          items={getCurrentVariant.items}
        />
      }
    </>
  );
};

export default ListBlockSlice;
