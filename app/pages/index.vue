<script setup lang="ts">
import { Section } from "@/components/Section";

useSeoMeta({
  title: "Aarni Pavlidi — Software Engineer",
  description: "Passionate software developer with a background in circular economy studies. Highly skilled in frontend development, building scalable applications from scratch.",
  ogTitle: "Aarni Pavlidi — Software Engineer",
  ogDescription: "Passionate software developer with a background in circular economy studies. Highly skilled in frontend development, building scalable applications from scratch.",
  ogImage: "https://aarni.dev/og.jpg",
  ogUrl: "https://aarni.dev",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterTitle: "Aarni Pavlidi — Software Engineer",
  twitterDescription: "Passionate software developer with a background in circular economy studies. Highly skilled in frontend development, building scalable applications from scratch.",
  twitterImage: "https://aarni.dev/og.jpg",
});
</script>

<template>
  <div>
    <Section.Hero />
    <Section.Skills />
    <Section.Experience />
    <Section.Projects />
  </div>
</template>
