import type { GetStaticProps } from 'next';
import type { projectPostProps } from '@/types/prismic';
import type { ProjectPostSlices, ProjectPost } from '@/types/prismic/graphql/graphql';
import type { getAllPagesMetaProps } from '@/graphql/queries';
import { getAllProjectPostsMeta, getCurrentProjectPost } from '@/graphql/queries';
import * as prismicH from '@prismicio/helpers';
import { prismicLinkResolver } from '@/utils/prismic';
import { SliceZone, SliceZoneLike } from '@prismicio/react';
import { components } from '@/slices/index';

type ProjectPostSliceZoneProps = SliceZoneLike<ProjectPostSlices & { type: string }>;
interface ProjectSlug {
  getPostData: projectPostProps['query']['project_post']
}

const ProjectPostSlug: React.FC<ProjectSlug> = ({ getPostData }) => {

  const getProjectPostSlices = (getPostData && getPostData.slices as ProjectPost['slices']) as ProjectPostSliceZoneProps;

  return (
    <>
      {
        getProjectPostSlices && <>
          <SliceZone
            slices={getProjectPostSlices}
            components={components}
          />
        </>
      }
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const getDefaultLocale = 'en-GB';
  const getCurrentPostSlug = context.params?.slug || 'portfolio';

  const { data, error } = await getCurrentProjectPost(getCurrentPostSlug, getDefaultLocale);

  if (!data.project_post || error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      getPostData: data.project_post,
    },
  };
};

export const getStaticPaths = async () => {
  const getCurrentProjectPostID: getAllPagesMetaProps['currentID'] = null;
  const getProjectPostsMeta = await getAllProjectPostsMeta({ currentID: getCurrentProjectPostID });

  const getCurrentProjectPostsMeta = getProjectPostsMeta.data.allProject_posts?.edges?.map((value) => value?.node._meta);
  const getEachProjectPostPath = getCurrentProjectPostsMeta?.map((getMeta) => prismicH.asLink(getMeta as any, prismicLinkResolver));

  return {
    paths: getEachProjectPostPath,
    fallback: 'blocking',
  };
};

export default ProjectPostSlug;
