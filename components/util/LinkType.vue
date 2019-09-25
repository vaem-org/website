<template>
	<!-- eslint-disable-next-line vue/require-component-is -->
	<component v-if="is_link(link)" v-bind="linkProps()">
		<slot />
	</component>
</template>

<script>
	export default {
		name: 'LinkType',
		props: [
			'link',
			'linkText',
			'linkClass'
		],
		methods: {
			linkProps()
			{
				const url = this.url(this.link);

				if (this.link.linktype === 'url')
				{
					return {
						is: 'a',
						href: url,
						target: '_blank',
						title: this.linkText,
						class: this.linkClass,
						rel: 'noopener'
					};
				}

				return {
					is: 'router-link',
					to: url,
					title: this.linkText,
					class: this.linkClass,
					exact: url === '/'
				};
			}
		}
	}
</script>