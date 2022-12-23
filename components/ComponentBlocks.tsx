import { ContentfulBlockProps, ComponentBlockNameType, ComponentBlocksArrayProps } from '@/types/propsContentful';
import { contentfulFieldsParser } from 'utils/contentful/fieldsParser';
import upperFirst from 'lodash.upperfirst';
import camelCase from 'lodash.camelcase';

import Heading from '@/components/Heading';

interface ComponentBlocksProps {
  blocks: ContentfulBlockProps[]
};

const ComponentBlocks: React.FC<ComponentBlocksProps> = ({ blocks }) => {

  const ComponentBlocksArray: ComponentBlocksArrayProps = {
    'Heading': Heading,
  };

  return (
    <>
      {blocks
        .filter(getBlock => getBlock.sys?.contentType?.sys?.id)
        .filter(getBlock => getBlock.fields)
        .map(( currentBlock, index ) => {
          const name: string = upperFirst(camelCase(currentBlock.sys?.contentType?.sys?.id));
          const BlockComponent = ComponentBlocksArray[name as ComponentBlockNameType];

          if (!BlockComponent) return null;

          return (
            <BlockComponent
              key={`${name}_${index}`}
              {...contentfulFieldsParser(currentBlock)}
            />
          );
        })
      }
    </>
  );
};

export default ComponentBlocks;
