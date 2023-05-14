import type { GetCurrentNavigationQuery, GetHomeLandingPageQuery } from '@/types/prismic/graphql/graphql';
import { Theme50FieldsFragment, Theme100FieldsFragment, Theme200FieldsFragment, Theme300FieldsFragment, Theme400FieldsFragment, Theme500FieldsFragment, Theme600FieldsFragment, Theme700FieldsFragment, Theme800FieldsFragment, Theme900FieldsFragment } from './graphql/graphql';

type RouteTypes = 'home_landing_page' | 'projects_landing_page' | 'about_landing_page' | 'contact_landing_page';
type RouteIDS = 'home-landing-page' | 'projects-landing-page' | 'about-landing-page' | 'contact-landing-page';
type RoutePaths = '/' | '/projects' | '/about' | '/contact';

export interface PrismicRouteProps {
  type: RouteTypes;
  uid: RouteIDS;
  path: RoutePaths;
}

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

export type navigationProps = {
  'allNavigations': GetCurrentNavigationQuery;
}

export type landingPageProps = {
  'home': GetHomeLandingPageQuery;
}
