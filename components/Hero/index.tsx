import { PrismicEditorFieldProps } from '@/types/prismic';
import Typography from '@/components/Typography';
import Design from '@/components/Design';

interface HeroProps {
  title: JSX.Element | string;
  subtitle: JSX.Element | string;
  image?: PrismicEditorFieldProps['image'];
}

const Hero: React.FC<HeroProps> = (props) => {

  return (
    <section className="text-neutral-900">
      <div className="flex">
        <div className="">
          <Typography
            content={props.title}
            tag="h1"
            size="3xl"
            className="font-pier-sans"
          />
          <Typography
            content={props.subtitle}
            tag="p"
            size="lg"
            className="font-pier-sans"
          />
        </div>
        {/* <Design
          content={props.image}
          // position='relative'
          // className="max-h-72 bg-pink-300"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
