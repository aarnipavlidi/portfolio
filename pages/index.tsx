import type { GetServerSideProps } from 'next';
interface HomeProps {
};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <div>Random value</div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
