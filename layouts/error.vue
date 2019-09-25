<template>
	<section class="error-page">
		<v-container>
			<v-layout justify-center>
				<v-flex xs12 md10 lg8 xl6>
					<component :is="errorPage" :error="error" />
				</v-flex>
			</v-layout>
		</v-container>
	</section>
</template>

<script>
	import ErrorDefault from '~/components/error/Default';
	import Error404 from '~/components/error/404';

	export default {
		name: 'error',
		layout: 'empty',
		props: [
			'error'
		],
		components: {
			ErrorDefault: ErrorDefault,
			Error404: Error404
		},
		computed:
		{
			errorPage()
			{
				if (this.error.statusCode === 404) {
					return 'Error404';
				}

				return 'ErrorDefault';
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/assets/scss/_variables.scss";

	section
	{
		margin: $gutter-width * 3 auto;
	}
</style>