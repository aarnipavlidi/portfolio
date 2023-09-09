import type { HeroSliceFieldFragment, ProjectHeroSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { SliceComponentProps } from '@prismicio/react';
import Hero from '@/components/Hero';

import { LINK_DOCUMENT_META } from '@/graphql/templates/fragments/documents';
import { IMAGE_MASK, HERO_ICON, BUTTON } from '@/graphql/templates/fragments/themes';
import { HERO_SLICE_PRIMARY, HERO_SLICE_FULL_WIDTH } from '@/graphql/templates/fragments/slices';
import { PROJECT_HERO_SLICE_FULL_WIDTH, PROJECT_HERO_SLICE_PRIMARY } from '@/graphql/templates/fragments/slices/project';

export type HeroSliceProps = SliceComponentProps<HeroSliceFieldFragment & { type: string } | ProjectHeroSliceFieldFragment & { type: string }>

const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getCurrentVariant = getSliceData && getSliceData.variation?.__typename === 'Landing_pageSlicesHero_sliceDefault'
    ? getFragmentData(HERO_SLICE_PRIMARY, getSliceData.variation)
    : getSliceData && getSliceData.variation?.__typename === 'Landing_pageSlicesHero_sliceFullwidth'
      ? getFragmentData(HERO_SLICE_FULL_WIDTH, getSliceData.variation)
      : getSliceData && getSliceData.variation?.__typename === 'ProjectSlicesHero_sliceDefault'
        ? getFragmentData(PROJECT_HERO_SLICE_PRIMARY, getSliceData.variation)
        : getSliceData && getSliceData.variation?.__typename === 'ProjectSlicesHero_sliceFullwidth'
          ? getFragmentData(PROJECT_HERO_SLICE_FULL_WIDTH, getSliceData.variation)
          : null;

  const getBothVariantMask = getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceDefault') && getCurrentVariant.primary?.image_mask?.__typename === 'Image_mask'
    ? getFragmentData(IMAGE_MASK, getCurrentVariant.primary.image_mask)
    : getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceFullwidth' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceFullwidth') && getCurrentVariant.fullWidth?.image_mask?.__typename === 'Image_mask'
      ? getFragmentData(IMAGE_MASK, getCurrentVariant.fullWidth.image_mask)
      : null;

  const getPrimaryOnlyIcon = getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceDefault') && getCurrentVariant.primary?.icon?.__typename === 'Heroicon'
    ? getFragmentData(HERO_ICON, getCurrentVariant.primary.icon)
    : null;

  const getPrimaryOnlyButton = getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceDefault') && getCurrentVariant.primary?.button?.__typename === 'Button'
    ? getFragmentData(BUTTON, getCurrentVariant.primary.button)
    : null;

  const getPrimaryOnlyButtonHref = getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceDefault') && getCurrentVariant.primary?.href?.__typename === 'Landing_page'
    ? getFragmentData(LINK_DOCUMENT_META, getCurrentVariant.primary.href)
    : null;

  return (
    <>
      {
        getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceDefault') && getCurrentVariant.primary && <Hero
          variant="primary"
          title={getCurrentVariant.primary.title}
          subtitle={getCurrentVariant.primary.subtitle}
          image={getCurrentVariant.primary.hero_image}
          mask={getBothVariantMask}
          icon={getPrimaryOnlyIcon}
          button={getPrimaryOnlyButton}
          buttonLabel={getCurrentVariant.primary.label}
          buttonHref={getPrimaryOnlyButtonHref?._meta.uid}
        />
      }
      {
        getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceFullwidth' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceFullwidth') && getCurrentVariant.fullWidth && <Hero
          variant="fullWidth"
          title={getCurrentVariant.fullWidth.title}
          subtitle={getCurrentVariant.fullWidth.subtitle}
          image={getCurrentVariant.fullWidth.hero_image}
          mask={getBothVariantMask}
        />
      }
    </>
  );
};

export default HeroSlice;
