import type { ListBlockSliceSliceDefaultItem, ListBlockSliceSliceExtendedItem } from 'prismicio-types';
import type { IconsListFragment } from '@/types/prismic/graphql/graphql';
import { PrismicRichText } from '@prismicio/react';

import Typography from '@/components/Typography';
import IconsList from '@/components/IconsList';
import { getCurrentDynamicIcons } from '@/components/DynamicIcons';
import Icons from '../Icons';

interface ListBlockItemSharedProps {
  id: string;
  firstItem?: boolean;
}
interface ListBlockItemProps extends ListBlockItemSharedProps {
  variant: 'primary';
  title: ListBlockSliceSliceDefaultItem['title'];
  labelStack: IconsListFragment | null;
  experience: ListBlockSliceSliceDefaultItem['experience'];
};

interface ListBlockExtendedItemsProps extends ListBlockItemSharedProps {
  variant: 'Extended';
  primary: {
    title: ListBlockSliceSliceExtendedItem['primary_title'];
    subtitle: ListBlockSliceSliceExtendedItem['primary_subtitle'];
  };
  secondary: {
    title: ListBlockSliceSliceExtendedItem['primary_title'];
    subtitle: ListBlockSliceSliceExtendedItem['secondary_subtitle'];
  };
  labelStack: IconsListFragment | null;
  description: ListBlockSliceSliceExtendedItem['description'];
}

const ListBlockItem: React.FC<ListBlockItemProps | ListBlockExtendedItemsProps> = (props) => {
  return (
    <>
      {
        props.variant === 'primary' && <>
          {
            props.title && props.experience && <div className='flex grow flex-col gap-1 min-w-64 max-w-xl basis-5/12'>
              <div className='flex items-center justify-between'>
                <Typography
                  content={<PrismicRichText field={props.title} />}
                  size='lg'
                  className='font-pier-sans 2xl:text-xl'
                />
                <div className='flex flex-row gap-2'>
                  {getCurrentDynamicIcons({ value: props.experience })}
                </div>
              </div>
              {
                props.labelStack && props.labelStack.collection && <IconsList
                  showIcons={props.labelStack.show_icons || undefined}
                  collection={props.labelStack.collection}
                  wrapperClass='flex flex-row gap-4 self-stretch items-center'
                  iconNameSize='sm'
                  className='font-pier-sans lowercase text-neutral-400 2xl:text-base'
                />
              }
            </div>
          }
        </>
      }
      {/* {
        props.variant === 'Extended' && (props.primary.title && props.primary.subtitle) && props.secondary.title && <>
          {
            checkActiveItem && <div onClick={handleClick} className='flex max-w-3xl flex-row items-start gap-16 p-4 bg-neutral-800 rounded-2xl'>
              <div className='flex grow flex-col max-w-xs'>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1'>
                    <Typography
                      content={props.primary.title}
                      size='xl'
                      className='font-pier-sans text-neutral-100'
                    />
                    <Typography
                      content={props.primary.subtitle}
                      size='sm'
                      className='font-pier-sans text-neutral-400'
                    />
                  </div>
                </div>
              </div>
              {
                props.description && <div className='flex-1 flex-col gap-4'>
                  <Typography
                    content={<PrismicRichText field={props.description} />}
                    size='base'
                    className='font-pier-sans text-neutral-200'
                  />
                </div>
              }
            </div>
          }
          {
            !checkActiveItem && <div onClick={handleClick} className='inline-flex flex-col items-center gap-1 text-neutral-100 shadow-lg rounded-b-lg'>
              <div className='flex p-2 justify-center items-center gap-24 bg-neutral-800 rounded-t-lg'>
                <div className='flex flex-col justify-center items-start gap-1'>
                  <Typography
                    content={props.primary.title}
                    size='lg'
                    className='font-pier-sans'
                  />
                  <Typography
                    content={props.primary.subtitle}
                    size='sm'
                    className='font-pier-sans text-neutral-400'
                  />
                </div>
                <Icons
                  name={'arrow-up-right'}
                  variant='solid'
                  color='current'
                  className='w-6'
                />
              </div>
              <div className='flex p-2 justify-center items-centers self-strFtch bg-neutral-100 border-0 border-neutral-100 rounded-b-lg'>
                <Typography
                  content={props.secondary.title}
                  size='base'
                  className='font-pier-sans text-neutral-900'
                />
              </div>
            </div>
          }
        </>
      } */}
    </>
  );
};

export default ListBlockItem;
