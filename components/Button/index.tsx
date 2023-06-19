import type { CustomIconsProps } from '@/types/icons';
import classNames from 'classnames';

import CustomLink from '@/components/CustomLink';
import Typography from '@/components/Typography';
import Icons from '@/components/Icons';

type ButtonVariantProps = 'primary' | 'secondary';
type ButtonSizeProps = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

interface ButtonProps {
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: string | null;
  size?: string | null;
  fullWidth?: boolean | null;
  className?: string;
  content: string;
  icon?: CustomIconsProps['name'];
  iconAlign?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  iconAlign = 'right',
  type = 'button',
  ...props
}) => {

  const getButtonSize = (props.size ? props.size : 'base') as ButtonSizeProps;
  const getButtonVariant = (props.variant ? props.variant : 'primary') as ButtonVariantProps;
  const getButtonFullWidth = (props.fullWidth ? props.fullWidth : false) as boolean;

  const buttonContainer = classNames({
    'rounded-bl-xl rounded-tr-xl py-2 px-4 flex self-baseline items-center': true,
    'border-2 border-neutral-900 shadow-neutral-900/50 shadow hover:shadow-none': true,
    [`${props.className}`]: props.className,
    'justify-center w-full': !props.icon && getButtonFullWidth,
    'justify-between w-full': props.icon && getButtonFullWidth,
    'gap-2': props.icon,
    'flex-row': props.icon && iconAlign === 'right',
    'flex-row-reverse': props.icon && iconAlign === 'left',
    'bg-neutral-900 text-neutral-100': getButtonVariant === 'primary',
    'bg-neutral-100 text-neutral-900': getButtonVariant === 'secondary',
  });

  if (props.href) {
    return (
      <div id={props.id} className={`${buttonContainer} mt-5`}>
        <CustomLink
          href={props.href}
          content={props.content}
          size={getButtonSize}
          className='font-pier-sans'
        />
        {
          props.icon && <Icons
            name={props.icon}
            className={getButtonSize === 'xs' || getButtonSize === 'sm' ? 'w-5 h-5' : 'w-6 h-6'}
            color="inherit"
            variant={getButtonSize === 'xs' || getButtonSize === 'sm' ? 'mini' : 'outline'}
          />
        }
      </div>
    );
  }

  return (
    <button id={props.id} type={type} className={`${buttonContainer} mt-5`} onClick={props.onClick}>
      <Typography
        content={props.content}
        tag="span"
        size={getButtonSize}
        className='font-pier-sans'
      />
      {
        props.icon && <Icons
          name={props.icon}
          className={getButtonSize === 'xs' || getButtonSize === 'sm' ? 'w-5 h-5' : 'w-6 h-6'}
          color="inherit"
          variant={getButtonSize === 'xs' || getButtonSize === 'sm' ? 'mini' : 'outline'}
        />
      }
    </button>
  );
};

export default Button;
