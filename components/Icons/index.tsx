import { CustomIconsProps, CustomIconsArrayProps } from '@/types/icons';

// Custom Icons
import StackingBlock from '@/components/Svg/icons/Custom/StackingBlock';
import TerminalTag from '@/components/Svg/icons/Custom/TerminalTag';

// Hero Icons
import Bars3 from '@/components/Svg/icons/Hero/bars-3';
import XMark from '@/components/Svg/icons/Hero/x-mark';

const Icons: React.FC<CustomIconsProps> = ({ name, variant = 'solid', ...props }) => {

  const IconsArray: CustomIconsArrayProps = {
    'StackingBlock': StackingBlock,
    'TerminalTag': TerminalTag,
    'bars-3': Bars3,
    'x-mark': XMark,
  };

  const Icon = IconsArray[name];

  return (
    <Icon
      name={name}
      variant={variant}
      {...props}
    />
  );
};

export default Icons;
