import { CustomIconsProps } from '@/types/icons';

const ArrowDownRight: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
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
            d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
          />
        </>
      }
      {
        variant === 'solid' && <>
          <path
            fillRule="evenodd"
            d="M3.97 3.97a.75.75 0 0 1 1.06 0l13.72 13.72V8.25a.75.75 0 0 1 1.5 0V19.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1 0-1.5h9.44L3.97 5.03a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </>
      }
      {
        variant === 'mini' && <>
          <path
            d="M6.28 5.22a.75.75 0 0 0-1.06 1.06l7.22 7.22H6.75a.75.75 0 0 0 0 1.5h7.5a.747.747 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0v5.69L6.28 5.22Z"
          />
        </>
      }
    </svg>
  );
};

export default ArrowDownRight;
