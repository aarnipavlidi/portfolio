<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { Badge } from '~/components/ui/badge'
import { cn } from '~/lib/utils'

/**
 * CustomBadge — wraps shadcn <Badge> and layers the project's
 * variant × theme CVA system on top.
 *
 * variant → visual structure:
 *   solid — full background fill, foreground text
 *   soft  — tinted bg (75% opacity), theme-colored border + text
 *
 * theme → color pair from the design token palette
 */

const badgeVariants = cva('font-mono px-2 py-1 rounded-none', {
  variants: {
    variant: {
      solid: 'border-transparent',
      soft:  'border',
    },
    theme: {
      primary:     '',
      secondary:   '',
      muted:       '',
      destructive: '',
    },
  },
  compoundVariants: [
    // solid — full fill
    { variant: 'solid', theme: 'primary',     class: 'bg-primary text-primary-foreground' },
    { variant: 'solid', theme: 'secondary',   class: 'bg-secondary text-secondary-foreground' },
    { variant: 'solid', theme: 'muted',       class: 'bg-muted text-muted-foreground' },
    { variant: 'solid', theme: 'destructive', class: 'bg-destructive text-destructive-foreground' },
    // soft — tinted bg + themed border/text (bg opacity can be tweaked)
    { variant: 'soft',  theme: 'primary',     class: 'bg-primary/5 border-primary text-primary' },
    { variant: 'soft',  theme: 'secondary',   class: 'bg-secondary/5 border-secondary text-secondary' },
    { variant: 'soft',  theme: 'muted',       class: 'bg-muted/5 border-border text-muted-foreground' },
    { variant: 'soft',  theme: 'destructive', class: 'bg-destructive/5 border-destructive text-destructive' },
  ],
  defaultVariants: {
    variant: 'solid',
    theme:   'secondary',
  },
})

type BadgeVariants = VariantProps<typeof badgeVariants>

const props = withDefaults(defineProps<{
  variant?: BadgeVariants['variant']
  theme?:   BadgeVariants['theme']
  class?:   string
}>(), {
  variant: 'solid',
  theme:   'secondary',
})
</script>

<template>
  <Badge :class="cn(badgeVariants({ variant, theme }), props.class)">
    <slot />
  </Badge>
</template>
