interface HeroProps {
  children: JSX.Element;
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
      <div className="text-2xl m-6">
        {props.children}
      </div>
    </>
  );
};

export default Hero;
