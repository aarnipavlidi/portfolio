import type { GetNavigationQuery } from '@/types/hygraph/graphql';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

import classNames from 'classnames';
import Icons from '@/components/Icons';
import Typography from '@/components/Typography';

interface NavigationProps {
  navigation?: GetNavigationQuery['navigations'];
  mobileMenuScreen: boolean;
  setMobileMenuScreen: Dispatch<SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ navigation, mobileMenuScreen, setMobileMenuScreen }) => {
  const getNavigationData = navigation && navigation[0] ? navigation[0] : null;

  const headerContainer = classNames({
    ['w-screen mx-auto px-4 md:container bg-inherit']: true,
    'text-neutral-900 dark:text-neutral-200 pb-4': !mobileMenuScreen,
    'bg-neutral-600 md:bg-inherit text-neutral-50': mobileMenuScreen,
  });

  const navContainer = classNames({
    'flex flex-col md:flex-row md:justify-between': true,
    'h-screen md:h-auto': mobileMenuScreen,
  });

  const navLinksContainer = classNames({
    'bg-inherit py-4 items-center gap-8 md:flex md:flex-row': true,
    'hidden': !mobileMenuScreen,
    'flex flex-1 flex-col justify-center md:flex-initial': mobileMenuScreen,
  });

  return (
    <header className={headerContainer}>
      <nav className={navContainer}>
        {
          getNavigationData?.navigationTitle && <>
            <div className="flex md:grow-0 flex-row py-4 items-center">
              <div className="flex grow md:grow-0 flex-row">
                <Icons
                  name="TerminalTag"
                  className='w-3 h-3 self-start'
                  color="current"
                />
                <Typography
                  content={getNavigationData.navigationTitle}
                  tag="h2"
                  size="3xl"
                  className="px-2 font-caveat 2xl:text-4xl"
                />
                <Icons
                  name="StackingBlock"
                  className="w-4 h-2 self-end"
                  color="current"
                />
              </div>
              {
                getNavigationData && <>
                  <Icons
                    name="HamburgerMenu"
                    color="current"
                    className="h-7 md:hidden"
                    animation={mobileMenuScreen}
                    onClick={() => setMobileMenuScreen(current => !current)}
                  />
                </>
              }
            </div>
          </>
        }
        <div className={navLinksContainer}>
          {
            getNavigationData?.navigationLinks && getNavigationData.navigationLinks.map((link, index) => {
              const getCurrentLinkPath = link.destination === '/home'
                ? '/'
                : link.destination;

              return (
                <Link key={`${link.slug}-${index}`} legacyBehavior={true} href={getCurrentLinkPath}>
                  <a className='font-pier-sans uppercase font-normal text-lg md:normal-case 2xl:text-xl'>{link.title}</a>
                </Link>
              );
            })
          }
        </div>
        <Icons
          name="OverlayBlock"
          className={`h-6 mb-6 self-end ${!mobileMenuScreen ? 'hidden' : 'md:hidden'}`}
          color="current"
        />
      </nav>
    </header>
  );
};

export default Navigation;
