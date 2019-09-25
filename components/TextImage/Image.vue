<template>
	<v-img
		v-if="blok.image"
		itemprop="image"
		aspect-ratio="1.75"
		:src="blok.image | resize('700x0')"
		:lazy-src="blok.image | resize('100x0')"
		:srcset="srcset(blok.image)"
		sizes="auto"
		:alt="blok.title"
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
</template>

<script>
	export default {
		props: ['blok'],
		methods: {
			srcset(image, ratio) {
				const that = this;
				let src = '';

				[300, 600, 900, 1600].forEach((width) => {
					src += `${that.$options.filters.resize(image, `${width}x${ratio ? Math.round(width / ratio) : 0}`)} ${width}w, `;
				});

				src = src.slice(0, -2);

				return src;
			}
		},
	}
</script>