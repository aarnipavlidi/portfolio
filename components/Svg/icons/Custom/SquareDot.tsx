import { CustomIconsProps } from '@/types/icons';

const SquareDot: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
  return (
    <svg
      id={props.name}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={`${className} text-${color}`}
      {...props}
    >
      {
        variant === 'solid' && <>
          <path d="M7 7h10v10H7V7Z" />
        </>
      }
    </svg>
  );
};

export default SquareDot;
