import type { LandingPageSlicesHeroSlice } from '@/types/prismic/graphql/graphql';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import Hero from '@/components/Hero';

export type HeroSliceProps = SliceComponentProps<LandingPageSlicesHeroSlice & { type: string }>

const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {

  const getHeroTitle = slice.variation?.primary?.title;
  const getHeroSubtitle = slice.variation?.primary?.title;
  // const getHeroImage: PrismicEditorFieldProps['image'] = slice.variation?.primary? ;

  return (
    <Hero
      title={typeof(getHeroTitle) === 'string' ? getHeroTitle : <PrismicRichText field={getHeroTitle} />}
      subtitle={typeof(getHeroSubtitle) === 'string' ? getHeroSubtitle : <PrismicRichText field={getHeroSubtitle} />}
      // image={getHeroImage}
    />
  );
};

export default HeroSlice;
