/* eslint-disable no-underscore-dangle */
import type { ChosenColorProps } from '@/types/prismic';
import type { navigationProps } from 'graphql/queries';
import { prismicLinkResolver, checkLinkProperties } from '@/utils/prismic';
import * as prismicH from '@prismicio/helpers';
import Link from 'next/link';

import Icons from '@/components/Icons';
import fallBackColors from '@/fallback/colors';

interface NavigationProps {
  navigation: navigationProps['allNavigations'];
}

const Navigation: React.FC<NavigationProps> = ({ navigation }) => {
  const getNavigationData = navigation.allNavigations.edges && navigation.allNavigations.edges[0] ? navigation.allNavigations.edges[0].node : null;
  const getChosenLightColor = (getNavigationData?.color as ChosenColorProps).light?.slice(0, 1)[0];
  const getFallBackLightColor = fallBackColors.component.navigation.element.svg.light.name;

  return (
    <header className="container mx-auto px-4">
      <nav className="flex flex-row">
        {
          getNavigationData && getNavigationData.navigation_title && <>
            <div className="basis-1/2 flex flex-row py-4">
              <Icons
                name="TerminalTag"
                color={getChosenLightColor?.name ? `fill-${getChosenLightColor.name}` : `fill-${getFallBackLightColor}`}
                className="w-2 h-2"
              />
              <div className="px-2">
                <h1 className="font-caveat text-2xl font-normal">{getNavigationData.navigation_title}</h1>
              </div>
              <Icons
                name="StackingBlock"
                color={getChosenLightColor?.name ? `fill-${getChosenLightColor.name}` : `fill-${getFallBackLightColor}`}
                className="w-4 h-2 self-end"
              />
            </div>
          </>
        }
        {<div className="basis-1/2 py-4">
          {getNavigationData && getNavigationData.navigation_links && getNavigationData.navigation_links.length > 0 && getNavigationData.navigation_links.map((link, index) => {

            const getCurrentLinkData = checkLinkProperties(link.link_href) ? link.link_href : null;
            const formatLinkData = {
              _link_type: getCurrentLinkData?._linkType,
              ...getCurrentLinkData?._meta,
            };

            const getCurrentLinkHref = prismicH.asLink(formatLinkData as any, prismicLinkResolver);

            return (
              <Link key={`${link.link_name}-${index}`} href={getCurrentLinkHref || '/'} legacyBehavior={true}>
                <a className="font-pier-sans text-lg">{link.link_name}</a>
              </Link>
            );
          })
          }
        </div>}
      </nav>
    </header>
  );
};

export default Navigation;
