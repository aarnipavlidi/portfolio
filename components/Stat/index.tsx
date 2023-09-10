import type { StatsBlockSliceSliceDefaultItem, HeroiconDocumentData } from 'prismicio-types';
import Typography from '@/components/Typography';
import Icons from '@/components/Icons';
import CustomLink from '@/components/CustomLink';

interface StatHrefProps {
  url: string;
  target: string | null;
}

export interface StatProps {
  value: StatsBlockSliceSliceDefaultItem['value'];
  iconName: HeroiconDocumentData['name'];
  iconVariant: HeroiconDocumentData['variant'];
  href?: StatHrefProps;
  name: StatsBlockSliceSliceDefaultItem['name'];
};

const Stat: React.FC<StatProps> = (props) => {
  const checkHrefValue = props.href && props.href.url;

  return (
    <>
      {
        props.value && props.name && <div className="inline-flex flex-col gap-4 items-center justify-center">
          <div className="flex self-end items-center justify-center gap-2 px-4">
            {
              !checkHrefValue && <Typography
                content={props.value}
                tag="h4"
                size="3xl"
                className="font-caveat 2xl:text-4xl"
              />
            }
            {
              checkHrefValue && <CustomLink
                href={checkHrefValue}
                target={props.href?.target || undefined}
                content={props.value}
                size="3xl"
                className="font-caveat 2xl:text-4xl"
              />
            }
            {
              props.iconName && props.iconVariant && <Icons
                name={props.iconName}
                variant={props.iconVariant}
                color="current"
                className="w-8"
              />
            }
          </div>
          <div className="flex self-stretch items-center justify-center">
            <Typography
              content={props.name}
              tag="p"
              size="lg"
              className="font-pier-sans uppercase 2xl:text-xl"
            />
          </div>
        </div>
      }
    </>
  );
};

export default Stat;
