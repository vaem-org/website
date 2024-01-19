import '@mdi/font/css/materialdesignicons.css'

import '@/assets/styles/main.scss'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light'
    }
  })
  app.vueApp.use(vuetify)
})
