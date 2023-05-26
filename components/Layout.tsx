import type { LayoutFetchProps } from '@/types/prismic';
import useSWR, { Fetcher } from 'swr';
import { useState } from 'react';
import NavigationHeader from '@/components/Navigation';

interface LayoutProps {
  fontVariable?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [mobileMenuScreen, setMobileMenuScreen] = useState<boolean>(false);

  const fetchData: Fetcher<LayoutFetchProps[], string> = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      const getErrorResponse = await response.json();
      const error = new Error('There was an issue while fetching the data. Please try again later!');
      error.cause = getErrorResponse;

      throw error;
    }

    return response.json();
  };

  const { data, error } = useSWR('/api/navigation', fetchData);

  if (error) {
    // TODO ADD DESIGN FOR THIS OR POTENTIALLY
    // DO REDIRECT INTO 404 PAGE?
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  const getNavigationData = data && data[0].navigation;

  return (
    <div className={props.fontVariable}>
      <NavigationHeader
        navigation={getNavigationData}
        mobileMenuScreen={mobileMenuScreen}
        setMobileMenuScreen={setMobileMenuScreen}
      />
      <main className={mobileMenuScreen ? 'hidden' : 'w-screen mx-auto px-4 md:container'}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
