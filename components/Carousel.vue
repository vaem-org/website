<template>
	<section class="carousel" ref="carousel" v-swiper:mySwiper="swiperOptions" v-editable="blok">
		<div class="swiper-wrapper">
			<div
				v-for="(slide, index) in blok.items"
				:key="index"
				:class="`swiper-slide${(slide.title || slide.subTitle || slide.text || is_link(slide.link)) ? ' has-body' : ''}`"
			>
				<v-img
					v-if="slide.image"
					itemprop="image"
					:src="slide.image | resize('726x0')"
					:lazy-src="slide.image | resize('132x0')"
					:srcset="srcset(slide.image)"
					:aspect-ratio="aspectRatio"
					sizes="auto"
				>
					<template slot="placeholder">
						<v-layout
							fill-height
							align-center
							justify-center
							ma-0
						>
							<v-progress-circular indeterminate color="rgb(255, 59, 97)"></v-progress-circular>
						</v-layout>
					</template>
				</v-img>
				<div class="body">
					<div class="text">
						<h1 v-if="slide.title" data-swiper-parallax="-200">{{ slide.title }}</h1>
						<h3 v-if="slide.subTitle" class="hidden-xs-only" data-swiper-parallax="-300">{{ slide.subTitle }}</h3>
						<p v-if="slide.text" class="hidden-sm-and-down" data-swiper-parallax="-500">{{ slide.text }}</p>
						<ButtonLink
							v-if="is_link(slide.link)"
							:link="slide.link"
							css-class="mt-3 ml-0 default"
							data-swiper-parallax="-800"
						><slot v-if="slide.linkText">{{slide.linkText}}</slot></ButtonLink>
					</div>
				</div>
			</div>
		</div>

		<div class="swiper-pagination" slot="pagination"></div>
	</section>
</template>

<script>
	import ButtonLink from '~/components/util/ButtonLink';

	export default {
		name: 'Carousel',
		props: ['blok'],
		components: {ButtonLink},
		data() {
			return {
				swiperOptions: {
					speed: 600,
					lazy: false,
					preloadImages: false,
					effect: this.blok.transition ? this.blok.transition : 'slide',
					threshold: 5,
					parallax: true,
					loop: false,
					pagination: this.blok.items.length > 1 ? {
						el: '.swiper-pagination',
						clickable: true
					} : false,
					autoplay: this.blok.items.length > 1 ? {
						delay: 4000
					} : false,
				}
			}
		},
		watch: {
			films: {
				handler() {
					this.mySwiper.update();
				},
				deep: true
			}
		},
		methods: {
			srcset(image, ratio) {
				const that = this;
				let src = '';

				[300, 600, 900, 1600, 2000].forEach((width) => {
					src += `${that.$options.filters.resize(image, `${width}x${ratio ? Math.round(width / ratio) : 0}`)} ${width}w, `;
				});

				src = src.slice(0, -2);

				return src;
			},
		},
		computed: {
			aspectRatio () {
				return this.$vuetify.clientHeight > this.$vuetify.clientWidth ? 1.5 : 2.2;
			}
		},
		mounted() {
			(this.$refs.carousel).classList.add('mounted')
		}
	}
</script>

<style lang="scss" scoped>
	@import "~vuetify-scss/bootstrap";
	@import "@/assets/scss/_variables.scss";

	section
	{
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 0;
		background: get-color('blue-grey', 'darken-3');

		padding-bottom: (100 / 2.2) * 1%;

		@media (orientation: portrait) {
			padding-bottom: (100 / 1.5) * 1%;
		}

		.swiper-wrapper
		{
			height: auto;
		}

		.swiper-slide
		{
			height: 100%;

			&.has-body
			{
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

			.v-img
			{
				height: 100%;
				width: 100%;

				position: absolute;
				display: block;

				object-fit: cover;

				top: 50%;
				left: 50%;

				transform: translate(-50%, -50%);
			}

			.body
			{
				position: relative;
				z-index: 1;
				color: #fff;
				opacity: 0;
				transition: opacity .25s;

				h1, h3
				{
					color: #fff;
					line-height: 1.2;
					margin-bottom: .5rem;
					text-shadow: 1px 1px rgba(0, 0, 0, .2);
				}

				@include breakpoint(md-and-up)
				{
					display: flex;
					align-items: center;
				}

				@media (max-height: 499px)
				{
					margin: 10vw;
					max-width: 80vw;

					@include breakpoint(xs-and-up)
					{
						h1 {
							font-size: 2.5rem;
						}
					}
				}

				@media (min-height: 500px)
				{
					position: absolute;
					right: 20vw;
					left: 20vw;
					top: 50%;

					transform: translateY(-50%);

					@media (min-width: 480px)
					{
						h1
						{
							font-size: 3rem;
						}

						h3
						{
							font: {
								weight: normal;
								size: 1.5rem;
							}
						}
					}

					@include breakpoint(lg-and-up)
					{
						h1
						{
							font-size: 4rem;
						}
					}
				}

				h3 + h3
				{
					margin-top: .25rem;
				}
			}
		}

		&.mounted .swiper-slide .body
		{
			opacity: 1;
		}

		/deep/ .swiper-pagination-bullet
		{
			opacity: .5;
			background: #fff;

			&-active
			{
				opacity: 1;
				background: $primary-color;
			}
		}
	}
</style>