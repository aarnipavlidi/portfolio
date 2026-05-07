<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/Typography/component.vue";

const { data: experience } = await useAsyncData("experience", () =>
  queryCollection("experience").all(),
);
</script>

<template>
  <section id="experience" class="py-8 px-4 md:px-8">
    <Typography variant="h2" class="mb-4 text-primary">
      Experience
    </Typography>
    <Separator class="mb-8" />

    <div class="relative ml-2 flex flex-col gap-8">
      <div
        v-for="(item, index) in (experience ?? [])"
        :key="item.company"
        class="relative pl-8"
      >
        <!-- Timeline dot: filled primary for current role (no endDate), outlined for past -->
        <div
          :class="cn(
            'absolute left-0 top-1.5 size-3 rounded-full',
            !item.endDate
              ? 'bg-primary'
              : 'bg-background border-2 border-border'
          )"
        />

        <!-- Timeline connector line: hidden on last item -->
        <div
          v-if="index < (experience?.length ?? 0) - 1"
          class="absolute left-1.25 top-5.5 -bottom-8 w-px bg-border"
        />

        <!-- Role + Date row -->
        <div class="flex justify-between items-baseline mb-2">
          <Typography variant="h4">{{ item.role }}</Typography>
          <Typography variant="label" class="text-muted-foreground shrink-0 ml-4">
            {{ item.startDate }} – {{ item.endDate ?? 'Present' }}
          </Typography>
        </div>

        <!-- Company name -->
        <Typography variant="label" as="p" class="text-primary uppercase mb-2">
          {{ item.company }}
        </Typography>

        <!-- Description -->
        <Typography variant="body-sm" class="text-muted-foreground">
          {{ item.description }}
        </Typography>
      </div>
    </div>
  </section>
</template>
