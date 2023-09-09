/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type Button = Document & Linkable & {
  __typename?: 'Button';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  full_width: Maybe<Scalars['Boolean']>;
  size: Maybe<Scalars['String']>;
  variant: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ButtonConnectionConnection = {
  __typename?: 'ButtonConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<ButtonConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ButtonConnectionEdge = {
  __typename?: 'ButtonConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Button;
};

export type Footer = Document & Linkable & {
  __typename?: 'Footer';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  slogan: Maybe<Scalars['Json']>;
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
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type FooterConnectionEdge = {
  __typename?: 'FooterConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Footer;
};

export type FooterSloganKeys = {
  __typename?: 'FooterSlogan_keys';
  word: Maybe<Scalars['Json']>;
};

export type Heroicon = Document & Linkable & {
  __typename?: 'Heroicon';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  name: Maybe<Scalars['String']>;
  variant: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type HeroiconConnectionConnection = {
  __typename?: 'HeroiconConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<HeroiconConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type HeroiconConnectionEdge = {
  __typename?: 'HeroiconConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Heroicon;
};

export type IconsList = Document & Linkable & {
  __typename?: 'Icons_list';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  collection: Maybe<Array<IconsListCollection>>;
  show_icons: Maybe<Scalars['Boolean']>;
};

export type IconsListCollection = {
  __typename?: 'Icons_listCollection';
  href: Maybe<Linkable>;
  icon: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type IconsListConnectionConnection = {
  __typename?: 'Icons_listConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<IconsListConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type IconsListConnectionEdge = {
  __typename?: 'Icons_listConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: IconsList;
};

export type ImageGallery = Document & Linkable & {
  __typename?: 'Image_gallery';
  _linkType: Maybe<Scalars['String']>;
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
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ImageGalleryConnectionEdge = {
  __typename?: 'Image_galleryConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ImageGallery;
};

export type ImageGalleryGallery = {
  __typename?: 'Image_galleryGallery';
  image: Maybe<Scalars['Json']>;
};

export type ImageMask = Document & Linkable & {
  __typename?: 'Image_mask';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  variant: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ImageMaskConnectionConnection = {
  __typename?: 'Image_maskConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<ImageMaskConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ImageMaskConnectionEdge = {
  __typename?: 'Image_maskConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ImageMask;
};

export type LandingPage = Document & Linkable & {
  __typename?: 'Landing_page';
  _linkType: Maybe<Scalars['String']>;
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
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type LandingPageConnectionEdge = {
  __typename?: 'Landing_pageConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: LandingPage;
};

export type LandingPageSlices = LandingPageSlicesCardSlice | LandingPageSlicesHeroSlice;

export type LandingPageSlicesCardSlice = {
  __typename?: 'Landing_pageSlicesCard_slice';
  label: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
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
  card_image: Maybe<Scalars['Json']>;
  collection: Maybe<Linkable>;
  description: Maybe<Scalars['Json']>;
  href: Maybe<Linkable>;
  icon: Maybe<Linkable>;
  label: Maybe<Scalars['String']>;
  name: Maybe<Scalars['Json']>;
};

export type LandingPageSlicesCardSliceDefaultPrimary = {
  __typename?: 'Landing_pageSlicesCard_sliceDefaultPrimary';
  subtitle: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['Json']>;
};

export type LandingPageSlicesCardSliceVariation = LandingPageSlicesCardSliceDefault;

export type LandingPageSlicesHeroSlice = {
  __typename?: 'Landing_pageSlicesHero_slice';
  label: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  variation: Maybe<LandingPageSlicesHeroSliceVariation>;
};

export type LandingPageSlicesHeroSliceDefault = {
  __typename?: 'Landing_pageSlicesHero_sliceDefault';
  primary: Maybe<LandingPageSlicesHeroSliceDefaultPrimary>;
};

export type LandingPageSlicesHeroSliceDefaultPrimary = {
  __typename?: 'Landing_pageSlicesHero_sliceDefaultPrimary';
  button: Maybe<Linkable>;
  hero_image: Maybe<Scalars['Json']>;
  href: Maybe<Linkable>;
  icon: Maybe<Linkable>;
  image_mask: Maybe<Linkable>;
  label: Maybe<Scalars['String']>;
  subtitle: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['Json']>;
};

export type LandingPageSlicesHeroSliceFullwidth = {
  __typename?: 'Landing_pageSlicesHero_sliceFullwidth';
  primary: Maybe<LandingPageSlicesHeroSliceFullwidthPrimary>;
};

export type LandingPageSlicesHeroSliceFullwidthPrimary = {
  __typename?: 'Landing_pageSlicesHero_sliceFullwidthPrimary';
  hero_image: Maybe<Scalars['Json']>;
  image_mask: Maybe<Linkable>;
  subtitle: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['Json']>;
};

export type LandingPageSlicesHeroSliceGoback = {
  __typename?: 'Landing_pageSlicesHero_sliceGoback';
  primary: Maybe<LandingPageSlicesHeroSliceGobackPrimary>;
};

export type LandingPageSlicesHeroSliceGobackPrimary = {
  __typename?: 'Landing_pageSlicesHero_sliceGobackPrimary';
  hero_image: Maybe<Scalars['Json']>;
  image_mask: Maybe<Linkable>;
  title: Maybe<Scalars['Json']>;
};

export type LandingPageSlicesHeroSliceVariation = LandingPageSlicesHeroSliceDefault | LandingPageSlicesHeroSliceFullwidth | LandingPageSlicesHeroSliceGoback;

export type Meta = {
  __typename?: 'Meta';
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate: Maybe<Scalars['DateTime']>;
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The last publication date of the document. */
  lastPublicationDate: Maybe<Scalars['DateTime']>;
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid: Maybe<Scalars['String']>;
};

export type Navigation = Document & Linkable & {
  __typename?: 'Navigation';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  color: Maybe<Linkable>;
  navigation_links: Maybe<Array<NavigationNavigationLinks>>;
  navigation_title: Maybe<Scalars['String']>;
  position: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type NavigationConnectionConnection = {
  __typename?: 'NavigationConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<NavigationConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type NavigationConnectionEdge = {
  __typename?: 'NavigationConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Navigation;
};

export type NavigationNavigationLinks = {
  __typename?: 'NavigationNavigation_links';
  link_href: Maybe<Linkable>;
  link_name: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>;
};

export type Project = Document & Linkable & {
  __typename?: 'Project';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  meta_description: Maybe<Scalars['String']>;
  meta_image: Maybe<Scalars['Json']>;
  meta_title: Maybe<Scalars['String']>;
  slices: Maybe<Array<ProjectSlices>>;
};

/** A connection to a list of items. */
export type ProjectConnectionConnection = {
  __typename?: 'ProjectConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<ProjectConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ProjectConnectionEdge = {
  __typename?: 'ProjectConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Project;
};

export type ProjectSlices = ProjectSlicesContentBlockSlice | ProjectSlicesHeroSlice;

export type ProjectSlicesContentBlockSlice = {
  __typename?: 'ProjectSlicesContent_block_slice';
  label: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  variation: Maybe<ProjectSlicesContentBlockSliceVariation>;
};

export type ProjectSlicesContentBlockSliceDefault = {
  __typename?: 'ProjectSlicesContent_block_sliceDefault';
  primary: Maybe<ProjectSlicesContentBlockSliceDefaultPrimary>;
};

export type ProjectSlicesContentBlockSliceDefaultPrimary = {
  __typename?: 'ProjectSlicesContent_block_sliceDefaultPrimary';
  content: Maybe<Scalars['Json']>;
  hashtag: Maybe<Linkable>;
  images: Maybe<Linkable>;
  stack: Maybe<Linkable>;
  subtitle: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['Json']>;
};

export type ProjectSlicesContentBlockSliceVariation = ProjectSlicesContentBlockSliceDefault;

export type ProjectSlicesHeroSlice = {
  __typename?: 'ProjectSlicesHero_slice';
  label: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  variation: Maybe<ProjectSlicesHeroSliceVariation>;
};

export type ProjectSlicesHeroSliceDefault = {
  __typename?: 'ProjectSlicesHero_sliceDefault';
  primary: Maybe<ProjectSlicesHeroSliceDefaultPrimary>;
};

export type ProjectSlicesHeroSliceDefaultPrimary = {
  __typename?: 'ProjectSlicesHero_sliceDefaultPrimary';
  button: Maybe<Linkable>;
  hero_image: Maybe<Scalars['Json']>;
  href: Maybe<Linkable>;
  icon: Maybe<Linkable>;
  image_mask: Maybe<Linkable>;
  label: Maybe<Scalars['String']>;
  subtitle: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['Json']>;
};

export type ProjectSlicesHeroSliceFullwidth = {
  __typename?: 'ProjectSlicesHero_sliceFullwidth';
  primary: Maybe<ProjectSlicesHeroSliceFullwidthPrimary>;
};

export type ProjectSlicesHeroSliceFullwidthPrimary = {
  __typename?: 'ProjectSlicesHero_sliceFullwidthPrimary';
  hero_image: Maybe<Scalars['Json']>;
  image_mask: Maybe<Linkable>;
  subtitle: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['Json']>;
};

export type ProjectSlicesHeroSliceGoback = {
  __typename?: 'ProjectSlicesHero_sliceGoback';
  primary: Maybe<ProjectSlicesHeroSliceGobackPrimary>;
};

export type ProjectSlicesHeroSliceGobackPrimary = {
  __typename?: 'ProjectSlicesHero_sliceGobackPrimary';
  hero_image: Maybe<Scalars['Json']>;
  image_mask: Maybe<Linkable>;
  title: Maybe<Scalars['Json']>;
};

export type ProjectSlicesHeroSliceVariation = ProjectSlicesHeroSliceDefault | ProjectSlicesHeroSliceFullwidth | ProjectSlicesHeroSliceGoback;

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
  allTheme_50s: Theme_50ConnectionConnection;
  allTheme_100s: Theme_100ConnectionConnection;
  allTheme_200s: Theme_200ConnectionConnection;
  allTheme_300s: Theme_300ConnectionConnection;
  allTheme_400s: Theme_400ConnectionConnection;
  allTheme_500s: Theme_500ConnectionConnection;
  allTheme_600s: Theme_600ConnectionConnection;
  allTheme_700s: Theme_700ConnectionConnection;
  allTheme_800s: Theme_800ConnectionConnection;
  allTheme_900s: Theme_900ConnectionConnection;
  allTheme_950s: Theme_950ConnectionConnection;
  button: Maybe<Button>;
  heroicon: Maybe<Heroicon>;
  icons_list: Maybe<IconsList>;
  image_gallery: Maybe<ImageGallery>;
  image_mask: Maybe<ImageMask>;
  landing_page: Maybe<LandingPage>;
  project: Maybe<Project>;
};


export type QueryAllDocumentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortDocumentsBy>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  type: InputMaybe<Scalars['String']>;
  type_in: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllButtonsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortButtony>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereButton>;
};


export type QueryAllFootersArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortFootery>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereFooter>;
};


export type QueryAllHeroiconsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortHeroicony>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereHeroicon>;
};


export type QueryAllIconsListsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortIconsListy>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereIconsList>;
};


export type QueryAllImageGallerysArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortImageGalleryy>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllImageMasksArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortImageMasky>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereImageMask>;
};


export type QueryAllLandingPagesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortLandingPagey>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllNavigationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortNavigationy>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereNavigation>;
};


export type QueryAllProjectsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortProjecty>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereProject>;
};


export type QueryAllTheme_50sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_50y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_50>;
};


export type QueryAllTheme_100sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_100y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_100>;
};


export type QueryAllTheme_200sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_200y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_200>;
};


export type QueryAllTheme_300sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_300y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_300>;
};


export type QueryAllTheme_400sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_400y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_400>;
};


export type QueryAllTheme_500sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_500y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_500>;
};


export type QueryAllTheme_600sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_600y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_600>;
};


export type QueryAllTheme_700sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_700y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_700>;
};


export type QueryAllTheme_800sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_800y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_800>;
};


export type QueryAllTheme_900sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_900y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_900>;
};


export type QueryAllTheme_950sArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  firstPublicationDate: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  firstPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  fulltext: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['String']>;
  id_in: InputMaybe<Array<Scalars['String']>>;
  lang: InputMaybe<Scalars['String']>;
  last: InputMaybe<Scalars['Int']>;
  lastPublicationDate: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_after: InputMaybe<Scalars['DateTime']>;
  lastPublicationDate_before: InputMaybe<Scalars['DateTime']>;
  similar: InputMaybe<Similar>;
  sortBy: InputMaybe<SortTheme_950y>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
  where: InputMaybe<WhereTheme_950>;
};


export type QueryButtonArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryHeroiconArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryIconsListArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryImageGalleryArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryImageMaskArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryLandingPageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryProjectArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid: Maybe<Scalars['String']>;
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

export enum SortTheme_50y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_100y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_200y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_300y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_400y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_500y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_600y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_700y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_800y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_900y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortTheme_950y {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export type Theme_50 = Document & Linkable & {
  __typename?: 'Theme_50';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_50Light>>;
};

/** A connection to a list of items. */
export type Theme_50ConnectionConnection = {
  __typename?: 'Theme_50ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_50ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_50ConnectionEdge = {
  __typename?: 'Theme_50ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_50;
};

export type Theme_50Light = {
  __typename?: 'Theme_50Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_100 = Document & Linkable & {
  __typename?: 'Theme_100';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_100Light>>;
};

/** A connection to a list of items. */
export type Theme_100ConnectionConnection = {
  __typename?: 'Theme_100ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_100ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_100ConnectionEdge = {
  __typename?: 'Theme_100ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_100;
};

export type Theme_100Light = {
  __typename?: 'Theme_100Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_200 = Document & Linkable & {
  __typename?: 'Theme_200';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_200Light>>;
};

/** A connection to a list of items. */
export type Theme_200ConnectionConnection = {
  __typename?: 'Theme_200ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_200ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_200ConnectionEdge = {
  __typename?: 'Theme_200ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_200;
};

export type Theme_200Light = {
  __typename?: 'Theme_200Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_300 = Document & Linkable & {
  __typename?: 'Theme_300';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_300Light>>;
};

/** A connection to a list of items. */
export type Theme_300ConnectionConnection = {
  __typename?: 'Theme_300ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_300ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_300ConnectionEdge = {
  __typename?: 'Theme_300ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_300;
};

export type Theme_300Light = {
  __typename?: 'Theme_300Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_400 = Document & Linkable & {
  __typename?: 'Theme_400';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_400Light>>;
};

/** A connection to a list of items. */
export type Theme_400ConnectionConnection = {
  __typename?: 'Theme_400ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_400ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_400ConnectionEdge = {
  __typename?: 'Theme_400ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_400;
};

export type Theme_400Light = {
  __typename?: 'Theme_400Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_500 = Document & Linkable & {
  __typename?: 'Theme_500';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_500Light>>;
};

/** A connection to a list of items. */
export type Theme_500ConnectionConnection = {
  __typename?: 'Theme_500ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_500ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_500ConnectionEdge = {
  __typename?: 'Theme_500ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_500;
};

export type Theme_500Light = {
  __typename?: 'Theme_500Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_600 = Document & Linkable & {
  __typename?: 'Theme_600';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_600Light>>;
};

/** A connection to a list of items. */
export type Theme_600ConnectionConnection = {
  __typename?: 'Theme_600ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_600ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_600ConnectionEdge = {
  __typename?: 'Theme_600ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_600;
};

export type Theme_600Light = {
  __typename?: 'Theme_600Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_700 = Document & Linkable & {
  __typename?: 'Theme_700';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_700Light>>;
};

/** A connection to a list of items. */
export type Theme_700ConnectionConnection = {
  __typename?: 'Theme_700ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_700ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_700ConnectionEdge = {
  __typename?: 'Theme_700ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_700;
};

export type Theme_700Light = {
  __typename?: 'Theme_700Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_800 = Document & Linkable & {
  __typename?: 'Theme_800';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_800Light>>;
};

/** A connection to a list of items. */
export type Theme_800ConnectionConnection = {
  __typename?: 'Theme_800ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_800ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_800ConnectionEdge = {
  __typename?: 'Theme_800ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_800;
};

export type Theme_800Light = {
  __typename?: 'Theme_800Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_900 = Document & Linkable & {
  __typename?: 'Theme_900';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_900Light>>;
};

/** A connection to a list of items. */
export type Theme_900ConnectionConnection = {
  __typename?: 'Theme_900ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_900ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_900ConnectionEdge = {
  __typename?: 'Theme_900ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_900;
};

export type Theme_900Light = {
  __typename?: 'Theme_900Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_950 = Document & Linkable & {
  __typename?: 'Theme_950';
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_950Light>>;
};

/** A connection to a list of items. */
export type Theme_950ConnectionConnection = {
  __typename?: 'Theme_950ConnectionConnection';
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_950ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_950ConnectionEdge = {
  __typename?: 'Theme_950ConnectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_950;
};

export type Theme_950Light = {
  __typename?: 'Theme_950Light';
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type WhereButton = {
  full_width: InputMaybe<Scalars['Boolean']>;
  size: InputMaybe<Scalars['String']>;
  size_fulltext: InputMaybe<Scalars['String']>;
  variant: InputMaybe<Scalars['String']>;
  variant_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereFooter = {
  /** slogan */
  slogan_fulltext: InputMaybe<Scalars['String']>;
  slogan_keys: InputMaybe<WhereFooterSloganKeys>;
  /** social_icons */
  social_icons: InputMaybe<Scalars['String']>;
};

export type WhereFooterSloganKeys = {
  /** word */
  word_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereHeroicon = {
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
  variant: InputMaybe<Scalars['String']>;
  variant_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereIconsList = {
  collection: InputMaybe<WhereIconsListCollection>;
  show_icons: InputMaybe<Scalars['Boolean']>;
};

export type WhereIconsListCollection = {
  /** href */
  href: InputMaybe<Scalars['String']>;
  icon: InputMaybe<Scalars['String']>;
  icon_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereImageMask = {
  variant: InputMaybe<Scalars['String']>;
  variant_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereNavigation = {
  /** color */
  color: InputMaybe<Scalars['String']>;
  navigation_links: InputMaybe<WhereNavigationNavigationLinks>;
  navigation_title: InputMaybe<Scalars['String']>;
  navigation_title_fulltext: InputMaybe<Scalars['String']>;
  position: InputMaybe<Scalars['Boolean']>;
};

export type WhereNavigationNavigationLinks = {
  /** link_href */
  link_href: InputMaybe<Scalars['String']>;
  link_name: InputMaybe<Scalars['String']>;
  link_name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereProject = {
  meta_description: InputMaybe<Scalars['String']>;
  meta_description_fulltext: InputMaybe<Scalars['String']>;
  meta_title: InputMaybe<Scalars['String']>;
  meta_title_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_50 = {
  light: InputMaybe<WhereTheme_50Light>;
};

export type WhereTheme_50Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_100 = {
  light: InputMaybe<WhereTheme_100Light>;
};

export type WhereTheme_100Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_200 = {
  light: InputMaybe<WhereTheme_200Light>;
};

export type WhereTheme_200Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_300 = {
  light: InputMaybe<WhereTheme_300Light>;
};

export type WhereTheme_300Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_400 = {
  light: InputMaybe<WhereTheme_400Light>;
};

export type WhereTheme_400Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_500 = {
  light: InputMaybe<WhereTheme_500Light>;
};

export type WhereTheme_500Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_600 = {
  light: InputMaybe<WhereTheme_600Light>;
};

export type WhereTheme_600Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_700 = {
  light: InputMaybe<WhereTheme_700Light>;
};

export type WhereTheme_700Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_800 = {
  light: InputMaybe<WhereTheme_800Light>;
};

export type WhereTheme_800Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_900 = {
  light: InputMaybe<WhereTheme_900Light>;
};

export type WhereTheme_900Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereTheme_950 = {
  light: InputMaybe<WhereTheme_950Light>;
};

export type WhereTheme_950Light = {
  code: InputMaybe<Scalars['String']>;
  code_fulltext: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  name_fulltext: InputMaybe<Scalars['String']>;
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
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Document;
};

/** An external link */
export type ExternalLink = Linkable & {
  __typename?: '_ExternalLink';
  _linkType: Maybe<Scalars['String']>;
  target: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** A linked file */
export type FileLink = Linkable & {
  __typename?: '_FileLink';
  _linkType: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
};

/** A linked image */
export type ImageLink = Linkable & {
  __typename?: '_ImageLink';
  _linkType: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** A prismic link */
export type Linkable = {
  _linkType: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
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

type LinkDocumentMetaTheme_50Fragment = { __typename: 'Theme_50', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_50Fragment' };

type LinkDocumentMetaTheme_100Fragment = { __typename: 'Theme_100', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_100Fragment' };

type LinkDocumentMetaTheme_200Fragment = { __typename: 'Theme_200', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_200Fragment' };

type LinkDocumentMetaTheme_300Fragment = { __typename: 'Theme_300', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_300Fragment' };

type LinkDocumentMetaTheme_400Fragment = { __typename: 'Theme_400', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_400Fragment' };

type LinkDocumentMetaTheme_500Fragment = { __typename: 'Theme_500', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_500Fragment' };

type LinkDocumentMetaTheme_600Fragment = { __typename: 'Theme_600', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_600Fragment' };

type LinkDocumentMetaTheme_700Fragment = { __typename: 'Theme_700', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_700Fragment' };

type LinkDocumentMetaTheme_800Fragment = { __typename: 'Theme_800', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_800Fragment' };

type LinkDocumentMetaTheme_900Fragment = { __typename: 'Theme_900', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_900Fragment' };

type LinkDocumentMetaTheme_950Fragment = { __typename: 'Theme_950', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_950Fragment' };

export type LinkDocumentMetaFragment = LinkDocumentMetaButtonFragment | LinkDocumentMetaFooterFragment | LinkDocumentMetaHeroiconFragment | LinkDocumentMetaIconsListFragment | LinkDocumentMetaImageGalleryFragment | LinkDocumentMetaImageMaskFragment | LinkDocumentMetaLandingPageFragment | LinkDocumentMetaNavigationFragment | LinkDocumentMetaProjectFragment | LinkDocumentMetaTheme_50Fragment | LinkDocumentMetaTheme_100Fragment | LinkDocumentMetaTheme_200Fragment | LinkDocumentMetaTheme_300Fragment | LinkDocumentMetaTheme_400Fragment | LinkDocumentMetaTheme_500Fragment | LinkDocumentMetaTheme_600Fragment | LinkDocumentMetaTheme_700Fragment | LinkDocumentMetaTheme_800Fragment | LinkDocumentMetaTheme_900Fragment | LinkDocumentMetaTheme_950Fragment;

export type ExternalLinkMetaFragment = { __typename: '_ExternalLink', _linkType: string | null, url: string, target: string | null } & { ' $fragmentName'?: 'ExternalLinkMetaFragment' };

export type HeroSlicePrimaryFragment = { __typename?: 'Landing_pageSlicesHero_sliceDefault', primary: { __typename?: 'Landing_pageSlicesHero_sliceDefaultPrimary', title: any | null, subtitle: any | null, hero_image: any | null, label: string | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, icon: { __typename: 'Button' } | { __typename: 'Footer' } | (
      { __typename: 'Heroicon' }
      & { ' $fragmentRefs'?: { 'HeroIconFragment': HeroIconFragment } }
    ) | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, button: (
      { __typename: 'Button' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    ) | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, href: (
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
    ) | (
      { __typename: 'Theme_50', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_50Fragment': LinkDocumentMetaTheme_50Fragment } }
    ) | (
      { __typename: 'Theme_100', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_100Fragment': LinkDocumentMetaTheme_100Fragment } }
    ) | (
      { __typename: 'Theme_200', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_200Fragment': LinkDocumentMetaTheme_200Fragment } }
    ) | (
      { __typename: 'Theme_300', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_300Fragment': LinkDocumentMetaTheme_300Fragment } }
    ) | (
      { __typename: 'Theme_400', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_400Fragment': LinkDocumentMetaTheme_400Fragment } }
    ) | (
      { __typename: 'Theme_500', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_500Fragment': LinkDocumentMetaTheme_500Fragment } }
    ) | (
      { __typename: 'Theme_600', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_600Fragment': LinkDocumentMetaTheme_600Fragment } }
    ) | (
      { __typename: 'Theme_700', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_700Fragment': LinkDocumentMetaTheme_700Fragment } }
    ) | (
      { __typename: 'Theme_800', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_800Fragment': LinkDocumentMetaTheme_800Fragment } }
    ) | (
      { __typename: 'Theme_900', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_900Fragment': LinkDocumentMetaTheme_900Fragment } }
    ) | (
      { __typename: 'Theme_950', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_950Fragment': LinkDocumentMetaTheme_950Fragment } }
    ) | { __typename: '_ExternalLink', _linkType: string | null } | { __typename: '_FileLink', _linkType: string | null } | { __typename: '_ImageLink', _linkType: string | null } | null } | null } & { ' $fragmentName'?: 'HeroSlicePrimaryFragment' };

export type HeroSliceFullWidthFragment = { __typename?: 'Landing_pageSlicesHero_sliceFullwidth', fullWidth: { __typename?: 'Landing_pageSlicesHero_sliceFullwidthPrimary', title: any | null, subtitle: any | null, hero_image: any | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'HeroSliceFullWidthFragment' };

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
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, icon: { __typename: 'Button' } | { __typename: 'Footer' } | (
      { __typename: 'Heroicon' }
      & { ' $fragmentRefs'?: { 'HeroIconFragment': HeroIconFragment } }
    ) | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, button: (
      { __typename: 'Button' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    ) | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, href: (
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
    ) | (
      { __typename: 'Theme_50', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_50Fragment': LinkDocumentMetaTheme_50Fragment } }
    ) | (
      { __typename: 'Theme_100', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_100Fragment': LinkDocumentMetaTheme_100Fragment } }
    ) | (
      { __typename: 'Theme_200', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_200Fragment': LinkDocumentMetaTheme_200Fragment } }
    ) | (
      { __typename: 'Theme_300', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_300Fragment': LinkDocumentMetaTheme_300Fragment } }
    ) | (
      { __typename: 'Theme_400', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_400Fragment': LinkDocumentMetaTheme_400Fragment } }
    ) | (
      { __typename: 'Theme_500', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_500Fragment': LinkDocumentMetaTheme_500Fragment } }
    ) | (
      { __typename: 'Theme_600', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_600Fragment': LinkDocumentMetaTheme_600Fragment } }
    ) | (
      { __typename: 'Theme_700', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_700Fragment': LinkDocumentMetaTheme_700Fragment } }
    ) | (
      { __typename: 'Theme_800', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_800Fragment': LinkDocumentMetaTheme_800Fragment } }
    ) | (
      { __typename: 'Theme_900', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_900Fragment': LinkDocumentMetaTheme_900Fragment } }
    ) | (
      { __typename: 'Theme_950', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_950Fragment': LinkDocumentMetaTheme_950Fragment } }
    ) | { __typename: '_ExternalLink', _linkType: string | null } | { __typename: '_FileLink', _linkType: string | null } | { __typename: '_ImageLink', _linkType: string | null } | null }> | null } & { ' $fragmentName'?: 'CardSlicePrimaryFragment' };

export type CardSliceFieldFragment = { __typename?: 'Landing_pageSlicesCard_slice', type: string | null, label: string | null, variation: (
    { __typename: 'Landing_pageSlicesCard_sliceDefault' }
    & { ' $fragmentRefs'?: { 'CardSlicePrimaryFragment': CardSlicePrimaryFragment } }
  ) | null } & { ' $fragmentName'?: 'CardSliceFieldFragment' };

export type ProjectHeroSlicePrimaryFragment = { __typename?: 'ProjectSlicesHero_sliceDefault', primary: { __typename?: 'ProjectSlicesHero_sliceDefaultPrimary', title: any | null, subtitle: any | null, hero_image: any | null, label: string | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, icon: { __typename: 'Button' } | { __typename: 'Footer' } | (
      { __typename: 'Heroicon' }
      & { ' $fragmentRefs'?: { 'HeroIconFragment': HeroIconFragment } }
    ) | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, button: (
      { __typename: 'Button' }
      & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
    ) | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, href: (
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
    ) | (
      { __typename: 'Theme_50', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_50Fragment': LinkDocumentMetaTheme_50Fragment } }
    ) | (
      { __typename: 'Theme_100', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_100Fragment': LinkDocumentMetaTheme_100Fragment } }
    ) | (
      { __typename: 'Theme_200', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_200Fragment': LinkDocumentMetaTheme_200Fragment } }
    ) | (
      { __typename: 'Theme_300', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_300Fragment': LinkDocumentMetaTheme_300Fragment } }
    ) | (
      { __typename: 'Theme_400', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_400Fragment': LinkDocumentMetaTheme_400Fragment } }
    ) | (
      { __typename: 'Theme_500', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_500Fragment': LinkDocumentMetaTheme_500Fragment } }
    ) | (
      { __typename: 'Theme_600', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_600Fragment': LinkDocumentMetaTheme_600Fragment } }
    ) | (
      { __typename: 'Theme_700', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_700Fragment': LinkDocumentMetaTheme_700Fragment } }
    ) | (
      { __typename: 'Theme_800', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_800Fragment': LinkDocumentMetaTheme_800Fragment } }
    ) | (
      { __typename: 'Theme_900', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_900Fragment': LinkDocumentMetaTheme_900Fragment } }
    ) | (
      { __typename: 'Theme_950', _linkType: string | null }
      & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_950Fragment': LinkDocumentMetaTheme_950Fragment } }
    ) | { __typename: '_ExternalLink', _linkType: string | null } | { __typename: '_FileLink', _linkType: string | null } | { __typename: '_ImageLink', _linkType: string | null } | null } | null } & { ' $fragmentName'?: 'ProjectHeroSlicePrimaryFragment' };

export type ProjectHeroSliceFullWidthFragment = { __typename?: 'ProjectSlicesHero_sliceFullwidth', fullWidth: { __typename?: 'ProjectSlicesHero_sliceFullwidthPrimary', title: any | null, subtitle: any | null, hero_image: any | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'ProjectHeroSliceFullWidthFragment' };

export type ProjectHeroSliceGoBackFragment = { __typename?: 'ProjectSlicesHero_sliceGoback', goBack: { __typename?: 'ProjectSlicesHero_sliceGobackPrimary', title: any | null, hero_image: any | null, image_mask: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | { __typename: 'Image_gallery' } | (
      { __typename: 'Image_mask' }
      & { ' $fragmentRefs'?: { 'ImageMaskFragment': ImageMaskFragment } }
    ) | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'ProjectHeroSliceGoBackFragment' };

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

export type ProjectContentBlockSlicePrimaryFragment = { __typename?: 'ProjectSlicesContent_block_sliceDefault', primary: { __typename?: 'ProjectSlicesContent_block_sliceDefaultPrimary', title: any | null, subtitle: any | null, content: any | null, hashtag: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
      { __typename: 'Icons_list' }
      & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, stack: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
      { __typename: 'Icons_list' }
      & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
    ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null, images: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | { __typename: 'Icons_list' } | (
      { __typename: 'Image_gallery' }
      & { ' $fragmentRefs'?: { 'ImageGalleryFragment': ImageGalleryFragment } }
    ) | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } | null } & { ' $fragmentName'?: 'ProjectContentBlockSlicePrimaryFragment' };

export type ProjectContentBlockSliceFieldFragment = { __typename?: 'ProjectSlicesContent_block_slice', type: string | null, label: string | null, variation: (
    { __typename: 'ProjectSlicesContent_block_sliceDefault' }
    & { ' $fragmentRefs'?: { 'ProjectContentBlockSlicePrimaryFragment': ProjectContentBlockSlicePrimaryFragment } }
  ) | null } & { ' $fragmentName'?: 'ProjectContentBlockSliceFieldFragment' };

export type Theme50FieldsFragment = { __typename?: 'Theme_50', light: Array<{ __typename?: 'Theme_50Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme50FieldsFragment' };

export type Theme100FieldsFragment = { __typename?: 'Theme_100', light: Array<{ __typename?: 'Theme_100Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme100FieldsFragment' };

export type Theme200FieldsFragment = { __typename?: 'Theme_200', light: Array<{ __typename?: 'Theme_200Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme200FieldsFragment' };

export type Theme300FieldsFragment = { __typename?: 'Theme_300', light: Array<{ __typename?: 'Theme_300Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme300FieldsFragment' };

export type Theme400FieldsFragment = { __typename?: 'Theme_400', light: Array<{ __typename?: 'Theme_400Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme400FieldsFragment' };

export type Theme500FieldsFragment = { __typename?: 'Theme_500', light: Array<{ __typename?: 'Theme_500Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme500FieldsFragment' };

export type Theme600FieldsFragment = { __typename?: 'Theme_600', light: Array<{ __typename?: 'Theme_600Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme600FieldsFragment' };

export type Theme700FieldsFragment = { __typename?: 'Theme_700', light: Array<{ __typename?: 'Theme_700Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme700FieldsFragment' };

export type Theme800FieldsFragment = { __typename?: 'Theme_800', light: Array<{ __typename?: 'Theme_800Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme800FieldsFragment' };

export type Theme900FieldsFragment = { __typename?: 'Theme_900', light: Array<{ __typename?: 'Theme_900Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme900FieldsFragment' };

export type Theme950FieldsFragment = { __typename?: 'Theme_950', light: Array<{ __typename?: 'Theme_950Light', name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme950FieldsFragment' };

export type ImageGalleryFragment = { __typename?: 'Image_gallery', _meta: { __typename?: 'Meta', uid: string | null }, gallery: Array<{ __typename?: 'Image_galleryGallery', image: any | null }> | null } & { ' $fragmentName'?: 'ImageGalleryFragment' };

export type ImageMaskFragment = { __typename?: 'Image_mask', variant: string | null, _meta: { __typename?: 'Meta', uid: string | null } } & { ' $fragmentName'?: 'ImageMaskFragment' };

export type ButtonFragment = { __typename?: 'Button', variant: string | null, size: string | null, full_width: boolean | null, _meta: { __typename?: 'Meta', uid: string | null } } & { ' $fragmentName'?: 'ButtonFragment' };

export type HeroIconFragment = { __typename?: 'Heroicon', variant: string | null, name: string | null, _meta: { __typename?: 'Meta', uid: string | null } } & { ' $fragmentName'?: 'HeroIconFragment' };

export type IconsListFragment = { __typename?: 'Icons_list', show_icons: boolean | null, _meta: { __typename?: 'Meta', uid: string | null }, collection: Array<{ __typename?: 'Icons_listCollection', name: string | null, icon: string | null, href: { __typename?: 'Button' } | { __typename?: 'Footer' } | { __typename?: 'Heroicon' } | { __typename?: 'Icons_list' } | { __typename?: 'Image_gallery' } | { __typename?: 'Image_mask' } | { __typename?: 'Landing_page' } | { __typename?: 'Navigation' } | { __typename?: 'Project' } | { __typename?: 'Theme_50' } | { __typename?: 'Theme_100' } | { __typename?: 'Theme_200' } | { __typename?: 'Theme_300' } | { __typename?: 'Theme_400' } | { __typename?: 'Theme_500' } | { __typename?: 'Theme_600' } | { __typename?: 'Theme_700' } | { __typename?: 'Theme_800' } | { __typename?: 'Theme_900' } | { __typename?: 'Theme_950' } | (
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
          ) | (
            { __typename: 'Theme_50', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_50Fragment': LinkDocumentMetaTheme_50Fragment } }
          ) | (
            { __typename: 'Theme_100', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_100Fragment': LinkDocumentMetaTheme_100Fragment } }
          ) | (
            { __typename: 'Theme_200', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_200Fragment': LinkDocumentMetaTheme_200Fragment } }
          ) | (
            { __typename: 'Theme_300', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_300Fragment': LinkDocumentMetaTheme_300Fragment } }
          ) | (
            { __typename: 'Theme_400', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_400Fragment': LinkDocumentMetaTheme_400Fragment } }
          ) | (
            { __typename: 'Theme_500', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_500Fragment': LinkDocumentMetaTheme_500Fragment } }
          ) | (
            { __typename: 'Theme_600', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_600Fragment': LinkDocumentMetaTheme_600Fragment } }
          ) | (
            { __typename: 'Theme_700', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_700Fragment': LinkDocumentMetaTheme_700Fragment } }
          ) | (
            { __typename: 'Theme_800', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_800Fragment': LinkDocumentMetaTheme_800Fragment } }
          ) | (
            { __typename: 'Theme_900', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_900Fragment': LinkDocumentMetaTheme_900Fragment } }
          ) | (
            { __typename: 'Theme_950', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_950Fragment': LinkDocumentMetaTheme_950Fragment } }
          ) | { __typename: '_ExternalLink', _linkType: string | null } | { __typename: '_FileLink', _linkType: string | null } | { __typename: '_ImageLink', _linkType: string | null } | null }> | null, color: { __typename?: 'Button' } | { __typename?: 'Footer' } | { __typename?: 'Heroicon' } | { __typename?: 'Icons_list' } | { __typename?: 'Image_gallery' } | { __typename?: 'Image_mask' } | { __typename?: 'Landing_page' } | { __typename?: 'Navigation' } | { __typename?: 'Project' } | (
          { __typename?: 'Theme_50' }
          & { ' $fragmentRefs'?: { 'Theme50FieldsFragment': Theme50FieldsFragment } }
        ) | (
          { __typename?: 'Theme_100' }
          & { ' $fragmentRefs'?: { 'Theme100FieldsFragment': Theme100FieldsFragment } }
        ) | (
          { __typename?: 'Theme_200' }
          & { ' $fragmentRefs'?: { 'Theme200FieldsFragment': Theme200FieldsFragment } }
        ) | (
          { __typename?: 'Theme_300' }
          & { ' $fragmentRefs'?: { 'Theme300FieldsFragment': Theme300FieldsFragment } }
        ) | (
          { __typename?: 'Theme_400' }
          & { ' $fragmentRefs'?: { 'Theme400FieldsFragment': Theme400FieldsFragment } }
        ) | (
          { __typename?: 'Theme_500' }
          & { ' $fragmentRefs'?: { 'Theme500FieldsFragment': Theme500FieldsFragment } }
        ) | (
          { __typename?: 'Theme_600' }
          & { ' $fragmentRefs'?: { 'Theme600FieldsFragment': Theme600FieldsFragment } }
        ) | (
          { __typename?: 'Theme_700' }
          & { ' $fragmentRefs'?: { 'Theme700FieldsFragment': Theme700FieldsFragment } }
        ) | (
          { __typename?: 'Theme_800' }
          & { ' $fragmentRefs'?: { 'Theme800FieldsFragment': Theme800FieldsFragment } }
        ) | (
          { __typename?: 'Theme_900' }
          & { ' $fragmentRefs'?: { 'Theme900FieldsFragment': Theme900FieldsFragment } }
        ) | (
          { __typename?: 'Theme_950' }
          & { ' $fragmentRefs'?: { 'Theme950FieldsFragment': Theme950FieldsFragment } }
        ) | { __typename?: '_ExternalLink' } | { __typename?: '_FileLink' } | { __typename?: '_ImageLink' } | null } } | null> | null } };

export type GetCurrentFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentFooterQuery = { __typename?: 'Query', allFooters: { __typename?: 'FooterConnectionConnection', edges: Array<{ __typename?: 'FooterConnectionEdge', node: { __typename?: 'Footer', slogan: any | null, slogan_keys: Array<{ __typename?: 'FooterSlogan_keys', word: any | null }> | null, social_icons: { __typename: 'Button' } | { __typename: 'Footer' } | { __typename: 'Heroicon' } | (
          { __typename: 'Icons_list' }
          & { ' $fragmentRefs'?: { 'IconsListFragment': IconsListFragment } }
        ) | { __typename: 'Image_gallery' } | { __typename: 'Image_mask' } | { __typename: 'Landing_page' } | { __typename: 'Navigation' } | { __typename: 'Project' } | { __typename: 'Theme_50' } | { __typename: 'Theme_100' } | { __typename: 'Theme_200' } | { __typename: 'Theme_300' } | { __typename: 'Theme_400' } | { __typename: 'Theme_500' } | { __typename: 'Theme_600' } | { __typename: 'Theme_700' } | { __typename: 'Theme_800' } | { __typename: 'Theme_900' } | { __typename: 'Theme_950' } | { __typename: '_ExternalLink' } | { __typename: '_FileLink' } | { __typename: '_ImageLink' } | null } } | null> | null } };

export type GetAllLandingPagesMetaQueryVariables = Exact<{
  getByID: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetAllLandingPagesMetaQuery = { __typename?: 'Query', allLanding_pages: { __typename?: 'Landing_pageConnectionConnection', edges: Array<{ __typename?: 'Landing_pageConnectionEdge', node: { __typename?: 'Landing_page', _linkType: string | null, _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } } | null> | null } };

export type GetAllProjectsMetaQueryVariables = Exact<{
  getByID: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetAllProjectsMetaQuery = { __typename?: 'Query', allProjects: { __typename?: 'ProjectConnectionConnection', edges: Array<{ __typename?: 'ProjectConnectionEdge', node: { __typename?: 'Project', _linkType: string | null, _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } } | null> | null } };

export type GetCurrentLandingPageQueryVariables = Exact<{
  slug: Scalars['String'];
  defaultLocale: Scalars['String'];
}>;


export type GetCurrentLandingPageQuery = { __typename?: 'Query', landing_page: { __typename?: 'Landing_page', slices: Array<(
      { __typename?: 'Landing_pageSlicesCard_slice' }
      & { ' $fragmentRefs'?: { 'CardSliceFieldFragment': CardSliceFieldFragment } }
    ) | (
      { __typename?: 'Landing_pageSlicesHero_slice' }
      & { ' $fragmentRefs'?: { 'HeroSliceFieldFragment': HeroSliceFieldFragment } }
    )> | null } | null };

export type GetCurrentProjectQueryVariables = Exact<{
  slug: Scalars['String'];
  defaultLocale: Scalars['String'];
}>;


export type GetCurrentProjectQuery = { __typename?: 'Query', project: { __typename?: 'Project', slices: Array<(
      { __typename?: 'ProjectSlicesContent_block_slice' }
      & { ' $fragmentRefs'?: { 'ProjectContentBlockSliceFieldFragment': ProjectContentBlockSliceFieldFragment } }
    ) | (
      { __typename?: 'ProjectSlicesHero_slice' }
      & { ' $fragmentRefs'?: { 'ProjectHeroSliceFieldFragment': ProjectHeroSliceFieldFragment } }
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
export const ProjectHeroSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<ProjectHeroSlicePrimaryFragment, unknown>;
export const ProjectHeroSliceFullWidthFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<ProjectHeroSliceFullWidthFragment, unknown>;
export const ProjectHeroSliceGoBackFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceGoback"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"goBack"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}}]} as unknown as DocumentNode<ProjectHeroSliceGoBackFragment, unknown>;
export const ProjectHeroSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceGoback"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"goBack"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectHeroSliceFieldFragment, unknown>;
export const ImageGalleryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<ImageGalleryFragment, unknown>;
export const ProjectContentBlockSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGallery"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<ProjectContentBlockSlicePrimaryFragment, unknown>;
export const ProjectContentBlockSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGallery"}}]}}]}}]}}]} as unknown as DocumentNode<ProjectContentBlockSliceFieldFragment, unknown>;
export const Theme50FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme50Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_50"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme50FieldsFragment, unknown>;
export const Theme100FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme100Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_100"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme100FieldsFragment, unknown>;
export const Theme200FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme200Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_200"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme200FieldsFragment, unknown>;
export const Theme300FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme300Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_300"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme300FieldsFragment, unknown>;
export const Theme400FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme400Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_400"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme400FieldsFragment, unknown>;
export const Theme500FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme500Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_500"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme500FieldsFragment, unknown>;
export const Theme600FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme600Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_600"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme600FieldsFragment, unknown>;
export const Theme700FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme700Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_700"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme700FieldsFragment, unknown>;
export const Theme800FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme800Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_800"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme800FieldsFragment, unknown>;
export const Theme900FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme900Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_900"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme900FieldsFragment, unknown>;
export const Theme950FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme950Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_950"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<Theme950FieldsFragment, unknown>;
export const GetCurrentNavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentNavigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNavigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"navigation_title"}},{"kind":"Field","name":{"kind":"Name","value":"navigation_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link_name"}},{"kind":"Field","name":{"kind":"Name","value":"link_href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme50Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme100Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme200Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme300Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme400Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme500Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme600Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme700Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme800Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme900Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme950Fields"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme50Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_50"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme100Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_100"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme200Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_200"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme300Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_300"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme400Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_400"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme500Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_500"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme600Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_600"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme700Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_700"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme800Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_800"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme900Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_900"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme950Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_950"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<GetCurrentNavigationQuery, GetCurrentNavigationQueryVariables>;
export const GetCurrentFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentFooter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFooters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slogan"}},{"kind":"Field","name":{"kind":"Name","value":"slogan_keys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"word"}}]}},{"kind":"Field","name":{"kind":"Name","value":"social_icons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentFooterQuery, GetCurrentFooterQueryVariables>;
export const GetAllLandingPagesMetaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllLandingPagesMeta"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getByID"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allLanding_pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getByID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllLandingPagesMetaQuery, GetAllLandingPagesMetaQueryVariables>;
export const GetAllProjectsMetaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllProjectsMeta"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getByID"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProjects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getByID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllProjectsMetaQuery, GetAllProjectsMetaQueryVariables>;
export const GetCurrentLandingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentLandingPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"landing_page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSliceField"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardSliceField"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesCard_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card_image"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSliceFullWidth"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesCard_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardSlicePrimary"}}]}}]}}]} as unknown as DocumentNode<GetCurrentLandingPageQuery, GetCurrentLandingPageQueryVariables>;
export const GetCurrentProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceField"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectContentBlockSliceField"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_mask"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroIcon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heroicon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Button"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variant"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"full_width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroIcon"}}]}},{"kind":"Field","name":{"kind":"Name","value":"button"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceFullwidth"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"fullWidth"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_sliceGoback"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"goBack"},"name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}},{"kind":"Field","name":{"kind":"Name","value":"image_mask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMask"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExternalLinkMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_ExternalLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IconsList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icons_list"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show_icons"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExternalLinkMeta"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageGallery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image_gallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hashtag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"IconsList"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageGallery"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectHeroSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesHero_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceFullWidth"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectHeroSliceGoBack"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectContentBlockSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProjectSlicesContent_block_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectContentBlockSlicePrimary"}}]}}]}}]} as unknown as DocumentNode<GetCurrentProjectQuery, GetCurrentProjectQueryVariables>;