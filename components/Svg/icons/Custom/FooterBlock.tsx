import { CustomIconsProps } from '@/types/icons';

const FooterBlock: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, ...props }) => {
  return (
    <svg
      id={props.name}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 735 208"
      preserveAspectRatio="none"
      className={`${className} text-${color}`}
      {...props}
    >
      {
        variant === 'solid' && <>
          <path d="M0 0H73.5V29.44H147V73.6H220.5V32H294V112H367.5V41.6H441V122.88H514.5V5.12H588V24.96H661.5V72.96H735V83.84V208H661.5H588H514.5H441H367.5H294H220.5H147H73.5H0V0Z" />
        </>
      }
    </svg>
  );
};

export default FooterBlock;
