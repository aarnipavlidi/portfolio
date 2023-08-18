/* eslint-disable no-underscore-dangle */
import type { FilledLinkToDocumentField } from '@prismicio/types';
import type { Route } from '@prismicio/client';
import type { LinkDocumentMetaFragment } from '@/types/prismic/graphql/graphql';

export const prismicRepositoryName = process.env.PRISMIC_REPOSITORY_NAME || '';
export const prismicAccessToken = process.env.PRISMIC_ACCESS_TOKEN || '';

export const prismicRoutes: Route | Route[] = [
  {
    type: 'landing_page',
    uid: 'home',
    path: '/',
  },
  {
    type: 'landing_page',
    path: '/:uid',
  },
  {
    type: 'project_post',
    resolvers: {
      project: 'project',
    },
    path: '/project/:uid',
  },
];

export const prismicLinkResolver = (currentLinkDocument: FilledLinkToDocumentField) => {
  if (currentLinkDocument.uid === 'home') {
    return '/';
  }

  if (currentLinkDocument.type === 'project_post') {
    return `/project/${currentLinkDocument.uid}`;
  }

  return `/${currentLinkDocument.uid}`;
};

export const checkLinkProperties = (object: any): object is { _meta: LinkDocumentMetaFragment['_meta'] } => {
  return object && object._linkType && object._meta !== undefined;
};
