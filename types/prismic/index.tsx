// Slice Machine Types
import type { LandingPageDocument, ProjectDocument } from 'prismicio-types';

// Slices
import type {
  LandingPageSlicesCardSliceVariation,
  LandingPageSlicesContentBlockSliceVariation,
  ProjectSlicesContentBlockSliceVariation,
  LandingPageSlicesHeroSliceVariation,
  ProjectSlicesHeroSliceVariation,
  ProjectSlicesStatsBlockSliceVariation,
  LandingPageSlicesListBlockSliceVariation,
  ProjectSlicesListBlockSliceVariation,
} from '@/types/prismic/graphql/graphql';
// Navigation
import type { GetCurrentNavigationQuery, GetCurrentFooterQuery } from '@/types/prismic/graphql/graphql';
// Landing Pages
import { GetCurrentLandingPageQuery, GetCurrentLandingPageQueryVariables, LandingPageSlicesHeroSliceDefault } from '@/types/prismic/graphql/graphql';
// Project Pages
import { GetCurrentProjectQuery, GetCurrentProjectQueryVariables } from '@/types/prismic/graphql/graphql';
// Theme related
import type { ImageFieldImage, RTLabelNode, RTNode, RTHeading1Node, RTHeading2Node, RTHeading3Node, RTHeading4Node, RTHeading5Node, RTHeading6Node, RTParagraphNode } from '@prismicio/types';

export interface SliceVariationTypenamesProps {
  CardSlice: (LandingPageSlicesCardSliceVariation)['__typename']
  ContentBlockSlice: (LandingPageSlicesContentBlockSliceVariation | ProjectSlicesContentBlockSliceVariation)['__typename'];
  HeroSlice: (LandingPageSlicesHeroSliceVariation | ProjectSlicesHeroSliceVariation);
  ListBlockSlice: (LandingPageSlicesListBlockSliceVariation | ProjectSlicesListBlockSliceVariation)['__typename'];
  StatsBlockSlice: (ProjectSlicesStatsBlockSliceVariation)['__typename'];
}

export interface PrismicEditorFieldProps {
  image?: ImageFieldImage | null
}

export interface PrismicHeroSliceVariants {
  primary: LandingPageSlicesHeroSliceDefault['primary']
}

export type PrismicParagraphTags = 'paragraph' | 'span';
export type PrismicHeadingTags = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6' ;
export type PrismicTypographTags = PrismicHeadingTags | PrismicParagraphTags;

export type PrismicTextOnlyProps = Extract<RTNode, RTHeading1Node | RTHeading2Node | RTHeading3Node | RTHeading4Node | RTHeading5Node | RTHeading6Node | RTParagraphNode>;
export type PrismicTextWithLabel = PrismicTextOnlyProps & {
  label: string | null;
}

export type PrismicTextWithSpanLabels = RTLabelNode;

export type LayoutFetchProps = {
  navigation: GetCurrentNavigationQuery;
  footer: GetCurrentFooterQuery;
}

export type landingPageProps = {
  query: GetCurrentLandingPageQuery;
  variables: GetCurrentLandingPageQueryVariables;
}

export type projectPageProps = {
  query: GetCurrentProjectQuery;
  variables: GetCurrentProjectQueryVariables;
};

interface PrismicPayloadReleasesProps {
  id: string;
  ref: string;
  label: string;
  scheduledAt?: number;
  documents: string[];
}

// More information regarding payload can be found from
// following link: https://prismic.io/docs/webhooks
export interface PrismicPayloadProps {
  type: 'api-update';
  masterRef: string;
  releases: {
    [key in 'update' | 'deletion']: PrismicPayloadReleasesProps[];
  };
  masks: {};
  tags: {};
  experiments: {};
  documents: string[];
  domain: string;
  apiUrl: string;
  secret: null | string;
};

export type currentPageTypesForRevalidate = LandingPageDocument['type'] | ProjectDocument['type'];
export interface getAllPagesMetaProps {
  currentDocumentsID: string[] | null;
  filterDocuments: currentPageTypesForRevalidate[];
  latestReference?: string;
}
