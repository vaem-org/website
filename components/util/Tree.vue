<template>
	<ul v-if="items.length">
		<li v-for="(item, index) in items" :key="index">
			<nuxt-link :to="item.link.uuid|story_url" :title="item.link.name">
				{{ item.link.name }}
			</nuxt-link>
			<Tree :items="item.children"></Tree>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'Tree',
		props: [
			'items'
		]
	}
</script>