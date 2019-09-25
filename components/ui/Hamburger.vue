<template>
	<div class="hamburger" v-on:click="toggleMenu" ref="hamburger">
		<div></div>
	</div>
</template>

<script>
	import EventBus from '~/plugins/event-bus';

	export default {
		name: 'Hamburger',
		methods: {
			toggleMenu () {
				const isOpen = (this.$refs.hamburger).classList.contains('active');

				(this.$refs.hamburger).classList[isOpen ? 'remove' : 'add']('active');

				document.body.classList[isOpen ? 'remove' : 'add']('menu-active');

				EventBus.$emit('toggleMenu', !isOpen);
			}
		},
		watch: {
			'$route.path': function() {
				(this.$refs.hamburger).classList.remove('active');
				document.body.classList.remove('menu-active');
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "~vuetify-scss/bootstrap";
	@import "@/assets/scss/_variables.scss";

	$hamburger-color:   #000 !default;
	$hamburger-width:   40px !default;
	$hamburger-height:  $hamburger-width * .6 !default;
	$hamburger-bar-height: $hamburger-height / 6 !default;

	.hamburger
	{
		position: relative;
		display: flex;
		width: $hamburger-width;
		height: 24px;
		cursor: pointer;
		user-select: none;

		> div
		{
			top: 50%;
			margin-top: -($hamburger-bar-height / 2);
			transition-timing-function: cubic-bezier(.55, .055, .675, .19);
			transition-duration: .075s;

			&, &:before, &:after
			{
				position: absolute;
				width: 100%;
				height: $hamburger-bar-height;

				display: block;
				border-radius: $hamburger-bar-height;
				background: $hamburger-color;
			}

			&:before, &:after
			{
				content: '';
			}

			&:before
			{
				top: ($hamburger-height / 2) - ($hamburger-bar-height / 2);
				transition: top .075s ease .12s, opacity .075s ease;
			}

			&:after
			{
				bottom: ($hamburger-height / 2) - ($hamburger-bar-height / 2);
				transition: bottom .075s ease .12s, opacity .075s ease;
			}
		}

		&.active
		{
			> div
			{
				transition-delay: .12s;
				transition-timing-function: cubic-bezier(.215, .61, .355, 1);
				transform: rotate(45deg);

				&:before
				{
					top: 0;
					opacity: 0;
					transition: top .075s ease,opacity .075s ease .12s;
				}

				&:after
				{
					bottom: 0;
					transition: bottom .075s ease,transform .075s cubic-bezier(.215, .61, .355, 1) .12s;
					transform: rotate(-90deg);
				}
			}
		}
	}
</style>