<template>
    <v-app>
	    <nuxt/>
	    <Footer/>
		<PhotoSwipeModal/>
    </v-app>
</template>

<script>
	import Footer from '~/components/layout/Footer'
	import PhotoSwipeModal from '~/components/modals/Photoswipe';

	if (process.browser) {
		require('lazysizes');
	}

	export default {
		components: { Footer, PhotoSwipeModal }
	}
</script>
