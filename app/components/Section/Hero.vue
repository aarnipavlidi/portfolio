<script setup lang="ts">
import { CustomButton } from '~/components/CustomButton'

const { open: openContact } = useContactSheet()

const scrollToExperience = () => {
  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="about" class="py-16 px-4 md:pt-16 md:pb-16 md:px-8">
    <div>
      <Typography variant="h1">Hi, I'm Aarni Pavlidi</Typography>
      <Typography variant="h1" class="md:text-primary">Software Engineer.</Typography>

      <Typography variant="body-lg" class="text-muted-foreground mt-8 max-w-lg">
        Passionate software developer with a background in circular economy studies, which led me to discover my love for programming. Highly skilled in frontend development, building scalable applications from scratch.
      </Typography>

      <!-- Mobile CTAs -->
      <div class="flex gap-4 mt-8 md:hidden">
        <a href="https://linkedin.com/in/aarnipavlidi" target="_blank" rel="noopener noreferrer">
          <CustomButton.Ghost>LinkedIn</CustomButton.Ghost>
        </a>
        <CustomButton.Primary @click="openContact">Contact Me</CustomButton.Primary>
      </div>

      <!-- Desktop CTAs -->
      <div class="hidden md:flex gap-4 mt-8">
        <CustomButton.Primary @click="scrollToExperience">View Experience</CustomButton.Primary>
        <CustomButton.Ghost @click="openContact">Contact Me</CustomButton.Ghost>
      </div>
    </div>
  </section>
</template>
