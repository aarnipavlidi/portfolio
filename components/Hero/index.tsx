import type { ImageMaskFragment, ButtonFragment } from '@/types/prismic/graphql/graphql';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import Typography from '@/components/Typography';
import Design from '@/components/Design';
import Button from '@/components/Button';

interface HeroProps {
  title: JSX.Element | string;
  subtitle?: JSX.Element | string;
  image?: PrismicEditorFieldProps['image'];
  showMask?: boolean | null;
  mask?: ImageMaskFragment | null;
  button?: ButtonFragment | null;
  buttonLabel?: string | null;
  buttonHref?: string;
}

const Hero: React.FC<HeroProps> = (props) => {

  return (
    <section className="text-neutral-900 py-4">
      <div className="flex flex-col-reverse justify-between md:flex-row">
        <div className="max-w-prose flex flex-col pt-8 md:pt-0 md:pr-4">
          {
            props.title && <Typography
              content={props.title}
              tag="h1"
              size="3xl"
              className="font-pier-sans mb-2 2xl:text-5xl"
            />
          }
          {
            props.subtitle && <Typography
              content={props.subtitle}
              tag="p"
              size="lg"
              className="font-pier-sans 2xl:text-2xl"
            />
          }
          {
            props.button && props.buttonLabel && <Button
              content={props.buttonLabel}
              icon='bars-3'
              variant={props.button.variant}
              size={props.button.size}
              fullWidth={props.button.full_width}
              href={props.buttonHref}
            />
          }
        </div>
        {
          props.image && <div className="relative flex grow justify-center shrink-0">
            <Design
              content={props.image}
              mask={props.mask}
              showMask={props.showMask}
              className="rounded-3xl"
            />
          </div>
        }
      </div>
    </section>
  );
};

export default Hero;
