// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    'shadcn-nuxt',
    '@nuxt/content',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },

  css: [
    '~/app/assets/css/main.css',
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
