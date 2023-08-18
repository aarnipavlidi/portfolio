import { graphql } from '@/types/prismic/graphql';

export const GET_ALL_LANDING_PAGES_META = graphql(`
  query getAllLandingPagesMeta($getByID: [String!]) {
    allLanding_pages(id_in: $getByID) {
      edges {
        node {
          _linkType
          _meta {
            id
            uid
            type
            tags
            lang
            firstPublicationDate
            lastPublicationDate
          }
        }
      }
    }
  }
`);

export const GET_ALL_PROJECT_POSTS_META = graphql(`
  query getAllProjectPagesMeta($getByID: [String!]) {
    allProject_posts(id_in: $getByID) {
      edges {
        node {
          _linkType
          _meta {
            id
            uid
            type
            tags
            lang
            firstPublicationDate
            lastPublicationDate
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
        ...HeroSliceField
        ...CardSliceField
      }
    }
  }
`);

export const GET_CURRENT_PROJECT_POST = graphql(`
  query getCurrentProjectPost($slug: String!, $defaultLocale: String!) {
    project_post(uid: $slug, lang: $defaultLocale) {
      slices {
        ...ProjectHeroSliceField
        ...ProjectContentBlockSliceField
      }
    }
  }
`);
