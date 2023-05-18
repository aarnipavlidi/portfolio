import type { HomeLandingPageSlicesHeroSlice } from '@/types/prismic/graphql/graphql';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import Hero from '@/components/Hero';

export type HeroSliceProps = SliceComponentProps<HomeLandingPageSlicesHeroSlice & { type: string }>

const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {

  const getHeroTitle = slice.variation?.primary?.title;
  const getHeroSubtitle = slice.variation?.primary?.subtitle;

  return (
    <Hero
      title={typeof(getHeroTitle) === 'string' ? getHeroTitle : <PrismicRichText field={getHeroTitle} />}
      subtitle={typeof(getHeroSubtitle) === 'string' ? getHeroSubtitle : <PrismicRichText field={getHeroSubtitle} />}
    />
  );
};

export default HeroSlice;
