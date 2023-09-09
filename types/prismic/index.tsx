// Navigation
import type { GetCurrentNavigationQuery, GetCurrentFooterQuery } from '@/types/prismic/graphql/graphql';
// Landing Pages
import { GetAllLandingPagesMetaQuery, GetAllLandingPagesMetaQueryVariables, GetCurrentLandingPageQuery, GetCurrentLandingPageQueryVariables, LandingPageSlicesHeroSliceDefault } from '@/types/prismic/graphql/graphql';
// Project Pages
import { GetCurrentProjectQuery, GetCurrentProjectQueryVariables } from '@/types/prismic/graphql/graphql';
// Theme related
import { Theme50FieldsFragment, Theme100FieldsFragment, Theme200FieldsFragment, Theme300FieldsFragment, Theme400FieldsFragment, Theme500FieldsFragment, Theme600FieldsFragment, Theme700FieldsFragment, Theme800FieldsFragment, Theme900FieldsFragment } from './graphql/graphql';
import type { ImageFieldImage, RTLabelNode, RTNode, RTHeading1Node, RTHeading2Node, RTHeading3Node, RTHeading4Node, RTHeading5Node, RTHeading6Node, RTParagraphNode } from '@prismicio/types';

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

type ColorVariant = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
interface ColorVariantProps {
  name: 'neutral-50' | 'neutral-100' | 'neutral-200' | 'neutral-300' | 'neutral-400' | 'neutral-500' | 'neutral-600' | 'neutral-700' | 'neutral-800' | 'neutral-900' | 'neutral-950';
  code?: string;
}

type VariantProps = {
  [key in ColorVariant]: ColorVariantProps;
}

export interface DefaultColorProps {
  light: VariantProps;
}

interface DefaultFallbackColorProps {
  light: ColorVariantProps;
}

export type ChosenColorProps =
  | Theme50FieldsFragment
  | Theme100FieldsFragment
  | Theme200FieldsFragment
  | Theme300FieldsFragment
  | Theme400FieldsFragment
  | Theme500FieldsFragment
  | Theme600FieldsFragment
  | Theme700FieldsFragment
  | Theme800FieldsFragment
  | Theme900FieldsFragment;

type Elements = 'default';
type Components = 'navigation'

export interface FallBackColorProps {
  component: {
    [key in Components]: {
      element: {
        [key in Elements]: DefaultFallbackColorProps;
      }
    }
  };
}

export type LayoutFetchProps = {
  navigation: GetCurrentNavigationQuery;
  footer: GetCurrentFooterQuery;
}

export type allLandingPagesMetaProps = {
  query: GetAllLandingPagesMetaQuery;
  variables: GetAllLandingPagesMetaQueryVariables;
}

export type landingPageProps = {
  query: GetCurrentLandingPageQuery;
  variables: GetCurrentLandingPageQueryVariables;
}

export type projectPageProps = {
  query: GetCurrentProjectQuery;
  variables: GetCurrentProjectQueryVariables;
};
