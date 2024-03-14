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
  responsive?: boolean;
}

const Design: React.FC<DesignProps> = ({ variant = 'prismic', responsive = false, ...props }) => {
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
      <div className={wrapperContainer}>
        <picture style={props.mask ? maskContainer : undefined}>
          {
            variant === 'prismic' && props.content && props.content.url && <PrismicNextImage
              field={props.content}
              className={imageContainer}
              imgixParams={props.params}
              sizes="100vw"
              style={
                responsive ? {
                  width: '100%',
                  height: 'auto',
                } : {}
              }
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
      </div>
    </>
  );
};

export default Design;
