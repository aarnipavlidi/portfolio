/* eslint-disable no-underscore-dangle */
import type { GetStaticProps } from 'next';
import type { landingPageProps } from '@/types/prismic';
import { getFragmentData } from '@/types/prismic/graphql';
import type { LandingPageSlices } from '@/types/prismic/graphql/graphql';
import type { getAllLandingPagesMetaProps } from '@/graphql/queries';
import { SliceZone, SliceLikeGraphQL } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { prismicLinkResolver } from '@/utils/prismic';

import { HERO_SLICE_FIELDS, HERO_SLICE_PRIMARY, HERO_SLICE_AVATAR } from '@/graphql/templates/fragments/slices';
import { LandingPageSlicesHeroSlice } from '@/types/prismic/graphql/graphql';

import { getAllLandingPagesMeta, getCurrentLandingPage } from '@/graphql/queries';
import { components } from '@/slices/index';

interface HomeProps {
  getPageData: landingPageProps['query']['landing_page'];
};

const Home: React.FC<HomeProps> = ({ getPageData }) => {

  const getLandingPageSlices: LandingPageSlices[] | null = getPageData && getPageData.slices && getPageData.slices.map((item): LandingPageSlices => {
    if (item.__typename === 'Landing_pageSlicesHero_slice') {
      const getHeroSlices = getFragmentData(HERO_SLICE_FIELDS, item);

      const getCurrentHeroVariant = getHeroSlices && getHeroSlices.variation?.__typename === 'Landing_pageSlicesHero_sliceDefault'
        ? getFragmentData(HERO_SLICE_PRIMARY, getHeroSlices.variation)
        : getHeroSlices.variation?.__typename === 'Landing_pageSlicesHero_sliceAvatar'
          ? getFragmentData(HERO_SLICE_AVATAR, getHeroSlices.variation)
          : null;

      const currentSlice: LandingPageSlicesHeroSlice = {
        __typename: getHeroSlices.__typename,
        type: getHeroSlices.type || null,
        label: getHeroSlices.label,
        variation: getCurrentHeroVariant,
      };

      return currentSlice;
    }

    return {
      type: null,
      label: null,
      variation: null,
    };
  });

  const checkLandingPageSlices = getLandingPageSlices && getLandingPageSlices.filter(value => value.type).length > 0
    ? getLandingPageSlices.filter(value => value.type)
    : null;

  return (
    <div className="container">
      {
        checkLandingPageSlices && <>
          <SliceZone
            slices={checkLandingPageSlices as readonly SliceLikeGraphQL<string>[]}
            components={components}
          />
        </>
      }
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const getDefaultLocale = 'en-GB';
  const getCurrentPageSlug = context.params?.slug || 'home';

  const { data, error } = await getCurrentLandingPage(getCurrentPageSlug, getDefaultLocale);

  if (!data.landing_page || error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      getPageData: data.landing_page,
    },
  };
};

export const getStaticPaths = async () => {
  // When building app, will get all current landing pages from Prismic.
  const getCurrentLandingPageID: getAllLandingPagesMetaProps['currentID'] = null;
  const { data } = await getAllLandingPagesMeta({ currentID: getCurrentLandingPageID });

  const getCurrentPagesData = data.allLanding_pages?.edges?.map((value) => value?.node._meta);

  // TODO CHECK RIGHT TYPE FOR "getMeta" variable.
  const getEachPagePath = getCurrentPagesData?.map((getMeta) => prismicH.asLink(getMeta as any, prismicLinkResolver));

  return {
    paths: getEachPagePath,
    fallback: 'blocking',
  };
};

export default Home;
