import type { GetServerSideProps } from 'next';

interface RandomPageProps {
};

const RandomPage: React.FC<RandomPageProps> = () => {
  return (
    <div className="container">
      <div>Something here...</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default RandomPage;
