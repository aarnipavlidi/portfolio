import { graphql } from '@/types/hygraph';

const GET_NAVIGATION = graphql(`
  query GetNavigation {
    navigations(first: 1, stage: PUBLISHED) {
      position
      navigationTitle
      navigationLinks {
        ...on LandingPage {
          slug
          title
          destination
        }
      }
      socialIcons: namesIconsList {
        ...NamesIconsList
      }
      slogan {
        ...RichTextHygraph
      }
      sloganKeys
    }
  }
`);

// for sloganKey we can use "whitespace-pre-line" tailwind class
// to break lines, as that content will produce /n on string,
// so we can force each key word (slogan) to go next line.

const documents = {
  navigations: GET_NAVIGATION
};

export default documents;