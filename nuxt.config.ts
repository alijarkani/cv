// @ts-ignore
import themes from './themes.ts'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // @ts-ignore
  app: {
    pageTransition: { name: 'slide', mode: 'out-in' }
  },
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
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
        dir: 'ltr',
        name: 'English',
        flag: '🇺🇸',
      },
      {
        code: 'fa',
        file: 'fa.json',
        dir: 'rtl',
        name: 'فارسی',
        flag: '🇮🇷',
      },
    ],
    langDir: 'translations/',
    defaultLocale: 'en',
  }
})
