import type { Home_Landing_PageSlicesHero_Slice as HomeLandingPageSlicesHeroSlice } from '@/types/prismic/graphql/graphql';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import Hero from '@/components/Hero';

export type HeroSliceProps = SliceComponentProps<HomeLandingPageSlicesHeroSlice & { type: string }>

const HeroSlice = ({ slice }: HeroSliceProps): JSX.Element => {
  const getHeroHeading = slice.variation?.primary?.heading;

  return (
    <Hero>
      <div>
        {
          getHeroHeading && <>
            <PrismicRichText field={getHeroHeading} />
          </>
        }
      </div>
    </Hero>
  );
};

export default HeroSlice;
