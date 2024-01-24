import '@/assets/styles/main.scss'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import {
  mdiHotTub,
  mdiLightningBoltCircle,
  mdiCellphone,
  mdiEmail
} from '@mdi/js'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        mdiHotTub,
        mdiLightningBoltCircle,
        mdiCellphone,
        mdiEmail
      },
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#25a9ce'
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})
