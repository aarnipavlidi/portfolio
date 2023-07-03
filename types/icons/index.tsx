import type { Content } from '@prismicio/client';
import { SVGProps } from 'react';

type CustomIconNameType = 'GitHub' | 'HamburgerMenu' | 'OverlayBlock' | 'PrimaryFormation' | 'SquareDot' | 'StackingBlock' | 'TerminalTag';
type HeroIconNameType = 'bars-3' | 'x-mark';

export interface CustomIconsProps extends SVGProps<SVGSVGElement> {
  name: CustomIconNameType | HeroIconNameType | Content.HeroiconDocumentData['name'] | Content.IconsListDocumentDataCollectionItem['icon'];
  variant?: Content.HeroiconDocumentData['variant'];
  color: 'current' | 'inherit';
  className?: string;
  animation?: boolean;
};

export type CustomIconsArrayProps = {
  [key in CustomIconsProps['name']]: React.FC<CustomIconsProps>;
};
