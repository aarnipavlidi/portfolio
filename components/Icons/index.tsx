import { CustomIconsProps, CustomIconsArrayProps } from '@/types/icons';

// Custom Isometric Icons
import SquareMetric from '@/components/Svg/icons/Custom/Isometric/SquareMetric';

// Custom Icons
import FooterBlock from '@/components/Svg/icons/Custom/FooterBlock';
import HamburgerMenu from '@/components/Svg/icons/Custom/HamburgerMenu';
import OverlayBlock from '@/components/Svg/icons/Custom/OverlayBlock';
import PrimaryFormation from '@/components/Svg/icons/Custom/PrimaryFormation';
import SquareDot from '@/components/Svg/icons/Custom/SquareDot';
import StackingBlock from '@/components/Svg/icons/Custom/StackingBlock';
import TerminalTag from '@/components/Svg/icons/Custom/TerminalTag';

// Custom Social Icons
import GitHub from '@/components/Svg/icons/Custom/Social/GitHub';
import LinkedIn from '@/components/Svg/icons/Custom/Social/LinkedIn';
import Twitter from '@/components/Svg/icons/Custom/Social/Twitter';

// Custom Stack Icons
import GraphQL from '@/components/Svg/icons/Custom/Stack/GraphQL';
import NextJS from '@/components/Svg/icons/Custom/Stack/NextJS';
import React from '@/components/Svg/icons/Custom/Stack/React';
import Tailwindcss from '@/components/Svg/icons/Custom/Stack/Tailwindcss';

// Hero Icons
import ArrowSmallDown from '@/components/Svg/icons/Hero/arrow-small-down';
import ArrowSmallRight from '@/components/Svg/icons/Hero/arrow-small-right';
import ArrowSmallUp from '@/components/Svg/icons/Hero/arrow-small-up';
import ArrowUpRight from '@/components/Svg/icons/Hero/arrow-up-right';
import Bars3 from '@/components/Svg/icons/Hero/bars-3';
import XMark from '@/components/Svg/icons/Hero/x-mark';

const Icons: React.FC<CustomIconsProps> = ({ name, variant = 'solid', ...props }) => {

  const IconsArray: CustomIconsArrayProps = {
    'SquareMetric': SquareMetric,
    'graphql': GraphQL,
    'tailwindcss': Tailwindcss,
    'react': React,
    'nextjs': NextJS,
    'GitHub': GitHub,
    'LinkedIn': LinkedIn,
    'Twitter': Twitter,
    'FooterBlock': FooterBlock,
    'HamburgerMenu': HamburgerMenu,
    'OverlayBlock': OverlayBlock,
    'PrimaryFormation': PrimaryFormation,
    'SquareDot': SquareDot,
    'StackingBlock': StackingBlock,
    'TerminalTag': TerminalTag,
    'arrow-small-down': ArrowSmallDown,
    'arrow-small-right': ArrowSmallRight,
    'arrow-small-up': ArrowSmallUp,
    'arrow-up-right': ArrowUpRight,
    'bars-3': Bars3,
    'x-mark': XMark,
  };

  const Icon = IconsArray[name];

  return (
    <Icon
      name={name}
      variant={variant}
      {...props}
    />
  );
};

export default Icons;
