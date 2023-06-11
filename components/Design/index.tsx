import type { ImageMaskFragment } from '@/types/prismic/graphql/graphql';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import type { CSSProperties } from 'react';
import { useId } from 'react';
import Image from 'next/image';
import { PrismicNextImage } from '@prismicio/next';
import classNames from 'classnames';

import Masks from '@/components/Masks';

interface DesignPrismicProps {
  content: PrismicEditorFieldProps['image'];
  mask?: ImageMaskFragment | null;
  showMask?: boolean | null;
}

interface DesignProps extends DesignPrismicProps {
  src?: string;
  alt?: string;
  variant?: 'prismic' | 'custom';
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
      <picture className={wrapperContainer} style={props.mask && props.showMask ? maskContainer : undefined}>
        {
          variant === 'prismic' && <PrismicNextImage
            field={props.content}
            className={imageContainer}
          />
        }
        {
          variant === 'custom' && (props.src && props.alt) && <Image
            src={props.src}
            alt={props.alt}
            className={imageContainer}
            fill
          />
        }
        {
          props.mask && props.showMask && <Masks
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
