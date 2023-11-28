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
    "\n  fragment LinkDocumentMeta on _Document {\n    __typename\n    _meta {\n      id\n      uid\n      type\n      tags\n      lang\n      firstPublicationDate\n      lastPublicationDate\n    }\n  }\n": types.LinkDocumentMetaFragmentDoc,
    "\n  fragment ExternalLinkMeta on _ExternalLink {\n    __typename\n    _linkType\n    url\n    target\n  }\n": types.ExternalLinkMetaFragmentDoc,
    "\n  fragment HeroSlicePrimary on Landing_pageSlicesHero_sliceDefault {\n    primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      button {\n        __typename\n        ...Button\n      }\n      label\n      href {\n        _linkType\n        __typename\n        ...LinkDocumentMeta\n      }\n    }\n  }\n": types.HeroSlicePrimaryFragmentDoc,
    "\n   fragment HeroSliceFullWidth on Landing_pageSlicesHero_sliceFullwidth {\n    fullWidth: primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n    }\n   }\n": types.HeroSliceFullWidthFragmentDoc,
    "\n  fragment HeroSliceField on Landing_pageSlicesHero_slice {\n    type\n    label\n    variation {\n      __typename\n      ...HeroSlicePrimary\n      ...HeroSliceFullWidth\n    }\n  }\n": types.HeroSliceFieldFragmentDoc,
    "\n  fragment CardSlicePrimary on Landing_pageSlicesCard_sliceDefault {\n    primary {\n      title\n      subtitle\n    }\n    items {\n      card_image\n      name\n      collection {\n        __typename\n        ...IconsList\n      }\n      description\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      button {\n        __typename\n        ...Button\n      }\n      label\n      href {\n        _linkType\n        __typename\n        ...LinkDocumentMeta\n      }\n    }\n  }\n": types.CardSlicePrimaryFragmentDoc,
    "\n  fragment CardSliceField on Landing_pageSlicesCard_slice {\n    type\n    label\n    variation {\n      __typename\n      ...CardSlicePrimary\n    }\n  }\n": types.CardSliceFieldFragmentDoc,
    "\n  fragment ContentBlockSlicePrimary on Landing_pageSlicesContent_block_sliceDefault {\n    primary {\n      title\n      subtitle\n      hashtag {\n        __typename\n        ...IconsList\n      }\n      stack {\n        __typename\n        ...IconsList\n      }\n      content\n      images {\n        __typename\n        ...ImageGallery\n      }\n    }\n   }\n": types.ContentBlockSlicePrimaryFragmentDoc,
    "\n   fragment ContentBlockSliceTextOnly on Landing_pageSlicesContent_block_sliceTextonly {\n    textOnly: primary {\n      content\n    }\n   }\n": types.ContentBlockSliceTextOnlyFragmentDoc,
    "\n  fragment ContentBlockSliceField on Landing_pageSlicesContent_block_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ContentBlockSlicePrimary\n      ...ContentBlockSliceTextOnly\n    }\n  }\n": types.ContentBlockSliceFieldFragmentDoc,
    "\n  fragment ProjectHeroSlicePrimary on ProjectSlicesHero_sliceDefault {\n    primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      button {\n        __typename\n        ...Button\n      }\n      label\n      href {\n        _linkType\n        __typename\n        ...LinkDocumentMeta\n      }\n    }\n  }\n": types.ProjectHeroSlicePrimaryFragmentDoc,
    "\n  fragment ProjectHeroSliceFullWidth on ProjectSlicesHero_sliceFullwidth {\n    fullWidth: primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n    }\n   }\n": types.ProjectHeroSliceFullWidthFragmentDoc,
    "\n   fragment ProjectHeroSliceGoBack on ProjectSlicesHero_sliceGoback {\n    goBack: primary {\n      title\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n    }\n   }\n": types.ProjectHeroSliceGoBackFragmentDoc,
    "\n  fragment ProjectHeroSliceField on ProjectSlicesHero_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ProjectHeroSlicePrimary\n      ...ProjectHeroSliceFullWidth\n      ...ProjectHeroSliceGoBack\n    }\n  }\n": types.ProjectHeroSliceFieldFragmentDoc,
    "\n  fragment ProjectContentBlockSlicePrimary on ProjectSlicesContent_block_sliceDefault {\n    primary {\n      title\n      subtitle\n      hashtag {\n        __typename\n        ...IconsList\n      }\n      stack {\n        __typename\n        ...IconsList\n      }\n      content\n      images {\n        __typename\n        ...ImageGallery\n      }\n    }\n   }\n": types.ProjectContentBlockSlicePrimaryFragmentDoc,
    "\n   fragment ProjectContentBlockSliceTextOnly on ProjectSlicesContent_block_sliceTextonly {\n    textOnly: primary {\n      content\n    }\n   }\n": types.ProjectContentBlockSliceTextOnlyFragmentDoc,
    "\n  fragment ProjectContentBlockSliceField on ProjectSlicesContent_block_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ProjectContentBlockSlicePrimary\n      ...ProjectContentBlockSliceTextOnly\n    }\n  }\n": types.ProjectContentBlockSliceFieldFragmentDoc,
    "\n  fragment ProjectStatsBlockSlicePrimary on ProjectSlicesStats_block_sliceDefault {\n    items {\n      name\n      href {\n        __typename\n        ...ExternalLinkMeta\n      }\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      value\n    }\n  }\n": types.ProjectStatsBlockSlicePrimaryFragmentDoc,
    "\n  fragment ProjectStatsBlockSliceField on ProjectSlicesStats_block_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ProjectStatsBlockSlicePrimary\n    }\n  }\n": types.ProjectStatsBlockSliceFieldFragmentDoc,
    "\n  fragment ImageGallery on Image_gallery {\n    _meta {\n      uid\n    }\n    gallery {\n      image\n    }\n  }\n": types.ImageGalleryFragmentDoc,
    "\n  fragment ImageMask on Image_mask {\n    _meta {\n      uid\n    }\n    variant\n  }\n": types.ImageMaskFragmentDoc,
    "\n  fragment Button on Button {\n    _meta {\n      uid\n    }\n    variant\n    size\n    full_width\n  }\n": types.ButtonFragmentDoc,
    "\n  fragment HeroIcon on Heroicon {\n    _meta {\n      uid\n    }\n    variant\n    name\n  }\n": types.HeroIconFragmentDoc,
    "\n  fragment IconsList on Icons_list {\n    _meta {\n      uid\n    }\n    show_icons\n    collection {\n      name\n      icon\n      href {\n        ...ExternalLinkMeta\n      }\n    }\n  }\n": types.IconsListFragmentDoc,
    "\n  query getCurrentNavigation {\n    allNavigations {\n      edges {\n        node {\n          position\n          navigation_title\n          navigation_links {\n            link_name\n            link_href {\n              _linkType\n              __typename\n              ...LinkDocumentMeta\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetCurrentNavigationDocument,
    "\n  query getCurrentFooter {\n    allFooters {\n      edges {\n        node {\n          slogan\n          slogan_keys {\n            word\n          }\n          social_icons {\n            __typename\n            ...IconsList\n          }\n        }\n      }\n    }\n  }\n": types.GetCurrentFooterDocument,
    "\n  query getAllLandingPagesMeta($getByID: [String!]) {\n    allLanding_pages(id_in: $getByID) {\n      edges {\n        node {\n          _linkType\n          _meta {\n            id\n            uid\n            type\n            tags\n            lang\n            firstPublicationDate\n            lastPublicationDate\n          }\n        }\n      }\n    }\n  }\n": types.GetAllLandingPagesMetaDocument,
    "\n  query getAllProjectsMeta($getByID: [String!]) {\n    allProjects(id_in: $getByID) {\n      edges {\n        node {\n          _linkType\n          _meta {\n            id\n            uid\n            type\n            tags\n            lang\n            firstPublicationDate\n            lastPublicationDate\n          }\n        }\n      }\n    }\n  }\n": types.GetAllProjectsMetaDocument,
    "\n  query getCurrentLandingPage($slug: String!, $defaultLocale: String!) {\n    landing_page(uid: $slug, lang: $defaultLocale) {\n      slices {\n        ...HeroSliceField\n        ...CardSliceField\n        ...ContentBlockSliceField\n      }\n    }\n  }\n": types.GetCurrentLandingPageDocument,
    "\n  query getCurrentProject($slug: String!, $defaultLocale: String!) {\n    project(uid: $slug, lang: $defaultLocale) {\n      slices {\n        ...ProjectHeroSliceField\n        ...ProjectContentBlockSliceField\n        ...ProjectStatsBlockSliceField\n      }\n    }\n  }\n": types.GetCurrentProjectDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LinkDocumentMeta on _Document {\n    __typename\n    _meta {\n      id\n      uid\n      type\n      tags\n      lang\n      firstPublicationDate\n      lastPublicationDate\n    }\n  }\n"): (typeof documents)["\n  fragment LinkDocumentMeta on _Document {\n    __typename\n    _meta {\n      id\n      uid\n      type\n      tags\n      lang\n      firstPublicationDate\n      lastPublicationDate\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ExternalLinkMeta on _ExternalLink {\n    __typename\n    _linkType\n    url\n    target\n  }\n"): (typeof documents)["\n  fragment ExternalLinkMeta on _ExternalLink {\n    __typename\n    _linkType\n    url\n    target\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HeroSlicePrimary on Landing_pageSlicesHero_sliceDefault {\n    primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      button {\n        __typename\n        ...Button\n      }\n      label\n      href {\n        _linkType\n        __typename\n        ...LinkDocumentMeta\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment HeroSlicePrimary on Landing_pageSlicesHero_sliceDefault {\n    primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      button {\n        __typename\n        ...Button\n      }\n      label\n      href {\n        _linkType\n        __typename\n        ...LinkDocumentMeta\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   fragment HeroSliceFullWidth on Landing_pageSlicesHero_sliceFullwidth {\n    fullWidth: primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n    }\n   }\n"): (typeof documents)["\n   fragment HeroSliceFullWidth on Landing_pageSlicesHero_sliceFullwidth {\n    fullWidth: primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n    }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HeroSliceField on Landing_pageSlicesHero_slice {\n    type\n    label\n    variation {\n      __typename\n      ...HeroSlicePrimary\n      ...HeroSliceFullWidth\n    }\n  }\n"): (typeof documents)["\n  fragment HeroSliceField on Landing_pageSlicesHero_slice {\n    type\n    label\n    variation {\n      __typename\n      ...HeroSlicePrimary\n      ...HeroSliceFullWidth\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardSlicePrimary on Landing_pageSlicesCard_sliceDefault {\n    primary {\n      title\n      subtitle\n    }\n    items {\n      card_image\n      name\n      collection {\n        __typename\n        ...IconsList\n      }\n      description\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      button {\n        __typename\n        ...Button\n      }\n      label\n      href {\n        _linkType\n        __typename\n        ...LinkDocumentMeta\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment CardSlicePrimary on Landing_pageSlicesCard_sliceDefault {\n    primary {\n      title\n      subtitle\n    }\n    items {\n      card_image\n      name\n      collection {\n        __typename\n        ...IconsList\n      }\n      description\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      button {\n        __typename\n        ...Button\n      }\n      label\n      href {\n        _linkType\n        __typename\n        ...LinkDocumentMeta\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CardSliceField on Landing_pageSlicesCard_slice {\n    type\n    label\n    variation {\n      __typename\n      ...CardSlicePrimary\n    }\n  }\n"): (typeof documents)["\n  fragment CardSliceField on Landing_pageSlicesCard_slice {\n    type\n    label\n    variation {\n      __typename\n      ...CardSlicePrimary\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContentBlockSlicePrimary on Landing_pageSlicesContent_block_sliceDefault {\n    primary {\n      title\n      subtitle\n      hashtag {\n        __typename\n        ...IconsList\n      }\n      stack {\n        __typename\n        ...IconsList\n      }\n      content\n      images {\n        __typename\n        ...ImageGallery\n      }\n    }\n   }\n"): (typeof documents)["\n  fragment ContentBlockSlicePrimary on Landing_pageSlicesContent_block_sliceDefault {\n    primary {\n      title\n      subtitle\n      hashtag {\n        __typename\n        ...IconsList\n      }\n      stack {\n        __typename\n        ...IconsList\n      }\n      content\n      images {\n        __typename\n        ...ImageGallery\n      }\n    }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   fragment ContentBlockSliceTextOnly on Landing_pageSlicesContent_block_sliceTextonly {\n    textOnly: primary {\n      content\n    }\n   }\n"): (typeof documents)["\n   fragment ContentBlockSliceTextOnly on Landing_pageSlicesContent_block_sliceTextonly {\n    textOnly: primary {\n      content\n    }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ContentBlockSliceField on Landing_pageSlicesContent_block_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ContentBlockSlicePrimary\n      ...ContentBlockSliceTextOnly\n    }\n  }\n"): (typeof documents)["\n  fragment ContentBlockSliceField on Landing_pageSlicesContent_block_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ContentBlockSlicePrimary\n      ...ContentBlockSliceTextOnly\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectHeroSlicePrimary on ProjectSlicesHero_sliceDefault {\n    primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      button {\n        __typename\n        ...Button\n      }\n      label\n      href {\n        _linkType\n        __typename\n        ...LinkDocumentMeta\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ProjectHeroSlicePrimary on ProjectSlicesHero_sliceDefault {\n    primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      button {\n        __typename\n        ...Button\n      }\n      label\n      href {\n        _linkType\n        __typename\n        ...LinkDocumentMeta\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectHeroSliceFullWidth on ProjectSlicesHero_sliceFullwidth {\n    fullWidth: primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n    }\n   }\n"): (typeof documents)["\n  fragment ProjectHeroSliceFullWidth on ProjectSlicesHero_sliceFullwidth {\n    fullWidth: primary {\n      title\n      subtitle\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n    }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   fragment ProjectHeroSliceGoBack on ProjectSlicesHero_sliceGoback {\n    goBack: primary {\n      title\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n    }\n   }\n"): (typeof documents)["\n   fragment ProjectHeroSliceGoBack on ProjectSlicesHero_sliceGoback {\n    goBack: primary {\n      title\n      hero_image\n      image_mask {\n        __typename\n        ...ImageMask\n      }\n    }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectHeroSliceField on ProjectSlicesHero_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ProjectHeroSlicePrimary\n      ...ProjectHeroSliceFullWidth\n      ...ProjectHeroSliceGoBack\n    }\n  }\n"): (typeof documents)["\n  fragment ProjectHeroSliceField on ProjectSlicesHero_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ProjectHeroSlicePrimary\n      ...ProjectHeroSliceFullWidth\n      ...ProjectHeroSliceGoBack\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectContentBlockSlicePrimary on ProjectSlicesContent_block_sliceDefault {\n    primary {\n      title\n      subtitle\n      hashtag {\n        __typename\n        ...IconsList\n      }\n      stack {\n        __typename\n        ...IconsList\n      }\n      content\n      images {\n        __typename\n        ...ImageGallery\n      }\n    }\n   }\n"): (typeof documents)["\n  fragment ProjectContentBlockSlicePrimary on ProjectSlicesContent_block_sliceDefault {\n    primary {\n      title\n      subtitle\n      hashtag {\n        __typename\n        ...IconsList\n      }\n      stack {\n        __typename\n        ...IconsList\n      }\n      content\n      images {\n        __typename\n        ...ImageGallery\n      }\n    }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   fragment ProjectContentBlockSliceTextOnly on ProjectSlicesContent_block_sliceTextonly {\n    textOnly: primary {\n      content\n    }\n   }\n"): (typeof documents)["\n   fragment ProjectContentBlockSliceTextOnly on ProjectSlicesContent_block_sliceTextonly {\n    textOnly: primary {\n      content\n    }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectContentBlockSliceField on ProjectSlicesContent_block_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ProjectContentBlockSlicePrimary\n      ...ProjectContentBlockSliceTextOnly\n    }\n  }\n"): (typeof documents)["\n  fragment ProjectContentBlockSliceField on ProjectSlicesContent_block_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ProjectContentBlockSlicePrimary\n      ...ProjectContentBlockSliceTextOnly\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectStatsBlockSlicePrimary on ProjectSlicesStats_block_sliceDefault {\n    items {\n      name\n      href {\n        __typename\n        ...ExternalLinkMeta\n      }\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      value\n    }\n  }\n"): (typeof documents)["\n  fragment ProjectStatsBlockSlicePrimary on ProjectSlicesStats_block_sliceDefault {\n    items {\n      name\n      href {\n        __typename\n        ...ExternalLinkMeta\n      }\n      icon {\n        __typename\n        ...HeroIcon\n      }\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProjectStatsBlockSliceField on ProjectSlicesStats_block_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ProjectStatsBlockSlicePrimary\n    }\n  }\n"): (typeof documents)["\n  fragment ProjectStatsBlockSliceField on ProjectSlicesStats_block_slice {\n    type\n    label\n    variation {\n      __typename\n      ...ProjectStatsBlockSlicePrimary\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ImageGallery on Image_gallery {\n    _meta {\n      uid\n    }\n    gallery {\n      image\n    }\n  }\n"): (typeof documents)["\n  fragment ImageGallery on Image_gallery {\n    _meta {\n      uid\n    }\n    gallery {\n      image\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ImageMask on Image_mask {\n    _meta {\n      uid\n    }\n    variant\n  }\n"): (typeof documents)["\n  fragment ImageMask on Image_mask {\n    _meta {\n      uid\n    }\n    variant\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment Button on Button {\n    _meta {\n      uid\n    }\n    variant\n    size\n    full_width\n  }\n"): (typeof documents)["\n  fragment Button on Button {\n    _meta {\n      uid\n    }\n    variant\n    size\n    full_width\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment HeroIcon on Heroicon {\n    _meta {\n      uid\n    }\n    variant\n    name\n  }\n"): (typeof documents)["\n  fragment HeroIcon on Heroicon {\n    _meta {\n      uid\n    }\n    variant\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment IconsList on Icons_list {\n    _meta {\n      uid\n    }\n    show_icons\n    collection {\n      name\n      icon\n      href {\n        ...ExternalLinkMeta\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment IconsList on Icons_list {\n    _meta {\n      uid\n    }\n    show_icons\n    collection {\n      name\n      icon\n      href {\n        ...ExternalLinkMeta\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCurrentNavigation {\n    allNavigations {\n      edges {\n        node {\n          position\n          navigation_title\n          navigation_links {\n            link_name\n            link_href {\n              _linkType\n              __typename\n              ...LinkDocumentMeta\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentNavigation {\n    allNavigations {\n      edges {\n        node {\n          position\n          navigation_title\n          navigation_links {\n            link_name\n            link_href {\n              _linkType\n              __typename\n              ...LinkDocumentMeta\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCurrentFooter {\n    allFooters {\n      edges {\n        node {\n          slogan\n          slogan_keys {\n            word\n          }\n          social_icons {\n            __typename\n            ...IconsList\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentFooter {\n    allFooters {\n      edges {\n        node {\n          slogan\n          slogan_keys {\n            word\n          }\n          social_icons {\n            __typename\n            ...IconsList\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllLandingPagesMeta($getByID: [String!]) {\n    allLanding_pages(id_in: $getByID) {\n      edges {\n        node {\n          _linkType\n          _meta {\n            id\n            uid\n            type\n            tags\n            lang\n            firstPublicationDate\n            lastPublicationDate\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllLandingPagesMeta($getByID: [String!]) {\n    allLanding_pages(id_in: $getByID) {\n      edges {\n        node {\n          _linkType\n          _meta {\n            id\n            uid\n            type\n            tags\n            lang\n            firstPublicationDate\n            lastPublicationDate\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllProjectsMeta($getByID: [String!]) {\n    allProjects(id_in: $getByID) {\n      edges {\n        node {\n          _linkType\n          _meta {\n            id\n            uid\n            type\n            tags\n            lang\n            firstPublicationDate\n            lastPublicationDate\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllProjectsMeta($getByID: [String!]) {\n    allProjects(id_in: $getByID) {\n      edges {\n        node {\n          _linkType\n          _meta {\n            id\n            uid\n            type\n            tags\n            lang\n            firstPublicationDate\n            lastPublicationDate\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCurrentLandingPage($slug: String!, $defaultLocale: String!) {\n    landing_page(uid: $slug, lang: $defaultLocale) {\n      slices {\n        ...HeroSliceField\n        ...CardSliceField\n        ...ContentBlockSliceField\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentLandingPage($slug: String!, $defaultLocale: String!) {\n    landing_page(uid: $slug, lang: $defaultLocale) {\n      slices {\n        ...HeroSliceField\n        ...CardSliceField\n        ...ContentBlockSliceField\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCurrentProject($slug: String!, $defaultLocale: String!) {\n    project(uid: $slug, lang: $defaultLocale) {\n      slices {\n        ...ProjectHeroSliceField\n        ...ProjectContentBlockSliceField\n        ...ProjectStatsBlockSliceField\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCurrentProject($slug: String!, $defaultLocale: String!) {\n    project(uid: $slug, lang: $defaultLocale) {\n      slices {\n        ...ProjectHeroSliceField\n        ...ProjectContentBlockSliceField\n        ...ProjectStatsBlockSliceField\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;