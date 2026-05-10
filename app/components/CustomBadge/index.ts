import { h, type FunctionalComponent } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import Component from "@/components/CustomBadge/component.vue";

type CustomBadgeVariant = NonNullable<VariantProps<typeof customBadgeVariants>["variant"]>;
type CustomBadgeTheme = NonNullable<VariantProps<typeof customBadgeVariants>["theme"]>;

export const customBadgeVariants = cva("font-mono px-2 py-1 rounded-none", {
  variants: {
    variant: {
      solid: "border-transparent",
      soft: "border",
      indicator: "border rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold inline-flex items-center",
    },
    theme: {
      primary: "",
      secondary: "",
      muted: "",
      destructive: "",
      success: "",
    },
  },
  compoundVariants: [
    // solid — full fill
    { variant: "solid", theme: "primary", class: "bg-primary text-primary-foreground" },
    { variant: "solid", theme: "secondary", class: "bg-secondary text-secondary-foreground" },
    { variant: "solid", theme: "muted", class: "bg-muted text-muted-foreground" },
    { variant: "solid", theme: "destructive", class: "bg-destructive text-destructive-foreground" },
    { variant: "solid", theme: "success", class: "bg-success text-success-foreground" },
    // soft — tinted bg + themed border/text
    { variant: "soft", theme: "primary", class: "bg-primary/5 border-primary text-primary" },
    { variant: "soft", theme: "secondary", class: "bg-secondary/5 border-secondary text-secondary" },
    { variant: "soft", theme: "muted", class: "bg-muted/5 border-border text-muted-foreground" },
    { variant: "soft", theme: "destructive", class: "bg-destructive/5 border-destructive text-destructive" },
    { variant: "soft", theme: "success", class: "bg-success/5 border-success text-success" },
    // indicator - pill shaped + tinted bg + themed text/border
    { variant: "indicator", theme: "primary", class: "bg-primary/10 border-primary/20 text-primary" },
    { variant: "indicator", theme: "secondary", class: "bg-secondary/10 border-secondary/20 text-secondary" },
    { variant: "indicator", theme: "muted", class: "bg-muted/10 border-border/20 text-muted-foreground" },
    { variant: "indicator", theme: "destructive", class: "bg-destructive/10 border-destructive/20 text-destructive" },
    { variant: "indicator", theme: "success", class: "bg-success/10 border-success/20 text-success" },
  ],
  defaultVariants: {
    variant: "solid",
    theme: "secondary",
  },
});

export interface CustomBadgeProps {
  variant?: CustomBadgeVariant;
  theme?: CustomBadgeTheme;
  pulse?: boolean;
  class?: string;
};

const Solid: FunctionalComponent<Omit<CustomBadgeProps, "variant"> & Record<string, unknown>>
  = (props, { slots }) =>
    h(Component, { ...props, variant: "solid" } as CustomBadgeProps, slots);

const Soft: FunctionalComponent<Omit<CustomBadgeProps, "variant"> & Record<string, unknown>>
  = (props, { slots }) =>
    h(Component, { ...props, variant: "soft" } as CustomBadgeProps, slots);

const Indicator: FunctionalComponent<Omit<CustomBadgeProps, "variant"> & Record<string, unknown>>
  = (props, { slots }) =>
    h(Component, { ...props, variant: "indicator" } as CustomBadgeProps, slots);

export const CustomBadge = { Solid, Soft, Indicator };
export default CustomBadge;
