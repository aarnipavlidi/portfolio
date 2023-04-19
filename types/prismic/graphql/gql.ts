/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment LinkDocumentMeta on _Document {\n    _meta {\n      id\n      uid\n      type\n      tags\n      lang\n      firstPublicationDate\n      lastPublicationDate\n    }\n  }\n": types.LinkDocumentMetaFragmentDoc,
    "\n  fragment Theme50Fields on Theme_50 {\n    light {\n      name\n    }\n  }\n": types.Theme50FieldsFragmentDoc,
    "\n  fragment Theme100Fields on Theme_100 {\n    light {\n      name\n    }\n  }\n": types.Theme100FieldsFragmentDoc,
    "\n  fragment Theme200Fields on Theme_200 {\n    light {\n      name\n    }\n  }\n": types.Theme200FieldsFragmentDoc,
    "\n  fragment Theme300Fields on Theme_300 {\n    light {\n      name\n    }\n  }\n": types.Theme300FieldsFragmentDoc,
    "\n  fragment Theme400Fields on Theme_400 {\n    light {\n      name\n    }\n  }\n": types.Theme400FieldsFragmentDoc,
    "\n  fragment Theme500Fields on Theme_500 {\n    light {\n      name\n    }\n  }\n": types.Theme500FieldsFragmentDoc,
    "\n  fragment Theme600Fields on Theme_600 {\n    light {\n      name\n    }\n  }\n": types.Theme600FieldsFragmentDoc,
    "\n  fragment Theme700Fields on Theme_700 {\n    light {\n      name\n    }\n  }\n": types.Theme700FieldsFragmentDoc,
    "\n  fragment Theme800Fields on Theme_800 {\n    light {\n      name\n    }\n  }\n": types.Theme800FieldsFragmentDoc,
    "\n  fragment Theme900Fields on Theme_900 {\n    light {\n      name\n    }\n  }\n": types.Theme900FieldsFragmentDoc,
    "\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  query getCurrentNavigation {\n    allNavigations {\n      edges {\n        node {\n          navigation_title\n          navigation_links {\n            link_name\n            link_href {\n              _linkType\n              ...on _Document {\n                ...LinkDocumentMeta\n              }\n            }\n          }\n          color {\n            ...Theme50Fields\n            ...Theme100Fields\n            ...Theme200Fields\n            ...Theme300Fields\n            ...Theme400Fields\n            ...Theme500Fields\n            ...Theme600Fields\n            ...Theme700Fields\n            ...Theme800Fields\n            ...Theme900Fields\n          }\n        }\n      }\n    }\n  }\n": types.GetCurrentNavigationDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment LinkDocumentMeta on _Document {\n    _meta {\n      id\n      uid\n      type\n      tags\n      lang\n      firstPublicationDate\n      lastPublicationDate\n    }\n  }\n"): (typeof documents)["\n  fragment LinkDocumentMeta on _Document {\n    _meta {\n      id\n      uid\n      type\n      tags\n      lang\n      firstPublicationDate\n      lastPublicationDate\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme50Fields on Theme_50 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme50Fields on Theme_50 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme100Fields on Theme_100 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme100Fields on Theme_100 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme200Fields on Theme_200 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme200Fields on Theme_200 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme300Fields on Theme_300 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme300Fields on Theme_300 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme400Fields on Theme_400 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme400Fields on Theme_400 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme500Fields on Theme_500 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme500Fields on Theme_500 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme600Fields on Theme_600 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme600Fields on Theme_600 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme700Fields on Theme_700 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme700Fields on Theme_700 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme800Fields on Theme_800 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme800Fields on Theme_800 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment Theme900Fields on Theme_900 {\n    light {\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment Theme900Fields on Theme_900 {\n    light {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  query getCurrentNavigation {\n    allNavigations {\n      edges {\n        node {\n          navigation_title\n          navigation_links {\n            link_name\n            link_href {\n              _linkType\n              ...on _Document {\n                ...LinkDocumentMeta\n              }\n            }\n          }\n          color {\n            ...Theme50Fields\n            ...Theme100Fields\n            ...Theme200Fields\n            ...Theme300Fields\n            ...Theme400Fields\n            ...Theme500Fields\n            ...Theme600Fields\n            ...Theme700Fields\n            ...Theme800Fields\n            ...Theme900Fields\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  query getCurrentNavigation {\n    allNavigations {\n      edges {\n        node {\n          navigation_title\n          navigation_links {\n            link_name\n            link_href {\n              _linkType\n              ...on _Document {\n                ...LinkDocumentMeta\n              }\n            }\n          }\n          color {\n            ...Theme50Fields\n            ...Theme100Fields\n            ...Theme200Fields\n            ...Theme300Fields\n            ...Theme400Fields\n            ...Theme500Fields\n            ...Theme600Fields\n            ...Theme700Fields\n            ...Theme800Fields\n            ...Theme900Fields\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;