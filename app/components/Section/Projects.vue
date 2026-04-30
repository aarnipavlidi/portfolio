<script setup lang="ts">
import { CustomBadge } from '~/components/CustomBadge'
import { ExternalLink, Github } from 'lucide-vue-next'
import { Separator } from '~/components/ui/separator'

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').all()
)
</script>

<template>
  <section id="projects" class="py-16 px-4 md:px-8">
    <Typography variant="h2" class="mb-4">Projects</Typography>
    <Separator class="mb-8" />

    <div class="flex flex-col gap-8">
      <div
        v-for="project in (projects ?? [])"
        :key="project.title"
        class="group flex flex-col gap-4 p-4 md:p-8 rounded-lg bg-card border border-border shadow-sm hover:border-primary transition-colors"
      >
        <Typography variant="h4" class="group-hover:text-primary transition-colors">
          {{ project.title }}
        </Typography>
        <Typography variant="body-sm" class="text-muted-foreground">
          {{ project.description }}
        </Typography>
        <div class="flex flex-wrap gap-2">
          <CustomBadge.Tech v-for="tech in project.techStack" :key="tech">
            {{ tech }}
          </CustomBadge.Tech>
        </div>
        <div class="flex gap-4">
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
          >
            <ExternalLink :size="14" aria-hidden="true" />
            Demo
          </a>
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-sm"
          >
            <Github :size="14" aria-hidden="true" />
            Source code
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
