import type { Content } from '@prismicio/client';
import type { HeroIconFragment, ButtonFragment } from '@/types/prismic/graphql/graphql';
import classNames from 'classnames';

import CustomLink from '@/components/CustomLink';
import Typography from '@/components/Typography';
import Icons from '@/components/Icons';

interface ButtonProps {
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  content: string;
  icon?: HeroIconFragment | null;
  button: ButtonFragment;
  // For now keeping "iconAlign" props out of reach from
  // Prismic end. Adding it later maybe as extra field. TODO
  iconAlign?: 'left' | 'right';
  onClick?: () => void;
  href?: string | null;
}

const Button: React.FC<ButtonProps> = ({ iconAlign = 'right', type = 'button', ...props }) => {

  const getCurrentButton = {
    variant: props.button.variant,
    size: props.button.size,
    full_width: props.button.full_width,
  } as Content.ButtonDocumentData;

  const getButtonIcon = props.icon
    ? {
      name: props.icon.name,
      variant: props.icon.variant,
    } as Content.HeroiconDocumentData
    : null;

  const buttonContainer = classNames({
    'rounded-bl-xl rounded-tr-xl py-2 px-4 flex self-baseline items-center': true,
    'border-2 border-neutral-900 shadow-neutral-900/50 shadow hover:shadow-none': true,
    [`${props.className}`]: props.className,
    'justify-center w-full': !props.icon && getCurrentButton.full_width,
    'justify-between w-full': props.icon && getCurrentButton.full_width,
    'gap-2': props.icon,
    'flex-row': props.icon && iconAlign === 'right',
    'flex-row-reverse': props.icon && iconAlign === 'left',
    'bg-neutral-900 text-neutral-100': getCurrentButton.variant === 'primary',
    'bg-neutral-100 text-neutral-900': getCurrentButton.variant === 'secondary',
  });

  if (props.href) {
    return (
      <div id={props.id} className={`${buttonContainer}`}>
        <CustomLink
          href={props.href}
          content={props.content}
          size={getCurrentButton.size}
          className='font-pier-sans'
        />
        {
          getButtonIcon && <Icons
            name={getButtonIcon.name}
            className={getCurrentButton.size === 'xs' || getCurrentButton.size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'}
            color="inherit"
            variant={getCurrentButton.size === 'xs' || getCurrentButton.size === 'sm' ? 'mini' : getButtonIcon.variant}
          />
        }
      </div>
    );
  }

  return (
    <button id={props.id} type={type} className={`${buttonContainer}`} onClick={props.onClick}>
      <Typography
        content={props.content}
        tag="span"
        size={getCurrentButton.size}
        className='font-pier-sans'
      />
      {
        getButtonIcon && <Icons
          name={getButtonIcon.name}
          className={getCurrentButton.size === 'xs' || getCurrentButton.size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'}
          color="inherit"
          variant={getCurrentButton.size === 'xs' || getCurrentButton.size === 'sm' ? 'mini' : getButtonIcon.variant}
        />
      }
    </button>
  );
};

export default Button;
