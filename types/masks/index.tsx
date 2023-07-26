import type { Content } from '@prismicio/client';
import { SVGProps } from 'react';

export interface CustomMasksProps extends SVGProps<SVGSVGElement> {
  id: string;
  uid: string | null;
  variant: string | null;
};

export type CustomMaskVariantType = Content.ImageMaskDocumentData['variant'];
