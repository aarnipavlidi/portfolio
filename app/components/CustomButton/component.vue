<script setup lang="ts">
import type { CustomButtonProps } from "@/components/CustomButton";
import { customButtonVariants } from "@/components/CustomButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SHADCN_VARIANT_MAP = {
  solid: "default",
  outline: "outline",
  ghost: "ghost",
  link: "link",
} as const;

const props = withDefaults(defineProps<CustomButtonProps>(), {
  variant: "solid",
  theme: "primary",
  transition: false,
  size: "default",
  disabled: false,
  type: "button",
});

</script>

<template>
  <Button
    :variant="SHADCN_VARIANT_MAP[props.variant ?? 'solid']"
    :size="props.size"
    :disabled="props.disabled"
    :type="props.type"
    :class="cn(customButtonVariants({ variant: props.variant, theme: props.theme, transition: props.transition }), props.class)"
  >
    <slot />
  </Button>
</template>
