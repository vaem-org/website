<template>
	<!-- eslint-disable-next-line vue/require-component-is -->
	<component v-bind="linkProps(to)">
		<slot></slot>
	</component>
</template>

<script>
	export default {
		name: 'AppLink',
		props: {
			to: {
				type: String,
				required: true
			}
		},
		methods: {
			linkProps (url) {
				if (url && url.match(/^(http(s)?|ftp):\/\//)) {
					return {
						is: 'a',
						href: url,
						target: '_blank',
						rel: 'noopener'
					}
				}
				return {
					is: 'router-link',
					to: url
				}
			}
		}
	}
</script>