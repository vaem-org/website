<template>
	<v-btn
		:class="cssClass"
		:outline="outline"
		depressed
		round
		:color="color"
		@click="scrollTo"
		v-bind="linkProps(url)"
	>
		<slot>Lees meer</slot>
	</v-btn>
</template>

<script>
	const VueScrollTo = require('vue-scrollto');

	export default {
		name: 'AppLink',
		props: {
			link: {
				type: Object
			},
			cssClass: {
				type: String,
				default: 'default'
			},
			outline: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: ''
			},
		},
		created () {
			this.url = this.$options.filters.url(this.link)
		},
		methods: {
			linkProps (url) {
				if (typeof url === 'string' && url.match(/^(http(s)?|ftp):\/\//)) {
					return {
						href: url,
						target: '_blank',
						rel: 'noopener'
					}
				}
				return {
					to: url,
					nuxt: true
				}
			},
			isAnchor() {
				return (typeof (this.url) === 'string' && (this.url).startsWith('#'))
			},
			scrollTo(event) {
				if (this.isAnchor()) {
					const $to = document.getElementById((this.url).substring(1, (this.url).length));

					if ($to) {
						event.preventDefault();

						VueScrollTo.scrollTo($to);
					}
				}
			}
		}
	}
</script>