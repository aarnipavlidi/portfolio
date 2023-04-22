/* eslint-disable no-magic-numbers */
/* eslint-disable no-underscore-dangle */
import type { ChosenColorProps } from '@/types/prismic';
import type { navigationProps } from 'graphql/queries';
import { prismicLinkResolver, checkLinkProperties } from '@/utils/prismic';
import * as prismicH from '@prismicio/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Icons from '@/components/Icons';
import Design from '@/components/Design';
import fallBackColors from '@/fallback/colors';

interface NavigationProps {
  navigation: navigationProps['allNavigations'];
}

const Navigation: React.FC<NavigationProps> = ({ navigation }) => {
  const router = useRouter();
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
                color={getChosenLightColor?.name ? `fill-${getChosenLightColor.name}` : `fill-${getFallBackLightColor}`}
                className="w-3 h-3 self-start"
              />
              <div className="px-2">
                <h2 className="font-caveat font-normal text-3xl 2xl:text-4xl">{getNavigationData.navigation_title}</h2>
              </div>
              <Icons
                name="StackingBlock"
                color={getChosenLightColor?.name ? `fill-${getChosenLightColor.name}` : `fill-${getFallBackLightColor}`}
                className="w-4 h-2 self-end"
              />
            </div>
          </>
        }
        <div className="flex flex-row items-center gap-8">
          {getNavigationData && getNavigationData.navigation_links && getNavigationData.navigation_links.length > 0 && getNavigationData.navigation_links.map((link, index) => {

            const getCurrentLinkData = checkLinkProperties(link.link_href) ? link.link_href : null;
            const formatLinkData = {
              _link_type: getCurrentLinkData?._linkType,
              ...getCurrentLinkData?._meta,
            };

            const getCurrentLinkHref = prismicH.asLink(formatLinkData as any, prismicLinkResolver);
            const checkCurrentLinkMatch = getCurrentLinkHref === router.pathname;

            return (
              <div key={`${link.link_name}-${index}`} className="flex flex-col">
                <div className="w-4 h-2 self-end">
                  {
                    checkCurrentLinkMatch && <>
                      <Design
                        src="/StackingBlockPrimary.svg"
                        alt={`Currently active link is the ${link.link_name} landing page.`}
                        position="relative"
                        className="w-4 h-2"
                      />
                    </>
                  }
                </div>
                <Link href={getCurrentLinkHref || '/'} legacyBehavior={true}>
                  <a className={`font-pier-sans font-normal text-lg 2xl:text-xl text-${getChosenLightColor?.name}`}>{link.link_name}</a>
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
