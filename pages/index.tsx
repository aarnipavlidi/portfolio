import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

interface HomeProps {
};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <h1 className="sm:text-red-600">asdasd</h1>
      <h1 className="md:text-blue-600">asdasd</h1>
      <h1 className="lg:text-green-600">asdasd</h1>
      <h1 className="xl:text-yellow-600">asdasd</h1>
      <h1 className="2xl:text-purple-600">asdasd</h1>
    </>
  );
};

export default Home;
