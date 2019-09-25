<template>
	<v-container grid-list-xl>
		<v-layout align-center justify-center>
			<v-flex shrink>
				<h2 v-if="blok.title">{{ blok.title }}</h2>
			</v-flex>
			<v-flex shrink>
				<ButtonLink
					v-if="is_link(blok.link)"
					:link="blok.link"
					:css-class="blok.image ? false : 'over-primary'"
				><slot v-if="blok.linkText">{{blok.linkText}}</slot></ButtonLink>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import ButtonLink from '~/components/util/ButtonLink';

	export default {
		name: 'BannerBody',
		props: ['blok'],
		components: {ButtonLink},
	}
</script>

<style lang="scss" scoped>
	@import "~vuetify-scss/bootstrap";

	div
	{
		position: relative;
		z-index: 1;
		line-height: 1.3;
		color: #fff;

		h2
		{
			color: #fff;
		}
	}
</style>