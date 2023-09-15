import type { ImageMaskFragment } from '@/types/prismic/graphql/graphql';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import type { CSSProperties } from 'react';
import { useId } from 'react';
import { PrismicNextImage, PrismicNextImageProps } from '@prismicio/next';
import classNames from 'classnames';

import Masks from '@/components/Masks';

interface DesignPrismicProps {
  content: PrismicEditorFieldProps['image'];
  mask?: ImageMaskFragment | null;
  params?: PrismicNextImageProps['imgixParams'];
}

interface DesignProps extends DesignPrismicProps {
  variant?: 'prismic';
  position?: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
  wrapperClass?: string;
  className?: string;
}

const Design: React.FC<DesignProps> = ({ variant = 'prismic', ...props }) => {
  const wrapperContainer = classNames({
    [`${props.wrapperClass}`]: props.wrapperClass,
    [`${props.position}`]: props.position,
  });

  const imageContainer = classNames({
    [`${props.className}`]: props.className,
  });

  const generateRandomID = useId();
  const maskContainer: CSSProperties = {
    clipPath: `url(#${generateRandomID})`,
  };

  return (
    <>
      <picture className={wrapperContainer} style={props.mask ? maskContainer : undefined}>
        {
          variant === 'prismic' && props.content && props.content.url && <PrismicNextImage
            field={props.content}
            className={imageContainer}
            imgixParams={props.params}
            sizes="100vw"
          />
        }
        {
          props.mask && <Masks
            id={generateRandomID}
            uid={props.mask._meta.uid}
            variant={props.mask.variant}
          />
        }
      </picture>
    </>
  );
};

export default Design;
