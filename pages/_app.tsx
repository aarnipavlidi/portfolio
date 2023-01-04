import { INavigationFields } from '@/types/contentful/contentful';
import NextApp, { AppContext, AppProps } from 'next/app';
import { createClient } from 'contentful';

import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';

import '../styles/globals.css';
import localFont from '@next/font/local';

interface CustomAppProps extends AppProps {
  navigation: INavigationFields;
}

const fontPierSans = localFont({
  src: [
    {
      path: '../assets/fonts/PierSans/PPPierSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/PierSans/PPPierSans-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/PierSans/PPPierSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
});

const App = ({ Component, pageProps, navigation }: CustomAppProps) => {
  return (
    <Layout fontVariable={fontPierSans.variable}>
      <Navigation navigation={navigation} />
      <Component {...pageProps} />
    </Layout>
  );
};

App.getInitialProps = async (context: AppContext) => {
  const appProps = await NextApp.getInitialProps(context);

  // There is issue that when you go back to homepage, somehow
  // website crashes because it is not able to access env variables
  // this function :)
  const space = process.env.CONTENTFUL_SPACE_ID || '';
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || '';
  const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';

  const client = createClient({
    space,
    accessToken,
    environment,
  });

  const getNavigationData = await client.getEntries({
    content_type: 'navigation',
  });

  return {
    ...appProps,
    navigation: getNavigationData.items[0].fields as INavigationFields || {},
  };
};

export default App;
