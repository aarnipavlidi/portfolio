import type { Content } from '@prismicio/client';
import type { IconsListDocumentDataCollectionItem } from 'prismicio-types';
import { SVGProps } from 'react';

export type CustomDivideIconNameType = 'SquareDot' | 'SquareTriangle';
type CustomIsometricIconNameType = 'SquareMetric';
type CustomIconNameType = 'FooterBlock' | 'HamburgerMenu' | 'OverlayBlock' | 'PrimaryFormation' | 'SquareOutline' | 'SquareOutlineDot' | 'StackingBlock' | 'TerminalTag';
type HeroIconNameType = 'bars-3' | 'x-mark';

export interface CustomIconsProps extends SVGProps<SVGSVGElement> {
  name: CustomDivideIconNameType | CustomIsometricIconNameType | CustomIconNameType | HeroIconNameType | Content.HeroiconDocumentData['name'] | IconsListDocumentDataCollectionItem['icon'];
  variant?: Content.HeroiconDocumentData['variant'];
  color: 'current' | 'inherit';
  className?: string;
  animation?: boolean;
};

export type CustomIconsArrayProps = {
  [key in CustomIconsProps['name']]: React.FC<CustomIconsProps>;
};
