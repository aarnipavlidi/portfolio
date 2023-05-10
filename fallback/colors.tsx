import type { FallBackColorProps } from '@/types/prismic';
import theme from '@/styles/theme';

const getCurrentColors = theme;

const fallBackColors: FallBackColorProps = {
  component: {
    navigation: {
      element: {
        default: {
          light: {
            name: getCurrentColors.light['900'].name,
          },
        },
      },
    },
  },
};

export default fallBackColors;
