/* eslint-disable no-underscore-dangle */
import { prismicLinkResolver, checkLinkProperties } from '@/utils/prismic';
import type { navigationProps } from 'graphql/queries';
import * as prismicH from '@prismicio/helpers';
import Link from 'next/link';

interface NavigationProps {
  navigation: navigationProps['allNavigations'];
}

const Navigation: React.FC<NavigationProps> = ({ navigation }) => {
  const getNavigationData = navigation.allNavigations.edges && navigation.allNavigations.edges[0] ? navigation.allNavigations.edges[0].node : null;

  return (
    <header className="container mx-auto px-5 bg-slate-100">
      <nav className="pt-5 flex justify-between">
        {
          getNavigationData && getNavigationData.navigation_title && <>
            <div className="basis-1/2 self-center">
              <h1 className="font-pier-sans text-2xl">{getNavigationData.navigation_title}</h1>
            </div>
          </>
        }
        {<div className="basis-1/2 flex flex-row gap-5">
          {getNavigationData && getNavigationData.navigation_links && getNavigationData.navigation_links.length > 0 && getNavigationData.navigation_links.map((link, index) => {

            const getCurrentLinkData = checkLinkProperties(link.link_href) ? link.link_href : null;
            const formatLinkData = {
              _link_type: getCurrentLinkData?._linkType,
              ...getCurrentLinkData?._meta,
            };

            const getCurrentLinkHref = prismicH.asLink(formatLinkData as any, prismicLinkResolver);

            return (
              <Link key={`${link.link_name}-${index}`} href={getCurrentLinkHref || '/aaa'} legacyBehavior={true}>
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
