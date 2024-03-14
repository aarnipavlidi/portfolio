import type { ContentBlockSliceSliceRichTextPrimary } from 'prismicio-types';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import type { ImageMaskFragment } from '@/types/prismic/graphql/graphql';
import { PrismicRichText } from '@prismicio/react';

import Blobs from '@/components/Blobs';
import Design from '@/components/Design';
import CustomDivide from '@/components/CustomDivide';
import Typography from '@/components/Typography';

export interface ContentBlockRichTextProps {
  variant: 'RichText';
  headerIcons: ContentBlockSliceSliceRichTextPrimary['header_icons'];
  headerTitle: ContentBlockSliceSliceRichTextPrimary['header_title'];
  content: ContentBlockSliceSliceRichTextPrimary['content'];
  image: PrismicEditorFieldProps['image'];
  imagePosition?: ContentBlockSliceSliceRichTextPrimary['image_position'] | null;
  imageMask: ImageMaskFragment | null;
}

const ContentBlockRichText: React.FC<ContentBlockRichTextProps> = (props) => {
  return (
    <>
      {
        props.content && <div className='flex flex-col gap-8'>
          <div className={`flex flex-col items-end ${props.image ? 'gap-4' : ''}`}>
            <div className='flex flex-col justify-center items-center relative self-stretch xl:hidden'>
              <Blobs
                className='w-[32rem] absolute opacity-10'
              />
              {
                props.image && props.imageMask && <Design
                  content={props.image}
                  mask={props.imageMask}
                  wrapperClass='flex grayscale max-w-96'
                  responsive
                />
              }
            </div>
            <CustomDivide
              variant={props.headerIcons || 'SquareDot'}
              w='4'
              gap='4'
            />
            {
              props.headerTitle && <div className={`flex max-w-prose self-stretch ${props.image ? 'lg:-mt-4' : 'mt-4 lg:mt-0'}`}>
                <Typography
                  content={<PrismicRichText field={props.headerTitle} />}
                  size="2xl"
                  className='font-pier-sans uppercase 2xl:text-3xl'
                />
              </div>
            }
          </div>
          <div className={`flex ${props.imagePosition ? 'xl:flex-row' : 'xl:flex-row-reverse'} xl:gap-8`}>
            <div className="max-w-prose space-y-7">
              <Typography
                content={<PrismicRichText field={props.content} />}
                size='base'
                className='font-pier-sans tracking-wider 2xl:text-xl'
              />
            </div>
            <div className='hidden xl:flex xl:flex-1 xl:justify-center xl:items-center'>
              <Blobs
                className='w-[38.25rem] absolute opacity-50'
              />
              {
                props.image && props.imageMask && <Design
                  content={props.image}
                  mask={props.imageMask}
                  wrapperClass='flex grayscale xl:max-w-lg'
                  responsive
                />
              }
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ContentBlockRichText;
