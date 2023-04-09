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

export type Home = _Document & _Linkable & {
  _linkType: Maybe<Scalars['String']>;
  _meta: Meta;
};

/** A connection to a list of items. */
export type HomeConnectionConnection = {
  /** A list of edges. */
  edges: Maybe<Array<Maybe<HomeConnectionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type HomeConnectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Home;
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
  aarni: Maybe<_Linkable>;
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

export type Query = {
  _allDocuments: _DocumentConnection;
  allHomes: HomeConnectionConnection;
  allNavigations: NavigationConnectionConnection;
  home: Maybe<Home>;
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


export type QueryAllHomesArgs = {
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
  sortBy: InputMaybe<SortHomey>;
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


export type QueryHomeArgs = {
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

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortHomey {
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

export type WhereNavigation = {
  navigation_links: InputMaybe<WhereNavigationNavigation_Links>;
  navigation_title: InputMaybe<Scalars['String']>;
  navigation_title_fulltext: InputMaybe<Scalars['String']>;
};

export type WhereNavigationNavigation_Links = {
  /** aarni */
  aarni: InputMaybe<Scalars['String']>;
  /** link_href */
  link_href: InputMaybe<Scalars['String']>;
  link_name: InputMaybe<Scalars['String']>;
  link_name_fulltext: InputMaybe<Scalars['String']>;
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

type LinkDocumentMeta_Home_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Home_Fragment' };

type LinkDocumentMeta_Navigation_Fragment = { _meta: { id: string, uid: string | null, type: string, tags: Array<string>, lang: string, firstPublicationDate: any | null, lastPublicationDate: any | null } } & { ' $fragmentName'?: 'LinkDocumentMeta_Navigation_Fragment' };

export type LinkDocumentMetaFragment = LinkDocumentMeta_Home_Fragment | LinkDocumentMeta_Navigation_Fragment;

export type GetCurrentNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentNavigationQuery = { allNavigations: { edges: Array<{ node: { navigation_title: string | null, navigation_links: Array<{ link_name: string | null, link_href: (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Home_Fragment': LinkDocumentMeta_Home_Fragment } }
          ) | (
            { _linkType: string | null }
            & { ' $fragmentRefs'?: { 'LinkDocumentMeta_Navigation_Fragment': LinkDocumentMeta_Navigation_Fragment } }
          ) | { _linkType: string | null } | { _linkType: string | null } | { _linkType: string | null } | null }> | null } } | null> | null } };

export const LinkDocumentMetaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<LinkDocumentMetaFragment, unknown>;
export const GetCurrentNavigationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentNavigation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNavigations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"navigation_title"}},{"kind":"Field","name":{"kind":"Name","value":"navigation_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"link_name"}},{"kind":"Field","name":{"kind":"Name","value":"link_href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_linkType"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkDocumentMeta"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkDocumentMeta"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_Document"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"firstPublicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastPublicationDate"}}]}}]}}]} as unknown as DocumentNode<GetCurrentNavigationQuery, GetCurrentNavigationQueryVariables>;