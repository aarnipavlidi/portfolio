import type { ListBlockSliceSliceDefaultItem } from 'prismicio-types';
import type { IconsListFragment } from '@/types/prismic/graphql/graphql';
import { PrismicRichText } from '@prismicio/react';

import Typography from '@/components/Typography';
import IconsList from '@/components/IconsList';
import { getCurrentDynamicIcons } from '@/components/DynamicIcons';

interface ListBlockItemProps {
  title: ListBlockSliceSliceDefaultItem['title'];
  labelStack: IconsListFragment | null;
  experience: ListBlockSliceSliceDefaultItem['experience'];
};

const ListBlockItem: React.FC<ListBlockItemProps> = (props) => {
  return (
    <>
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
  );
};

export default ListBlockItem;
