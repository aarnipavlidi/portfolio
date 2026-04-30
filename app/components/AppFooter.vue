<script setup lang="ts">
import { Linkedin, Github } from "lucide-vue-next";
import { Separator } from "@/components/ui/separator";
</script>

<template>
  <footer class="py-4 md:px-8">
    <Separator class="mb-8" />

    <div class="flex flex-col gap-4">
      <!-- Social links -->
      <div class="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/aarnipavlidi"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Aarni Pavlidi on LinkedIn"
        >
          <Linkedin :size="16" aria-hidden="true" />
          <Typography variant="label">LinkedIn</Typography>
        </a>
        <a
          href="https://github.com/aarnipavlidi"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Aarni Pavlidi on GitHub"
        >
          <Github :size="16" aria-hidden="true" />
          <Typography variant="label">GitHub</Typography>
        </a>
      </div>

      <!-- Copyright -->
      <Typography variant="label" class="text-muted-foreground">
        © 2026 Aarni Pavlidi.
      </Typography>
    </div>
  </footer>
</template>
