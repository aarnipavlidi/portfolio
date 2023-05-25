import type { PrismicEditorFieldProps } from '@/types/prismic';
import Image from 'next/image';
import { PrismicNextImage } from '@prismicio/next';

interface DesignProps {
  // src: string;
  // alt: string;
  position?: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
  className?: string;
  content: PrismicEditorFieldProps['image']
}

const Design: React.FC<DesignProps> = (props) => {

  // eslint-disable-next-line no-magic-numbers
  const ar = `${2}:${1}`;
  // https://example.imgix.net/path/to/image.jpg?w=100&h=100&faceindex=1&crop=face


  // RESEARCHING
  // using "w" or "h" it seems like not working.
  // but using instead "width" or "height" works.

  return (
    <picture className={`${props.position} ${props.className}`}>
      {/* <Image
        src={props.src}
        alt={props.alt}
        fill
      /> */}
      <PrismicNextImage
        // field={(props.content as any)}
        field={(props.content as any)}
        // imgixParams={{ fit: 'crop', ar: '1:1', crop: ['faces'], mask: 'ellipse' }}
        imgixParams={{ fit: 'crop', crop: ['faces'], ar: '1:1' }}
        width={350}
      />
    </picture>
  );
};

export default Design;
