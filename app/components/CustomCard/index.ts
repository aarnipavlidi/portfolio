import { h, type SetupContext } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import Component from './component.vue'

export type CustomCardVariant = NonNullable<VariantProps<typeof customCardVariants>['variant']>
export const customCardVariants = cva(
  'border-border shadow-sm overflow-hidden transition-colors',
  {
    variants: {
      variant: {
        project: 'group flex flex-col bg-card hover:border-primary',
        experience: 'bg-card',
      },
    },
    defaultVariants: { variant: 'project' },
  },
);

interface CustomCardBaseProps {
  class?: string
}
export interface CustomCardProjectProps extends CustomCardBaseProps {
  variant: "project";
  title: string;
  description?: string;
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};

export interface CustomCardExperienceProps extends CustomCardBaseProps {
  variant: "experience";
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  location?: string;
};

const Project = (props: Omit<CustomCardProjectProps, 'variant'>, { slots }: SetupContext) =>
  h(Component, { ...props, variant: 'project' } as CustomCardProjectProps, slots)

const Experience = (props: Omit<CustomCardExperienceProps, 'variant'>, { slots }: SetupContext) =>
  h(Component, { ...props, variant: 'experience' } as CustomCardExperienceProps, slots)

export const CustomCard = { Project, Experience }
export default CustomCard
