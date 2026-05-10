<script setup lang="ts">
import type { CustomSheetProps } from "@/components/CustomSheet";
import { DESKTOP_BREAKPOINT } from "@@/shared/utils/constants";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Typography from "@/components/Typography/component.vue";

const props = defineProps<CustomSheetProps>();

const emit = defineEmits<{
  "update:open": [value: boolean];
}>();

// On mobile: slide up from bottom (full screen)
// On desktop lg+: slide in from right (partial width)
const { width } = useWindowSize();
const isDesktop = computed(() => width.value >= DESKTOP_BREAKPOINT);
const side = computed(() => (isDesktop.value ? "right" : "bottom"));
</script>

<template>
  <Sheet :open="props.open" @update:open="emit('update:open', $event)">
    <SheetContent
      :side="side"
      :class="cn(
        'dark bg-background text-foreground flex flex-col gap-0 p-0 custom-sheet-content',
        isDesktop ? 'w-[480px] h-full' : 'w-full h-full rounded-t-xl',
        props.class
      )"
    >
      <SheetHeader class="px-6 pt-6 pb-4">
        <SheetTitle>
          <Typography variant="h3">Let's connect.</Typography>
        </SheetTitle>
        <SheetDescription>
          <Typography variant="body-sm" class="text-muted-foreground">
            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
          </Typography>
        </SheetDescription>
      </SheetHeader>

      <div class="flex-1 overflow-y-auto px-6 pb-6">
        <slot />
      </div>
    </SheetContent>
  </Sheet>
</template>
