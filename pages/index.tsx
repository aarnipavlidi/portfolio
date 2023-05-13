import type { GetServerSideProps } from 'next';
import type { landingPageProps } from 'graphql/queries';
import type { Home_Landing_PageSlices as HomeLandingPageSlices, Home_Landing_Page as HomeLandingPage } from '@/types/prismic/graphql/graphql';
import { SliceZone, SliceZoneLike } from '@prismicio/react';
import { getHomeLandingPage } from 'graphql/queries';

import { components } from '../slices';

type HomeSliceZoneProps = SliceZoneLike<HomeLandingPageSlices & { type: string }>;
interface HomeProps {
  getPageData: landingPageProps['home']
};

const Home: React.FC<HomeProps> = ({ getPageData }) => {
  const getHomeSlices = getPageData.allHome_landing_pages.edges?.[0]?.node.slices as HomeLandingPage['slices'];

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

export const getServerSideProps: GetServerSideProps = async () => {
  const getHomeData = await getHomeLandingPage();

  return {
    props: {
      getPageData: getHomeData,
    },
  };
};

export default Home;
