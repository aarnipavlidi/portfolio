import type { TypographyProps } from '@/components/Typography';
import type { HTMLAttributeAnchorTarget } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface CustomLinkProps {
  key?: string | null;
  legacyBehavior?: boolean;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
  content: string;
  size?: TypographyProps['size']
  align?: TypographyProps['align']
}

const CustomLink: React.FC<CustomLinkProps> = ({ legacyBehavior = false, size = 'base', ...props }) => {

  const linkContainer = classNames({
    [`text-${size}`]: true,
    [`${props.className}`]: props.className,
    [`text-${props.align}`]: props.align,
  });

  return (
    <Link key={props.key} href={props.href} legacyBehavior={legacyBehavior} className={linkContainer} target={props.target}>
      {props.content}
    </Link>
  );
};

export default CustomLink;
