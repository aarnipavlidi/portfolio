<script setup lang="ts">
import { CustomBadge } from '~/components/CustomBadge'
import { Separator } from '~/components/ui/separator'

const { data: skillsData } = await useAsyncData('skills', () =>
  queryCollection('skills').first()
)

const allSkills = computed(() =>
  skillsData.value?.categories?.flatMap(cat => cat.skills) ?? []
)
</script>

<template>
  <section id="skills" class="py-8 px-4 md:px-8">
    <Typography variant="h2" class="mb-4 text-secondary">
      Skills &amp; Technologies
    </Typography>
    <Separator class="mb-8" />

    <div class="flex flex-wrap gap-2">
      <CustomBadge.Solid
        v-for="skill in allSkills"
        :key="skill"
        theme="secondary"
      >
        {{ skill }}
      </CustomBadge.Solid>
    </div>
  </section>
</template>
