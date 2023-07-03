import { CustomIconsProps } from '@/types/icons';

const PrimaryFormation: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
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
          <path d="M0 0h5v5H0V0ZM10 10h5v5h-5v-5ZM5 10h5v5H5v-5ZM10 5h5v5h-5V5Z" />
        </>
      }
    </svg>
  );
};

export default PrimaryFormation;
