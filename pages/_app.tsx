import type { NavigationNavigationLinksCollection } from '@/types/contentful/graphql';
import type { navigationProps } from 'graphql/queries';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@/utils/apolloClient';
import NextApp, { AppContext, AppProps } from 'next/app';

import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';

import '../styles/globals.css';
import localFont from '@next/font/local';

interface CustomAppProps extends AppProps {
  navigation: NavigationNavigationLinksCollection;
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

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const getNavigationData = await fetch(`${baseUrl}/api/navigation`).then((res) => res.json()) as navigationProps[];

  return {
    ...appProps,
    navigation: getNavigationData[0].navigationCollection?.items[0]?.navigationLinksCollection || {},
  };
};

export default App;
