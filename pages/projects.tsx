import type { GetServerSideProps } from 'next';

interface ProjectsProps {
};

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="container">
      <div>This is Projects landing page!</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Projects;
