import { h, type FunctionalComponent } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import Component from "@/components/CustomBadge/component.vue";

type CustomBadgeVariant = NonNullable<VariantProps<typeof customBadgeVariants>["variant"]>;
type CustomBadgeTheme = NonNullable<VariantProps<typeof customBadgeVariants>["theme"]>;

export const customBadgeVariants = cva("font-mono px-2 py-1 rounded-none", {
  variants: {
    variant: {
      solid: "border-transparent",
      soft:  "border",
    },
    theme: {
      primary:     "",
      secondary:   "",
      muted:       "",
      destructive: "",
    },
  },
  compoundVariants: [
    // solid — full fill
    { variant: "solid", theme: "primary",     class: "bg-primary text-primary-foreground" },
    { variant: "solid", theme: "secondary",   class: "bg-secondary text-secondary-foreground" },
    { variant: "solid", theme: "muted",       class: "bg-muted text-muted-foreground" },
    { variant: "solid", theme: "destructive", class: "bg-destructive text-destructive-foreground" },
    // soft — tinted bg + themed border/text
    { variant: "soft",  theme: "primary",     class: "bg-primary/5 border-primary text-primary" },
    { variant: "soft",  theme: "secondary",   class: "bg-secondary/5 border-secondary text-secondary" },
    { variant: "soft",  theme: "muted",       class: "bg-muted/5 border-border text-muted-foreground" },
    { variant: "soft",  theme: "destructive", class: "bg-destructive/5 border-destructive text-destructive" },
  ],
  defaultVariants: {
    variant: "solid",
    theme:   "secondary",
  },
});

export interface CustomBadgeProps {
  variant?: CustomBadgeVariant;
  theme?: CustomBadgeTheme;
  class?: string;
};

const Solid: FunctionalComponent<Omit<CustomBadgeProps, "variant"> & Record<string, unknown>> =
  (props, { slots }) =>
    h(Component, { ...props, variant: "solid" } as CustomBadgeProps, slots)

const Soft: FunctionalComponent<Omit<CustomBadgeProps, "variant"> & Record<string, unknown>> =
  (props, { slots }) =>
    h(Component, { ...props, variant: "soft" } as CustomBadgeProps, slots)

export const CustomBadge = { Solid, Soft };
export default CustomBadge;
