import { SVGProps } from 'react';

export interface CustomMasksProps extends SVGProps<SVGSVGElement> {
  id: string;
  uid: string | null;
  variant: string | null;
};

export type CustomMaskVariantType = 'avatar' | 'aarni';
