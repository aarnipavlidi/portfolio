/* eslint-disable no-underscore-dangle */
import type { GetStaticProps } from 'next';
import type { landingPageProps } from '@/types/prismic';
import type { DocumentConnection, LandingPageSlices, LandingPage } from '@/types/prismic/graphql/graphql';
import type { getAllPagesMetaProps } from '@/types/prismic';
import { log } from 'next-axiom';
import { sql } from '@vercel/postgres';
import { getAllCurrentLandingPagePaths, insertEmptyPathsTable, formatEachRowsPath, formatEachPagesMeta, updateCurrentPathsTable } from '@/utils/storage';
import { getAllPagesMeta, getCurrentLandingPage } from '@/graphql/queries';
import { SliceZone, SliceZoneLike } from '@prismicio/react';
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
  const getCurrentLandingPageID: getAllPagesMetaProps['currentDocumentsID'] = null;
  const getLandingPagesMeta = await getAllPagesMeta({
    currentDocumentsID: getCurrentLandingPageID,
    filterDocuments: ['landing_page'],
  });

  const getCurrentPagesMetaFromPrismic = getLandingPagesMeta.data._allDocuments.edges as DocumentConnection['edges'];
  const formatCurrentLandingPagesMeta = formatEachPagesMeta({ getCurrentPagesMetaFromPrismic });

  const getFilteredLandingPagesPaths = formatCurrentLandingPagesMeta.filter(document => document);
  const client = await sql.connect();

  try {
    await client.query('BEGIN');
    const { rowCount: getCurrentLandingPageRowsAmount } = await client.query(getAllCurrentLandingPagePaths);

    if (!getCurrentLandingPageRowsAmount) {
      const { rows: getCurrentRowsFromDB } = await client.query(insertEmptyPathsTable, [JSON.stringify(getFilteredLandingPagesPaths)]);
      await client.query('COMMIT');
      log.info('Have successfully inserted "landing_page" type slugs into empty database:', getCurrentRowsFromDB);

      const getRowsPath = formatEachRowsPath({ getCurrentRowsFromDB, catchAllSegments: true });
      client.release();

      return {
        paths: getRowsPath || [],
        fallback: 'blocking',
      };
    }

    const { rows: getCurrentLandingPageRows, rowCount } = await client.query(updateCurrentPathsTable, [JSON.stringify(getFilteredLandingPagesPaths), 'landing_page']);

    if (getCurrentLandingPageRows) {
      await client.query('COMMIT');
      log.info(`Have successfully retrieved total of ${rowCount} "landing_page" type slugs. Database has currently following slugs:`, getCurrentLandingPageRows);
    }

    const getRowsPath = formatEachRowsPath({ getCurrentRowsFromDB: getCurrentLandingPageRows, catchAllSegments: true });
    client.release();

    return {
      paths: getRowsPath || [],
      fallback: 'blocking',
    };
  } catch (error) {
    await client.query('ROLLBACK');
    log.error('There was a problem during generation of static pages for "landing_page" type. Error was following:', error as any);

    client.release();

    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export default LandingPageSlug;
