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

export type LandingPageSlices = LandingPageSlicesHeroSlice;

export type LandingPageSlicesHeroSlice = {
  __typename?: 'Landing_pageSlicesHero_slice';
  label: Maybe<Scalars['String']>;
  type: Maybe<Scalars['String']>;
  variation: Maybe<LandingPageSlicesHeroSliceVariation>;
};

export type LandingPageSlicesHeroSliceAvatar = {
  __typename?: 'Landing_pageSlicesHero_sliceAvatar';
  primary: Maybe<LandingPageSlicesHeroSliceAvatarPrimary>;
};

export type LandingPageSlicesHeroSliceAvatarPrimary = {
  __typename?: 'Landing_pageSlicesHero_sliceAvatarPrimary';
  title: Maybe<Scalars['Json']>;
};

export type LandingPageSlicesHeroSliceDefault = {
  __typename?: 'Landing_pageSlicesHero_sliceDefault';
  primary: Maybe<LandingPageSlicesHeroSliceDefaultPrimary>;
};

export type LandingPageSlicesHeroSliceDefaultPrimary = {
  __typename?: 'Landing_pageSlicesHero_sliceDefaultPrimary';
  hero_image: Maybe<Scalars['Json']>;
  subtitle: Maybe<Scalars['Json']>;
  title: Maybe<Scalars['Json']>;
};

export type LandingPageSlicesHeroSliceVariation = LandingPageSlicesHeroSliceAvatar | LandingPageSlicesHeroSliceDefault;

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
  testi_links: Maybe<Array<NavigationTestiLinks>>;
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

export type NavigationTestiLinks = {
  __typename?: 'NavigationTesti_links';
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

export type Query = {
  __typename?: 'Query';
  _allDocuments: DocumentConnection;
  allLanding_pages: LandingPageConnectionConnection;
  allNavigations: NavigationConnectionConnection;
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
  landing_page: Maybe<LandingPage>;
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


export type QueryLandingPageArgs = {
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

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
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

export type WhereNavigation = {
  /** color */
  color: InputMaybe<Scalars['String']>;
  navigation_links: InputMaybe<WhereNavigationNavigationLinks>;
  navigation_title: InputMaybe<Scalars['String']>;
  navigation_title_fulltext: InputMaybe<Scalars['String']>;
  position: InputMaybe<Scalars['Boolean']>;
  testi_links: InputMaybe<WhereNavigationTestiLinks>;
};

export type WhereNavigationNavigationLinks = {
  /** link_href */
  link_href: InputMaybe<Scalars['String']>;
  link_name: InputMaybe<Scalars['String']>;
  link_name_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereNavigationTestiLinks = {
  /** link_href */
  link_href: InputMaybe<Scalars['String']>;
  link_name: InputMaybe<Scalars['String']>;
  link_name_fulltext: InputMaybe<Scalars['String']>;
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

type LinkDocumentMetaLandingPageFragment = { __typename?: 'Landing_page', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaLandingPageFragment' };

type LinkDocumentMetaNavigationFragment = { __typename?: 'Navigation', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaNavigationFragment' };

type LinkDocumentMetaTheme_50Fragment = { __typename?: 'Theme_50', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_50Fragment' };

type LinkDocumentMetaTheme_100Fragment = { __typename?: 'Theme_100', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_100Fragment' };

type LinkDocumentMetaTheme_200Fragment = { __typename?: 'Theme_200', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_200Fragment' };

type LinkDocumentMetaTheme_300Fragment = { __typename?: 'Theme_300', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_300Fragment' };

type LinkDocumentMetaTheme_400Fragment = { __typename?: 'Theme_400', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_400Fragment' };

type LinkDocumentMetaTheme_500Fragment = { __typename?: 'Theme_500', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_500Fragment' };

type LinkDocumentMetaTheme_600Fragment = { __typename?: 'Theme_600', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_600Fragment' };

type LinkDocumentMetaTheme_700Fragment = { __typename?: 'Theme_700', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_700Fragment' };

type LinkDocumentMetaTheme_800Fragment = { __typename?: 'Theme_800', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_800Fragment' };

type LinkDocumentMetaTheme_900Fragment = { __typename?: 'Theme_900', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_900Fragment' };

type LinkDocumentMetaTheme_950Fragment = { __typename?: 'Theme_950', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMetaTheme_950Fragment' };

export type LinkDocumentMetaFragment = LinkDocumentMetaLandingPageFragment | LinkDocumentMetaNavigationFragment | LinkDocumentMetaTheme_50Fragment | LinkDocumentMetaTheme_100Fragment | LinkDocumentMetaTheme_200Fragment | LinkDocumentMetaTheme_300Fragment | LinkDocumentMetaTheme_400Fragment | LinkDocumentMetaTheme_500Fragment | LinkDocumentMetaTheme_600Fragment | LinkDocumentMetaTheme_700Fragment | LinkDocumentMetaTheme_800Fragment | LinkDocumentMetaTheme_900Fragment | LinkDocumentMetaTheme_950Fragment;

export type HeroSlicePrimaryFragment = { __typename?: 'Landing_pageSlicesHero_sliceDefault', primary: { __typename: 'Landing_pageSlicesHero_sliceDefaultPrimary', title: any | null, subtitle: any | null, hero_image: any | null } | null } & { ' $fragmentName'?: 'HeroSlicePrimaryFragment' };

export type HeroSliceAvatarFragment = { __typename?: 'Landing_pageSlicesHero_sliceAvatar', primary: { __typename: 'Landing_pageSlicesHero_sliceAvatarPrimary', title: any | null } | null } & { ' $fragmentName'?: 'HeroSliceAvatarFragment' };

export type HeroSliceFieldFragment = { __typename?: 'Landing_pageSlicesHero_slice', type: string | null, label: string | null, variation: (
    { __typename: 'Landing_pageSlicesHero_sliceAvatar' }
    & { ' $fragmentRefs'?: { 'HeroSliceAvatarFragment': HeroSliceAvatarFragment } }
  ) | (
    { __typename: 'Landing_pageSlicesHero_sliceDefault' }
    & { ' $fragmentRefs'?: { 'HeroSlicePrimaryFragment': HeroSlicePrimaryFragment } }
  ) | null } & { ' $fragmentName'?: 'HeroSliceFieldFragment' };

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

export type GetCurrentNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentNavigationQuery = { __typename?: 'Query', allNavigations: { __typename?: 'NavigationConnectionConnection', edges: Array<{ __typename?: 'NavigationConnectionEdge', node: { __typename?: 'Navigation', position: boolean | null, navigation_title: string | null, navigation_links: Array<{ __typename?: 'NavigationNavigation_links', link_name: string | null, link_href: (
            { __typename?: 'Landing_page', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaLandingPageFragment': LinkDocumentMetaLandingPageFragment } }
          ) | (
            { __typename?: 'Navigation', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaNavigationFragment': LinkDocumentMetaNavigationFragment } }
          ) | (
            { __typename?: 'Theme_50', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_50Fragment': LinkDocumentMetaTheme_50Fragment } }
          ) | (
            { __typename?: 'Theme_100', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_100Fragment': LinkDocumentMetaTheme_100Fragment } }
          ) | (
            { __typename?: 'Theme_200', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_200Fragment': LinkDocumentMetaTheme_200Fragment } }
          ) | (
            { __typename?: 'Theme_300', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_300Fragment': LinkDocumentMetaTheme_300Fragment } }
          ) | (
            { __typename?: 'Theme_400', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_400Fragment': LinkDocumentMetaTheme_400Fragment } }
          ) | (
            { __typename?: 'Theme_500', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_500Fragment': LinkDocumentMetaTheme_500Fragment } }
          ) | (
            { __typename?: 'Theme_600', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_600Fragment': LinkDocumentMetaTheme_600Fragment } }
          ) | (
            { __typename?: 'Theme_700', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_700Fragment': LinkDocumentMetaTheme_700Fragment } }
          ) | (
            { __typename?: 'Theme_800', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_800Fragment': LinkDocumentMetaTheme_800Fragment } }
          ) | (
            { __typename?: 'Theme_900', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_900Fragment': LinkDocumentMetaTheme_900Fragment } }
          ) | (
            { __typename?: 'Theme_950', _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMetaTheme_950Fragment': LinkDocumentMetaTheme_950Fragment } }
          ) | { __typename?: '_ExternalLink', _linkType: string | null } | { __typename?: '_FileLink', _linkType: string | null } | { __typename?: '_ImageLink', _linkType: string | null } | null }> | null, color: { __typename?: 'Landing_page' } | { __typename?: 'Navigation' } | (
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

export type GetAllLandingPagesMetaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLandingPagesMetaQuery = { __typename?: 'Query', allLanding_pages: { __typename?: 'Landing_pageConnectionConnection', edges: Array<{ __typename?: 'Landing_pageConnectionEdge', node: { __typename?: 'Landing_page', _meta: { __typename?: 'Meta', id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null, alternateLanguages: Array<{ __typename?: 'RelatedDocument', id: string, uid: string | null, type: string, lang: string }> } } } | null> | null } };

export type GetCurrentLandingPageQueryVariables = Exact<{
  slug: Scalars['String'];
  defaultLocale: Scalars['String'];
}>;


export type GetCurrentLandingPageQuery = { __typename?: 'Query', landing_page: { __typename?: 'Landing_page', slices: Array<(
      { __typename?: 'Landing_pageSlicesHero_slice' }
      & { ' $fragmentRefs'?: { 'HeroSliceFieldFragment': HeroSliceFieldFragment } }
    )> | null } | null };

export const LinkDocumentMetaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<LinkDocumentMetaFragment, unknown>;
export const HeroSlicePrimaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}}]}}]}}]} as unknown as DocumentNode<HeroSlicePrimaryFragment, unknown>;
export const HeroSliceAvatarFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceAvatar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceAvatar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<HeroSliceAvatarFragment, unknown>;
export const HeroSliceFieldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSliceAvatar"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceAvatar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceAvatar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<HeroSliceFieldFragment, unknown>;
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
export const GetCurrentNavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentNavigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNavigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"navigation_title"}},{"kind":"Field","name":{"kind":"Name","value":"navigation_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link_name"}},{"kind":"Field","name":{"kind":"Name","value":"link_href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme50Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme100Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme200Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme300Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme400Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme500Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme600Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme700Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme800Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme900Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme950Fields"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme50Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_50"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme100Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_100"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme200Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_200"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme300Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_300"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme400Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_400"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme500Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_500"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme600Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_600"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme700Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_700"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme800Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_800"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme900Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_900"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme950Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_950"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<GetCurrentNavigationQuery, GetCurrentNavigationQueryVariables>;
export const GetAllLandingPagesMetaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllLandingPagesMeta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allLanding_pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"alternateLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllLandingPagesMetaQuery, GetAllLandingPagesMetaQueryVariables>;
export const GetCurrentLandingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentLandingPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"landing_page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"lang"},"value":{"kind":"Variable","name":{"kind":"Name","value":"defaultLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSliceField"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSlicePrimary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceDefault"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hero_image"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceAvatar"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_sliceAvatar"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"primary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroSliceField"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Landing_pageSlicesHero_slice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"variation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSlicePrimary"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroSliceAvatar"}}]}}]}}]} as unknown as DocumentNode<GetCurrentLandingPageQuery, GetCurrentLandingPageQueryVariables>;