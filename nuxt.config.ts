// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify']
  },
  css: ['vuetify/styles'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})


