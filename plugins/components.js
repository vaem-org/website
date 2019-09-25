import Vue from 'vue'

import Carousel from '~/components/Carousel'
import Text from '~/components/Text'
import Banner from '~/components/Banner'
import Usps from '~/components/Usps'
import ContentBlocks from '~/components/ContentBlocks'
import TextImage from '~/components/TextImage/Container'
import ContactForm from '~/components/ContactForm'
import Windows from '~/components/Windows'
import Gallery from '~/components/Gallery'
import Columns from '~/components/Columns'

import BodyText from '~/components/bloks/Text'
import BodyButton from '~/components/bloks/Button'
import BodyPrimaryText from '~/components/bloks/PrimaryText'
import BodyImage from '~/components/bloks/Image'

import DetailPage from '~/components/pages/Detail'
import OverviewPage from '~/components/pages/Overview'
import SitemapPage from '~/components/pages/Sitemap'
import DefaultPage from '~/components/Page.vue'
import '~/assets/icomoon/style.css'

Vue.component('blok-carousel', Carousel)
Vue.component('blok-text', Text)
Vue.component('blok-banner', Banner)
Vue.component('blok-usps', Usps)
Vue.component('blok-content-blocks', ContentBlocks)
Vue.component('blok-text-image', TextImage)
Vue.component('blok-contact-form', ContactForm)
Vue.component('blok-windows', Windows)
Vue.component('blok-gallery', Gallery)
Vue.component('blok-columns', Columns)

Vue.component('blok-body-text', BodyText)
Vue.component('blok-body-button', BodyButton)
Vue.component('blok-body-primary-text', BodyPrimaryText)
Vue.component('blok-body-image', BodyImage)

Vue.component('blok-page-detail', DetailPage)
Vue.component('blok-page-overview', OverviewPage)
Vue.component('blok-page-sitemap', SitemapPage)
Vue.component('blok-page', DefaultPage)
