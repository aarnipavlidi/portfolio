/* eslint-disable no-underscore-dangle */
import type { ChosenColorProps } from '@/types/prismic';
import type { navigationProps } from 'graphql/queries';
import { useState } from 'react';
import { prismicLinkResolver, checkLinkProperties } from '@/utils/prismic';
import * as prismicH from '@prismicio/helpers';
import Link from 'next/link';

import Icons from '@/components/Icons';
import fallBackColors from '@/fallback/colors';

interface NavigationProps {
  navigation: navigationProps['allNavigations'];
}

const Navigation: React.FC<NavigationProps> = ({ navigation }) => {
  const [barsIcon, setBarsIcon] = useState<boolean>(false);

  const getNavigationData = navigation.allNavigations.edges && navigation.allNavigations.edges[0] ? navigation.allNavigations.edges[0].node : null;
  const getChosenLightColor = (getNavigationData?.color as ChosenColorProps).light?.slice(0, 1)[0];
  const getFallBackLightColor = fallBackColors.component.navigation.element.svg.light.name;

  return (
    <header className="container mx-auto px-4">
      <nav className="flex flex-row justify-between">
        {
          getNavigationData && getNavigationData.navigation_title && <>
            <div className="flex flex-row py-4 items-center">
              <Icons
                name="TerminalTag"
                className='w-3 h-3 self-start'
                color={getChosenLightColor?.name || getFallBackLightColor}
              />
              <div className={`text-${getChosenLightColor?.name}`}>
                <h2 className="px-2 font-caveat font-normal text-3xl 2xl:text-4xl">{getNavigationData.navigation_title}</h2>
              </div>
              <Icons
                name="StackingBlock"
                className="w-4 h-2 self-end"
                color={getChosenLightColor?.name || getFallBackLightColor}
              />
            </div>
          </>
        }
        <div className="hidden md:flex flex-row py-4 items-center gap-8">
          {
            getNavigationData && getNavigationData.navigation_links && getNavigationData.navigation_links.length > 0 && getNavigationData.navigation_links.map((link, index) => {

              const getCurrentLinkData = checkLinkProperties(link.link_href) ? link.link_href : null;
              const formatLinkData = {
                _link_type: getCurrentLinkData?._linkType,
                ...getCurrentLinkData?._meta,
              };

              const getCurrentLinkHref = prismicH.asLink(formatLinkData as any, prismicLinkResolver);

              return (
                <div key={`${link.link_name}-${index}`}>
                  <Link href={getCurrentLinkHref || '/'} legacyBehavior={true}>
                    <a className={`font-pier-sans font-normal text-lg 2xl:text-xl text-${getChosenLightColor?.name}`}>{link.link_name}</a>
                  </Link>
                </div>
              );
            })
          }
        </div>
        <div className={`flex py-4 items-center transition-opacity duration-300 ease-in-out ${barsIcon ? 'opacity-50' : 'opacity-100'}  md:hidden`} onClick={() => setBarsIcon(current => !current)}>
          {
            getNavigationData && <>
              <Icons
                name={barsIcon ? 'x-mark' : 'bars-3'}
                color={getChosenLightColor?.name || getFallBackLightColor}
                variant='solid'
                className="h-7"
              />
            </>
          }
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
