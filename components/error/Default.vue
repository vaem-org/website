<template>
	<div class="error-message">
		<h1></h1>
		<p>Klik <nuxt-link to="/" title="Home">hier</nuxt-link> om terug te keren naar de homepagina.</p>
	</div>
</template>

<script>
	export default {
		name: 'ErrorDefault',
		props: [
			'error'
		]
	}
</script>

<style lang="scss"></style>
