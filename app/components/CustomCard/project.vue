<script setup lang="ts">
import { ExternalLink, Github } from 'lucide-vue-next'
import { cn } from '~/lib/utils'
import { Card } from '~/components/ui/card'
import { CustomBadge } from '~/components/CustomBadge'

const props = defineProps<{
  title:        string
  description?: string
  techStack?:   string[]
  liveUrl?:     string
  githubUrl?:   string
  image?:       string
  class?:       string
}>()
</script>

<template>
  <Card
    :class="cn(
      'group flex flex-col bg-card border-border shadow-sm overflow-hidden',
      'hover:border-primary transition-colors',
      props.class
    )"
  >
    <NuxtImg
      v-if="props.image"
      :src="props.image"
      :alt="props.title"
      class="w-full aspect-video object-cover"
    />

    <div class="flex flex-col gap-4 p-4 md:p-8">
      <!-- Title + description -->
      <div class="flex flex-col gap-2">
        <Typography variant="h4" class="group-hover:text-primary transition-colors">
          {{ props.title }}
        </Typography>
        <Typography v-if="props.description" variant="body-sm" class="text-muted-foreground">
          {{ props.description }}
        </Typography>
      </div>

      <!-- Tech stack badges -->
      <div v-if="props.techStack?.length" class="flex flex-wrap gap-2">
        <CustomBadge.Soft
          v-for="tech in props.techStack"
          :key="tech"
          theme="secondary"
        >
          {{ tech }}
        </CustomBadge.Soft>
      </div>

      <!-- Links -->
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
  </Card>
</template>
