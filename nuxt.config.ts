import themes from './themes'
import i18n from './translations/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    '@/node_modules/vazirmatn/Vazirmatn-font-face.css',
    '@/assets/style/main.scss',
    '@/assets/style/fonts.css'
  ],
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes,
      }
    },
  },
  i18n,
})
