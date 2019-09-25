<template>
	<component :is="tag">
		<LinkType v-if="is_link(link)" v-bind="linkProps()">
			<slot />
		</LinkType>
		<slot v-else />
	</component>
</template>

<script>
	import LinkType from '~/components/util/LinkType'

	export default {
		name: 'LinkWrapper',
		props: [
			'tag',
			'link',
			'linkText',
			'linkClass'
		],
		components: {
			LinkType: LinkType
		},
		methods: {
			linkProps()
			{
				return {
					link: this.link,
					linkText: this.linkText,
					linkClass: this.linkClass
				}
			}
		}
	}
</script>