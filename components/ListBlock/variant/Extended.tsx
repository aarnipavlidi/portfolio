import { HeroIconFragment, ListBlockSliceExtendedFragment } from '@/types/prismic/graphql/graphql';
import type { HeroiconDocumentData, ListBlockSliceSliceExtendedPrimary } from 'prismicio-types';

import { PrismicRichText } from '@prismicio/react';
import { Fragment, useId } from 'react';
import Typography from '@/components/Typography';
import Icons from '@/components/Icons';
import { getFragmentData } from '@/types/prismic/graphql';
import { ICONS_LIST } from '@/graphql/templates/fragments/themes';

import ListBlockItem from '../item';

export interface ListBlockExtendedProps {
    variant: 'Extended';
    headerPosition: ListBlockSliceSliceExtendedPrimary['header_position'];
    headerTitle: ListBlockSliceSliceExtendedPrimary['header_title'];
    titleIcon: HeroIconFragment | null;
    items: ListBlockSliceExtendedFragment['items'];
}

const ListBlockExtended: React.FC<ListBlockExtendedProps> = (props) => {
  const generateUniqueID = useId();

  return (
    <div className={`${props.headerTitle || props.items && props.items.length > 0}` ? 'flex flex-col gap-8' : ''}>
      {
        props.headerTitle && <div className={`flex ${props.headerPosition === 'right' ? 'self-end' : ''}`}>
          <div className='flex flex-row border-2 rounded-lg border-current bg-neutral-100 dark:bg-neutral-950 px-4 py-2 gap-2 justify-center items-center relative'>
            <Typography
              content={<PrismicRichText field={props.headerTitle} />}
              size='3xl'
              className='font-pier-sans uppercase font-bold 2xl:text-4xl'
            />
            {
              props.titleIcon && <Icons
                name={props.titleIcon.name as HeroiconDocumentData['name']}
                variant={props.titleIcon.variant as HeroiconDocumentData['variant']}
                color='current'
                className='w-6'
              />
            }
            <div className={`absolute rounded-lg bg-neutral-500 -z-10 w-full h-full -bottom-1.5 ${props.headerPosition === 'right' ? '-left-1.5' : '-right-1.5'}`} />
          </div>
        </div>
      }
      {
        props.items && props.items.length > 0 && <div>
          {
            props.items.map((value, index) => {
              const getCurrentUniqueID = `${generateUniqueID}-${index}`;
              const getCurrentLabelStack = value.labelStack && value.labelStack.__typename === 'Icons_list'
                ? getFragmentData(ICONS_LIST, value.labelStack)
                : null;

              return (
                <Fragment key={getCurrentUniqueID}>
                  <ListBlockItem
                    id={getCurrentUniqueID}
                    firstItem={index === 0}
                    variant={props.variant}
                    primary={{
                      title: value.primaryTitle,
                      subtitle: value.primarySubtitle,
                    }}
                    secondary={{
                      title: value.secondaryTitle,
                      subtitle: value.secondarySubtitle,
                    }}
                    labelStack={getCurrentLabelStack}
                    description={value.description}
                  />
                </Fragment>
              );
            })
          }
        </div>
      }
    </div>
  );
};

export default ListBlockExtended;
