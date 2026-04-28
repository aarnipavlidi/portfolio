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
    variant="ghost"
    :size="props.size ?? 'default'"
    :class="cn('text-foreground hover:bg-accent hover:text-accent-foreground font-mono', props.class)"
  >
    <slot />
  </Button>
</template>
