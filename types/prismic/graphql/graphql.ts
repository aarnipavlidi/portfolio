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
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export type About_Landing_Page = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type About_Landing_PageConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<About_Landing_PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type About_Landing_PageConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: About_Landing_Page;
};

export type Contact_Landing_Page = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type Contact_Landing_PageConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Contact_Landing_PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Contact_Landing_PageConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Contact_Landing_Page;
};

export type Home_Landing_Page = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type Home_Landing_PageConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Home_Landing_PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Home_Landing_PageConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Home_Landing_Page;
};

export type Meta = {
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

export type Navigation = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  color: Maybe<_Linkable>;
  navigation_links: Maybe<Array<NavigationNavigation_Links>>;
  navigation_title: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type NavigationConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<NavigationConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type NavigationConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Navigation;
};

export type NavigationNavigation_Links = {
  link_href: Maybe<_Linkable>;
  link_name: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']>;
};

export type Projects_Landing_Page = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type Projects_Landing_PageConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Projects_Landing_PageConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Projects_Landing_PageConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Projects_Landing_Page;
};

export type Query = {
  _allDocuments: _DocumentConnection;
  about_landing_page: Maybe<About_Landing_Page>;
  allAbout_landing_pages: About_Landing_PageConnectionConnection;
  allContact_landing_pages: Contact_Landing_PageConnectionConnection;
  allHome_landing_pages: Home_Landing_PageConnectionConnection;
  allNavigations: NavigationConnectionConnection;
  allProjects_landing_pages: Projects_Landing_PageConnectionConnection;
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
  contact_landing_page: Maybe<Contact_Landing_Page>;
  home_landing_page: Maybe<Home_Landing_Page>;
  projects_landing_page: Maybe<Projects_Landing_Page>;
};


export type Query_AllDocumentsArgs = {
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


export type QueryAbout_Landing_PageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryAllAbout_Landing_PagesArgs = {
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
  sortBy: InputMaybe<SortAbout_Landing_Pagey>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllContact_Landing_PagesArgs = {
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
  sortBy: InputMaybe<SortContact_Landing_Pagey>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
};


export type QueryAllHome_Landing_PagesArgs = {
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
  sortBy: InputMaybe<SortHome_Landing_Pagey>;
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


export type QueryAllProjects_Landing_PagesArgs = {
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
  sortBy: InputMaybe<SortProjects_Landing_Pagey>;
  tags: InputMaybe<Array<Scalars['String']>>;
  tags_in: InputMaybe<Array<Scalars['String']>>;
  uid: InputMaybe<Scalars['String']>;
  uid_in: InputMaybe<Array<Scalars['String']>>;
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


export type QueryContact_Landing_PageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryHome_Landing_PageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};


export type QueryProjects_Landing_PageArgs = {
  lang: Scalars['String'];
  uid: Scalars['String'];
};

export type RelatedDocument = {
  /** The id of the document. */
  id: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
  /** The type of the document. */
  type: Scalars['String'];
  /** The uid of the document. */
  uid: Maybe<Scalars['String']>;
};

export enum SortAbout_Landing_Pagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortContact_Landing_Pagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortHome_Landing_Pagey {
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

export enum SortProjects_Landing_Pagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
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

export type Theme_50 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_50Light>>;
};

/** A connection to a list of items. */
export type Theme_50ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_50ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_50ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_50;
};

export type Theme_50Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_100 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_100Light>>;
};

/** A connection to a list of items. */
export type Theme_100ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_100ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_100ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_100;
};

export type Theme_100Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_200 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_200Light>>;
};

/** A connection to a list of items. */
export type Theme_200ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_200ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_200ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_200;
};

export type Theme_200Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_300 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_300Light>>;
};

/** A connection to a list of items. */
export type Theme_300ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_300ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_300ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_300;
};

export type Theme_300Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_400 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_400Light>>;
};

/** A connection to a list of items. */
export type Theme_400ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_400ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_400ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_400;
};

export type Theme_400Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_500 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_500Light>>;
};

/** A connection to a list of items. */
export type Theme_500ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_500ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_500ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_500;
};

export type Theme_500Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_600 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_600Light>>;
};

/** A connection to a list of items. */
export type Theme_600ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_600ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_600ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_600;
};

export type Theme_600Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_700 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_700Light>>;
};

/** A connection to a list of items. */
export type Theme_700ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_700ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_700ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_700;
};

export type Theme_700Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_800 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_800Light>>;
};

/** A connection to a list of items. */
export type Theme_800ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_800ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_800ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_800;
};

export type Theme_800Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Theme_900 = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
  light: Maybe<Array<Theme_900Light>>;
};

/** A connection to a list of items. */
export type Theme_900ConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<Theme_900ConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type Theme_900ConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Theme_900;
};

export type Theme_900Light = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type WhereNavigation = {
  /** color */
  color: InputMaybe<Scalars['String']>;
  navigation_links: InputMaybe<WhereNavigationNavigation_Links>;
  navigation_title: InputMaybe<Scalars['String']>;
  navigation_title_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereNavigationNavigation_Links = {
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

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<_DocumentEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: _Document;
};

/** An external link */
export type _ExternalLink = _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  target: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

/** A linked file */
export type _FileLink = _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
};

/** A linked image */
export type _ImageLink = _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Long'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** A prismic link */
export type _Linkable = {
  _linkType: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};

type LinkDocumentMeta_About_Landing_Page_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_About_Landing_Page_Fragment' };

type LinkDocumentMeta_Contact_Landing_Page_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Contact_Landing_Page_Fragment' };

type LinkDocumentMeta_Home_Landing_Page_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Home_Landing_Page_Fragment' };

type LinkDocumentMeta_Navigation_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Navigation_Fragment' };

type LinkDocumentMeta_Projects_Landing_Page_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Projects_Landing_Page_Fragment' };

type LinkDocumentMeta_Theme_50_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_50_Fragment' };

type LinkDocumentMeta_Theme_100_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_100_Fragment' };

type LinkDocumentMeta_Theme_200_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_200_Fragment' };

type LinkDocumentMeta_Theme_300_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_300_Fragment' };

type LinkDocumentMeta_Theme_400_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_400_Fragment' };

type LinkDocumentMeta_Theme_500_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_500_Fragment' };

type LinkDocumentMeta_Theme_600_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_600_Fragment' };

type LinkDocumentMeta_Theme_700_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_700_Fragment' };

type LinkDocumentMeta_Theme_800_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_800_Fragment' };

type LinkDocumentMeta_Theme_900_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Theme_900_Fragment' };

export type LinkDocumentMetaFragment = LinkDocumentMeta_About_Landing_Page_Fragment | LinkDocumentMeta_Contact_Landing_Page_Fragment | LinkDocumentMeta_Home_Landing_Page_Fragment | LinkDocumentMeta_Navigation_Fragment | LinkDocumentMeta_Projects_Landing_Page_Fragment | LinkDocumentMeta_Theme_50_Fragment | LinkDocumentMeta_Theme_100_Fragment | LinkDocumentMeta_Theme_200_Fragment | LinkDocumentMeta_Theme_300_Fragment | LinkDocumentMeta_Theme_400_Fragment | LinkDocumentMeta_Theme_500_Fragment | LinkDocumentMeta_Theme_600_Fragment | LinkDocumentMeta_Theme_700_Fragment | LinkDocumentMeta_Theme_800_Fragment | LinkDocumentMeta_Theme_900_Fragment;

export type Theme50FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme50FieldsFragment' };

export type Theme100FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme100FieldsFragment' };

export type Theme200FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme200FieldsFragment' };

export type Theme300FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme300FieldsFragment' };

export type Theme400FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme400FieldsFragment' };

export type Theme500FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme500FieldsFragment' };

export type Theme600FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme600FieldsFragment' };

export type Theme700FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme700FieldsFragment' };

export type Theme800FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme800FieldsFragment' };

export type Theme900FieldsFragment = { light: Array<{ name: string | null, code: string | null }> | null } & { ' $fragmentName'?: 'Theme900FieldsFragment' };

export type GetCurrentNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentNavigationQuery = { allNavigations: { edges: Array<{ node: { navigation_title: string | null, navigation_links: Array<{ link_name: string | null, link_href: (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_About_Landing_Page_Fragment': LinkDocumentMeta_About_Landing_Page_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Contact_Landing_Page_Fragment': LinkDocumentMeta_Contact_Landing_Page_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Home_Landing_Page_Fragment': LinkDocumentMeta_Home_Landing_Page_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Navigation_Fragment': LinkDocumentMeta_Navigation_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Projects_Landing_Page_Fragment': LinkDocumentMeta_Projects_Landing_Page_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_50_Fragment': LinkDocumentMeta_Theme_50_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_100_Fragment': LinkDocumentMeta_Theme_100_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_200_Fragment': LinkDocumentMeta_Theme_200_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_300_Fragment': LinkDocumentMeta_Theme_300_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_400_Fragment': LinkDocumentMeta_Theme_400_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_500_Fragment': LinkDocumentMeta_Theme_500_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_600_Fragment': LinkDocumentMeta_Theme_600_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_700_Fragment': LinkDocumentMeta_Theme_700_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_800_Fragment': LinkDocumentMeta_Theme_800_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Theme_900_Fragment': LinkDocumentMeta_Theme_900_Fragment } }
          ) | { _linkType: string | null } | { _linkType: string | null } | { _linkType: string | null } | null }> | null, color: { ' $fragmentRefs'?: { 'Theme50FieldsFragment': Theme50FieldsFragment } } | { ' $fragmentRefs'?: { 'Theme100FieldsFragment': Theme100FieldsFragment } } | { ' $fragmentRefs'?: { 'Theme200FieldsFragment': Theme200FieldsFragment } } | { ' $fragmentRefs'?: { 'Theme300FieldsFragment': Theme300FieldsFragment } } | { ' $fragmentRefs'?: { 'Theme400FieldsFragment': Theme400FieldsFragment } } | { ' $fragmentRefs'?: { 'Theme500FieldsFragment': Theme500FieldsFragment } } | { ' $fragmentRefs'?: { 'Theme600FieldsFragment': Theme600FieldsFragment } } | { ' $fragmentRefs'?: { 'Theme700FieldsFragment': Theme700FieldsFragment } } | { ' $fragmentRefs'?: { 'Theme800FieldsFragment': Theme800FieldsFragment } } | { ' $fragmentRefs'?: { 'Theme900FieldsFragment': Theme900FieldsFragment } } | {} | null } } | null> | null } };

export const LinkDocumentMetaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<LinkDocumentMetaFragment, unknown>;
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
export const GetCurrentNavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentNavigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNavigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigation_title"}},{"kind":"Field","name":{"kind":"Name","value":"navigation_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link_name"}},{"kind":"Field","name":{"kind":"Name","value":"link_href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"color"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme50Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme100Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme200Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme300Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme400Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme500Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme600Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme700Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme800Fields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Theme900Fields"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme50Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_50"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme100Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_100"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme200Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_200"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme300Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_300"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme400Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_400"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme500Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_500"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme600Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_600"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme700Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_700"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme800Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_800"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Theme900Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Theme_900"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"light"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]} as unknown as DocumentNode<GetCurrentNavigationQuery, GetCurrentNavigationQueryVariables>;