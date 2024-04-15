import { graphql } from '@/types/prismic/graphql';

export const GET_ALL_PAGES_META = graphql(`
  query getAllPagesMeta($getCurrentDocumentsID: [String!], $filterDocuments: [String!]) {
    _allDocuments(id_in: $getCurrentDocumentsID, type_in: $filterDocuments) {
      edges {
        node {
          _meta {
            id
            uid
            type
          }
        }
      }
    }
  }
`);

export const GET_CURRENT_LANDING_PAGE = graphql(`
  query getCurrentLandingPage($slug: String!, $defaultLocale: String!) {
    landing_page(uid: $slug, lang: $defaultLocale) {
      slices {
        ...ContentBlockSliceField
        ...ListBlockSliceField
        ...HeroSliceField
        ...CardSliceField
      }
    }
  }
`);

export const GET_CURRENT_PROJECT = graphql(`
  query getCurrentProject($slug: String!, $defaultLocale: String!) {
    project(uid: $slug, lang: $defaultLocale) {
      slices {
        ...ProjectContentBlockSliceField
        ...ProjectListBlockSliceField
        ...ProjectHeroSliceField
        ...ProjectStatsBlockSliceField
      }
    }
  }
`);
