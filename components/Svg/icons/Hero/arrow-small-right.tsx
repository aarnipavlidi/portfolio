import { CustomIconsProps } from '@/types/icons';

const ArrowSmallRight: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
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
            d="M4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </>
      }
      {
        variant === 'solid' && <>
          <path
            fillRule="evenodd"
            d="M3.75 12a.75.75 0 0 1 .75-.75h13.19l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.47-5.47H4.5a.75.75 0 0 1-.75-.75z"
            clipRule="evenodd"
          />
        </>
      }
      {
        variant === 'mini' && <>
          <path
            fillRule="evenodd"
            d="M5 10a.75.75 0 0 1 .75-.75h6.638L10.23 7.29a.75.75 0 1 1 1.04-1.08l3.5 3.25a.75.75 0 0 1 0 1.08l-3.5 3.25a.75.75 0 1 1-1.04-1.08l2.158-1.96H5.75A.75.75 0 0 1 5 10z"
            clipRule="evenodd"
          />
        </>
      }
    </svg>
  );
};

export default ArrowSmallRight;
