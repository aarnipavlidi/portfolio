import { CustomIconsProps } from '@/types/icons';

const ArrowSmallUp: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
  return (
    <svg
      id={props.name}
      xmlns="http://www.w3.org/2000/svg"
      fill={variant === 'outline' ? 'none' : 'currentColor'}
      viewBox={variant === 'mini' ? '0 0 20 20' : '0 0 24 24'}
      strokeWidth={variant === 'outline' ? '1.5' : '0'}
      stroke={variant === 'outline' ? 'currentColor' : 'none'}
      className={`${className} text-${color}`}
      {...props}
    >
      {
        variant === 'outline' && <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75"
          />
        </>
      }
      {
        variant === 'solid' && <>
          <path
            fillRule="evenodd"
            d="M12 20.25a.75.75 0 0 1-.75-.75V6.31l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 1 1-1.06 1.06l-5.47-5.47V19.5a.75.75 0 0 1-.75.75z"
            clipRule="evenodd"
          />
        </>
      }
      {
        variant === 'mini' && <>
          <path
            fillRule="evenodd"
            d="M10 15a.75.75 0 0 1-.75-.75V7.612L7.29 9.77a.75.75 0 0 1-1.08-1.04l3.25-3.5a.75.75 0 0 1 1.08 0l3.25 3.5a.75.75 0 1 1-1.08 1.04l-1.96-2.158v6.638A.75.75 0 0 1 10 15z"
            clipRule="evenodd"
          />
        </>
      }
    </svg>
  );
};

export default ArrowSmallUp;
