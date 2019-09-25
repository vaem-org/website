<template>
	<v-app>
		<Header/>
		<nuxt/>
		<Footer/>
	</v-app>
</template>

<script>
	import Header from '~/components/layout/Header'
	import Footer from '~/components/layout/Footer'

	export default {
		name: 'empty',
		components: { Header, Footer }
	}
</script>