import Typography from '@/components/Typography';

interface HeroProps {
  title: JSX.Element | string;
  subtitle: JSX.Element | string;
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
      <div className="text-2xl m-6">
        <Typography content={props.title} />
        <Typography content={props.subtitle} />
      </div>
    </>
  );
};

export default Hero;
