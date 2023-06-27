import type { LandingPageSlicesAarniSlice } from '@/types/prismic/graphql/graphql';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import Hero from '@/components/Hero';

type AarniSliceProps = SliceComponentProps<LandingPageSlicesAarniSlice & { type: string }>;

// FOR DEVELOPMENT DELETE LATER
const AarniSlice = ({ slice }: AarniSliceProps): JSX.Element => {
  const getData: LandingPageSlicesAarniSlice = slice;

  const getPrimaryVariant = getData && getData.variation?.__typename === 'Landing_pageSlicesAarni_sliceDefault'
    ? getData.variation.primary
    : null;

  return (
    <>
      {
        getPrimaryVariant && <Hero
          title={typeof(getPrimaryVariant.title) === 'string' ? getPrimaryVariant.title : <PrismicRichText field={getPrimaryVariant.title} />}
        />
      }
    </>
  );
};

export default AarniSlice;
