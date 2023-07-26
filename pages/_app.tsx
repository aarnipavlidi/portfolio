import type { AppProps } from 'next/app';
import Link from 'next/link';

import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import { prismicRepositoryName } from '@/utils/prismic';

import Layout from '@/components/Layout';

import '../styles/globals.css';
import localFont from 'next/font/local';
import { Caveat } from 'next/font/google';

interface CustomAppProps extends AppProps {
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
  style: 'normal',
  variable: '--font-secondary',
});

const App = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={prismicRepositoryName}>
        <Layout fontVariable={`${fontPierSans.variable} ${caveatFont.variable}`}>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
};

export default App;
