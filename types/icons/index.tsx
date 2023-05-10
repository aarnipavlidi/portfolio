import { SVGProps } from 'react';

type CustomIconNameType = 'HamburgerMenu' | 'OverlayBlock' | 'StackingBlock' | 'TerminalTag';
type HeroIconNameType = 'bars-3' | 'x-mark';

export interface CustomIconsProps extends SVGProps<SVGSVGElement> {
  name: CustomIconNameType | HeroIconNameType;
  variant?: 'outline' | 'solid' | 'mini';
  color: 'current' | 'inherit';
  className?: string;
  animation?: boolean;
};

export type CustomIconsArrayProps = {
  [key in CustomIconsProps['name']]: React.FC<CustomIconsProps>;
};
