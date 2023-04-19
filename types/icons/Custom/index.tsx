import { SVGProps } from 'react';

export type CustomIconNameType = 'StackingBlock' | 'TerminalTag';

export interface CustomIconsProps extends SVGProps<SVGSVGElement> {
  name: CustomIconNameType;
  variant?: 'solid';
  color: string;
  className?: string;
};

export type CustomIconsArrayProps = {
  [key in CustomIconNameType]: React.FC<CustomIconsProps>;
};
