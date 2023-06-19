import type { HeroSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import Hero from '@/components/Hero';

import { LINK_DOCUMENT_META } from '@/graphql/templates/fragments/documents';
import { IMAGE_MASK, BUTTON } from '@/graphql/templates/fragments/themes';
import { HERO_SLICE_PRIMARY, HERO_SLICE_AVATAR } from '@/graphql/templates/fragments/slices';

export type HeroSliceProps = SliceComponentProps<HeroSliceFieldFragment & { type: string}>

const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {
  const getSliceData = slice;

  const getPrimaryVariant = getSliceData && getSliceData.variation?.__typename === 'Landing_pageSlicesHero_sliceDefault'
    ? getFragmentData(HERO_SLICE_PRIMARY, getSliceData.variation).primary
    : null;

  const getPrimaryMask = getPrimaryVariant && getPrimaryVariant.image_mask?.__typename === 'Image_mask'
    ? getFragmentData(IMAGE_MASK, getPrimaryVariant.image_mask)
    : null;

  const getPrimaryButton = getPrimaryVariant && getPrimaryVariant.button?.__typename === 'Button'
    ? getFragmentData(BUTTON, getPrimaryVariant.button)
    : null;

  const getPrimaryButtonHref = getPrimaryVariant && getPrimaryVariant.href?.__typename === 'Landing_page'
    ? getFragmentData(LINK_DOCUMENT_META, getPrimaryVariant.href)
    : null;

  // FOR TESTING PURPOSE (PLAYING AROUND WITH DIFFERENT VARIANT ON SLICE)
  // WILL BE DELETED OR RENAMED LATER.
  const getSecondaryVariant = getSliceData && getSliceData.variation?.__typename === 'Landing_pageSlicesHero_sliceAvatar'
    ? getFragmentData(HERO_SLICE_AVATAR, getSliceData.variation).primary
    : null;

  return (
    <>
      {
        getPrimaryVariant && <Hero
          title={typeof(getPrimaryVariant.title) === 'string' ? getPrimaryVariant.title : <PrismicRichText field={getPrimaryVariant.title} />}
          subtitle={typeof(getPrimaryVariant.subtitle) === 'string' ? getPrimaryVariant.subtitle : <PrismicRichText field={getPrimaryVariant.subtitle} />}
          image={getPrimaryVariant.hero_image}
          showMask={getPrimaryVariant.show_image_mask}
          mask={getPrimaryMask}
          button={getPrimaryButton}
          buttonLabel={getPrimaryVariant.label}
          buttonHref={getPrimaryButtonHref?._meta.uid || '/'}
        />
      }
      {
        getSecondaryVariant && <Hero
          title={typeof(getSecondaryVariant.title) === 'string' ? getSecondaryVariant.title : <PrismicRichText field={getSecondaryVariant.title} />}
        />
      }
    </>
  );
};

export default HeroSlice;
