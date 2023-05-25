/* eslint-disable no-underscore-dangle */
import type { GetStaticProps, GetStaticPaths } from 'next';
import type { landingPageProps } from '@/types/prismic';
import type { LandingPageSlices, LandingPage } from '@/types/prismic/graphql/graphql';
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

  if (!data || error) {
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
  const { data } = await getAllLandingPagesMeta();

  const getCurrentPagesData = data.allLanding_pages?.edges?.map((value) => value?.node._meta);

  // TODO CHECK RIGHT TYPE FOR "getMeta" variable.
  const getEachPagePath = getCurrentPagesData?.map((getMeta) => prismicH.asLink(getMeta as any, prismicLinkResolver));

  return {
    paths: getEachPagePath,
    fallback: false,
  };
};

export default Home;
