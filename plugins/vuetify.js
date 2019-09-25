import 'vuetify/src/stylus/app.styl';

import '@/assets/scss/vuetify-theme.scss';

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
	options: {
		themeCache: {
			get: () => ''
		}
	}
});