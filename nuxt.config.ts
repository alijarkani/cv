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
    '@vite-pwa/nuxt',
  ],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in', duration: 800 },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes,
      }
    },
  },
  i18n,
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Ali Jarkani',
      short_name: 'PersonalWebsite',
      theme_color: '#000',
      icons: [
        {
          src: '/images/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/images/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/images/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
})
