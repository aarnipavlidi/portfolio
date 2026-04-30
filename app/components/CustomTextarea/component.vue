<script setup lang="ts">
import { computed } from "vue"
import type { CustomTextareaProps } from "@/components/CustomTextarea"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const props = defineProps<CustomTextareaProps>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

// Pass HTML-only attrs via v-bind object so Volar doesn't check keys
// against Textarea's declared props (id/placeholder/rows are fallthrough attrs)
const textareaAttrs = computed(() => ({
  id:          props.id,
  placeholder: props.placeholder,
  rows:        props.rows ?? 4,
}));
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label v-if="props.label" :for="props.id" class="font-mono text-[0.75rem]">
      {{ props.label }}
    </Label>
    <Textarea
      v-bind="textareaAttrs"
      :model-value="props.modelValue"
      :class="cn('border-input bg-background font-sans resize-none', props.class)"
      @update:model-value="emit('update:modelValue', String($event))"
    />
  </div>
</template>
