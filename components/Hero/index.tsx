import type { ImageMaskFragment } from '@/types/prismic/graphql/graphql';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import Typography from '@/components/Typography';
import Design from '@/components/Design';

interface HeroProps {
  title: JSX.Element | string;
  subtitle?: JSX.Element | string;
  image?: PrismicEditorFieldProps['image'];
  mask?: ImageMaskFragment | null;
  showMask?: boolean | null;
}

const Hero: React.FC<HeroProps> = (props) => {

  return (
    <section className="text-neutral-900">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="mt-20">
          {
            props.title && <Typography
              content={props.title}
              tag="h1"
              size="3xl"
              className="font-pier-sans"
            />
          }
          {
            props.subtitle && <Typography
              content={props.subtitle}
              tag="p"
              size="lg"
              className="font-pier-sans"
            />
          }
        </div>
        {
          props.image && <Design
            content={props.image}
            mask={props.mask}
            showMask={props.showMask}
            position='relative'
            wrapperClass="self-center"
            className="rounded-3xl"
          />
        }
      </div>
    </section>
  );
};

export default Hero;
