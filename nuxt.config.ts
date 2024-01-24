import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true,
          styles: {
            configFile: 'assets/styles/settings.scss'
          }
        }))
      })
    },
    '@nuxtjs/eslint-module',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-gtag'
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  content: {
    highlight: {
      theme: 'github-light'
    },
    markdown: {
      anchorLinks: false
    }
  },
  googleFonts: {
    families: {
      Montserrat: true
    }
  }
})
