<script setup lang="ts">
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'

const props = defineProps<{
  size?: 'sm' | 'default' | 'lg'
  class?: string
}>()
</script>

<template>
  <Button
    :size="props.size ?? 'default'"
    :class="cn('bg-primary text-primary-foreground hover:bg-primary/90 font-mono', props.class)"
  >
    <slot />
  </Button>
</template>
