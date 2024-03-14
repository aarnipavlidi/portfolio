import { CustomIconsProps } from '@/types/icons';

const SquareTriangle: React.FC<CustomIconsProps> = ({ color, className, ...props }) => {
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
        d="M12 20H4V4h16v8h-8v8Zm12 4H0V0h24v24Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SquareTriangle;
