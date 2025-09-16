import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: 'Ismael Luan Lawrenz - Engenheiro de Sofware',
      htmlAttrs: {
        lang: 'pt',
      },
      meta: [
        { name: 'description', content: 'Engenheiro de software especializado em desenvolvimento com Java e GO.' },
        { name: 'keywords', content: 'desenvolvimento, software, desenvolvedor, fron-end, back-end, Concórdia,programador, web' },
        { name: 'author', content: 'Ismael Luan Lawrenz' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'Ill.ico' },
      ]
    }
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'pt',
    strategy: 'prefix_and_default',      
    
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pt', name: 'Portugues', file: 'pt.json' }
    ]
  }
})