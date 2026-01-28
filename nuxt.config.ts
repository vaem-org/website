// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-gtag',
    'nuxt-studio',
  ],

  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-light',
        },
      },
    },
    renderer: {
      anchorLinks: false,
    },
  },
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-04-03',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  studio: {
    i18n: {
      defaultLocale: 'nl',
    },
    auth: {
      gitlab: {},
    },
  },
})
