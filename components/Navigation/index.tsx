/* eslint-disable no-underscore-dangle */
import type { ChosenColorProps } from '@/types/prismic';
import type { navigationProps } from 'graphql/queries';
import { Dispatch, SetStateAction } from 'react';
import { prismicLinkResolver, checkLinkProperties } from '@/utils/prismic';
import * as prismicH from '@prismicio/helpers';
import Link from 'next/link';

import classNames from 'classnames';
import Icons from '@/components/Icons';
import fallBackColors from '@/fallback/colors';

interface NavigationProps {
  navigation: navigationProps['allNavigations'];
  mobileMenuScreen: boolean;
  setMobileMenuScreen: Dispatch<SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ navigation, mobileMenuScreen, setMobileMenuScreen }) => {
  const getNavigationData = navigation.allNavigations.edges && navigation.allNavigations.edges[0] ? navigation.allNavigations.edges[0].node : null;

  const getFallBackLightColor = fallBackColors.component.navigation.element.svg.light.name;
  const getCurrentLightColor = ((getNavigationData?.color as ChosenColorProps).light?.slice(0, 1)[0].name) || getFallBackLightColor;

  const headerContainer = classNames({
    ['w-screen mx-auto px-4 md:container bg-inherit']: true,
    [`text-${getCurrentLightColor}`]: !mobileMenuScreen,
    [`bg-neutral-500 md:bg-inherit text-neutral-50 md:text-${getCurrentLightColor}`]: mobileMenuScreen,
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
          getNavigationData?.navigation_title && <>
            <div className="flex md:grow-0 flex-row py-4 items-center">
              <div className="flex grow md:grow-0 flex-row">
                <Icons
                  name="TerminalTag"
                  className='w-3 h-3 self-start'
                  color="current"
                />
                <div>
                  <h2 className="px-2 font-caveat font-normal text-3xl 2xl:text-4xl">{getNavigationData.navigation_title}</h2>
                </div>
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
            getNavigationData?.navigation_links && getNavigationData.navigation_links.length > 0 && getNavigationData.navigation_links.map((link, index) => {

              const getCurrentLinkData = checkLinkProperties(link.link_href) ? link.link_href : null;
              const formatLinkData = {
                _link_type: getCurrentLinkData?._linkType,
                ...getCurrentLinkData?._meta,
              };

              const getCurrentLinkHref = prismicH.asLink(formatLinkData as any, prismicLinkResolver);

              return (
                <div key={`${link.link_name}-${index}`} className="uppercase md:normal-case">
                  <Link href={getCurrentLinkHref || '/'} legacyBehavior={true}>
                    <a className='font-pier-sans font-normal text-lg 2xl:text-xl'>{link.link_name}</a>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
