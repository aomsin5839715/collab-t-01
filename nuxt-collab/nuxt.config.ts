// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      script: [{ src: 'https://unpkg.com/wavesurfer.js@6.6.4/dist/wavesurfer.js' }],
    },
  },
  
})