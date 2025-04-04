import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push?.(vuetify({
          autoImport: true,
          styles: {
            configFile: 'assets/styles/settings.scss',
          },
        }))
      })
    },
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-gtag',
  ],

  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  build: {
    transpile: ['vuetify'],
  },

  compatibilityDate: '2025-04-03',

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

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

  content: {
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
})
