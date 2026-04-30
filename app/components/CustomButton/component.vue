<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

/**
 * CustomButton — wraps shadcn <Button> and layers the project's
 * variant × theme CVA system on top.
 *
 * variant → visual structure (solid | outline | ghost | link)
 * theme   → color pair from the design token palette
 */

const SHADCN_VARIANT_MAP = {
  solid:   'default',
  outline: 'outline',
  ghost:   'ghost',
  link:    'link',
} as const

const buttonVariants = cva('font-mono', {
  variants: {
    variant: {
      solid:   '',
      outline: '',
      ghost:   '',
      link:    'p-0 h-auto underline-offset-4',
    },
    theme: {
      primary:     '',
      secondary:   '',
      muted:       '',
      destructive: '',
    },
    transition: {
      false: '',
      true: 'transition-colors transition-discrete ease-in-out duration-300',
    },
  },
  compoundVariants: [
    // solid
    { variant: 'solid',   theme: 'primary',     class: 'bg-primary text-primary-foreground hover:bg-primary/90' },
    { variant: 'solid',   theme: 'secondary',   class: 'bg-secondary text-secondary-foreground hover:bg-secondary/90' },
    { variant: 'solid',   theme: 'muted',       class: 'bg-muted text-muted-foreground hover:bg-muted/80' },
    { variant: 'solid',   theme: 'destructive', class: 'bg-destructive text-destructive-foreground hover:bg-destructive/90' },
    // outline
    { variant: 'outline', theme: 'primary',     class: 'border-primary text-primary hover:bg-accent hover:text-accent-foreground' },
    {
      variant: 'outline',
      theme: 'secondary',
      class: 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground'
    },
    { variant: 'outline', theme: 'destructive', class: 'border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground' },
    // ghost
    { variant: 'ghost',   theme: 'primary',     class: 'text-foreground hover:bg-accent hover:text-accent-foreground' },
    { variant: 'ghost',   theme: 'destructive', class: 'text-destructive hover:bg-destructive hover:text-destructive-foreground' },
    // link
    { variant: 'link',    theme: 'primary',     class: 'text-primary' },
    { variant: 'link',    theme: 'secondary',   class: 'text-secondary' },
  ],
  defaultVariants: {
    variant: 'solid',
    theme: 'primary',
    transition: false,
  },
})

type ButtonVariants = VariantProps<typeof buttonVariants>

const props = withDefaults(defineProps<{
  variant?: ButtonVariants['variant']
  transition?: ButtonVariants['transition']
  theme?:   ButtonVariants['theme']
  size?:    'sm' | 'default' | 'lg'
  class?:   string
}>(), {
  variant: 'solid',
  transition: false,
  theme:   'primary',
  size:    'default',
})
</script>

<template>
  <Button
    :variant="SHADCN_VARIANT_MAP[variant ?? 'solid']"
    :size="size"
    :class="cn(buttonVariants({ variant, transition, theme }), props.class)"
  >
    <slot />
  </Button>
</template>
