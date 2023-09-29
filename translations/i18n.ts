import { NuxtI18nOptions } from '@nuxtjs/i18n/dist/module.d'

const i18n: NuxtI18nOptions = {
  locales: [
    {
      code: 'en',
      dir: 'ltr',
      name: 'English',
      flag: '🇺🇸',
      files: ['en.json', 'en-vuetify.json']
    },
    {
      code: 'fa',
      dir: 'rtl',
      name: 'فارسی',
      flag: '🇮🇷',
      files: ['fa.json', 'fa-vuetify.json']
    },
  ],
  langDir: 'translations/',
  defaultLocale: 'en',
}

export default i18n
