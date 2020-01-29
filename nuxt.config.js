require('dotenv').config();
const sitemap = require('./assets/js/sitemap');

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

const env = process.env.NODE_ENV || 'development';
const accessToken = process.env.STORYBLOK_ACCESS_TOKEN || 'VKpYjkSHNfRNvtGWr9nrPgtt';

module.exports = {
  modules: [
    ['storyblok-nuxt', {
      accessToken: accessToken,
      cacheProvider: 'memory'
    }],
    ['@nuxtjs/axios', {
      browserBaseURL: '/'
    }],
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/dotenv',
    'vue-scrollto/nuxt'
  ],
  plugins: [
    { src: '~/plugins/polyfills', ssr: false },
    '~/plugins/components',
    '~/plugins/filters',
    '~/plugins/vuetify',
    { src: '~/plugins/vue-masonry-css' },
    { src: '~/plugins/ga.js', ssr: false},
    { src: '~/plugins/modernizr-custom', ssr: false },
    { src: '~/plugins/recaptcha-v3', ssr: false },
    { src: '~/plugins/vue-awesome-swiper', ssr: false },
    { src: '~/plugins/vimeo-player', ssr: false },
  ],
  router: {
    middleware: [
      'setCacheVersion',
	    'setLinks',
	    'setSettings'
    ]
  },

  serverMiddleware: env === 'development' ? [] : [
    '@/middleware/redirectWww.js',
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: 'Title of the website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Title of the website' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:900|Montserrat:300,500,700|Material+Icons' }
    ],
  },
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    hardSource: true,
    transpile: [/^vuetify/],
    templates: [
      {
        src: './templates/robots.txt',
        dst: '../static/robots.txt'
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.plugins.push(new VuetifyLoaderPlugin());

      if (isClient) {
        config.devtool = 'source-map';
      }

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },

  sitemap: {
      cacheTime: 1,
      async routes() {
          return sitemap(accessToken);
      }
  },

  generate: {
    async routes() {
      return (await sitemap(accessToken)).map(({url}) => url);
    }
  },

  markdownit: {
    injected: true,
    breaks: true,
    linkify: true,
    use: [
        ['markdown-it-link-attributes', {
            pattern: /^https?:/,
            attrs: {
                target: '_blank',
                rel: 'noopener'
            }
        }]
    ]
  }
};
