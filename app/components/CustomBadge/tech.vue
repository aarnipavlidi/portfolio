<script setup lang="ts">
import { cn } from '~/lib/utils'
import { Badge } from '~/components/ui/badge'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <Badge
    :class="cn('bg-primary/10 text-primary border border-primary/20 font-mono text-[0.75rem]', props.class)"
  >
    <slot />
  </Badge>
</template>
