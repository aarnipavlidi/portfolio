/* eslint-disable camelcase */
import { IHomeLandingPage } from '@/types/contentful/contentful';
import { ContentfulBlockProps } from '@/types/propsContentful';
import { client } from 'utils/contentful/contentful';

import ComponentBlocks from '@/components/ComponentBlocks';

interface ContextProps {
  locale: 'fi' | 'en';
  resolvedUrl: string;
}

interface HomeProps {
  blocks: ContentfulBlockProps[];
  context: ContextProps;
}

const Home: React.FC<HomeProps> = ({ blocks = [] }) => {
  return (
    <>
      <ComponentBlocks
        blocks={blocks}
      />
    </>
  );
};

export default Home;

export const getServerSideProps = async (context: HomeProps['context']) => {

  const getCurrentSlug = context.resolvedUrl;
  const getCurrentLocale = context.locale;

  const getData = await client.getEntries({
    content_type: 'homeLandingPage',
    'fields.slug': getCurrentSlug,
    'locale': getCurrentLocale,
  });

  return {
    props: {
      ...getData.items[0]?.fields as IHomeLandingPage,
    },
  };
};
