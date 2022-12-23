import { IHeadingFields } from '@/types/contentful/contentful';

const Heading: React.FC<IHeadingFields> = (props) => {

  console.log('Heading props:', props);

  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Heading;
