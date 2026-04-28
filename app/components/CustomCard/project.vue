<script setup lang="ts">
import { cn } from '~/lib/utils'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '~/components/ui/card'

const props = defineProps<{
  title: string
  description?: string
  liveUrl?: string
  githubUrl?: string
  image?: string
  class?: string
}>()
</script>

<template>
  <Card :class="cn('bg-card border-border shadow-sm overflow-hidden', props.class)">
    <div v-if="props.image" class="w-full aspect-video overflow-hidden">
      <img :src="props.image" :alt="props.title" class="w-full h-full object-cover" />
    </div>
    <CardHeader>
      <CardTitle>
        <Typography variant="h4">{{ props.title }}</Typography>
      </CardTitle>
      <CardDescription v-if="props.description">
        <Typography variant="body-sm" class="text-muted-foreground">{{ props.description }}</Typography>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
    <CardFooter v-if="props.liveUrl || props.githubUrl" class="gap-3">
      <slot name="footer" />
    </CardFooter>
  </Card>
</template>
