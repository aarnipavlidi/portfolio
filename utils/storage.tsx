import type { PortfolioDatabaseProps } from '@/types/database';
import type { currentPageTypesForRevalidate } from '@/types/prismic';
import type { DocumentConnection } from '@/types/prismic/graphql/graphql';

interface formatEachRowsPathProps {
  getCurrentRowsFromDB: PortfolioDatabaseProps['paths'][];
  catchAllSegments?: boolean;
};

interface formatEachRowsPathReturnProps {
  params: {
    slug: string[] | string;
  }
};

interface formatEachPagesMetaProps {
  getCurrentPagesMetaFromPrismic: DocumentConnection['edges']
}

export const getCurrentPagePaths = `
  SELECT destination FROM paths
  WHERE id = ANY($1)
  AND (type = 'landing_page' OR type = 'project')
`;

export const deleteCurrentPagePaths = `
  DELETE FROM paths
  WHERE id = ANY($1)
  AND (type = 'landing_page' OR type = 'project')
  RETURNING destination
`;

export const getAllCurrentLandingPagePaths = `
  SELECT * FROM paths
  WHERE type = 'landing_page'
`;

export const getAllCurrentProjectPagePaths = `
  SELECT * FROM paths
  WHERE type = 'project'
`;

export const insertEmptyPathsTable = `
  INSERT INTO paths (id, uid, type, slug, destination)
  SELECT *
  FROM jsonb_to_recordset($1::jsonb) AS t(id varchar, uid varchar, type varchar, slug varchar[], destination varchar)
  RETURNING slug
`;

// Query is being used, when we are building project and generating paths.
export const updateCurrentPathsTable = `
  WITH prismic_data AS (
    SELECT
      page.id,
      page.uid,
      page.type,
      page.slug,
      page.destination
    FROM jsonb_to_recordset($1::jsonb) AS page(id varchar, uid varchar, type varchar, slug varchar[], destination varchar)
  ),
  updated_data AS (
    INSERT INTO paths (id, uid, type, slug, destination)
    SELECT
      prismic_data.id,
      prismic_data.uid,
      prismic_data.type,
      prismic_data.slug,
      prismic_data.destination
    FROM prismic_data
    ON CONFLICT (id)
    DO UPDATE SET
      uid = EXCLUDED.uid,
      slug = EXCLUDED.slug,
      destination = CASE
        WHEN EXCLUDED.type = 'project' THEN CONCAT('/project/', EXCLUDED.uid)
        WHEN EXCLUDED.type = 'landing_page' AND EXCLUDED.uid = 'home' THEN '/'
        ELSE CONCAT('/', EXCLUDED.uid)
      END,
      latestUpdate = current_timestamp
    WHERE
      paths.uid IS DISTINCT FROM EXCLUDED.uid
    RETURNING id, slug, destination
  ),
  prepare_delete_data AS (
    UPDATE paths
    SET
      delete = true
    WHERE id NOT IN (SELECT id FROM prismic_data)
    AND type = $2
  )
  SELECT
    COALESCE(updated_data.slug, prismic_data.slug) AS slug,
    COALESCE(updated_data.destination, prismic_data.destination) AS destination
  FROM prismic_data
  LEFT JOIN updated_data ON prismic_data.id = updated_data.id;
`;

// Query is being used, when we are revalidating either one or multiple slugs.
export const revalidateCurrentPathsTable = `
  WITH prismic_data AS (
    SELECT
      page.id,
      page.uid,
      page.type,
      page.slug,
      page.destination
    FROM jsonb_to_recordset($1::jsonb) AS page(id varchar, uid varchar, type varchar, slug varchar[], destination varchar)
  ),
  updated_data AS (
    INSERT INTO paths (id, uid, type, slug, destination)
    SELECT
      prismic_data.id,
      prismic_data.uid,
      prismic_data.type,
      prismic_data.slug,
      prismic_data.destination
    FROM prismic_data
    ON CONFLICT (id)
    DO UPDATE SET
      uid = EXCLUDED.uid,
      slug = EXCLUDED.slug,
      destination = CASE
        WHEN EXCLUDED.type = 'project' THEN CONCAT('/project/', EXCLUDED.uid)
        WHEN EXCLUDED.type = 'landing_page' AND EXCLUDED.uid = 'home' THEN '/'
        ELSE CONCAT('/', EXCLUDED.uid)
      END,
      latestUpdate = current_timestamp
    WHERE
      paths.uid IS DISTINCT FROM EXCLUDED.uid
    RETURNING id, slug, destination
  )
  SELECT
    COALESCE(updated_data.slug, prismic_data.slug) AS slug,
    COALESCE(updated_data.destination, prismic_data.destination) AS destination
  FROM prismic_data
  LEFT JOIN updated_data ON prismic_data.id = updated_data.id;
`;


export const formatEachRowsPath = ({ getCurrentRowsFromDB, catchAllSegments = false }: formatEachRowsPathProps): (formatEachRowsPathReturnProps | null)[] => {
  return getCurrentRowsFromDB.map((document) => {
    if (document.slug) {
      return {
        params: {
          slug: catchAllSegments ? document.slug : document.slug[0],
        },
      };
    }

    return null;
  });
};

export const formatEachPagesMeta = ({ getCurrentPagesMetaFromPrismic }: formatEachPagesMetaProps): (PortfolioDatabaseProps['paths'] | null)[] => {
  return (getCurrentPagesMetaFromPrismic || []).map((document) => {

    const getPageID = document?.node._meta.id;
    const getPageSlug = document?.node._meta.uid;
    const getPageType = document?.node._meta.type as currentPageTypesForRevalidate;

    const checkPageIdValues = !!(getPageID && getPageSlug);

    if (checkPageIdValues && getPageType === 'landing_page') {
      return {
        id: getPageID,
        uid: getPageSlug,
        type: getPageType,
        slug: getPageSlug === 'home' ? [''] : [getPageSlug],
        destination: getPageSlug === 'home' ? '/' : `/${getPageSlug}`,
      };
    }

    if (checkPageIdValues && getPageType ==='project') {
      return {
        id: getPageID,
        uid: getPageSlug,
        type: getPageType,
        slug: [getPageSlug],
        destination: `/project/${getPageSlug}`,
      };
    }

    return null;
  });
};
