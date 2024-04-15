import { CustomIconsProps } from '@/types/icons';

const SquareOutline: React.FC<CustomIconsProps> = ({ color, className, ...props }) => {
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
        d="M24 0H0v24h24V0Zm-4 4H4v16h16V4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SquareOutline;
