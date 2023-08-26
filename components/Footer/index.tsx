import type { LayoutFetchProps } from '@/types/prismic';
import { getFragmentData } from '@/types/prismic/graphql';
import { PrismicRichText } from '@prismicio/react';
import { LINK_DOCUMENT_META } from '@/graphql/templates/fragments/documents';
import { ICONS_LIST } from '@/graphql/templates/fragments/themes';
import classNames from 'classnames';

import Icons from '@/components/Icons';
import IconsList from '@/components/IconsList';
import Typography from '@/components/Typography';
import CustomLink from '@/components/CustomLink';

interface FooterProps {
  navigation?: LayoutFetchProps['navigation'];
  content?: LayoutFetchProps['footer'];
  mobileMenuScreen?: boolean;
};

const Footer: React.FC<FooterProps> = (props) => {
  const getNavigationData = props.navigation?.allNavigations.edges && props.navigation.allNavigations.edges[0] ? props.navigation.allNavigations?.edges[0].node : null;
  const getContentData = props.content?.allFooters.edges && props.content.allFooters.edges[0] ? props.content.allFooters.edges[0].node : null;

  const footerMainContainer = classNames({
    'w-screen bg-inherit mx-auto pt-16 px-4 md:container': true,
    'text-neutral-900 font-pier-sans dark:text-neutral-200': true,
  });

  const footerWrapperContainer = classNames({
    'flex flex-col pt-16 gap-16 justify-center': true,
  });

  const getSocialIcons = getContentData?.social_icons && getContentData.social_icons.__typename === 'Icons_list'
    ? getFragmentData(ICONS_LIST, getContentData.social_icons)
    : null;

  const getCurrentYear = new Date().getFullYear();

  return (
    <footer className={props.mobileMenuScreen ? 'hidden' : `${footerMainContainer}`}>
      <div className="w-full h-1.5 bg-neutral-200 rounded dark:bg-neutral-800" />
      <div className={footerWrapperContainer}>
        <div className="flex justify-between items-start">
          {
            getContentData?.slogan_keys && getContentData.slogan_keys.length > 0 && <div className="flex flex-col items-end text-neutral-400">
              {
                getContentData.slogan_keys.map((value, index) => {

                  if (index === 0) {
                    return (
                      <div key={`SloganKeyWord-${index}`} className="flex flex-row gap-2">
                        <Icons
                          name="StackingBlock"
                          color="current"
                          className="w-6"
                        />
                        <Typography
                          content={<PrismicRichText field={value.word} />}
                          tag="p"
                          size="lg"
                          className="lowercase"
                        />
                      </div>
                    );
                  };

                  return (
                    <div key={`SloganKeyWord-${index}`} className="">
                      <Typography
                        content={<PrismicRichText field={value.word} />}
                        tag="p"
                        size="lg"
                        className="lowercase"
                      />
                    </div>
                  );
                })
              }
            </div>
          }
          {
            getContentData?.slogan && <div className="max-w-[269px]">
              <Typography
                content={<PrismicRichText field={getContentData.slogan} />}
                tag="h3"
                size="3xl"
              />
            </div>
          }
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          {
            getNavigationData?.navigation_links && getNavigationData.navigation_links.length > 0 && getNavigationData.navigation_links.map((link, index) => {

              const getLinkHrefFragment = link.link_href && link.link_href.__typename === 'Landing_page'
                ? getFragmentData(LINK_DOCUMENT_META, link.link_href)
                : null;

              const getCurrentLinkPath = getLinkHrefFragment?._meta.uid === 'home'
                ? '/'
                : getLinkHrefFragment?._meta.uid;

              if (link.link_name) {
                return (
                  <CustomLink
                    key={`${link.link_name}-${index}`}
                    content={link.link_name}
                    href={getCurrentLinkPath || '/'}
                    className="text-xl lowercase"
                  />
                );
              }

              return null;
            })
          }

        </div>
        {
          getSocialIcons && getSocialIcons.collection && getSocialIcons.collection.length > 0 && <IconsList
            showIcons={getSocialIcons.show_icons || undefined}
            collection={getSocialIcons.collection}
            color='current'
            wrapperClass='flex gap-10 self-center text-neutral-100 dark:text-neutral-900'
            className="w-10 p-2 bg-neutral-900 dark:bg-neutral-200"
          />
        }
        <div className="flex relative h-52 justify-center">
          <Icons
            name="FooterBlock"
            color="current"
            className="flex self-stretch"
          />
          <Typography
            tag="p"
            size="xs"
            content={`${'© '} ${getCurrentYear} Aarni Pavlidi`}
            className="absolute bottom-4 text-neutral-400"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
