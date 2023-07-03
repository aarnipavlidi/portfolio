import type { Content } from '@prismicio/client';
import type { PrismicEditorFieldProps } from '@/types/prismic';
import type { ButtonFragment, HeroIconFragment, IconsListFragment } from '@/types/prismic/graphql/graphql';
import { PrismicRichText } from '@prismicio/react';

import Design from '@/components/Design';
import Typography from '@/components/Typography';
import Button from '@/components/Button';
import IconsList from '@/components/IconsList';

interface CardItemProps {
  card_image: PrismicEditorFieldProps['image'];
  name: Content.CardSliceSliceDefaultItem['name'];
  collection?: IconsListFragment | null;
  description: Content.CardSliceSliceDefaultItem['description'];
  icon?: HeroIconFragment | null;
  button: ButtonFragment | null;
  label: Content.CardSliceSliceDefaultItem['label'];
}

const CardItem: React.FC<CardItemProps> = (props) => {
  return (
    <>
      {
        props.card_image && <div className="pt-8 flex flex-col md:flex-row md:gap-8 xl:gap-24">
          <div className="shrink-0 flex justify-center items-center grayscale hover:grayscale-0 transition-all ease-in-out duration-700">
            <Design
              content={props.card_image}
              className="border-8 border-neutral-500 border-double shadow shadow-neutral-900/50"
            />
          </div>
          {
            (props.name || props.description) && <div className="pt-8 md:pt-0 flex flex-1 flex-col justify-between">
              <div className="max-w-prose">
                {
                  props.name && <div className="flex flex-row justify-between">
                    <Typography
                      content={<PrismicRichText field={props.name} />}
                      tag="h3"
                      size="lg"
                      className="uppercase font-pier-sans 2xl:text-xl"
                    />
                    {
                      props.collection && props.collection.collection && <IconsList
                        collection={props.collection.collection as Content.IconsListDocumentData['collection']}
                        wrapperClass='flex gap-2'
                        className="w-4"
                      />
                    }
                  </div>
                }
                {
                  props.description && <Typography
                    content={<PrismicRichText field={props.description} />}
                    tag="p"
                    size="base"
                    className="font-pier-sans pt-2 2xl:text-lg"
                  />
                }
              </div>
              {
                props.button && props.label && <div className="max-w-prose flex justify-end">
                  <Button
                    className="mt-8 uppercase"
                    content={props.label}
                    icon={props.icon}
                    button={props.button}
                  />
                </div>
              }
            </div>
          }
        </div>
      }
    </>
  );
};

export default CardItem;
