import type { ImageMaskFragment, HeroIconFragment, ButtonFragment } from '@/types/prismic/graphql/graphql';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import type { HeroSliceSliceDefaultPrimary, HeroSliceSliceFullWidthPrimary } from 'prismicio-types';
import type { PrismicNextImageProps } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import classNames from 'classnames';

import Typography from '@/components/Typography';
import Design from '@/components/Design';
import Button from '@/components/Button';

interface HeroProps {
  variant: 'primary' | 'fullWidth'
  title?: HeroSliceSliceDefaultPrimary['title'] | HeroSliceSliceFullWidthPrimary['title'];
  subtitle?: HeroSliceSliceDefaultPrimary['subtitle'] | HeroSliceSliceFullWidthPrimary['subtitle'];
  image?: PrismicEditorFieldProps['image'];
  mask?: ImageMaskFragment | null;
  icon?: HeroIconFragment | null;
  button?: ButtonFragment | null;
  buttonLabel?: string | null;
  buttonHref?: string | null;
}

const Hero: React.FC<HeroProps> = (props) => {

  const fullWidthImageParams: PrismicNextImageProps['imgixParams'] = props.variant === 'fullWidth'
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
        props.image && <section className="text-neutral-900 py-4">
          <div className={heroPrimaryContainer}>
            {
              props.variant === 'primary' && validateHeroTitle && <div className="max-w-prose flex flex-col pt-8 md:pt-0 md:pr-4">
                {
                  validateHeroTitle && <Typography
                    content={<PrismicRichText field={props.title} />}
                    tag="h1"
                    size="4xl"
                    className="font-pier-sans mb-2 2xl:text-5xl"
                  />
                }
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
              </div>
            }
            <div className={heroImageContainer}>
              <div className='flex grayscale'>
                <Design
                  content={props.image}
                  mask={props.mask}
                  className={props.variant === 'primary' ? 'rounded-3xl' : ''}
                  params={fullWidthImageParams}
                />
              </div>
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
