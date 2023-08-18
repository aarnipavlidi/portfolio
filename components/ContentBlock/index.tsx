import type { ContentBlockSliceSliceDefaultPrimary } from 'prismicio-types';
import { PrismicRichText } from '@prismicio/react';
import Typography from '@/components/Typography';

interface ContentBlockProps {
  variant: 'primary';
  title?: ContentBlockSliceSliceDefaultPrimary['title'];
  subtitle?: ContentBlockSliceSliceDefaultPrimary['subtitle']
};

const ContentBlock: React.FC<ContentBlockProps> = (props) => {

  const validateContentBlockTitle = props.title && props.title
    .map(value => value.text.length !== 0)
    .some(value => value !== false);

  const validateContentBlockSubtitle = props.subtitle && props.subtitle
    .map(value => value.type === 'paragraph' && value.text.length !== 0)
    .some(value => value !== false);

  return (
    <>
      {
        props.variant === 'primary' && <div>
          {
            validateContentBlockSubtitle && <Typography
              content={<PrismicRichText field={props.subtitle} />}
              tag="p"
              size="base"
              className="font-pier-sans"
            />
          }
          {
            validateContentBlockTitle && <Typography
              content={<PrismicRichText field={props.title} />}
              tag="h3"
              size="4xl"
              className="font-pier-sans"
            />
          }
        </div>
      }
    </>
  );
};

export default ContentBlock;
