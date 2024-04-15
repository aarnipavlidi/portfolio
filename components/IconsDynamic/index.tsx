import type { CustomIconsProps } from '@/types/icons';
import { SVGProps, useId } from 'react';
import SquareOutline from '@/components/Svg/icons/Custom/SquareOutline';
import SquareOutlineDot from '@/components/Svg/icons/Custom/SquareOutlineDot';

interface CustomIconsDynamicProps extends SVGProps<SVGSVGElement> {
  name: 'SquareOutline' | 'SquareOutlineDot';
  variant?: 'solid';
  color: 'current' | 'inherit';
  className?: string;
};

type CustomIconsDynamicArrayProps = {
  [key in CustomIconsDynamicProps['name']]: React.FC<CustomIconsProps>;
};

const IconsDynamic: React.FC<CustomIconsDynamicProps> = ({ name, variant = 'solid', ...props }) => {
  const generateRandomID = useId();
  const IconsDynamicArray: CustomIconsDynamicArrayProps = {
    'SquareOutline': SquareOutline,
    'SquareOutlineDot': SquareOutlineDot,
  };

  const IconDynamic = IconsDynamicArray[name];

  return (
    <IconDynamic
      id={`IconsDynamic-${name}${generateRandomID}`}
      name={name}
      variant={variant}
      {...props}
    />
  );
};

export default IconsDynamic;
