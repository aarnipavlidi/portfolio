import type { CustomDivideIconNameType } from '@/types/icons';
import classNames from 'classnames';
import Icons from '@/components/Icons';

interface CustomDivideProps {
  color?: 'current' | 'inherit';
  variant: CustomDivideIconNameType;
  w?: '6' | '4';
  gap?: '4' | '2';
};

const CustomDivide: React.FC<CustomDivideProps> = ({ color = 'current', w = '6', gap = '4', ...props }) => {

  const iconWrapperContainer = classNames({
    [`flex items-center justify-center gap-${gap}`]: true,
  });

  const iconContainer = classNames({
    [`w-${w}`]: true,
  });

  return (
    <div className={iconWrapperContainer}>
      {
        props.variant === 'SquareTriangle' && <>
          <Icons
            name='SquareTriangle'
            color={color}
            className={iconContainer}
          />
          <Icons
            name='SquareTriangle'
            color={color}
            className={`${iconContainer} rotate-180`}
          />
          <Icons
            name='SquareTriangle'
            color={color}
            className={`${iconContainer} -rotate-90`}
          />
          <Icons
            name='SquareTriangle'
            color={color}
            className={`${iconContainer} rotate-90`}
          />
        </>
      }
      {
        props.variant === 'SquareDot' && <>
          <Icons
            name='SquareDot'
            color={color}
            className={iconContainer}
          />
          <Icons
            name='SquareDot'
            color={color}
            className={iconContainer}
          />
          <Icons
            name='SquareDot'
            color={color}
            className={iconContainer}
          />
          <Icons
            name='SquareDot'
            color={color}
            className={iconContainer}
          />
        </>
      }
    </div>
  );
};

export default CustomDivide;
