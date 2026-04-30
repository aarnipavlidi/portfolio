<script setup lang="ts">
import type { CustomCardProjectProps, CustomCardExperienceProps } from "@/components/CustomCard";
import { customCardVariants } from "@/components/CustomCard";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { CustomBadge } from "@/components/CustomBadge";
import { ExternalLink, Github } from "lucide-vue-next";

const props = defineProps<CustomCardProjectProps | CustomCardExperienceProps>();
</script>

<template>
  <Card :class="cn(customCardVariants({ variant: props.variant }), props.class)">

    <!-- ── Project ──────────────────────────────────────────────── -->
    <template v-if="props.variant === 'project'">
      <NuxtImg
        v-if="props.image"
        :src="props.image"
        class="w-full aspect-video object-cover"
      />
      <div class="flex flex-col gap-4 p-4 md:p-8">
        <div class="flex flex-col gap-2">
          <Typography variant="h4" class="group-hover:text-primary transition-colors">
            {{ props.title }}
          </Typography>
          <Typography v-if="props.description" variant="body-sm" class="text-muted-foreground">
            {{ props.description }}
          </Typography>
        </div>
        <div v-if="props.techStack?.length" class="flex flex-wrap gap-2">
          <CustomBadge.Soft
            v-for="tech in props.techStack"
            theme="secondary"
          >
            {{ tech }}
          </CustomBadge.Soft>
        </div>
        <div v-if="props.liveUrl || props.githubUrl" class="flex gap-4">
          <a
            v-if="props.liveUrl"
            :href="props.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
          >
            <ExternalLink :size="14" aria-hidden="true" />
            Demo
          </a>
          <a
            v-if="props.githubUrl"
            :href="props.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
          >
            <Github :size="14" aria-hidden="true" />
            Source code
          </a>
        </div>
      </div>
    </template>

    <!-- ── Experience ───────────────────────────────────────────── -->
    <template v-else-if="props.variant === 'experience'">
      <div class="flex flex-col gap-4 p-4 md:p-8">
        <div class="flex flex-col gap-2">
          <Typography variant="h4">{{ props.role }}</Typography>
          <Typography variant="label" class="text-primary uppercase">
            {{ props.company }}
          </Typography>
          <Typography variant="label" class="text-muted-foreground">
            {{ props.startDate }} – {{ props.endDate ?? "Present" }}
            <span v-if="props.location"> · {{ props.location }}</span>
          </Typography>
        </div>
        <slot />
      </div>
    </template>

  </Card>
</template>
