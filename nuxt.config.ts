// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=3" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      ],
    },
  },

  runtimeConfig: {
    resendApiKey: "",
    contactEmailTo: "",
    contactEmailFrom: "",
  },

  routeRules: {
    "/": { prerender: true },
  },
  typescript: {
    tsConfig: {
      vueCompilerOptions: {
        // Enforce strict prop checking in templates.
        // Without this, passing unknown props (e.g. company="" on
        // <CustomCard.Project>) produces no error.
        strictTemplates: true,
      },
    },
  },
  modules: [
    "shadcn-nuxt",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxt/eslint",
  ],

  colorMode: {
    preference: "system",
    classSuffix: "",
  },

  shadcn: {
    prefix: "",
    componentDir: "@/components/ui",
  },

  css: [
    "~/assets/css/tailwind.css",
    "vue-sonner/style.css",
  ],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "@vueuse/core",
      ],
    },
  },
});
