import IconsDynamic from '@/components/IconsDynamic';

interface getCurrentDynamicIconsProps {
  value: '0' | '1' | '2' | '3' | '4' | '5'
};

export const getCurrentDynamicIcons = ({ value }: getCurrentDynamicIconsProps): JSX.Element[] => {

  const dynamicIcons = [];
  const getCurrentLength = parseInt(value);

  const maximumDynamicIcons = 5;
  const defaultDynamicIconsCount = maximumDynamicIcons - getCurrentLength;

  for (let i = 0; i < getCurrentLength; i++) {
    dynamicIcons.push(
      <IconsDynamic
        key={`SquareOutlineDot-${i}`}
        name='SquareOutlineDot'
        variant='solid'
        color='current'
        className="w-4"
      />
    );
  }

  for (let i = 0; i < defaultDynamicIconsCount; i++) {
    dynamicIcons.push(
      <IconsDynamic
        key={`SquareOutline-${i}`}
        name='SquareOutline'
        color='current'
        className="w-4"
      />
    );
  }

  return dynamicIcons;
};
