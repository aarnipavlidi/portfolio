<script setup lang="ts">
import { cn } from '~/lib/utils'
import { Textarea } from '~/components/ui/textarea'
import { Label } from '~/components/ui/label'

const props = defineProps<{
  id: string
  label?: string
  placeholder?: string
  rows?: number
  modelValue?: string
  class?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <Label v-if="props.label" :for="props.id" class="font-mono text-[0.75rem]">
      {{ props.label }}
    </Label>
    <Textarea
      :id="props.id"
      :placeholder="props.placeholder"
      :rows="props.rows ?? 4"
      :value="props.modelValue"
      :class="cn('border-input bg-background font-sans resize-none', props.class)"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
  </div>
</template>
