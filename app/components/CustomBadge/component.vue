<script setup lang="ts">
import type { CustomBadgeProps } from "@/components/CustomBadge";
import { customBadgeVariants } from "@/components/CustomBadge";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const props = defineProps<CustomBadgeProps>();
</script>

<template>
  <Badge :class="cn(customBadgeVariants({ variant: props.variant, theme: props.theme }), props.class)">
    <span v-if="props.variant === 'indicator'" class="relative flex h-2 w-2 mr-1.5 shrink-0">
      <span v-if="props.pulse" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
      <span class="relative inline-flex rounded-full h-2 w-2 bg-current" />
    </span>
    <slot />
  </Badge>
</template>
