import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/eslint-module',
    '@nuxt/content',
    '@nuxtjs/google-fonts'
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
      theme: 'github-dark'
    }
  },
  googleFonts: {
    families: {
      Montserrat: true
    }
  }
})
