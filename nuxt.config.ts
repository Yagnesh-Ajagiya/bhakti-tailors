import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2026-04-12',
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['@/assets/css/main.css'],
  nitro: {
    compressPublicAssets: true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'light'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#bc004b' }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.icon' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ]
    }
  }
})
