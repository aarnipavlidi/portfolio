import type  { NamesIconsListFragment } from '@/types/hygraph/graphql';
import type { TypographyProps } from '@/components/Typography';
import Link from 'next/link';
import Icons from '@/components/Icons';
import Typography from '@/components/Typography';

interface NameIconProps {
  item: NamesIconsListFragment;
  nameSize?: TypographyProps['size'];
  className?: string;
  color?: 'current' | 'inherit';
}

const NameIcon: React.FC<NameIconProps> = ({ color = 'current', nameSize = 'base', ...props }) => {
  const showIconStatus = props.item.showIcon;

  const IconsComponent = showIconStatus && (
    <Icons
      name={props.item.icon}
      className={props.className}
      color={color}
    />
  );

  const TypographyComponent = !showIconStatus && (
    <Typography
      content={props.item.name}
      size={nameSize}
      tag='span'
      className={props.className}
    />
  );

  if (props.item.href) {
    return (
      <Link href={props.item.href} target={props.item.hrefType || '_self'}>
        {IconsComponent}
        {TypographyComponent}
      </Link>
    )
  };

  return (
    <>
      {IconsComponent}
      {TypographyComponent}
    </>
  )
};

export default NameIcon;