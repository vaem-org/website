import Vue from 'vue';

import {load} from 'recaptcha-v3';

Vue.prototype.$recaptcha = async () => load(
	process.env.RECAPTCHA_SITEKEY, {
		autoHideBadge: true
	});