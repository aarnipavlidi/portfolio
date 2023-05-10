import { CustomIconsProps } from '@/types/icons';

const OverlayBlock: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
  return (
    <svg
      id={props.name}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 15 15"
      className={`${className} text-${color}`}
      {...props}
    >
      {
        variant === 'solid' && <>
          <path
            className="opacity-25"
            d="M0 1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1Z"
          />
          <path
            className="opacity-75"
            d="M5 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6Z"
          />
        </>
      }
    </svg>
  );
};

export default OverlayBlock;
