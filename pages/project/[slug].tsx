import type { GetStaticProps } from 'next';
import type { projectPageProps } from '@/types/prismic';
import type { ProjectSlices, Project } from '@/types/prismic/graphql/graphql';
import type { getAllPagesMetaProps } from '@/graphql/queries';
import { getAllProjectsMeta, getCurrentProject } from '@/graphql/queries';
import * as prismicH from '@prismicio/helpers';
import { prismicLinkResolver } from '@/utils/prismic';
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
  const getCurrentProjectID: getAllPagesMetaProps['currentID'] = null;
  const getProjectsMeta = await getAllProjectsMeta({ currentID: getCurrentProjectID });

  const getCurrentProjectsMeta = getProjectsMeta.data.allProjects?.edges?.map((value) => value?.node._meta);
  const getEachProjectPath = getCurrentProjectsMeta?.map((getMeta) => prismicH.asLink(getMeta as any, prismicLinkResolver));

  return {
    paths: getEachProjectPath,
    fallback: 'blocking',
  };
};

export default ProjectSlug;
