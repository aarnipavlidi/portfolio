import { SVGProps } from 'react';

type CustomIconNameType = 'StackingBlock' | 'TerminalTag';
type HeroIconNameType = 'bars-3' | 'x-mark';

export interface CustomIconsProps extends SVGProps<SVGSVGElement> {
  name: CustomIconNameType | HeroIconNameType;
  variant?: 'outline' | 'solid' | 'mini';
  color: string;
  className?: string;
};

export type CustomIconsArrayProps = {
  [key in CustomIconsProps['name']]: React.FC<CustomIconsProps>;
};
