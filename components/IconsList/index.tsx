import type { HTMLAttributeAnchorTarget } from 'react';
import type { IconsListDocumentDataCollectionItem } from 'prismicio-types';
import type { IconsListFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { Fragment } from 'react';
import Link from 'next/link';
import { EXTERNAL_LINK_META } from '@/graphql/templates/fragments/documents';
import Icons from '@/components/Icons';

export interface IconsListProps {
  collection: IconsListFragment['collection'];
  wrapperClass?: string;
  className?: string;
  color?: 'current' | 'inherit';
}

const IconsList: React.FC<IconsListProps> = ({ color = 'current', ...props }) => {
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
                    getCurrentIconName && getCurrentIconStyle && <Icons
                      name={getCurrentIconStyle}
                      color={color}
                      className={props.className}
                    />
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
