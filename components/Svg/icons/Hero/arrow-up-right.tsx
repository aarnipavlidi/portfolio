import { CustomIconsProps } from '@/types/icons';

const ArrowUpRight: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
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
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </>
      }
      {
        variant === 'solid' && <>
          <path
            fillRule="evenodd"
            d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5z"
            clipRule="evenodd"
          />
        </>
      }
      {
        variant === 'mini' && <>
          <path
            fillRule="evenodd"
            d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06z"
            clipRule="evenodd"
          />
        </>
      }
    </svg>
  );
};

export default ArrowUpRight;
