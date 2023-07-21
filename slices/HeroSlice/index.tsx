import type { HeroSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { SliceComponentProps } from '@prismicio/react';
import Hero from '@/components/Hero';

import { LINK_DOCUMENT_META } from '@/graphql/templates/fragments/documents';
import { IMAGE_MASK, HERO_ICON, BUTTON } from '@/graphql/templates/fragments/themes';
import { HERO_SLICE_PRIMARY, HERO_SLICE_FULL_WIDTH } from '@/graphql/templates/fragments/slices';

export type HeroSliceProps = SliceComponentProps<HeroSliceFieldFragment & { type: string}>

const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getCurrentVariant = getSliceData && getSliceData.variation?.__typename === 'Landing_pageSlicesHero_sliceDefault'
    ? getFragmentData(HERO_SLICE_PRIMARY, getSliceData.variation).primary
    : getSliceData && getSliceData.variation?.__typename === 'Landing_pageSlicesHero_sliceFullwidth'
      ? getFragmentData(HERO_SLICE_FULL_WIDTH, getSliceData.variation).fullWidth
      : null;

  const getBothVariantMask = getCurrentVariant && getCurrentVariant.image_mask?.__typename === 'Image_mask'
    ? getFragmentData(IMAGE_MASK, getCurrentVariant.image_mask)
    : null;

  const getPrimaryOnlyIcon = getCurrentVariant && getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefaultPrimary' && getCurrentVariant.icon?.__typename === 'Heroicon'
    ? getFragmentData(HERO_ICON, getCurrentVariant.icon)
    : null;

  const getPrimaryOnlyButton = getCurrentVariant && getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefaultPrimary' && getCurrentVariant.button?.__typename === 'Button'
    ? getFragmentData(BUTTON, getCurrentVariant.button)
    : null;

  const getPrimaryOnlyButtonHref = getCurrentVariant && getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefaultPrimary' && getCurrentVariant.href?.__typename === 'Landing_page'
    ? getFragmentData(LINK_DOCUMENT_META, getCurrentVariant.href)
    : null;

  return (
    <>
      {
        getCurrentVariant && getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefaultPrimary' && <Hero
          variant="primary"
          title={getCurrentVariant.title}
          subtitle={getCurrentVariant.subtitle}
          image={getCurrentVariant.hero_image}
          mask={getBothVariantMask}
          icon={getPrimaryOnlyIcon}
          button={getPrimaryOnlyButton}
          buttonLabel={getCurrentVariant.label}
          buttonHref={getPrimaryOnlyButtonHref?._meta.uid}
        />
      }
      {
        getCurrentVariant && getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceFullwidthPrimary' && <Hero
          variant="fullWidth"
          title={getCurrentVariant.title}
          subtitle={getCurrentVariant.subtitle}
          image={getCurrentVariant.hero_image}
          mask={getBothVariantMask}
        />
      }
    </>
  );
};

export default HeroSlice;
