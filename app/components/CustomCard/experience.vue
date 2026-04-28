<script setup lang="ts">
import { cn } from '~/lib/utils'
import { Card, CardHeader, CardContent } from '~/components/ui/card'

const props = defineProps<{
  role: string
  company: string
  startDate: string
  endDate?: string
  location?: string
  class?: string
}>()
</script>

<template>
  <Card :class="cn('bg-card border-border shadow-sm', props.class)">
    <CardHeader class="pb-2">
      <div class="flex flex-col gap-1">
        <Typography variant="h4">{{ props.role }}</Typography>
        <Typography variant="label" class="text-primary uppercase">
          {{ props.company }}
        </Typography>
        <Typography variant="label" class="text-muted-foreground">
          {{ props.startDate }} – {{ props.endDate ?? 'Present' }}
          <span v-if="props.location"> · {{ props.location }}</span>
        </Typography>
      </div>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
  </Card>
</template>
