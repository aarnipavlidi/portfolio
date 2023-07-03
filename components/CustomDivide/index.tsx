import Icons from '@/components/Icons';

interface CustomDivideProps {
  type?: 'SquareDot';
  wrapperClass?: string;
  color?: 'current' | 'inherit';
  className?: string;
}

const CustomDivide: React.FC<CustomDivideProps> = ({ type = 'SquareDot', color = 'current', ...props }) => {
  return (
    <div className={props.wrapperClass}>
      <Icons
        name={type}
        color={color}
        className={props.className}
      />
      <Icons
        name={type}
        color={color}
        className={props.className}
      />
      <Icons
        name={type}
        color={color}
        className={props.className}
      />
    </div>
  );
};

export default CustomDivide;
