import type { PrismicHeadingTags, PrismicTypographTags, PrismicTextOnlyProps, PrismicTextWithLabel, PrismicTextWithSpanLabels } from '@/types/prismic';
import { asHTML, HTMLFunctionSerializer } from '@prismicio/helpers';
import parse from 'html-react-parser';

import classNames from 'classnames';

export interface TypographyProps {
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  align?: 'left' | 'center' | 'right' | 'justify' | 'start' | 'end';
  content: JSX.Element | string;
}

interface CustomPrismicRichTextProps {
  type: PrismicTypographTags;
  text: string;
  span: [];
}

const Typography: React.FC<TypographyProps> = ({ className, tag = 'p', size = 'base', align, content }) => {
  if (typeof(content) !== 'string') {

    const prismicTypographOptions: PrismicTypographTags[] = ['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'paragraph', 'span'];
    const prismicTypographHeadingOnly = prismicTypographOptions.filter(value => (value !== 'paragraph') && (value !== 'span')) as PrismicHeadingTags[];

    const htmlSerializer: HTMLFunctionSerializer = (type, node, text, children, key) => {
      const getContentAlignment = (node as PrismicTextWithLabel).label;
      const typographyContainer = classNames({
        [`text-${size}`]: true,
        [`${className}`]: className,
        [`text-${align}`]: align && !getContentAlignment,
        [`${getContentAlignment}`]: getContentAlignment,
      });

      if ((prismicTypographHeadingOnly.includes(type as PrismicHeadingTags)) && children) {
        const getHeadingTag = type.substring(parseInt('7'), parseInt('8'));
        const validateHeading = getHeadingTag.length > 0 && getHeadingTag >= '1' && getHeadingTag <= '6';
        const headingNumber = validateHeading ? getHeadingTag : 'h2';

        return `<h${headingNumber} className="${typographyContainer}">${children}</h${headingNumber}>`;
      }

      if (type === 'paragraph' && children) {
        return `<p className="${typographyContainer}">${children}</p>`;
      }

      if (type === 'span' && children) {
        return `<p className="${typographyContainer}">${children}</p>`;
      }

      if (type === 'label' && children) {
        return `<span className="${`${(node as PrismicTextWithSpanLabels).data.label}`}">${[children].join('')}</span>`;
      }

      return null;
    };

    const getPrismicRichText: CustomPrismicRichTextProps[] = content.props.field;

    if (getPrismicRichText && getPrismicRichText.some(value => prismicTypographOptions.includes(value.type))) {
      const checkContentValue: any = getPrismicRichText.filter(value => value.text);
      const formatRichText = asHTML(checkContentValue, null, htmlSerializer);

      return (
        <>
          {
            checkContentValue && checkContentValue.length > 0 && formatRichText && <>
              {parse(formatRichText)}
            </>
          }
        </>
      );
    };

    return null;
  };

  const typographyStringContainer = classNames({
    [`text-${size}`]: true,
    [`${className}`]: className,
    [`text-${align}`]: align,
  });

  const TypographyTag = tag as keyof JSX.IntrinsicElements;

  return (
    <>
      {
        typeof(content) === 'string' && content && <>
          <TypographyTag className={typographyStringContainer}>
            {content}
          </TypographyTag>
        </>
      }
    </>
  );
};

export default Typography;
