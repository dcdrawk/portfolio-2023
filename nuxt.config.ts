// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '/assets/css/index.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // postcss: {
  //   plugins: {
  //     autoprefixer: {},
  //     // 'postcss-nested': {},
  //     // 'postcss-import': {}
  //   }
  // }
})
