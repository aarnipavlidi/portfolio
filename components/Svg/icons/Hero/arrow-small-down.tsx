import { CustomIconsProps } from '@/types/icons';

const ArrowSmallDown: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
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
            d="M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75"
          />
        </>
      }
      {
        variant === 'solid' && <>
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v13.19l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6.75 6.75a.75.75 0 0 1-1.06 0l-6.75-6.75a.75.75 0 1 1 1.06-1.06l5.47 5.47V4.5a.75.75 0 0 1 .75-.75z"
            clipRule="evenodd"
          />
        </>
      }
      {
        variant === 'mini' && <>
          <path
            fillRule="evenodd"
            d="M10 5a.75.75 0 0 1 .75.75v6.638l1.96-2.158a.75.75 0 1 1 1.08 1.04l-3.25 3.5a.75.75 0 0 1-1.08 0l-3.25-3.5a.75.75 0 1 1 1.08-1.04l1.96 2.158V5.75A.75.75 0 0 1 10 5z"
            clipRule="evenodd"
          />
        </>
      }
    </svg>
  );
};

export default ArrowSmallDown;
