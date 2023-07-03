import type { Content } from '@prismicio/client';
import Icons from '@/components/Icons';

interface CollectionProps {
  name: Content.IconsListDocumentDataCollectionItem['name'];
  icon: Content.IconsListDocumentDataCollectionItem['icon'];
}

interface IconsListProps {
  collection: CollectionProps[]
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
            props.collection.map((value => {
              return (
                <Icons
                  key={value.name}
                  name={value.icon}
                  color={color}
                  className={props.className}
                />
              );
            }))
          }
        </div>
      }
    </>
  );
};

export default IconsList;
