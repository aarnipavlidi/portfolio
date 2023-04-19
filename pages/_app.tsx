import type { navigationProps } from 'graphql/queries';
import NextApp, { AppContext, AppProps } from 'next/app';
import Link from 'next/link';

import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { prismicRepositoryName } from '@/utils/prismic';

import Layout from '@/components/Layout';
import NavigationHeader from '@/components/Navigation';

import '../styles/globals.css';
import localFont from 'next/font/local';
import { Caveat } from 'next/font/google';

interface CustomAppProps extends AppProps {
  navigation: navigationProps['allNavigations'];
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

const caveatFont = Caveat({
  subsets: ['latin'],
  variable: '--font-secondary',
});

const App = ({ Component, pageProps, navigation }: CustomAppProps) => {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={prismicRepositoryName}>
        <Layout fontVariable={`${fontPierSans.variable} ${caveatFont.variable}`}>
          <NavigationHeader navigation={navigation} />
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
};

App.getInitialProps = async (context: AppContext, previewData: any) => {
  const appProps = await NextApp.getInitialProps(context);

  const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const getNavigationData = await fetch(`${baseUrl}/api/navigation`).then((res) => res.json()) as navigationProps[];

  return {
    ...appProps,
    navigation: getNavigationData[0] || {},
  };
};

export default App;
