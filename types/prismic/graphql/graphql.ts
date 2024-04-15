/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** DateTime */
  DateTime: { input: any; output: any; }
  /** Raw JSON value */
  Json: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
};

export type Button = Document & Linkable & {
  __typename?: 'Button';
  _linkType: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  full_width: Maybe<Scalars['Boolean']['output']>;
  size: Maybe<Scalars['String']['output']>;
  variant: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type ButtonConnectionConnection = {
  __typename?: 'ButtonConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<ButtonConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type ButtonConnectionEdge = {
  __typename?: 'ButtonConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Button;
};

export type Footer = Document & Linkable & {
  __typename?: 'Footer';
  _linkType: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  slogan: Maybe<Scalars['Json']['output']>;
  slogan_keys: Maybe<Array<FooterSloganKeys>>;
  social_icons: Maybe<Linkable>;
};

/** A connection to a list of items. */
export type FooterConnectionConnection = {
  __typename?: 'FooterConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<FooterConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type FooterConnectionEdge = {
  __typename?: 'FooterConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Footer;
};

export type FooterSloganKeys = {
  __typename?: 'FooterSlogan_keys';
  word: Maybe<Scalars['Json']['output']>;
};

export type Heroicon = Document & Linkable & {
  __typename?: 'Heroicon';
  _linkType: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  name: Maybe<Scalars['String']['output']>;
  variant: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type HeroiconConnectionConnection = {
  __typename?: 'HeroiconConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<HeroiconConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type HeroiconConnectionEdge = {
  __typename?: 'HeroiconConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Heroicon;
};

export type IconsList = Document & Linkable & {
  __typename?: 'Icons_list';
  _linkType: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  collection: Maybe<Array<IconsListCollection>>;
  show_icons: Maybe<Scalars['Boolean']['output']>;
};

export type IconsListCollection = {
  __typename?: 'Icons_listCollection';
  href: Maybe<Linkable>;
  icon: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type IconsListConnectionConnection = {
  __typename?: 'Icons_listConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<IconsListConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type IconsListConnectionEdge = {
  __typename?: 'Icons_listConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: IconsList;
};

export type ImageGallery = Document & Linkable & {
  __typename?: 'Image_gallery';
  _linkType: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  gallery: Maybe<Array<ImageGalleryGallery>>;
};

/** A connection to a list of items. */
export type ImageGalleryConnectionConnection = {
  __typename?: 'Image_galleryConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<ImageGalleryConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type ImageGalleryConnectionEdge = {
  __typename?: 'Image_galleryConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ImageGallery;
};

export type ImageGalleryGallery = {
  __typename?: 'Image_galleryGallery';
  image: Maybe<Scalars['Json']['output']>;
};

export type ImageMask = Document & Linkable & {
  __typename?: 'Image_mask';
  _linkType: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  variant: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type ImageMaskConnectionConnection = {
  __typename?: 'Image_maskConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<ImageMaskConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type ImageMaskConnectionEdge = {
  __typename?: 'Image_maskConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ImageMask;
};

export type LandingPage = Document & Linkable & {
  __typename?: 'Landing_page';
  _linkType: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  slices: Maybe<Array<LandingPageSlices>>;
};

/** A connection to a list of items. */
export type LandingPageConnectionConnection = {
  __typename?: 'Landing_pageConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<LandingPageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type LandingPageConnectionEdge = {
  __typename?: 'Landing_pageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: LandingPage;
};

export type LandingPageSlices = LandingPageSlicesCardSlice | LandingPageSlicesContentBlockSlice | LandingPageSlicesHeroSlice | LandingPageSlicesListBlockSlice;

export type LandingPageSlicesCardSlice = {
  __typename?: 'Landing_pageSlicesCard_slice';
  label: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  variation: Maybe<LandingPageSlicesCardSliceVariation>;
};

export type LandingPageSlicesCardSliceDefault = {
  __typename?: 'Landing_pageSlicesCard_sliceDefault';
  items: Maybe<Array<LandingPageSlicesCardSliceDefaultItems>>;
  primary: Maybe<LandingPageSlicesCardSliceDefaultPrimary>;
};

export type LandingPageSlicesCardSliceDefaultItems = {
  __typename?: 'Landing_pageSlicesCard_sliceDefaultItems';
  button: Maybe<Linkable>;
  card_image: Maybe<Scalars['Json']['output']>;
  collection: Maybe<Linkable>;
  description: Maybe<Scalars['Json']['output']>;
  href: Maybe<Linkable>;
  icon: Maybe<Linkable>;
  label: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['Json']['output']>;
};

export type LandingPageSlicesCardSliceDefaultPrimary = {
  __typename?: 'Landing_pageSlicesCard_sliceDefaultPrimary';
  subtitle: Maybe<Scalars['Json']['output']>;
  title: Maybe<Scalars['Json']['output']>;
};

export type LandingPageSlicesCardSliceVariation = LandingPageSlicesCardSliceDefault;

export type LandingPageSlicesContentBlockSlice = {
  __typename?: 'Landing_pageSlicesContent_block_slice';
  label: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  variation: Maybe<LandingPageSlicesContentBlockSliceVariation>;
};

export type LandingPageSlicesContentBlockSliceDefault = {
  __typename?: 'Landing_pageSlicesContent_block_sliceDefault';
  primary: Maybe<LandingPageSlicesContentBlockSliceDefaultPrimary>;
};

export type LandingPageSlicesContentBlockSliceDefaultPrimary = {
  __typename?: 'Landing_pageSlicesContent_block_sliceDefaultPrimary';
  content: Maybe<Scalars['Json']['output']>;
  hashtag: Maybe<Linkable>;
  images: Maybe<Linkable>;
  stack: Maybe<Linkable>;
  subtitle: Maybe<Scalars['Json']['output']>;
  title: Maybe<Scalars['Json']['output']>;
};

export type LandingPageSlicesContentBlockSliceRichtext = {
  __typename?: 'Landing_pageSlicesContent_block_sliceRichtext';
  primary: Maybe<LandingPageSlicesContentBlockSliceRichtextPrimary>;
};

export type LandingPageSlicesContentBlockSliceRichtextPrimary = {
  __typename?: 'Landing_pageSlicesContent_block_sliceRichtextPrimary';
  content: Maybe<Scalars['Json']['output']>;
  header_icons: Maybe<Scalars['String']['output']>;
  header_title: Maybe<Scalars['Json']['output']>;
  image: Maybe<Scalars['Json']['output']>;
  image_mask: Maybe<Linkable>;
  image_position: Maybe<Scalars['Boolean']['output']>;
};

export type LandingPageSlicesContentBlockSliceVariation = LandingPageSlicesContentBlockSliceDefault | LandingPageSlicesContentBlockSliceRichtext;

export type LandingPageSlicesHeroSlice = {
  __typename?: 'Landing_pageSlicesHero_slice';
  label: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  variation: Maybe<LandingPageSlicesHeroSliceVariation>;
};

export type LandingPageSlicesHeroSliceDefault = {
  __typename?: 'Landing_pageSlicesHero_sliceDefault';
  primary: Maybe<LandingPageSlicesHeroSliceDefaultPrimary>;
};

export type LandingPageSlicesHeroSliceDefaultPrimary = {
  __typename?: 'Landing_pageSlicesHero_sliceDefaultPrimary';
  button: Maybe<Linkable>;
  hero_image: Maybe<Scalars['Json']['output']>;
  href: Maybe<Linkable>;
  icon: Maybe<Linkable>;
  image_mask: Maybe<Linkable>;
  label: Maybe<Scalars['String']['output']>;
  subtitle: Maybe<Scalars['Json']['output']>;
  title: Maybe<Scalars['Json']['output']>;
};

export type LandingPageSlicesHeroSliceFullwidth = {
  __typename?: 'Landing_pageSlicesHero_sliceFullwidth';
  primary: Maybe<LandingPageSlicesHeroSliceFullwidthPrimary>;
};

export type LandingPageSlicesHeroSliceFullwidthPrimary = {
  __typename?: 'Landing_pageSlicesHero_sliceFullwidthPrimary';
  hero_image: Maybe<Scalars['Json']['output']>;
  image_mask: Maybe<Linkable>;
  subtitle: Maybe<Scalars['Json']['output']>;
  title: Maybe<Scalars['Json']['output']>;
};

export type LandingPageSlicesHeroSliceGoback = {
  __typename?: 'Landing_pageSlicesHero_sliceGoback';
  primary: Maybe<LandingPageSlicesHeroSliceGobackPrimary>;
};

export type LandingPageSlicesHeroSliceGobackPrimary = {
  __typename?: 'Landing_pageSlicesHero_sliceGobackPrimary';
  hero_image: Maybe<Scalars['Json']['output']>;
  image_mask: Maybe<Linkable>;
  title: Maybe<Scalars['Json']['output']>;
};

export type LandingPageSlicesHeroSliceVariation = LandingPageSlicesHeroSliceDefault | LandingPageSlicesHeroSliceFullwidth | LandingPageSlicesHeroSliceGoback;

export type LandingPageSlicesListBlockSlice = {
  __typename?: 'Landing_pageSlicesList_block_slice';
  label: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  variation: Maybe<LandingPageSlicesListBlockSliceVariation>;
};

export type LandingPageSlicesListBlockSliceDefault = {
  __typename?: 'Landing_pageSlicesList_block_sliceDefault';
  items: Maybe<Array<LandingPageSlicesListBlockSliceDefaultItems>>;
  primary: Maybe<LandingPageSlicesListBlockSliceDefaultPrimary>;
};

export type LandingPageSlicesListBlockSliceDefaultItems = {
  __typename?: 'Landing_pageSlicesList_block_sliceDefaultItems';
  experience: Maybe<Scalars['String']['output']>;
  label_stack: Maybe<Linkable>;
  title: Maybe<Scalars['Json']['output']>;
};

export type LandingPageSlicesListBlockSliceDefaultPrimary = {
  __typename?: 'Landing_pageSlicesList_block_sliceDefaultPrimary';
  header_position: Maybe<Scalars['String']['output']>;
  header_title: Maybe<Scalars['Json']['output']>;
  rounded_background: Maybe<Scalars['Boolean']['output']>;
  title_icon: Maybe<Linkable>;
};

export type LandingPageSlicesListBlockSliceVariation = LandingPageSlicesListBlockSliceDefault;

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate: Maybe<Scalars['DateTime']['output']>;
  /** The id of the document. */
  id: Scalars['String']['output'];
  /** The language of the document. */
  lang: Scalars['String']['output'];
  /** The last publication date of the document. */
  lastPublicationDate: Maybe<Scalars['DateTime']['output']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']['output']>;
  /** The type of the document. */
  type: Scalars['String']['output'];
  /** The uid of the document. */
  uid: Maybe<Scalars['String']['output']>;
};

export type Navigation = Document & Linkable & {
  __typename?: 'Navigation';
  _linkType: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  navigation_links: Maybe<Array<NavigationNavigationLinks>>;
  navigation_title: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['Boolean']['output']>;
};

/** A connection to a list of items. */
export type NavigationConnectionConnection = {
  __typename?: 'NavigationConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<NavigationConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type NavigationConnectionEdge = {
  __typename?: 'NavigationConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Navigation;
};

export type NavigationNavigationLinks = {
  __typename?: 'NavigationNavigation_links';
  link_href: Maybe<Linkable>;
  link_name: Maybe<Scalars['String']['output']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

export type Project = Document & Linkable & {
  __typename?: 'Project';
  _linkType: Maybe<Scalars['String']['output']>;
  _meta: Meta;
  meta_description: Maybe<Scalars['String']['output']>;
  meta_image: Maybe<Scalars['Json']['output']>;
  meta_title: Maybe<Scalars['String']['output']>;
  slices: Maybe<Array<ProjectSlices>>;
};

/** A connection to a list of items. */
export type ProjectConnectionConnection = {
  __typename?: 'ProjectConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<ProjectConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type ProjectConnectionEdge = {
  __typename?: 'ProjectConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Project;
};

export type ProjectSlices = ProjectSlicesContentBlockSlice | ProjectSlicesHeroSlice | ProjectSlicesListBlockSlice | ProjectSlicesStatsBlockSlice;

export type ProjectSlicesContentBlockSlice = {
  __typename?: 'ProjectSlicesContent_block_slice';
  label: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  variation: Maybe<ProjectSlicesContentBlockSliceVariation>;
};

export type ProjectSlicesContentBlockSliceDefault = {
  __typename?: 'ProjectSlicesContent_block_sliceDefault';
  primary: Maybe<ProjectSlicesContentBlockSliceDefaultPrimary>;
};

export type ProjectSlicesContentBlockSliceDefaultPrimary = {
  __typename?: 'ProjectSlicesContent_block_sliceDefaultPrimary';
  content: Maybe<Scalars['Json']['output']>;
  hashtag: Maybe<Linkable>;
  images: Maybe<Linkable>;
  stack: Maybe<Linkable>;
  subtitle: Maybe<Scalars['Json']['output']>;
  title: Maybe<Scalars['Json']['output']>;
};

export type ProjectSlicesContentBlockSliceRichtext = {
  __typename?: 'ProjectSlicesContent_block_sliceRichtext';
  primary: Maybe<ProjectSlicesContentBlockSliceRichtextPrimary>;
};

export type ProjectSlicesContentBlockSliceRichtextPrimary = {
  __typename?: 'ProjectSlicesContent_block_sliceRichtextPrimary';
  content: Maybe<Scalars['Json']['output']>;
  header_icons: Maybe<Scalars['String']['output']>;
  header_title: Maybe<Scalars['Json']['output']>;
  image: Maybe<Scalars['Json']['output']>;
  image_mask: Maybe<Linkable>;
  image_position: Maybe<Scalars['Boolean']['output']>;
};

export type ProjectSlicesContentBlockSliceVariation = ProjectSlicesContentBlockSliceDefault | ProjectSlicesContentBlockSliceRichtext;

export type ProjectSlicesHeroSlice = {
  __typename?: 'ProjectSlicesHero_slice';
  label: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  variation: Maybe<ProjectSlicesHeroSliceVariation>;
};

export type ProjectSlicesHeroSliceDefault = {
  __typename?: 'ProjectSlicesHero_sliceDefault';
  primary: Maybe<ProjectSlicesHeroSliceDefaultPrimary>;
};

export type ProjectSlicesHeroSliceDefaultPrimary = {
  __typename?: 'ProjectSlicesHero_sliceDefaultPrimary';
  button: Maybe<Linkable>;
  hero_image: Maybe<Scalars['Json']['output']>;
  href: Maybe<Linkable>;
  icon: Maybe<Linkable>;
  image_mask: Maybe<Linkable>;
  label: Maybe<Scalars['String']['output']>;
  subtitle: Maybe<Scalars['Json']['output']>;
  title: Maybe<Scalars['Json']['output']>;
};

export type ProjectSlicesHeroSliceFullwidth = {
  __typename?: 'ProjectSlicesHero_sliceFullwidth';
  primary: Maybe<ProjectSlicesHeroSliceFullwidthPrimary>;
};

export type ProjectSlicesHeroSliceFullwidthPrimary = {
  __typename?: 'ProjectSlicesHero_sliceFullwidthPrimary';
  hero_image: Maybe<Scalars['Json']['output']>;
  image_mask: Maybe<Linkable>;
  subtitle: Maybe<Scalars['Json']['output']>;
  title: Maybe<Scalars['Json']['output']>;
};

export type ProjectSlicesHeroSliceGoback = {
  __typename?: 'ProjectSlicesHero_sliceGoback';
  primary: Maybe<ProjectSlicesHeroSliceGobackPrimary>;
};

export type ProjectSlicesHeroSliceGobackPrimary = {
  __typename?: 'ProjectSlicesHero_sliceGobackPrimary';
  hero_image: Maybe<Scalars['Json']['output']>;
  image_mask: Maybe<Linkable>;
  title: Maybe<Scalars['Json']['output']>;
};

export type ProjectSlicesHeroSliceVariation = ProjectSlicesHeroSliceDefault | ProjectSlicesHeroSliceFullwidth | ProjectSlicesHeroSliceGoback;

export type ProjectSlicesListBlockSlice = {
  __typename?: 'ProjectSlicesList_block_slice';
  label: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  variation: Maybe<ProjectSlicesListBlockSliceVariation>;
};

export type ProjectSlicesListBlockSliceDefault = {
  __typename?: 'ProjectSlicesList_block_sliceDefault';
  items: Maybe<Array<ProjectSlicesListBlockSliceDefaultItems>>;
  primary: Maybe<ProjectSlicesListBlockSliceDefaultPrimary>;
};

export type ProjectSlicesListBlockSliceDefaultItems = {
  __typename?: 'ProjectSlicesList_block_sliceDefaultItems';
  experience: Maybe<Scalars['String']['output']>;
  label_stack: Maybe<Linkable>;
  title: Maybe<Scalars['Json']['output']>;
};

export type ProjectSlicesListBlockSliceDefaultPrimary = {
  __typename?: 'ProjectSlicesList_block_sliceDefaultPrimary';
  header_position: Maybe<Scalars['String']['output']>;
  header_title: Maybe<Scalars['Json']['output']>;
  rounded_background: Maybe<Scalars['Boolean']['output']>;
  title_icon: Maybe<Linkable>;
};

export type ProjectSlicesListBlockSliceVariation = ProjectSlicesListBlockSliceDefault;

export type ProjectSlicesStatsBlockSlice = {
  __typename?: 'ProjectSlicesStats_block_slice';
  label: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  variation: Maybe<ProjectSlicesStatsBlockSliceVariation>;
};

export type ProjectSlicesStatsBlockSliceDefault = {
  __typename?: 'ProjectSlicesStats_block_sliceDefault';
  items: Maybe<Array<ProjectSlicesStatsBlockSliceDefaultItems>>;
};

export type ProjectSlicesStatsBlockSliceDefaultItems = {
  __typename?: 'ProjectSlicesStats_block_sliceDefaultItems';
  href: Maybe<Linkable>;
  icon: Maybe<Linkable>;
  name: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type ProjectSlicesStatsBlockSliceVariation = ProjectSlicesStatsBlockSliceDefault;

export type Query = {
  __typename?: 'Query';
  _allDocuments: DocumentConnection;
  allButtons: ButtonConnectionConnection;
  allFooters: FooterConnectionConnection;
  allHeroicons: HeroiconConnectionConnection;
  allIcons_lists: IconsListConnectionConnection;
  allImage_gallerys: ImageGalleryConnectionConnection;
  allImage_masks: ImageMaskConnectionConnection;
  allLanding_pages: LandingPageConnectionConnection;
  allNavigations: NavigationConnectionConnection;
  allProjects: ProjectConnectionConnection;
  button: Maybe<Button>;
  heroicon: Maybe<Heroicon>;
  icons_list: Maybe<IconsList>;
  image_gallery: Maybe<ImageGallery>;
  image_mask: Maybe<ImageMask>;
  landing_page: Maybe<LandingPage>;
  project: Maybe<Project>;
};


export type QueryAllDocumentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortDocumentsBy>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  type: InputMaybe<Scalars['String']['input']>;
  type_in: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryAllButtonsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortButtony>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  uid: InputMaybe<Scalars['String']['input']>;
  uid_in: InputMaybe<Array<Scalars['String']['input']>>;
  where: InputMaybe<WhereButton>;
};


export type QueryAllFootersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortFootery>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  uid: InputMaybe<Scalars['String']['input']>;
  uid_in: InputMaybe<Array<Scalars['String']['input']>>;
  where: InputMaybe<WhereFooter>;
};


export type QueryAllHeroiconsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortHeroicony>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  uid: InputMaybe<Scalars['String']['input']>;
  uid_in: InputMaybe<Array<Scalars['String']['input']>>;
  where: InputMaybe<WhereHeroicon>;
};


export type QueryAllIconsListsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortIconsListy>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  uid: InputMaybe<Scalars['String']['input']>;
  uid_in: InputMaybe<Array<Scalars['String']['input']>>;
  where: InputMaybe<WhereIconsList>;
};


export type QueryAllImageGallerysArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortImageGalleryy>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  uid: InputMaybe<Scalars['String']['input']>;
  uid_in: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryAllImageMasksArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortImageMasky>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  uid: InputMaybe<Scalars['String']['input']>;
  uid_in: InputMaybe<Array<Scalars['String']['input']>>;
  where: InputMaybe<WhereImageMask>;
};


export type QueryAllLandingPagesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortLandingPagey>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  uid: InputMaybe<Scalars['String']['input']>;
  uid_in: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryAllNavigationsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortNavigationy>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  uid: InputMaybe<Scalars['String']['input']>;
  uid_in: InputMaybe<Array<Scalars['String']['input']>>;
  where: InputMaybe<WhereNavigation>;
};


export type QueryAllProjectsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  fulltext: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['String']['input']>;
  id_in: InputMaybe<Array<Scalars['String']['input']>>;
  lang: InputMaybe<Scalars['String']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']['input']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']['input']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortProjecty>;
  tags: InputMaybe<Array<Scalars['String']['input']>>;
  tags_in: InputMaybe<Array<Scalars['String']['input']>>;
  uid: InputMaybe<Scalars['String']['input']>;
  uid_in: InputMaybe<Array<Scalars['String']['input']>>;
  where: InputMaybe<WhereProject>;
};


export type QueryButtonArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryHeroiconArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryIconsListArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryImageGalleryArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryImageMaskArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryLandingPageArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryProjectArgs = {
  lang: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String']['output'];
  /** The language of the document. */
  lang: Scalars['String']['output'];
  /** The type of the document. */
  type: Scalars['String']['output'];
  /** The uid of the document. */
  uid: Maybe<Scalars['String']['output']>;
};

export enum SortButtony {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortFootery {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  SloganAsc = 'slogan_ASC',
  SloganDesc = 'slogan_DESC'
}

export enum SortHeroicony {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum SortIconsListy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortImageGalleryy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortImageMasky {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum SortLandingPagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortNavigationy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NavigationTitleAsc = 'navigation_title_ASC',
  NavigationTitleDesc = 'navigation_title_DESC'
}

export enum SortProjecty {
  MetaDescriptionAsc = 'meta_description_ASC',
  MetaDescriptionDesc = 'meta_description_DESC',
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  MetaTitleAsc = 'meta_title_ASC',
  MetaTitleDesc = 'meta_title_DESC'
}

export type WhereButton = {
  full_width: InputMaybe<Scalars['Boolean']['input']>;
  size: InputMaybe<Scalars['String']['input']>;
  size_fulltext: InputMaybe<Scalars['String']['input']>;
  variant: InputMaybe<Scalars['String']['input']>;
  variant_fulltext: InputMaybe<Scalars['String']['input']>;
};

export type WhereFooter = {
  /** slogan */
  slogan_fulltext: InputMaybe<Scalars['String']['input']>;
  slogan_keys: InputMaybe<WhereFooterSloganKeys>;
  /** social_icons */
  social_icons: InputMaybe<Scalars['String']['input']>;
};

export type WhereFooterSloganKeys = {
  /** word */
  word_fulltext: InputMaybe<Scalars['String']['input']>;
};

export type WhereHeroicon = {
  name: InputMaybe<Scalars['String']['input']>;
  name_fulltext: InputMaybe<Scalars['String']['input']>;
  variant: InputMaybe<Scalars['String']['input']>;
  variant_fulltext: InputMaybe<Scalars['String']['input']>;
};

export type WhereIconsList = {
  collection: InputMaybe<WhereIconsListCollection>;
  show_icons: InputMaybe<Scalars['Boolean']['input']>;
};

export type WhereIconsListCollection = {
  /** href */
  href: InputMaybe<Scalars['String']['input']>;
  icon: InputMaybe<Scalars['String']['input']>;
  icon_fulltext: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  name_fulltext: InputMaybe<Scalars['String']['input']>;
};

export type WhereImageMask = {
  variant: InputMaybe<Scalars['String']['input']>;
  variant_fulltext: InputMaybe<Scalars['String']['input']>;
};

export type WhereNavigation = {
  navigation_links: InputMaybe<WhereNavigationNavigationLinks>;
  navigation_title: InputMaybe<Scalars['String']['input']>;
  navigation_title_fulltext: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['Boolean']['input']>;
};

export type WhereNavigationNavigationLinks = {
  /** link_href */
  link_href: InputMaybe<Scalars['String']['input']>;
  link_name: InputMaybe<Scalars['String']['input']>;
  link_name_fulltext: InputMaybe<Scalars['String']['input']>;
};

export type WhereProject = {
  meta_description: InputMaybe<Scalars['String']['input']>;
  meta_description_fulltext: InputMaybe<Scalars['String']['input']>;
  meta_title: InputMaybe<Scalars['String']['input']>;
  meta_title_fulltext: InputMaybe<Scalars['String']['input']>;
};

/** A prismic document */
export type Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long']['output'];
};

/** An edge in a connection. */
export type DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Document;
};

/** An external link */
export type ExternalLink = Linkable & {
  __typename?: '_ExternalLink';
  _linkType: Maybe<Scalars['String']['output']>;
  target: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

/** A linked file */
export type FileLink = Linkable & {
  __typename?: '_FileLink';
  _linkType: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
};

/** A linked image */
export type ImageLink = Linkable & {
  __typename?: '_ImageLink';
  _linkType: Maybe<Scalars['String']['output']>;
  height: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Long']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

/** A prismic link */
export type Linkable = {
  _linkType: Maybe<Scalars['String']['output']>;
};

export type Similar = {
  documentId: Scalars['String']['input'];
  max: Scalars['Int']['input'];
};

type LinkDocumentMetaButtonFragment = { __typename: 'Button', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaButtonFragment' };

type LinkDocumentMetaFooterFragment = { __typename: 'Footer', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaFooterFragment' };

type LinkDocumentMetaHeroiconFragment = { __typename: 'Heroicon', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaHeroiconFragment' };

type LinkDocumentMetaIconsListFragment = { __typename: 'Icons_list', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaIconsListFragment' };

type LinkDocumentMetaImageGalleryFragment = { __typename: 'Image_gallery', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaImageGalleryFragment' };

type LinkDocumentMetaImageMaskFragment = { __typename: 'Image_mask', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaImageMaskFragment' };

type LinkDocumentMetaLandingPageFragment = { __typename: 'Landing_page', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaLandingPageFragment' };

type LinkDocumentMetaNavigationFragment = { __typename: 'Navigation', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaNavigationFragment' };

type LinkDocumentMetaProjectFragment = { __typename: 'Project', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaProjectFragment' };

export type LinkDocumentMetaFragment = LinkDocumentMetaButtonFragment | LinkDocumentMetaFooterFragment | LinkDocumentMetaHeroiconFragment | LinkDocumentMetaIconsListFragment | LinkDocumentMetaImageGalleryFragment | LinkDocumentMetaImageMaskFragment | LinkDocumentMetaLandingPageFragment | LinkDocumentMetaNavigationFragment | LinkDocumentMetaProjectFragment;

export type ExternalLinkMetaFragment = { __typename: '_ExternalLink', _linkType: string | null, url: string, target: string | null } & { ' $fragmentName'?: 'ExternalLinkMetaFragment' };

export type HeroSlicePrimaryFragment = { __typename?: 'Landing_pageSlicesHero_sliceDefault', primary: { __typename?: 'Landing_pageSlicesHero_sliceDefaultPrimary', title: any | null, subtitle: any | null, hero_image: any | null, label: string | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, icon: { __typename: 'Button' } | { __typename: 'Footer' } | (
      { __typename: 'Heroicon' }
      & { ' $fragmentRefs'?: { 'HeroIconFragment': HeroIconFragment } }
    ) | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, button: (
      { __typename: 'Button' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    ) | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, href: (
      { __typename: 'Button', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaButtonFragment': LinkDocumentMetaButtonFragment } }
    ) | (
      { __typename: 'Footer', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaFooterFragment': LinkDocumentMetaFooterFragment } }
    ) | (
      { __typename: 'Heroicon', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaHeroiconFragment': LinkDocumentMetaHeroiconFragment } }
    ) | (
      { __typename: 'Icons_list', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaIconsListFragment': LinkDocumentMetaIconsListFragment } }
    ) | (
      { __typename: 'Image_gallery', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaImageGalleryFragment': LinkDocumentMetaImageGalleryFragment } }
    ) | (
      { __typename: 'Image_mask', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaImageMaskFragment': LinkDocumentMetaImageMaskFragment } }
    ) | (
      { __typename: 'Landing_page', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaLandingPageFragment': LinkDocumentMetaLandingPageFragment } }
    ) | (
      { __typename: 'Navigation', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaNavigationFragment': LinkDocumentMetaNavigationFragment } }
    ) | (
      { __typename: 'Project', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaProjectFragment': LinkDocumentMetaProjectFragment } }
    ) | { __typename: '_ExternalLink', _linkType: string | null } | { __typename: '_FileLink', _linkType: string | null } | { __typename: '_ImageLink', _linkType: string | null } | null } | null } & { ' $fragmentName'?: 'HeroSlicePrimaryFragment' };

export type HeroSliceFullWidthFragment = { __typename?: 'Landing_pageSlicesHero_sliceFullwidth', fullWidth: { __typename?: 'Landing_pageSlicesHero_sliceFullwidthPrimary', title: any | null, subtitle: any | null, hero_image: any | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'HeroSliceFullWidthFragment' };

export type HeroSliceFieldFragment = { __typename?: 'Landing_pageSlicesHero_slice', type: string | null, label: string | null, variation: (
    { __typename: 'Landing_pageSlicesHero_sliceDefault' }
    & { ' $fragmentRefs'?: { 'HeroSlicePrimaryFragment': HeroSlicePrimaryFragment } }
  ) | (
    { __typename: 'Landing_pageSlicesHero_sliceFullwidth' }
    & { ' $fragmentRefs'?: { 'HeroSliceFullWidthFragment': HeroSliceFullWidthFragment } }
  ) | { __typename: 'Landing_pageSlicesHero_sliceGoback' } | null } & { ' $fragmentName'?: 'HeroSliceFieldFragment' };

export type CardSlicePrimaryFragment = { __typename?: 'Landing_pageSlicesCard_sliceDefault', primary: { __typename?: 'Landing_pageSlicesCard_sliceDefaultPrimary', title: any | null, subtitle: any | null } | null, items: Array<{ __typename?: 'Landing_pageSlicesCard_sliceDefaultItems', card_image: any | null, name: any | null, description: any | null, label: string | null, collection: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
      { __typename: 'Icons_list' }
      & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, icon: { __typename: 'Button' } | { __typename: 'Footer' } | (
      { __typename: 'Heroicon' }
      & { ' $fragmentRefs'?: { 'HeroIconFragment': HeroIconFragment } }
    ) | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, button: (
      { __typename: 'Button' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    ) | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, href: (
      { __typename: 'Button', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaButtonFragment': LinkDocumentMetaButtonFragment } }
    ) | (
      { __typename: 'Footer', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaFooterFragment': LinkDocumentMetaFooterFragment } }
    ) | (
      { __typename: 'Heroicon', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaHeroiconFragment': LinkDocumentMetaHeroiconFragment } }
    ) | (
      { __typename: 'Icons_list', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaIconsListFragment': LinkDocumentMetaIconsListFragment } }
    ) | (
      { __typename: 'Image_gallery', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaImageGalleryFragment': LinkDocumentMetaImageGalleryFragment } }
    ) | (
      { __typename: 'Image_mask', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaImageMaskFragment': LinkDocumentMetaImageMaskFragment } }
    ) | (
      { __typename: 'Landing_page', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaLandingPageFragment': LinkDocumentMetaLandingPageFragment } }
    ) | (
      { __typename: 'Navigation', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaNavigationFragment': LinkDocumentMetaNavigationFragment } }
    ) | (
      { __typename: 'Project', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaProjectFragment': LinkDocumentMetaProjectFragment } }
    ) | { __typename: '_ExternalLink', _linkType: string | null } | { __typename: '_FileLink', _linkType: string | null } | { __typename: '_ImageLink', _linkType: string | null } | null }> | null } & { ' $fragmentName'?: 'CardSlicePrimaryFragment' };

export type CardSliceFieldFragment = { __typename?: 'Landing_pageSlicesCard_slice', type: string | null, label: string | null, variation: (
    { __typename: 'Landing_pageSlicesCard_sliceDefault' }
    & { ' $fragmentRefs'?: { 'CardSlicePrimaryFragment': CardSlicePrimaryFragment } }
  ) | null } & { ' $fragmentName'?: 'CardSliceFieldFragment' };

export type ListBlockSlicePrimaryFragment = { __typename?: 'Landing_pageSlicesList_block_sliceDefault', primary: { __typename?: 'Landing_pageSlicesList_block_sliceDefaultPrimary', rounded_background: boolean | null, header_position: string | null, header_title: any | null, title_icon: { __typename: 'Button' } | { __typename: 'Footer' } | (
      { __typename: 'Heroicon' }
      & { ' $fragmentRefs'?: { 'HeroIconFragment': HeroIconFragment } }
    ) | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null, items: Array<{ __typename?: 'Landing_pageSlicesList_block_sliceDefaultItems', title: any | null, experience: string | null, label_stack: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
      { __typename: 'Icons_list' }
      & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null }> | null } & { ' $fragmentName'?: 'ListBlockSlicePrimaryFragment' };

export type ListBlockSliceFieldFragment = { __typename?: 'Landing_pageSlicesList_block_slice', type: string | null, label: string | null, variation: (
    { __typename: 'Landing_pageSlicesList_block_sliceDefault' }
    & { ' $fragmentRefs'?: { 'ListBlockSlicePrimaryFragment': ListBlockSlicePrimaryFragment } }
  ) | null } & { ' $fragmentName'?: 'ListBlockSliceFieldFragment' };

export type ContentBlockSlicePrimaryFragment = { __typename?: 'Landing_pageSlicesContent_block_sliceDefault', primary: { __typename?: 'Landing_pageSlicesContent_block_sliceDefaultPrimary', title: any | null, subtitle: any | null, content: any | null, hashtag: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
      { __typename: 'Icons_list' }
      & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, stack: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
      { __typename: 'Icons_list' }
      & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, images: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | (
      { __typename: 'Image_gallery' }
      & { ' $fragmentRefs'?: { 'ImageGalleryFragment': ImageGalleryFragment } }
    ) | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'ContentBlockSlicePrimaryFragment' };

export type ContentBlockSliceRichTextFragment = { __typename?: 'Landing_pageSlicesContent_block_sliceRichtext', RichText: { __typename?: 'Landing_pageSlicesContent_block_sliceRichtextPrimary', header_icons: string | null, header_title: any | null, content: any | null, image: any | null, image_position: boolean | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'ContentBlockSliceRichTextFragment' };

export type ContentBlockSliceFieldFragment = { __typename?: 'Landing_pageSlicesContent_block_slice', type: string | null, label: string | null, variation: (
    { __typename: 'Landing_pageSlicesContent_block_sliceDefault' }
    & { ' $fragmentRefs'?: { 'ContentBlockSlicePrimaryFragment': ContentBlockSlicePrimaryFragment } }
  ) | (
    { __typename: 'Landing_pageSlicesContent_block_sliceRichtext' }
    & { ' $fragmentRefs'?: { 'ContentBlockSliceRichTextFragment': ContentBlockSliceRichTextFragment } }
  ) | null } & { ' $fragmentName'?: 'ContentBlockSliceFieldFragment' };

export type ProjectHeroSlicePrimaryFragment = { __typename?: 'ProjectSlicesHero_sliceDefault', primary: { __typename?: 'ProjectSlicesHero_sliceDefaultPrimary', title: any | null, subtitle: any | null, hero_image: any | null, label: string | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, icon: { __typename: 'Button' } | { __typename: 'Footer' } | (
      { __typename: 'Heroicon' }
      & { ' $fragmentRefs'?: { 'HeroIconFragment': HeroIconFragment } }
    ) | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, button: (
      { __typename: 'Button' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    ) | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, href: (
      { __typename: 'Button', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaButtonFragment': LinkDocumentMetaButtonFragment } }
    ) | (
      { __typename: 'Footer', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaFooterFragment': LinkDocumentMetaFooterFragment } }
    ) | (
      { __typename: 'Heroicon', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaHeroiconFragment': LinkDocumentMetaHeroiconFragment } }
    ) | (
      { __typename: 'Icons_list', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaIconsListFragment': LinkDocumentMetaIconsListFragment } }
    ) | (
      { __typename: 'Image_gallery', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaImageGalleryFragment': LinkDocumentMetaImageGalleryFragment } }
    ) | (
      { __typename: 'Image_mask', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaImageMaskFragment': LinkDocumentMetaImageMaskFragment } }
    ) | (
      { __typename: 'Landing_page', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaLandingPageFragment': LinkDocumentMetaLandingPageFragment } }
    ) | (
      { __typename: 'Navigation', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaNavigationFragment': LinkDocumentMetaNavigationFragment } }
    ) | (
      { __typename: 'Project', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaProjectFragment': LinkDocumentMetaProjectFragment } }
    ) | { __typename: '_ExternalLink', _linkType: string | null } | { __typename: '_FileLink', _linkType: string | null } | { __typename: '_ImageLink', _linkType: string | null } | null } | null } & { ' $fragmentName'?: 'ProjectHeroSlicePrimaryFragment' };

export type ProjectHeroSliceFullWidthFragment = { __typename?: 'ProjectSlicesHero_sliceFullwidth', fullWidth: { __typename?: 'ProjectSlicesHero_sliceFullwidthPrimary', title: any | null, subtitle: any | null, hero_image: any | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'ProjectHeroSliceFullWidthFragment' };

export type ProjectHeroSliceGoBackFragment = { __typename?: 'ProjectSlicesHero_sliceGoback', goBack: { __typename?: 'ProjectSlicesHero_sliceGobackPrimary', title: any | null, hero_image: any | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'ProjectHeroSliceGoBackFragment' };

export type ProjectHeroSliceFieldFragment = { __typename?: 'ProjectSlicesHero_slice', type: string | null, label: string | null, variation: (
    { __typename: 'ProjectSlicesHero_sliceDefault' }
    & { ' $fragmentRefs'?: { 'ProjectHeroSlicePrimaryFragment': ProjectHeroSlicePrimaryFragment } }
  ) | (
    { __typename: 'ProjectSlicesHero_sliceFullwidth' }
    & { ' $fragmentRefs'?: { 'ProjectHeroSliceFullWidthFragment': ProjectHeroSliceFullWidthFragment } }
  ) | (
    { __typename: 'ProjectSlicesHero_sliceGoback' }
    & { ' $fragmentRefs'?: { 'ProjectHeroSliceGoBackFragment': ProjectHeroSliceGoBackFragment } }
  ) | null } & { ' $fragmentName'?: 'ProjectHeroSliceFieldFragment' };

export type ProjectListBlockSlicePrimaryFragment = { __typename?: 'ProjectSlicesList_block_sliceDefault', primary: { __typename?: 'ProjectSlicesList_block_sliceDefaultPrimary', rounded_background: boolean | null, header_position: string | null, header_title: any | null, title_icon: { __typename: 'Button' } | { __typename: 'Footer' } | (
      { __typename: 'Heroicon' }
      & { ' $fragmentRefs'?: { 'HeroIconFragment': HeroIconFragment } }
    ) | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null, items: Array<{ __typename?: 'ProjectSlicesList_block_sliceDefaultItems', title: any | null, experience: string | null, label_stack: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
      { __typename: 'Icons_list' }
      & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null }> | null } & { ' $fragmentName'?: 'ProjectListBlockSlicePrimaryFragment' };

export type ProjectListBlockSliceFieldFragment = { __typename?: 'ProjectSlicesList_block_slice', type: string | null, label: string | null, variation: (
    { __typename: 'ProjectSlicesList_block_sliceDefault' }
    & { ' $fragmentRefs'?: { 'ProjectListBlockSlicePrimaryFragment': ProjectListBlockSlicePrimaryFragment } }
  ) | null } & { ' $fragmentName'?: 'ProjectListBlockSliceFieldFragment' };

export type ProjectContentBlockSlicePrimaryFragment = { __typename?: 'ProjectSlicesContent_block_sliceDefault', primary: { __typename?: 'ProjectSlicesContent_block_sliceDefaultPrimary', title: any | null, subtitle: any | null, content: any | null, hashtag: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
      { __typename: 'Icons_list' }
      & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, stack: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
      { __typename: 'Icons_list' }
      & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, images: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | (
      { __typename: 'Image_gallery' }
      & { ' $fragmentRefs'?: { 'ImageGalleryFragment': ImageGalleryFragment } }
    ) | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'ProjectContentBlockSlicePrimaryFragment' };

export type ProjectContentBlockSliceRichTextFragment = { __typename?: 'ProjectSlicesContent_block_sliceRichtext', RichText: { __typename?: 'ProjectSlicesContent_block_sliceRichtextPrimary', header_icons: string | null, header_title: any | null, content: any | null, image: any | null, image_position: boolean | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'ProjectContentBlockSliceRichTextFragment' };

export type ProjectContentBlockSliceFieldFragment = { __typename?: 'ProjectSlicesContent_block_slice', type: string | null, label: string | null, variation: (
    { __typename: 'ProjectSlicesContent_block_sliceDefault' }
    & { ' $fragmentRefs'?: { 'ProjectContentBlockSlicePrimaryFragment': ProjectContentBlockSlicePrimaryFragment } }
  ) | (
    { __typename: 'ProjectSlicesContent_block_sliceRichtext' }
    & { ' $fragmentRefs'?: { 'ProjectContentBlockSliceRichTextFragment': ProjectContentBlockSliceRichTextFragment } }
  ) | null } & { ' $fragmentName'?: 'ProjectContentBlockSliceFieldFragment' };

export type ProjectStatsBlockSlicePrimaryFragment = { __typename?: 'ProjectSlicesStats_block_sliceDefault', items: Array<{ __typename?: 'ProjectSlicesStats_block_sliceDefaultItems', name: string | null, value: string | null, href: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | (
      { __typename: '_ExternalLink' }
      & { ' $fragmentRefs'?: { 'ExternalLinkMetaFragment': ExternalLinkMetaFragment } }
    ) | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, icon: { __typename: 'Button' } | { __typename: 'Footer' } | (
      { __typename: 'Heroicon' }
      & { ' $fragmentRefs'?: { 'HeroIconFragment': HeroIconFragment } }
    ) | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null }> | null } & { ' $fragmentName'?: 'ProjectStatsBlockSlicePrimaryFragment' };

export type ProjectStatsBlockSliceFieldFragment = { __typename?: 'ProjectSlicesStats_block_slice', type: string | null, label: string | null, variation: (
    { __typename: 'ProjectSlicesStats_block_sliceDefault' }
    & { ' $fragmentRefs'?: { 'ProjectStatsBlockSlicePrimaryFragment': ProjectStatsBlockSlicePrimaryFragment } }
  ) | null } & { ' $fragmentName'?: 'ProjectStatsBlockSliceFieldFragment' };

export type ImageGalleryFragment = { __typename?: 'Image_gallery', _meta: { __typename?: 'Meta', uid: string | null }, gallery: Array<{ __typename?: 'Image_galleryGallery', image: any | null }> | null } & { ' $fragmentName'?: 'ImageGalleryFragment' };

export type ImageMaskFragment = { __typename?: 'Image_mask', variant: string | null, _meta: { __typename?: 'Meta', uid: string | null } } & { ' $fragmentName'?: 'ImageMaskFragment' };

export type ButtonFragment = { __typename?: 'Button', variant: string | null, size: string | null, full_width: boolean | null, _meta: { __typename?: 'Meta', uid: string | null } } & { ' $fragmentName'?: 'ButtonFragment' };

export type HeroIconFragment = { __typename?: 'Heroicon', variant: string | null, name: string | null, _meta: { __typename?: 'Meta', uid: string | null } } & { ' $fragmentName'?: 'HeroIconFragment' };

export type IconsListFragment = { __typename?: 'Icons_list', show_icons: boolean | null, _meta: { __typename?: 'Meta', uid: string | null }, collection: Array<{ __typename?: 'Icons_listCollection', name: string | null, icon: string | null, href: { __typename?: 'Button' } | { __typename?: 'Footer' } | { __typename?: 'Heroicon' } | { __typename?: 'Icons_list' } | { __typename?: 'Image_gallery' } | { __typename?: 'Image_mask' } | { __typename?: 'Landing_page' } | { __typename?: 'Navigation' } | { __typename?: 'Project' } | (
      { __typename?: '_ExternalLink' }
      & { ' $fragmentRefs'?: { 'ExternalLinkMetaFragment': ExternalLinkMetaFragment } }
    ) | { __typename?: '_FileLink' } | { __typename?: '_ImageLink' } | null }> | null } & { ' $fragmentName'?: 'IconsListFragment' };

export type GetCurrentNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentNavigationQuery = { __typename?: 'Query', allNavigations: { __typename?: 'NavigationConnectionConnection', edges: Array<{ __typename?: 'NavigationConnectionEdge', node: { __typename?: 'Navigation', position: boolean | null, navigation_title: string | null, navigation_links: Array<{ __typename?: 'NavigationNavigation_links', link_name: string | null, link_href: (
            { __typename: 'Button', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaButtonFragment': LinkDocumentMetaButtonFragment } }
          ) | (
            { __typename: 'Footer', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaFooterFragment': LinkDocumentMetaFooterFragment } }
          ) | (
            { __typename: 'Heroicon', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaHeroiconFragment': LinkDocumentMetaHeroiconFragment } }
          ) | (
            { __typename: 'Icons_list', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaIconsListFragment': LinkDocumentMetaIconsListFragment } }
          ) | (
            { __typename: 'Image_gallery', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaImageGalleryFragment': LinkDocumentMetaImageGalleryFragment } }
          ) | (
            { __typename: 'Image_mask', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaImageMaskFragment': LinkDocumentMetaImageMaskFragment } }
          ) | (
            { __typename: 'Landing_page', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaLandingPageFragment': LinkDocumentMetaLandingPageFragment } }
          ) | (
            { __typename: 'Navigation', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaNavigationFragment': LinkDocumentMetaNavigationFragment } }
          ) | (
            { __typename: 'Project', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaProjectFragment': LinkDocumentMetaProjectFragment } }
          ) | { __typename: '_ExternalLink', _linkType: string | null } | { __typename: '_FileLink', _linkType: string | null } | { __typename: '_ImageLink', _linkType: string | null } | null }> | null } } | null> | null } };

export type GetCurrentFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentFooterQuery = { __typename?: 'Query', allFooters: { __typename?: 'FooterConnectionConnection', edges: Array<{ __typename?: 'FooterConnectionEdge', node: { __typename?: 'Footer', slogan: any | null, slogan_keys: Array<{ __typename?: 'FooterSlogan_keys', word: any | null }> | null, social_icons: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
          { __typename: 'Icons_list' }
          & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
        ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } } | null> | null } };

export type GetAllPagesMetaQueryVariables = Exact<{
  getCurrentDocumentsID: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  filterDocuments: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetAllPagesMetaQuery = { __typename?: 'Query', _allDocuments: { __typename?: '_DocumentConnection', edges: Array<{ __typename?: '_DocumentEdge', node: { __typename?: 'Button', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string } } | { __typename?: 'Footer', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string } } | { __typename?: 'Heroicon', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string } } | { __typename?: 'Icons_list', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string } } | { __typename?: 'Image_gallery', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string } } | { __typename?: 'Image_mask', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string } } | { __typename?: 'Landing_page', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string } } | { __typename?: 'Navigation', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string } } | { __typename?: 'Project', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string } } } | null> | null } };

export type GetCurrentLandingPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  defaultLocale: Scalars['String']['input'];
}>;


export type GetCurrentLandingPageQuery = { __typename?: 'Query', landing_page: { __typename?: 'Landing_page', slices: Array<(
      { __typename?: 'Landing_pageSlicesCard_slice' }
      & { ' $fragmentRefs'?: { 'CardSliceFieldFragment': CardSliceFieldFragment } }
    ) | (
      { __typename?: 'Landing_pageSlicesContent_block_slice' }
      & { ' $fragmentRefs'?: { 'ContentBlockSliceFieldFragment': ContentBlockSliceFieldFragment } }
    ) | (
      { __typename?: 'Landing_pageSlicesHero_slice' }
      & { ' $fragmentRefs'?: { 'HeroSliceFieldFragment': HeroSliceFieldFragment } }
    ) | (
      { __typename?: 'Landing_pageSlicesList_block_slice' }
      & { ' $fragmentRefs'?: { 'ListBlockSliceFieldFragment': ListBlockSliceFieldFragment } }
    )> | null } | null };

export type GetCurrentProjectQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  defaultLocale: Scalars['String']['input'];
}>;


export type GetCurrentProjectQuery = { __typename?: 'Query', project: { __typename?: 'Project', slices: Array<(
      { __typename?: 'ProjectSlicesContent_block_slice' }
      & { ' $fragmentRefs'?: { 'ProjectContentBlockSliceFieldFragment': ProjectContentBlockSliceFieldFragment } }
    ) | (
      { __typename?: 'ProjectSlicesHero_slice' }
      & { ' $fragmentRefs'?: { 'ProjectHeroSliceFieldFragment': ProjectHeroSliceFieldFragment } }
    ) | (
      { __typename?: 'ProjectSlicesList_block_slice' }
      & { ' $fragmentRefs'?: { 'ProjectListBlockSliceFieldFragment': ProjectListBlockSliceFieldFragment } }
    ) | (
      { __typename?: 'ProjectSlicesStats_block_slice' }
      & { ' $fragmentRefs'?: { 'ProjectStatsBlockSliceFieldFragment': ProjectStatsBlockSliceFieldFragment } }
    )> | null } | null };

export const ImageMaskFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<ImageMaskFragment, unknown>;
export const HeroIconFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<HeroIconFragment, unknown>;
export const ButtonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}}]} as unknown as DocumentNode<ButtonFragment, unknown>;
export const LinkDocumentMetaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<LinkDocumentMetaFragment, unknown>;
export const HeroSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<HeroSlicePrimaryFragment, unknown>;
export const HeroSliceFullWidthFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<HeroSliceFullWidthFragment, unknown>;
export const HeroSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSliceFullWidth"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}}]} as unknown as DocumentNode<HeroSliceFieldFragment, unknown>;
export const ExternalLinkMetaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}}]} as unknown as DocumentNode<ExternalLinkMetaFragment, unknown>;
export const IconsListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}}]} as unknown as DocumentNode<IconsListFragment, unknown>;
export const CardSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesCard_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card_image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<CardSlicePrimaryFragment, unknown>;
export const CardSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesCard_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardSlicePrimary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesCard_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card_image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}}]} as unknown as DocumentNode<CardSliceFieldFragment, unknown>;
export const ListBlockSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesList_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rounded_background"}},{"kind":"Field","name":{"kind":"Name","value":"header_position"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"title_icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label_stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}}]} as unknown as DocumentNode<ListBlockSlicePrimaryFragment, unknown>;
export const ListBlockSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesList_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListBlockSlicePrimary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesList_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rounded_background"}},{"kind":"Field","name":{"kind":"Name","value":"header_position"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"title_icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label_stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}}]} as unknown as DocumentNode<ListBlockSliceFieldFragment, unknown>;
export const ImageGalleryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<ImageGalleryFragment, unknown>;
export const ContentBlockSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesContent_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGallery"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<ContentBlockSlicePrimaryFragment, unknown>;
export const ContentBlockSliceRichTextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockSliceRichText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesContent_block_sliceRichtext"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"RichText"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header_icons"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"image_position"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<ContentBlockSliceRichTextFragment, unknown>;
export const ContentBlockSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesContent_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockSliceRichText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesContent_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGallery"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockSliceRichText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesContent_block_sliceRichtext"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"RichText"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header_icons"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"image_position"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}}]} as unknown as DocumentNode<ContentBlockSliceFieldFragment, unknown>;
export const ProjectHeroSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<ProjectHeroSlicePrimaryFragment, unknown>;
export const ProjectHeroSliceFullWidthFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<ProjectHeroSliceFullWidthFragment, unknown>;
export const ProjectHeroSliceGoBackFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceGoback"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"goBack"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<ProjectHeroSliceGoBackFragment, unknown>;
export const ProjectHeroSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceGoback"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"goBack"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectHeroSliceFieldFragment, unknown>;
export const ProjectListBlockSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectListBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesList_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rounded_background"}},{"kind":"Field","name":{"kind":"Name","value":"header_position"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"title_icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label_stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectListBlockSlicePrimaryFragment, unknown>;
export const ProjectListBlockSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectListBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesList_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectListBlockSlicePrimary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectListBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesList_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rounded_background"}},{"kind":"Field","name":{"kind":"Name","value":"header_position"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"title_icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label_stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}}]} as unknown as DocumentNode<ProjectListBlockSliceFieldFragment, unknown>;
export const ProjectContentBlockSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGallery"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<ProjectContentBlockSlicePrimaryFragment, unknown>;
export const ProjectContentBlockSliceRichTextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSliceRichText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_sliceRichtext"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"RichText"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header_icons"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"image_position"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<ProjectContentBlockSliceRichTextFragment, unknown>;
export const ProjectContentBlockSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectContentBlockSliceRichText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGallery"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSliceRichText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_sliceRichtext"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"RichText"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header_icons"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"image_position"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectContentBlockSliceFieldFragment, unknown>;
export const ProjectStatsBlockSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectStatsBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesStats_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ProjectStatsBlockSlicePrimaryFragment, unknown>;
export const ProjectStatsBlockSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectStatsBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesStats_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectStatsBlockSlicePrimary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectStatsBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesStats_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<ProjectStatsBlockSliceFieldFragment, unknown>;
export const GetCurrentNavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentNavigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNavigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"navigation_title"}},{"kind":"Field","name":{"kind":"Name","value":"navigation_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link_name"}},{"kind":"Field","name":{"kind":"Name","value":"link_href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<GetCurrentNavigationQuery, GetCurrentNavigationQueryVariables>;
export const GetCurrentFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentFooter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFooters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"slogan_keys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"word"}}]}},{"kind":"Field","name":{"kind":"Name","value":"social_icons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentFooterQuery, GetCurrentFooterQueryVariables>;
export const GetAllPagesMetaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllPagesMeta"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getCurrentDocumentsID"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filterDocuments"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_allDocuments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getCurrentDocumentsID"}}},{"kind":"Argument","name":{"kind":"Name","value":"type_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filterDocuments"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPagesMetaQuery, GetAllPagesMetaQueryVariables>;
export const GetCurrentLandingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentLandingPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"landing_page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockSliceField"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListBlockSliceField"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSliceField"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardSliceField"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesContent_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGallery"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockSliceRichText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesContent_block_sliceRichtext"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"RichText"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header_icons"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"image_position"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesList_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rounded_background"}},{"kind":"Field","name":{"kind":"Name","value":"header_position"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"title_icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label_stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesCard_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card_image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesContent_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockSliceRichText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesList_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListBlockSlicePrimary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSliceFullWidth"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesCard_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardSlicePrimary"}}]}}]}}]} as unknown as DocumentNode<GetCurrentLandingPageQuery, GetCurrentLandingPageQueryVariables>;
export const GetCurrentProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectContentBlockSliceField"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectListBlockSliceField"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceField"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectStatsBlockSliceField"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGallery"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSliceRichText"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_sliceRichtext"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"RichText"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"header_icons"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"image_position"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectListBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesList_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rounded_background"}},{"kind":"Field","name":{"kind":"Name","value":"header_position"}},{"kind":"Field","name":{"kind":"Name","value":"header_title"}},{"kind":"Field","name":{"kind":"Name","value":"title_icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"label_stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceGoback"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"goBack"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectStatsBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesStats_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectContentBlockSliceRichText"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectListBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesList_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectListBlockSlicePrimary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectStatsBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesStats_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectStatsBlockSlicePrimary"}}]}}]}}]} as unknown as DocumentNode<GetCurrentProjectQuery, GetCurrentProjectQueryVariables>;