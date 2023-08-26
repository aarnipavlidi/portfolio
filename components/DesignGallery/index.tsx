import type { PrismicEditorFieldProps } from '@/types/prismic';
import type { PrismicNextImageProps } from '@prismicio/next';
import { Fragment } from 'react';
import Design from '@/components/Design';

interface GalleryArrayProps {
  image: PrismicEditorFieldProps['image'];
}

interface DesignGalleryProps {
  variant?: 'mini-grid';
  gallery: GalleryArrayProps[];
  params?: PrismicNextImageProps['imgixParams'];
};

const DesignGallery: React.FC<DesignGalleryProps> = ({ variant = 'mini-grid', ...props }) => {

  return (
    <>
      {
        variant === 'mini-grid' && props.gallery && props.gallery.length > 0 && props.gallery.map((value, index) => {
          return (
            <Fragment key={`ImageGallery-${index}`}>
              <div className="flex basis-1/3 justify-center">
                <div className="w-64 flex relative">
                  <Design
                    content={value.image}
                    wrapperClass="w-full overflow-hidden rounded-lg grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
                    className="aspect-square w-full transition-transform duration-500 ease-in-out hover:scale-110"
                    params={props.params}
                  />
                  <div className="absolute bg-neutral-900 inset-2 -z-10 -right-2 -bottom-2 rounded-lg shadow-lg shadow-neutral-300" />
                </div>
              </div>
            </Fragment>
          );
        })
      }
    </>
  );

};

export default DesignGallery;
