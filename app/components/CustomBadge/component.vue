<script setup lang="ts">
import type { CustomBadgeProps } from "@/components/CustomBadge";
import { customBadgeVariants } from "@/components/CustomBadge";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const props = defineProps<CustomBadgeProps>();
</script>

<template>
  <Badge :class="cn(customBadgeVariants({ variant: props.variant, theme: props.theme }), props.class)">
    <slot />
  </Badge>
</template>
