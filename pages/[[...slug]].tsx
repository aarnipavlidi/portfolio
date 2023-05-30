/* eslint-disable no-underscore-dangle */
import type { GetStaticProps, GetStaticPaths } from 'next';
import type { landingPageProps } from '@/types/prismic';
import type { LandingPageSlices, LandingPage } from '@/types/prismic/graphql/graphql';
import type { getAllLandingPagesMetaProps } from '@/graphql/queries';
import { SliceZone, SliceZoneLike } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { prismicLinkResolver } from '@/utils/prismic';

import { getAllLandingPagesMeta, getCurrentLandingPage } from '@/graphql/queries';
import { components } from '@/slices/index';

type HomeSliceZoneProps = SliceZoneLike<LandingPageSlices & { type: string }>;
interface HomeProps {
  getPageData: landingPageProps['query'];
};

const Home: React.FC<HomeProps> = ({ getPageData }) => {

  const getHomeSlices = getPageData?.landing_page?.slices as LandingPage['slices'];

  return (
    <div className="container">
      {
        getHomeSlices && <>
          <SliceZone slices={getHomeSlices as HomeSliceZoneProps} components={components} />
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
      getPageData: data,
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
