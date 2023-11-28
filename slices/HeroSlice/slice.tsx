import type { HeroSliceProps } from '.';
import { getHeroSliceFragment } from '@/utils/slices';
import { getButtonFragment, getHeroIconFragment, getImageMaskFragment, getHrefFragment } from '@/utils/documents';
import Hero from '@/components/Hero';

const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getCurrentVariant = getSliceData && getSliceData.variation?.__typename
    ? getHeroSliceFragment(getSliceData.variation.__typename, getSliceData.variation)
    : null;

  const getBothVariantMask = getCurrentVariant && getCurrentVariant.__typename
    ? getImageMaskFragment(getCurrentVariant)
    : null;

  const getPrimaryOnlyIcon = getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceDefault')
    ? getHeroIconFragment(getCurrentVariant)
    : null;

  const getPrimaryOnlyButton = getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceDefault')
    ? getButtonFragment(getCurrentVariant)
    : null;

  const getPrimaryOnlyButtonHref = getCurrentVariant && (getCurrentVariant.__typename === 'Landing_pageSlicesHero_sliceDefault' || getCurrentVariant.__typename === 'ProjectSlicesHero_sliceDefault')
    ? getHrefFragment(getCurrentVariant)
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
      {
        getCurrentVariant && (getCurrentVariant.__typename === 'ProjectSlicesHero_sliceGoback') && getCurrentVariant.goBack && <Hero
          variant='goBack'
          title={getCurrentVariant.goBack.title}
          image={getCurrentVariant.goBack.hero_image}
          mask={getBothVariantMask}
        />
      }
    </>
  );
};

export default HeroSlice;
