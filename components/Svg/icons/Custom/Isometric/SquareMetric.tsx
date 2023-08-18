import { CustomIconsProps } from '@/types/icons';

const SquareMetric: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
  return (
    <svg
      id={props.name}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 25 28"
      className={`${className} text-${color}`}
      {...props}
    >
      {
        variant === 'solid' && <>
          <path
            fill="current"
            fillOpacity={0.12}
            d="m12.602.144 12 6.928-12 6.928-12-6.928 12-6.928Z"
          />
          <path
            fill="current"
            fillOpacity={0.2}
            d="M24.602 7.072v13.856l-12 6.928V14l12-6.928Z"
          />
          <path
            fill='current'
            fillOpacity={0.42}
            d="m.603 7.072 12 6.928-.001 13.856-12-6.928V7.072Z"
          />
        </>
      }
    </svg>
  );
};

export default SquareMetric;
