<script setup lang="ts">
import { cn } from '~/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '~/components/ui/sheet'

const props = defineProps<{
  open?: boolean
  side?: 'left' | 'right' | 'top' | 'bottom'
  class?: string
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()
</script>

<template>
  <Sheet :open="props.open" @update:open="emit('update:open', $event)">
    <SheetContent
      :side="props.side ?? 'right'"
      :class="cn('lg:w-[480px]', props.class)"
    >
      <SheetHeader>
        <SheetTitle>
          <Typography variant="h3">Get in touch</Typography>
        </SheetTitle>
        <SheetDescription>
          <Typography variant="body-sm" class="text-muted-foreground">
            Fill in the form below and I'll get back to you as soon as possible.
          </Typography>
        </SheetDescription>
      </SheetHeader>
      <slot />
    </SheetContent>
  </Sheet>
</template>
