<template>
	<section
		class="banner"
		:data-src="blok.image"
		:data-lowsrc="blok.image | resize('100x0')"
		ref="banner"
		v-editable="blok"
		v-if="blok.image"
	>
		<div class="preloader"></div>
		<banner-body :blok="blok"/>
	</section>
	<section
		class="banner"
		v-editable="blok"
		v-else
	>
		<banner-body :blok="blok"/>
	</section>
</template>

<script>
	import _ from 'lodash';
	import BannerBody from '~/components/BannerBody';

	export default {
		name: 'Banner',
		props: ['blok'],
		components: { BannerBody },
		mounted() {
			const that = this;
			const $banner = this.$refs.banner;

			if ($banner !== undefined)
			{
				if ($banner.dataset.src) {
					const img = new Image();

					const $preloader = $banner.querySelector('.preloader');
					$preloader.style.backgroundImage = `url(${$banner.dataset.lowsrc})`;

					const sizes = [720, 1280, 1600, 2000];
					const width = _.find(sizes, function (x) { return (window.innerWidth * window.devicePixelRatio) <= x });

					img.src = width ? that.$options.filters.resize($banner.dataset.src, `${width}x0`) : $banner.dataset.src;
					img.onload = function() {
						$banner.style.backgroundImage = 'url(' + img.src + ')';
						$preloader.classList.add('img-loaded');
					};
				}
				else
				{
					$banner.remove();
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~vuetify-scss/bootstrap";
	@import "@/assets/scss/_variables.scss";

	section
	{
		backface-visibility: hidden;
		background: {
			attachment: fixed;
			position: center;
			size: cover;
			color: $colored-background;
		}

		@supports (-webkit-overflow-scrolling: touch) {
			background-attachment: scroll;
		}

		overflow: hidden;
		position: relative;
		padding: 2vh 0;
		display: flex;

		&[data-src]
		{
			padding: 5vh 0;
			min-height: 200px;

			&:before
			{
				content: '';
				background: $carousel-overlay;

				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				z-index: 1;
			}
		}

		> .preloader
		{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			background: {
				position: center;
				size: cover;
			}

			opacity: .75;
			filter: blur(10px);
			transition: opacity .5s cubic-bezier(.22, .61, .36, 1) .25s;

			&.img-loaded
			{
				opacity: 0;
			}
		}
	}
</style>