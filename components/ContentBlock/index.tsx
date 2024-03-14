import type { ContentBlockSliceSliceDefaultPrimary } from 'prismicio-types';
import type { ContentBlockRichTextProps } from '@/components/ContentBlock/variant/RichText';
import type { IconsListFragment, ImageGalleryFragment } from '@/types/prismic/graphql/graphql';
import { PrismicRichText } from '@prismicio/react';
import classNames from 'classnames';

import Typography from '@/components/Typography';
import ImageGallery from '@/components/DesignGallery';
import Icons from '@/components/Icons';
import IconsList from '@/components/IconsList';
import ContentBlockRichText from '@/components/ContentBlock/variant/RichText';

export interface ContentBlockProps {
  variant: 'primary';
  title?: ContentBlockSliceSliceDefaultPrimary['title'];
  subtitle?: ContentBlockSliceSliceDefaultPrimary['subtitle'];
  content?: ContentBlockSliceSliceDefaultPrimary['content'];
  hashtag?: IconsListFragment | null;
  stack?: IconsListFragment | null;
  images?: ImageGalleryFragment | null;
};

const ContentBlock: React.FC<ContentBlockProps | ContentBlockRichTextProps> = (props) => {

  const validateContentBlockTitle = props.variant === 'primary' && props.title && props.title
    .map(value => value.text.length !== 0)
    .some(value => value !== false);

  const validateContentBlockSubtitle = props.variant === 'primary' && props.subtitle && props.subtitle
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
    'flex flex-col gap-y-8 xl:flex-row': props.variant === 'primary' && props.images && props.images.gallery && props.images.gallery?.length > 0,
  });

  const contentBlockContainer = classNames({
    'pt-8 flex flex-col max-w-prose': true,
    'space-y-7': props.content && props.content.length > 0,
  });

  return (
    <>
      <article className={`text-neutral-900 dark:text-neutral-200 py-8 ${props.variant === 'RichText' ? 'relative overflow-hidden' : ''}`}>
        {
          props.variant === 'RichText' && <ContentBlockRichText {...props} />
        }
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
                          size="lg"
                          className="font-pier-sans lowercase 2xl:text-xl"
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
                        className="border-2 border-neutral-500 text-neutral-900 lowercase rounded-2xl px-4 py-2 font-pier-sans shadow shadow-neutral-500 dark:bg-neutral-950 dark:text-neutral-200 2xl:text-base"
                        iconNameSize='sm'
                      />
                    }
                  </div>
                </div>
              }
              {
                props.stack && props.stack.collection && <IconsList
                  showIcons={props.stack.show_icons || undefined}
                  collection={props.stack.collection}
                  wrapperClass="flex flex-wrap gap-2 justify-end lg:self-start lg:w-60 xl:w-80"
                  className="bg-neutral-900 text-neutral-100 font-pier-sans rounded-2xl px-4 py-2 dark:bg-neutral-200 dark:text-neutral-900 2xl:text-base"
                  iconNameSize="sm"
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
                      size="lg"
                      className="font-pier-sans 2xl:text-xl"
                    />
                  </div>
                }
                {
                  props.images && props.images.gallery && props.images.gallery?.length > 0 && <div className="shrink grow pt-8">
                    <div className="flex flex-wrap gap-6 justify-evenly lg:justify-center xl:justify-end">
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
