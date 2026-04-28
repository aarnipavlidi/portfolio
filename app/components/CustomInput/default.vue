<script setup lang="ts">
import { cn } from '~/lib/utils'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

const props = defineProps<{
  id: string
  label?: string
  placeholder?: string
  type?: string
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
    <Input
      :id="props.id"
      :type="props.type ?? 'text'"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      :class="cn('border-input bg-background font-sans', props.class)"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
