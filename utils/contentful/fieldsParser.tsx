import { ContentfulBlockProps } from '@/types/propsContentful';
import { fieldsParser } from 'contentful-parsers';
import { Entry } from 'contentful';

export const contentfulFieldsParser = (content: ContentfulBlockProps | Entry<any>) => {
  return {
    ...fieldsParser({ ...content }),
  };
};
