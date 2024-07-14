import type { ListBlockSliceSliceDefaultPrimary, HeroiconDocumentData, ListBlockSliceSliceDefaultItem } from 'prismicio-types';
import type { ListBlockExtendedProps } from '@/components/ListBlock/variant/Extended';
import type { HeroIconFragment, ListBlockSlicePrimaryFragment } from '@/types/prismic/graphql/graphql';
import { getFragmentData } from '@/types/prismic/graphql';
import { Fragment, useId } from 'react';
import { PrismicRichText } from '@prismicio/react';

import RoundedBackground from '@/components/RoundedBackground';
import Typography from '@/components/Typography';
import ListBlockItem from '@/components/ListBlock/item';
import Icons from '@/components/Icons';
import ListBlockExtended from '@/components/ListBlock/variant/Extended';
import { ICONS_LIST } from '@/graphql/templates/fragments/themes';

export interface ListBlockProps {
  variant:'primary';
  roundedBackground?: ListBlockSliceSliceDefaultPrimary['rounded_background'] | null;
  headerPosition: ListBlockSliceSliceDefaultPrimary['header_position'];
  headerTitle: ListBlockSliceSliceDefaultPrimary['header_title'];
  titleIcon: HeroIconFragment | null;
  items: ListBlockSlicePrimaryFragment['items'];
};

const ListBlock: React.FC<ListBlockProps | ListBlockExtendedProps> = (props) => {
  const generateUniqueID = useId();

  return (
    <>
      <section className='text-neutral-900 dark:text-neutral-200 py-8'>
        {
          props.variant === 'primary' && <div className='flex flex-col gap-8'>
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
              props.items && props.items.length > 0 && <RoundedBackground background={props.roundedBackground} variant='primary'>
                <div className='flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:justify-between'>
                  {
                    props.items.map((value, index) => {
                      // TODO DELETE LATER
                      // Refactor later into utils icons list fragment?
                      const getCurrentUniqueID = `${generateUniqueID}-${index}`;
                      const getCurrentLabelStack = value.labelStack && value.labelStack.__typename === 'Icons_list'
                        ? getFragmentData(ICONS_LIST, value.labelStack)
                        : null;

                      return (
                        <Fragment key={getCurrentUniqueID}>
                          <ListBlockItem
                            id={getCurrentUniqueID}
                            variant={props.variant}
                            title={value.title}
                            labelStack={getCurrentLabelStack}
                            experience={value.experience as ListBlockSliceSliceDefaultItem['experience']}
                          />
                        </Fragment>
                      );
                    })
                  }
                </div>
              </RoundedBackground>
            }
          </div>
        }
        {
          props.variant === 'Extended' && <ListBlockExtended
            variant={props.variant}
            headerPosition={props.headerPosition}
            headerTitle={props.headerTitle}
            titleIcon={props.titleIcon as any}
            items={props.items}
          />
        }
      </section>
    </>
  );
};

export default ListBlock;
