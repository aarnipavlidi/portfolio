import { CustomIconsProps } from '@/types/icons';

const SquareDot: React.FC<CustomIconsProps> = ({ color, className, ...props }) => {
  return (
    <svg
      id={props.name}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={`${className} text-${color}`}
      {...props}
    >
      <path d="M4 4h16v16H4V4Z" />
    </svg>
  );
};

export default SquareDot;
