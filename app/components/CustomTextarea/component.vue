<script setup lang="ts">
import type { CustomTextareaProps } from "@/components/CustomTextarea";
import { useAttrs } from "vue";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<CustomTextareaProps>();
const modelValue = defineModel<string>();
const attrs = useAttrs();
</script>

<template>
  <div :class="cn('flex flex-col gap-2', props.class)">
    <Label
      v-if="label"
      :for="props.id"
      class="text-foreground font-mono text-[0.75rem]"
    >
      {{ label }}
    </Label>
    <Textarea
      v-bind="attrs"
      v-model="modelValue"
      :placeholder="props.placeholder"
      :class="cn(
        'border-input bg-background font-sans text-foreground resize-none'
      )"
    />
  </div>
</template>
