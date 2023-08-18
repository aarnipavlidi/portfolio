/* eslint-disable no-underscore-dangle */
import type { GetStaticProps } from 'next';
import type { landingPageProps } from '@/types/prismic';
import type { LandingPageSlices, LandingPage } from '@/types/prismic/graphql/graphql';
import type { getAllPagesMetaProps } from '@/graphql/queries';
import { getAllLandingPagesMeta, getCurrentLandingPage } from '@/graphql/queries';
import { SliceZone, SliceZoneLike } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';
import { prismicLinkResolver } from '@/utils/prismic';
import { components } from '@/slices/index';

type LandingPageSliceZoneProps = SliceZoneLike<LandingPageSlices & { type: string }>;
interface HomeProps {
  getPageData: landingPageProps['query']['landing_page'];
};

const LandingPageSlug: React.FC<HomeProps> = ({ getPageData }) => {

  const getLandingPageSlices = (getPageData && getPageData.slices as LandingPage['slices']) as LandingPageSliceZoneProps;

  return (
    <>
      {
        getLandingPageSlices && <>
          <SliceZone
            slices={getLandingPageSlices}
            components={components}
          />
        </>
      }
    </>
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
  const getCurrentLandingPageID: getAllPagesMetaProps['currentID'] = null;
  const getLandingPagesMeta = await getAllLandingPagesMeta({ currentID: getCurrentLandingPageID });

  const getCurrentPagesData = getLandingPagesMeta.data.allLanding_pages?.edges?.map((value) => value?.node._meta);

  // TODO CHECK RIGHT TYPE FOR "getMeta" variable.
  const getEachLandingPageMeta = getCurrentPagesData?.map((getMeta) => prismicH.asLink(getMeta as any, prismicLinkResolver));

  return {
    paths: getEachLandingPageMeta,
    fallback: 'blocking',
  };
};

export default LandingPageSlug;
