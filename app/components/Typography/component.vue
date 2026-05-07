<script setup lang="ts">
import { cva } from "class-variance-authority";
import { computed } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(defineProps<{
  variant?: "display" | "h1" | "h2" | "h3" | "h4" | "body-lg" | "body" | "body-sm" | "label" | "mono"
  as?: string
  class?: string
}>(), {
  variant: "body",
  as: undefined,
  class: undefined,
});

const variantTagMap: Record<string, string> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "body-lg": "p",
  body: "p",
  "body-sm": "p",
  label: "span",
  mono: "code",
};

const tag = computed(() => props.as ?? variantTagMap[props.variant]);

const typographyVariants = cva("", {
  variants: {
    variant: {
      display: "font-mono text-[4rem] leading-[1.0] tracking-[-0.04em]",
      h1: "font-mono text-[3rem] leading-[1.1] tracking-[-0.03em]",
      h2: "font-mono text-[2rem] leading-[1.2] tracking-[-0.02em]",
      h3: "font-mono text-[1.5rem] leading-[1.25] tracking-[-0.01em]",
      h4: "font-mono text-[1.25rem] leading-[1.3] tracking-[0]",
      "body-lg": "font-sans text-[1.125rem] leading-[1.5] tracking-[0]",
      body: "font-sans text-[1rem] leading-[1.5] tracking-[0]",
      "body-sm": "font-sans text-[0.875rem] leading-[1.5] tracking-[0]",
      label: "font-mono text-[0.75rem] leading-[1.25] tracking-[0.05em]",
      mono: "font-mono text-[0.875rem] leading-[1.75] tracking-[0]",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

// cn(typographyVariants({ variant: variant ?? "body" }), props.class)
</script>

<template>
  <component
    :is="tag"
    :class="cn(typographyVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </component>
</template>
