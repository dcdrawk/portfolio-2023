// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '/assets/css/index.css'
  ],

  image: {},

  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2??family=Open+Sans&family=Rubik&display=swap' }
      ]
    }
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
})
