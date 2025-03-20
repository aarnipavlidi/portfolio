import type { TypographyProps } from '@/components/Typography';
import { FragmentType, getFragmentData} from '@/types/hygraph';
import documents from '@/hygraph/fragments/documents';
import NameIcon from './item';

interface NamesIconsListProps {
  items: FragmentType<typeof documents.nameIcon>[];
  wrapperClass?: string;
  nameSize?: TypographyProps['size']
  className?: string;
  color?: 'current' | 'inherit';
}

const NamesIconsList: React.FC<NamesIconsListProps> = ({ color = 'current', ...props }) => {
  const items = getFragmentData(documents.nameIcon, props.items);

  return (
    <>
      {
        items && items.length > 0 && <div className={props.wrapperClass}>
          {
            items.map((item, index) => {
              return (
                <NameIcon
                  key={`NamesIconsList-${item.name}::${index}`}
                  item={item}
                  nameSize={props.nameSize}
                  className={props.className}
                  color={color}
                />
              )
            })
          }
        </div>
      }
    </>
  )
};

export default NamesIconsList;