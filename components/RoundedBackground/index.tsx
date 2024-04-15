import classNames from 'classnames';

interface RoundedBackgroundProps {
  variant?: 'primary';
  children: React.ReactNode;
  background?: boolean | null;
  className?: string;
};

const RoundedBackground: React.FC<RoundedBackgroundProps> = ({ variant = 'primary', ...props }) => {
  const backgroundContainer = classNames({
    'rounded-2xl px-4 py-4': props.background,
    'bg-neutral-700 text-neutral-100 dark:text-neutral-200': props.background && variant === 'primary',
    [`${props.className}`]: props.className,
  });

  return (
    <div className={backgroundContainer}>
      {props.children}
    </div>
  );
};

export default RoundedBackground;
