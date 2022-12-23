import { IHeadingFields } from '@/types/contentful/contentful';

export interface ContentfulBlockProps {
  metadata?: {
      tags: any[]
  },
  sys?: {
      space: Record<string, string>,
      contentType?: {
          sys?: {
              id:	string,
          },
      }
      locale: string,
  },
  fields?: Record<string, any>,
};

export type ComponentBlockNameType = 'Heading';

export type ComponentBlocksArrayProps = {
    [key in ComponentBlockNameType]: any;
};
