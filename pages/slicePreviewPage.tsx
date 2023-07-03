import type Content from 'prismicio-types';
import type { HeroSlicePrimaryFragment, HeroSliceAvatarFragment, HeroSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import type { CardSlicePrimaryFragment, CardSliceFieldFragment } from '@/types/prismic/graphql/graphql';
import { SliceSimulator } from '@slicemachine/adapter-next/simulator';
import { SliceZone, SliceZoneLike } from '@prismicio/react';
import { components } from '@/slices/index';

type LandingPageSliceZoneProps = SliceZoneLike<HeroSliceFieldFragment & { type: string }>;

const SlicePreviewPage: React.FC = () => {

  return (
    <>
      <SliceSimulator
        sliceZone={({ slices }) => {

          const [getSlicesData] = slices;

          const getLandingPageSlice = getSlicesData as Content.LandingPageDocumentDataSlicesSlice;

          if (getLandingPageSlice && getLandingPageSlice.slice_type === 'card_slice') {

            const getPrimaryVariantFragment: CardSlicePrimaryFragment = {
              __typename: 'Landing_pageSlicesCard_sliceDefault',
              primary: getLandingPageSlice.primary as CardSlicePrimaryFragment['primary'],
              items: getLandingPageSlice.items as unknown as CardSlicePrimaryFragment['items'],
            };

            const getCurrentVariantFragment = getLandingPageSlice.variation === 'default'
              ? getPrimaryVariantFragment
              : null;

            const formatSliceWithGraphQL: CardSliceFieldFragment = {
              __typename: 'Landing_pageSlicesCard_slice',
              label: getLandingPageSlice.slice_label,
              type: getLandingPageSlice.slice_type,
              variation: {
                __typename: 'Landing_pageSlicesCard_sliceDefault',
                ...getCurrentVariantFragment,
              },
            };

            return (
              <SliceZone slices={[formatSliceWithGraphQL] as LandingPageSliceZoneProps} components={components} />
            );
          }

          if (getLandingPageSlice && getLandingPageSlice.slice_type === 'hero_slice') {

            // There is some huge issues (it's possible I am missing something here) between
            // types (from Content), which are being generated via slicemachine and with
            // GraphQL types, which are generated via codegen. So this in mind, have to
            // kinda improvise and do multiple different conditions to check that value
            // is certain value to make sure we are actually using "right" type from
            // GraphQL side. Keep in mind that this page won't be pushed in production
            // only used for preview different slices via slicemachine and then take
            // screenshots if needed.
            const getPrimaryVariantFragment: HeroSlicePrimaryFragment = {
              __typename: 'Landing_pageSlicesHero_sliceDefault',
              primary: getLandingPageSlice.primary as HeroSlicePrimaryFragment['primary'],
            };

            // FOR TESTING PURPOSE (PLAYING AROUND WITH DIFFERENT VARIANT ON SLICE)
            // WILL BE DELETED OR RENAMED LATER.
            const getSecondaryVariantFragment: HeroSliceAvatarFragment = {
              __typename: 'Landing_pageSlicesHero_sliceAvatar',
              primary: getLandingPageSlice.primary as HeroSliceAvatarFragment['primary'],
            };

            const getCurrentVariantFragment = getLandingPageSlice.variation === 'default'
              ? getPrimaryVariantFragment
              : getLandingPageSlice.variation === 'avatar'
                ? getSecondaryVariantFragment
                : null;

            const formatSliceWithGraphQL: HeroSliceFieldFragment = {
              __typename: 'Landing_pageSlicesHero_slice',
              label: getLandingPageSlice.slice_label,
              type: getLandingPageSlice.slice_type,
              variation: {
                // We don't need to set any condition for this "__typename" key, because the
                // "getCurrentVariantFragment" will overwrite that key anyways, which will
                // have the "right" string value attached. Only reason why we are using it
                // here is because, "HeroSliceFieldFragment" type is expecting that this
                // key will have string value (generated via codegen), so I can't use null
                // or undefined value on it sadly :(
                __typename: 'Landing_pageSlicesHero_sliceDefault',
                ...getCurrentVariantFragment,
              },
            };

            return (
              <SliceZone slices={[formatSliceWithGraphQL] as LandingPageSliceZoneProps} components={components} />
            );
          }

          return (
            <SliceZone {...slices} components={components} />
          );
        }}
      />
    </>
  );
};

export const getStaticProps = async () => {
  if (process.env.SHOW_SLICE_PREVIEW_PAGE && process.env.NODE_ENV === 'development') {
    return {
      props: {},
    };
  }

  return {
    notFound: true,
  };
};

export default SlicePreviewPage;
