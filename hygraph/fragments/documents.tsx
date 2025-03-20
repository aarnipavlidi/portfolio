import { graphql } from '@/types/hygraph';

const RICH_TEXT_HYGRAPH = graphql(`
  fragment RichTextHygraph on RichText {
    raw
    html
    markdown
    text
  }
`);

const NAMES_ICONS_LIST = graphql(`
  fragment NamesIconsList on NameIcon {
    name
    icon
    showIcon
    href
    hrefType
  }
`);

const documents = {
  nameIcon: NAMES_ICONS_LIST,
  richText: RICH_TEXT_HYGRAPH,
};

export default documents;