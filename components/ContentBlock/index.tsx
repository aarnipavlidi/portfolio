import type { ContentBlockSliceSliceDefaultPrimary } from 'prismicio-types';
import type { IconsListFragment, ImageGalleryFragment } from '@/types/prismic/graphql/graphql';
import { PrismicRichText } from '@prismicio/react';
import classNames from 'classnames';

import Typography from '@/components/Typography';
import ImageGallery from '@/components/DesignGallery';
import Icons from '@/components/Icons';
import IconsList from '@/components/IconsList';

interface ContentBlockProps {
  variant: 'primary';
  title?: ContentBlockSliceSliceDefaultPrimary['title'];
  subtitle?: ContentBlockSliceSliceDefaultPrimary['subtitle'];
  content?: ContentBlockSliceSliceDefaultPrimary['content'];
  hashtag: IconsListFragment | null;
  stack: IconsListFragment | null;
  images: ImageGalleryFragment | null;
};

const ContentBlock: React.FC<ContentBlockProps> = (props) => {

  const validateContentBlockTitle = props.title && props.title
    .map(value => value.text.length !== 0)
    .some(value => value !== false);

  const validateContentBlockSubtitle = props.subtitle && props.subtitle
    .map(value => value.type === 'paragraph' && value.text.length !== 0)
    .some(value => value !== false);

  const upperBlockContainer = classNames({
    'flex gap-4 flex-col-reverse lg:flex-row': true,
    'justify-between': validateContentBlockTitle || validateContentBlockSubtitle,
    'justify-end': !validateContentBlockTitle && !validateContentBlockSubtitle,
  });

  const upperBlockTitle = classNames({
    'font-pier-sans uppercase': true,
    'pt-2': validateContentBlockSubtitle,
  });

  const contentImageMainContainer = classNames({
    'flex flex-col gap-y-8 min-[1280px]:flex-row': props.images && props.images.gallery && props.images.gallery?.length > 0,
  });

  const contentBlockContainer = classNames({
    'pt-8 flex flex-col max-w-prose': true,
    'space-y-7': props.content && props.content.length > 0,
  });

  return (
    <>
      <article className="text-neutral-900 py-8">
        {
          props.variant === 'primary' && <div className="flex flex-col">
            <div className={upperBlockContainer}>
              {
                (validateContentBlockTitle || validateContentBlockSubtitle) && <div className="flex gap-4">
                  <Icons
                    name="SquareMetric"
                    color="current"
                    className="w-6 self-start"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col max-w-prose">
                      {
                        validateContentBlockSubtitle && <Typography
                          content={<PrismicRichText field={props.subtitle} />}
                          tag="p"
                          size="base"
                          className="font-pier-sans lowercase 2xl:text-lg"
                        />
                      }
                      {
                        validateContentBlockTitle && <Typography
                          content={<PrismicRichText field={props.title} />}
                          tag="h3"
                          size="4xl"
                          className={`${upperBlockTitle} 2xl:text-5xl`}
                        />
                      }
                    </div>
                    {
                      props.hashtag && props.hashtag.collection && <IconsList
                        showIcons={props.hashtag.show_icons || undefined}
                        collection={props.hashtag.collection}
                        wrapperClass='flex max-w-prose flex-wrap gap-2'
                        className="border-2 border-neutral-500 lowercase rounded-2xl px-4 py-2 font-pier-sans 2xl:text-sm"
                      />
                    }
                  </div>
                </div>
              }
              {
                props.stack && props.stack.collection && <IconsList
                  showIcons={props.stack.show_icons || undefined}
                  collection={props.stack.collection}
                  wrapperClass="flex flex-wrap gap-2 justify-end lg:w-60 xl:w-80 xl:self-center"
                  className="bg-neutral-900 rounded-2xl px-4 py-2 font-pier-sans text-neutral-100"
                  iconNameSize="base"
                />
              }
            </div>
            {
              props.content && <div className={contentImageMainContainer}>
                {
                  props.content && <div className={contentBlockContainer}>
                    <Typography
                      content={<PrismicRichText field={props.content}/> }
                      tag="p"
                      size="xl"
                      className="font-pier-sans 2xl:text-2xl"
                    />
                  </div>
                }
                {
                  props.images && props.images.gallery && props.images.gallery?.length > 0 && <div className="shrink grow pt-8">
                    <div className="flex flex-wrap gap-6 justify-evenly lg:justify-center min-[1280px]:justify-end">
                      <ImageGallery
                        gallery={props.images.gallery}
                      />
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        }
      </article>
    </>
  );
};

export default ContentBlock;
