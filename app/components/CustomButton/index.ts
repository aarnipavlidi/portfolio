import { h, type FunctionalComponent, type HTMLAttributes, type VNodeProps, type AllowedComponentProps } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import Component from "@/components/CustomButton/component.vue";

type CustomButtonVariant = NonNullable<VariantProps<typeof customButtonVariants>["variant"]>;
type CustomButtonTheme = NonNullable<VariantProps<typeof customButtonVariants>["theme"]>;

export const customButtonVariants = cva("font-mono", {
  variants: {
    variant: {
      solid: "",
      outline: "",
      ghost: "",
      link: "p-0 h-auto underline-offset-4",
    },
    theme: {
      primary: "",
      secondary: "",
      muted: "",
      destructive: "",
    },
    transition: {
      false: "",
      true: "transition-colors transition-discrete ease-in-out duration-300",
    },
  },
  compoundVariants: [
    // solid
    { variant: "solid", theme: "primary", class: "bg-primary text-primary-foreground hover:bg-primary/90" },
    { variant: "solid", theme: "secondary", class: "bg-secondary text-secondary-foreground hover:bg-secondary/90" },
    { variant: "solid", theme: "muted", class: "bg-muted text-muted-foreground hover:bg-muted/80" },
    { variant: "solid", theme: "destructive", class: "bg-destructive text-destructive-foreground hover:bg-destructive/90" },
    // outline
    { variant: "outline", theme: "primary", class: "border-primary text-primary hover:bg-accent hover:text-accent-foreground" },
    { variant: "outline", theme: "secondary", class: "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground" },
    { variant: "outline", theme: "destructive", class: "border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground" },
    // ghost
    { variant: "ghost", theme: "primary", class: "text-foreground hover:bg-accent hover:text-accent-foreground" },
    { variant: "ghost", theme: "destructive", class: "text-destructive hover:bg-destructive hover:text-destructive-foreground" },
    // link
    { variant: "link", theme: "primary", class: "text-primary" },
    { variant: "link", theme: "secondary", class: "text-secondary" },
  ],
  defaultVariants: {
    variant: "solid",
    theme: "primary",
    transition: false,
  },
});

type CustomButtonFunctionalProps = Omit<CustomButtonProps, "variant"> & HTMLAttributes & VNodeProps & AllowedComponentProps;

export interface CustomButtonProps {
  variant?: CustomButtonVariant;
  theme?: CustomButtonTheme;
  transition?: boolean;
  size?: "sm" | "default" | "lg";
  class?: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
};

const Solid: FunctionalComponent<CustomButtonFunctionalProps>
  = (props, { slots }) =>
    h(Component, { ...props, variant: "solid" } as CustomButtonProps, slots);

const Outline: FunctionalComponent<CustomButtonFunctionalProps>
  = (props, { slots }) =>
    h(Component, { ...props, variant: "outline" } as CustomButtonProps, slots);

const Ghost: FunctionalComponent<CustomButtonFunctionalProps>
  = (props, { slots }) =>
    h(Component, { ...props, variant: "ghost" } as CustomButtonProps, slots);

const Link: FunctionalComponent<CustomButtonFunctionalProps>
  = (props, { slots }) =>
    h(Component, { ...props, variant: "link" } as CustomButtonProps, slots);

export const CustomButton = { Solid, Outline, Ghost, Link };
export default CustomButton;
