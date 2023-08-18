import type { CardSlicePrimaryFragment } from '@/types/prismic/graphql/graphql';
import type { CardSliceSliceDefaultPrimary } from 'prismicio-types';
import { Fragment } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { getFragmentData } from '@/types/prismic/graphql';
import { BUTTON, ICONS_LIST, HERO_ICON } from '@/graphql/templates/fragments/themes';

import Icons from '@/components/Icons';
import Typography from '@/components/Typography';
import CardItem from '@/components/Card/item';
import CustomDivide from '@/components/CustomDivide';

interface CardProps {
  title: CardSliceSliceDefaultPrimary['title'];
  subtitle?: CardSliceSliceDefaultPrimary['subtitle'];
  items: CardSlicePrimaryFragment['items'];
}

const Card: React.FC<CardProps> = (props) => {

  const validateCardTitle = props.title && props.title
    .map(value => value.text.length !== 0)
    .some(value => value !== false);

  return (
    <section className="text-neutral-900 dark:text-neutral-200 py-8">
      {
        props.title && validateCardTitle && <div className='flex'>
          <Icons
            name="PrimaryFormation"
            color="current"
            className="w-6 self-start"
          />
          <div>
            <Typography
              content={<PrismicRichText field={props.title} />}
              tag="h2"
              size="4xl"
              className="font-pier-sans px-4 uppercase 2xl:text-5xl"
            />
            {
              props.subtitle && <Typography
                content={<PrismicRichText field={props.subtitle} />}
                tag="p"
                size="base"
                className="font-pier-sans px-4 lowercase 2xl:text-lg"
              />
            }
          </div>
        </div>
      }
      {
        props.items && props.items.length > 0 && props.items.map((value, index, cardItems) => {

          const getNextItem = cardItems[index + 1];

          const getCardButtonIcon = value && value.icon?.__typename === 'Heroicon'
            ? getFragmentData(HERO_ICON, value.icon)
            : null;

          const getCardButton = value && value.button?.__typename === 'Button'
            ? getFragmentData(BUTTON, value.button)
            : null;

          const getCardCollection = value && value.collection?.__typename === 'Icons_list'
            ? getFragmentData(ICONS_LIST, value.collection)
            : null;

          if (!value.card_image) {
            return null;
          }

          if ((index + 1 === cardItems.length) || (index + 1 !== cardItems.length && !getNextItem.card_image)) {
            return (
              <Fragment key={`CardItem-${index}`}>
                <CardItem
                  card_image={value.card_image}
                  name={value.name}
                  collection={getCardCollection}
                  description={value.description}
                  icon={getCardButtonIcon}
                  button={getCardButton}
                  label={value.label}
                />
              </Fragment>
            );
          }

          return (
            <Fragment key={`CardItem-${index}`}>
              <CardItem
                card_image={value.card_image}
                name={value.name}
                collection={getCardCollection}
                description={value.description}
                icon={getCardButtonIcon}
                button={getCardButton}
                label={value.label}
              />
              <CustomDivide
                wrapperClass="pt-8 flex gap-2 justify-center"
                className="w-6"
              />
            </Fragment>
          );
        })
      }
    </section>
  );
};

export default Card;
