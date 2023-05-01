/* eslint-disable no-underscore-dangle */
import type { FilledLinkToDocumentField } from '@prismicio/types';
import type { LinkDocumentMetaFragment } from '@/types/prismic/graphql/graphql';
import type { PrismicRouteProps } from '@/types/prismic/index';

export const prismicRepositoryName = process.env.PRISMIC_REPOSITORY_NAME || '';
export const prismicAccessToken = process.env.PRISMIC_ACCESS_TOKEN || '';

export const prismicRoutes: PrismicRouteProps[] = [
  {
    type: 'home_landing_page',
    uid: 'home-landing-page',
    path: '/',
  },
  {
    type: 'projects_landing_page',
    uid: 'projects-landing-page',
    path: '/projects',
  },
  {
    type: 'about_landing_page',
    uid: 'about-landing-page',
    path: '/about',
  },
  {
    type: 'contact_landing_page',
    uid: 'contact-landing-page',
    path: '/contact',
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
