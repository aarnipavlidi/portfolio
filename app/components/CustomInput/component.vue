<script setup lang="ts">
import type { CustomInputProps } from "@/components/CustomInput";
import { useAttrs } from "vue";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<CustomInputProps>();
const modelValue = defineModel<string>();
const attrs = useAttrs();

</script>

<template>
  <div class="flex flex-col gap-2">
    <Label
      v-if="props.label"
      :for="props.id"
      class="text-foreground font-mono text-[0.75rem]"
    >
      {{ props.label }}
    </Label>
    <Input
      v-bind="attrs"
      v-model="modelValue"
      :placeholder="props.placeholder"
      :class="cn('border-input bg-background font-sans text-foreground', props.class)"
    />
  </div>
</template>
