<script setup lang="ts">
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'

const props = defineProps<{
  href?: string
  size?: 'sm' | 'default' | 'lg'
  class?: string
}>()
</script>

<template>
  <Button
    variant="link"
    :size="props.size ?? 'default'"
    :as="props.href ? 'a' : undefined"
    :href="props.href"
    :class="cn('text-primary font-mono p-0 h-auto underline-offset-4', props.class)"
  >
    <slot />
  </Button>
</template>
