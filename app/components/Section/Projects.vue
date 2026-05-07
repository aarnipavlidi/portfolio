<script setup lang="ts">
import { CustomCard } from "@/components/CustomCard";
import { Separator } from "@/components/ui/separator";
import Typography from "@/components/Typography/component.vue";

const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").all(),
);
</script>

<template>
  <section id="projects" class="py-8 px-4 md:px-8">
    <Typography variant="h2" class="mb-4 text-muted-foreground">Personal Projects</Typography>
    <Separator class="mb-8" />

    <div class="flex flex-col gap-8">
      <CustomCard.Project
        v-for="project in (projects ?? [])"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :tech-stack="project.techStack"
        :live-url="project.liveUrl"
        :github-url="project.githubUrl"
        :image="project.image"
      />
    </div>
  </section>
</template>
