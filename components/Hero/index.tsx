import type { ImageMaskFragment, HeroIconFragment, ButtonFragment } from '@/types/prismic/graphql/graphql';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import type { TitleField, RichTextField } from '@prismicio/types';
import type { PrismicNextImageProps } from '@prismicio/next';
import { useRouter } from 'next/router';
import { PrismicRichText } from '@prismicio/react';
import classNames from 'classnames';

import Typography from '@/components/Typography';
import Design from '@/components/Design';
import Button from '@/components/Button';
import Icons from '@/components/Icons';

interface HeroProps {
  variant: 'primary' | 'fullWidth' | 'goBack'
  title?: TitleField;
  subtitle?: RichTextField;
  image?: PrismicEditorFieldProps['image'];
  mask?: ImageMaskFragment | null;
  icon?: HeroIconFragment | null;
  button?: ButtonFragment | null;
  buttonLabel?: string | null;
  buttonHref?: string | null;
}

const Hero: React.FC<HeroProps> = (props) => {
  const router = useRouter();

  const fullWidthImageParams: PrismicNextImageProps['imgixParams'] = props.variant === 'fullWidth' || props.variant === 'goBack'
    ? { ar: '1600:500', fit: 'crop', crop: ['top'] }
    : undefined;

  const heroImageContainer = classNames({
    'relative flex grow justify-center': true,
    'shrink-0': props.variant === 'primary',
    'bg-neutral-500': props.variant === 'fullWidth',
  });

  const heroPrimaryContainer = classNames({
    'flex flex-col-reverse justify-between md:flex-row': props.variant === 'primary',
  });

  const heroContentWrapper = classNames({
    'flex': true,
    'max-w-prose flex-col pt-8 md:pt-0 md:pr-4': props.variant === 'primary',
    'flex-row items-center pb-8 gap-2 justify-end': props.variant === 'goBack',
  });

  const heroContentTitle = classNames({
    'font-pier-sans': true,
    'mb-2 2xl:text-5xl': props.variant === 'primary',
    'uppercase 2xl:text-2xl': props.variant === 'goBack',
  });

  const heroFullWidthContainer = classNames({
    'flex absolute items-center w-full h-full backdrop-blur-xs justify-center bg-neutral-900/75 dark:bg-neutral-950/75': true,
  });

  const heroFullWidthContentContainer = classNames({
    'font-pier-sans text-center px-4 py-2 text-neutral-100 dark:text-neutral-200': true,
  });

  const validateHeroTitle = props.title && props.title
    .map(value => value.text.length !== 0)
    .some(value => value !== false);

  const validateHeroSubtitle = props.subtitle && props.subtitle
    .map(value => value.type === 'paragraph' && value.text.length !== 0)
    .some(value => value !== false);

  return (
    <>
      {
        props.image && <section className="text-neutral-900 dark:text-neutral-200 py-4">
          <div className={heroPrimaryContainer}>
            {
              (props.variant === 'primary' || props.variant === 'goBack') && validateHeroTitle && <div className={heroContentWrapper}>
                {
                  validateHeroTitle && <Typography
                    content={<PrismicRichText field={props.title} />}
                    tag={props.variant === 'primary' ? 'h1' : 'h3'}
                    size={props.variant === 'primary' ? '4xl' : 'xl'}
                    className={heroContentTitle}
                  />
                }
                {
                  props.variant === 'goBack' && <Icons
                    name="arrow-small-right"
                    color="current"
                    className="w-8 cursor-pointer"
                    onClick={() => router.back()}
                  />
                }
                {
                  props.variant === 'primary' && <>
                    {
                      validateHeroSubtitle && <Typography
                        content={<PrismicRichText field={props.subtitle} />}
                        tag="p"
                        size="lg"
                        className="font-pier-sans 2xl:text-xl"
                      />
                    }
                    {
                      props.button && props.buttonLabel && <Button
                        className="mt-4"
                        content={props.buttonLabel}
                        icon={props.icon}
                        button={props.button}
                        href={props.buttonHref}
                      />
                    }
                  </>
                }
              </div>
            }
            <div className={heroImageContainer}>
              <Design
                content={props.image}
                mask={props.mask}
                wrapperClass='flex grayscale'
                className={props.variant === 'primary' ? 'rounded-3xl' : ''}
                params={fullWidthImageParams}
              />
              {
                props.variant === 'fullWidth' && validateHeroTitle && <div className={heroFullWidthContainer}>
                  <div className="flex flex-col gap-2">
                    {
                      validateHeroTitle && <Typography
                        content={<PrismicRichText field={props.title} />}
                        tag="h1"
                        size="xl"
                        className={`${heroFullWidthContentContainer} self-center uppercase bg-neutral-100/25 border-2 border-current 2xl:text-3xl dark:bg-neutral-200/25`}
                      />
                    }
                    {
                      validateHeroSubtitle && <Typography
                        content={<PrismicRichText field={props.subtitle} />}
                        tag="p"
                        size="base"
                        className={`${heroFullWidthContentContainer} lowercase hidden md:block 2xl:text-xl`}
                      />
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Hero;
