/* eslint-disable no-underscore-dangle */
import type { FilledLinkToDocumentField } from '@prismicio/types';
import type { LinkDocumentMetaFragment } from '@/types/prismic/graphql/graphql';
import type { PrismicRouteProps } from '@/types/prismic/index';

export const prismicRepositoryName = process.env.PRISMIC_REPOSITORY_NAME || '';
export const prismicAccessToken = process.env.PRISMIC_ACCESS_TOKEN || '';

export const prismicRoutes: PrismicRouteProps[] = [
  {
    type: 'home',
    uid: 'home-entry-name',
    path: '/',
  },
];

export const prismicLinkResolver = (currentLinkDocument: FilledLinkToDocumentField) => {
  const filterCurrentRoute = prismicRoutes.find(route => route.type === currentLinkDocument.type && route.uid === currentLinkDocument.uid);

  if (filterCurrentRoute) {
    return filterCurrentRoute.path;
  }

  return null;
};

export const checkLinkProperties = (object: any): object is { _meta: LinkDocumentMetaFragment['_meta'] } => {
  return object && object._linkType && object._meta !== undefined;
};
