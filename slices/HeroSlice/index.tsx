import type { LandingPageSlicesHeroSlice } from '@/types/prismic/graphql/graphql';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import Hero from '@/components/Hero';

export type HeroSliceProps = SliceComponentProps<LandingPageSlicesHeroSlice & { type: string}>

const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {
  const getData: LandingPageSlicesHeroSlice = slice;

  const getPrimaryVariant = getData && getData.variation?.__typename === 'Landing_pageSlicesHero_sliceDefault'
    ? getData.variation.primary
    : null;

  // const getHeroImage: PrismicEditorFieldProps['image'] = slice.variation?.primary? ;

  return (
    <>
      {
        getPrimaryVariant && <Hero
          title={typeof(getPrimaryVariant.title) === 'string' ? getPrimaryVariant.title : <PrismicRichText field={getPrimaryVariant.title} />}
          subtitle={typeof(getPrimaryVariant.subtitle) === 'string' ? getPrimaryVariant.subtitle : <PrismicRichText field={getPrimaryVariant.subtitle} />}
        />
      }
    </>
  );
};

export default HeroSlice;
