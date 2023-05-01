import type { GetServerSideProps } from 'next';

interface AboutProps {
};

const About: React.FC<AboutProps> = () => {
  return (
    <div className="container">
      <div>This is About landing page!</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default About;
