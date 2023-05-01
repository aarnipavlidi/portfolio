import type { GetServerSideProps } from 'next';

interface ContactProps {
};

const Contact: React.FC<ContactProps> = () => {
  return (
    <div className="container">
      <div>This is Contact landing page!</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Contact;
