<script setup lang="ts">
import { computed } from "vue"
import type { CustomInputProps } from "@/components/CustomInput"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const props = defineProps<CustomInputProps>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

// Pass HTML-only attrs via v-bind object so Volar doesn't check keys
// against Input's declared props (id/type/placeholder are fallthrough attrs)
const inputAttrs = computed(() => ({
  id: props.id,
  type:        props.type ?? "text",
  placeholder: props.placeholder,
}));
</script>

<template>
  <div class="flex flex-col gap-2">
    <Label v-if="props.label" :for="props.id" class="font-mono text-[0.75rem]">
      {{ props.label }}
    </Label>
    <Input
      v-bind="inputAttrs"
      :model-value="props.modelValue"
      :class="cn('border-input bg-background font-sans', props.class)"
      @update:model-value="emit('update:modelValue', String($event))"
    />
  </div>
</template>
