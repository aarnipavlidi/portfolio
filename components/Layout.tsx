import type { navigationProps } from 'graphql/queries';
import { useState } from 'react';
import NavigationHeader from '@/components/Navigation';

interface LayoutProps {
  navigation: navigationProps['allNavigations'];
  fontVariable?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [mobileMenuScreen, setMobileMenuScreen] = useState<boolean>(false);

  return (
    <div className={props.fontVariable}>
      <NavigationHeader
        navigation={props.navigation}
        mobileMenuScreen={mobileMenuScreen}
        setMobileMenuScreen={setMobileMenuScreen}
      />
      <main className={mobileMenuScreen ? 'hidden' : 'container mx-auto px-4'}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
