import { defineCollection, defineContentConfig, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      type: "page",
      source: "experience/*.md",
      schema: z.object({
        role: z.string(),
        company: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        location: z.string().optional(),
        techStack: z.array(z.string()),
        description: z.string().optional(),
      }),
    }),
    projects: defineCollection({
      type: "page",
      source: "projects/*.md",
      schema: z.object({
        title: z.string(),
        techStack: z.array(z.string()),
        liveUrl: z.string().url().optional(),
        githubUrl: z.string().url().optional(),
        featured: z.boolean().default(false),
        image: z.string().optional(),
        description: z.string().optional(),
      }),
    }),
    skills: defineCollection({
      type: "page",
      source: "skills.md",
      schema: z.object({
        categories: z.array(
          z.object({
            name: z.string(),
            skills: z.array(z.string()),
          })
        ),
      }),
    }),
  },
});
