import { CustomIconsProps } from '@/types/icons';

const SquareOutlineDot: React.FC<CustomIconsProps> = ({ color, className, ...props }) => {
  return (
    <svg
      id={props.name}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={`${className} text-${color}`}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4 4h16v16H4V4ZM0 0h24v24H0V0Zm16 8H8v8h8V8Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SquareOutlineDot;
