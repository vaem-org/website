<template>
	<section v-editable="blok">
		<v-container grid-list-xl>
			<v-layout v-if="blok.title">
				<v-flex>
					<h1>
						<span>
							{{ blok.title }}
						</span>
					</h1>
				</v-flex>
			</v-layout>
			<v-layout row wrap>
				<v-flex
					v-for="(item, index) in blok.items"
					:key="index"
					v-bind="binding"
				>
					<v-card
						:class="blok.centerText ? 'text-xs-center' : false"
						:elevation="1"
					>
						<v-img
							itemprop="image"
							aspect-ratio="1.75"
							:src="item.image | resize('700x400')"
							:lazy-src="item.image | resize('105x60')"
							:srcset="srcset(item.image, 1.75)"
							sizes="auto"
							:alt="item.title"
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

						<v-card-title primary-title class="px-4">
							<div>
								<h3 v-if="item.title">{{ item.title }}</h3>
								<p v-if="item.subTitle" class="mt-1 subheading">{{ item.subTitle }}</p>
								<div v-if="item.text" v-html="$md.render(item.text)"></div>
							</div>
						</v-card-title>

						<v-card-actions v-if="is_link(item.link)" class="px-4 pb-4">
							<v-spacer v-if="blok.centerText"></v-spacer>
							<ButtonLink
								v-if="is_link(item.link)"
								:link="item.link"
							>
								<slot v-if="item.linkText">{{ item.linkText }}</slot>
							</ButtonLink>
							<v-spacer v-if="blok.centerText"></v-spacer>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>

<script>
	import ButtonLink from '@/components/util/ButtonLink';

	export default {
		name: 'ContentBlocks',
		props: ['blok'],
		components: { ButtonLink },
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
		computed: {
			binding () {
				const binding = {
					xs12: true
				};

				if (this.blok.perRow == 4) {
					binding.sm6 = true;
					binding.md3 = true;
				} else if (this.blok.perRow == 2) {
					binding.md6 = true;
				} else {
					binding.sm6 = true;
					binding.md4 = true;
				}

				return binding
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~vuetify-scss/bootstrap";
	@import "@/assets/scss/_variables.scss";

	section
	{
		background: get-color('grey', 'lighten-4');
	}

	.subheading
	{
		color: $primary-color;
	}

	h1
	{
		> span
		{
			padding-bottom: .5rem;
			border-bottom: .25rem solid $primary-color;
		}
	}
</style>