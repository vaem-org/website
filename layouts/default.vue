<template>
    <v-app>
	    <Header/>
	    <nuxt/>
	    <Footer/>
		<PhotoSwipeModal/>
    </v-app>
</template>

<script>
	import Header from '~/components/layout/Header'
	import Footer from '~/components/layout/Footer'
	import PhotoSwipeModal from '~/components/modals/Photoswipe';

	if (process.browser) {
		require('lazysizes');
	}

	export default {
		components: { Header, Footer, PhotoSwipeModal }
	}
</script>