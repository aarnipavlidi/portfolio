import type { HTMLAttributeAnchorTarget } from 'react';
import type { TypographyProps } from '@/components/Typography';
import type { IconsListDocumentDataCollectionItem } from 'prismicio-types';
import type { IconsListFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { Fragment } from 'react';
import Link from 'next/link';
import { EXTERNAL_LINK_META } from '@/graphql/templates/fragments/documents';
import Icons from '@/components/Icons';
import Typography from '@/components/Typography';

export interface IconsListProps {
  showIcons: boolean | undefined;
  iconNameSize?: TypographyProps['size']
  collection: IconsListFragment['collection'];
  wrapperClass?: string;
  className?: string;
  color?: 'current' | 'inherit';
}

const IconsList: React.FC<IconsListProps> = ({ color = 'current', iconNameSize = 'base', ...props }) => {
  return (
    <>
      {
        props.collection && <div className={`${props.wrapperClass}`}>
          {
            props.collection.map(((value, index) => {

              const getCurrentIconName: IconsListDocumentDataCollectionItem['name'] = value.name
                ? value.name
                : null;

              const getCurrentIconStyle = value.icon
                ? value.icon as IconsListDocumentDataCollectionItem['icon']
                : null;

              const getOptionalHref = value.href && value.href.__typename === '_ExternalLink'
                ? getFragmentData(EXTERNAL_LINK_META, value.href)
                : null;

              if (getOptionalHref) {

                const checkHrefBlankStatus: HTMLAttributeAnchorTarget = getOptionalHref.target ? '_blank' : '_self';

                return (
                  <Fragment key={`IconsList-${getCurrentIconName}::${index}`}>
                    {
                      getCurrentIconName && getCurrentIconStyle && <Link href={getOptionalHref.url} target={checkHrefBlankStatus}>
                        <Icons
                          name={getCurrentIconStyle}
                          color={color}
                          className={props.className}
                        />
                      </Link>
                    }
                  </Fragment>
                );
              }

              return (
                <Fragment key={`IconsList-${getCurrentIconName}::${index}`}>
                  {
                    getCurrentIconName && <>
                      {
                        getCurrentIconStyle && props.showIcons && <Icons
                          name={getCurrentIconStyle}
                          color={color}
                          className={props.className}
                        />
                      }
                      {
                        !props.showIcons && <Typography
                          content={getCurrentIconName}
                          tag="span"
                          size={iconNameSize}
                          className={props.className}
                        />
                      }
                    </>
                  }
                </Fragment>
              );
            }))
          }
        </div>
      }
    </>
  );
};

export default IconsList;
