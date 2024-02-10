import type { GetStaticProps } from 'next';
import type { projectPageProps, getAllPagesMetaProps } from '@/types/prismic';
import type { DocumentConnection, ProjectSlices, Project } from '@/types/prismic/graphql/graphql';
import { log } from 'next-axiom';
import { sql } from '@vercel/postgres';
import { getAllCurrentProjectPagePaths, insertEmptyPathsTable, updateCurrentPathsTable, formatEachRowsPath, formatEachPagesMeta } from '@/utils/storage';
import { getAllPagesMeta, getCurrentProject } from '@/graphql/queries';
import { SliceZone, SliceZoneLike } from '@prismicio/react';
import { components } from '@/slices/index';

type ProjectSliceZoneProps = SliceZoneLike<ProjectSlices & { type: string }>;
interface ProjectSlug {
  getProjectData: projectPageProps['query']['project']
}

const ProjectSlug: React.FC<ProjectSlug> = ({ getProjectData }) => {

  const getProjectSlices = (getProjectData && getProjectData.slices as Project['slices']) as ProjectSliceZoneProps;

  return (
    <>
      {
        getProjectSlices && <>
          <SliceZone
            slices={getProjectSlices}
            components={components}
          />
        </>
      }
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const getDefaultLocale = 'en-GB';
  const getCurrentProjectSlug = context.params?.slug || 'portfolio';

  const { data, error } = await getCurrentProject(getCurrentProjectSlug, getDefaultLocale);

  if (!data.project || error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      getProjectData: data.project,
    },
  };
};

export const getStaticPaths = async () => {
  const getCurrentProjectID: getAllPagesMetaProps['currentDocumentsID'] = null;
  const getProjectsMeta = await getAllPagesMeta({
    currentDocumentsID: getCurrentProjectID,
    filterDocuments: ['project'],
  });

  const getCurrentPagesMetaFromPrismic = getProjectsMeta.data._allDocuments.edges as DocumentConnection['edges'];
  const formatCurrentProjectsMeta = formatEachPagesMeta({ getCurrentPagesMetaFromPrismic });

  const getFilteredProjectsPaths = formatCurrentProjectsMeta.filter(document => document);
  const client = await sql.connect();

  try {
    await client.query('BEGIN');
    const { rowCount: getCurrentProjectRowsAmount } = await client.query(getAllCurrentProjectPagePaths);

    if (!getCurrentProjectRowsAmount) {
      const { rows: getCurrentRowsFromDB } = await client.query(insertEmptyPathsTable, [JSON.stringify(getFilteredProjectsPaths)]);
      await client.query('COMMIT');
      log.info('Have successfully inserted "project" type slugs into empty database:', getCurrentRowsFromDB);

      const getRowsPath = formatEachRowsPath({ getCurrentRowsFromDB });
      client.release();

      return {
        paths: getRowsPath || [],
        fallback: 'blocking',
      };
    }

    const { rows: getCurrentProjectPageRows, rowCount } = await client.query(updateCurrentPathsTable, [JSON.stringify(getFilteredProjectsPaths), 'project']);

    if (getCurrentProjectPageRows) {
      await client.query('COMMIT');
      log.info(`Have successfully retrieved total of ${rowCount} "project" type slugs. Database has currently following slugs:`, getCurrentProjectPageRows);
    }

    const getRowsPath = formatEachRowsPath({ getCurrentRowsFromDB: getCurrentProjectPageRows });
    client.release();

    return {
      paths: getRowsPath || [],
      fallback: 'blocking',
    };
  } catch (error) {
    await client.query('ROLLBACK');
    log.error('There was a problem during generation of static pages for "project" type. Error was following:', error as any);

    client.release();

    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export default ProjectSlug;
