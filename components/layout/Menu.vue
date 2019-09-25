<template>
	<nav id="main-nav" ref="menu">
		<SubMenu :items="this.$store.state.settings.mainNav" :top-level="true"/>
	</nav>
</template>

<script>
  import _ from 'lodash'
  import SubMenu from '~/components/layout/SubMenu'

  export default {
  	props: ['blok'],
  	components: { SubMenu },
  	data: () => ({
	  subMenuItems: [],
	  computedMenus: [],
	}),
  	methods: {},
  	mounted () {
	  const $menu = (this.$refs.menu).getElementsByTagName('ul')[0]

      if ($menu) {
        const height = $menu.getElementsByTagName('li')[0].clientHeight;

        _.forEach($menu.getElementsByTagName('ul'), ($ul) => {
          $ul.style.maxHeight = `${($ul.getElementsByTagName('li').length + 1) * height}px`;
        })
      }
	}
  }
</script>

<style lang="scss">
	@import "~vuetify-scss/bootstrap";
	@import "@/assets/scss/_variables.scss";

	@include breakpoint(sm-and-down)
	{
		.menu-active
		{
			#main-nav
			{
				right: 0;
				box-shadow: -3px 0px 5px rgba(0, 0, 0, .2);
			}
		}
	}

	#main-nav
	{
		ul
		{
			list-style: none;
			padding: 0;
			margin: 0;
		}

		a
		{
			text-decoration: none;
		}

		@include breakpoint(sm-and-down)
		{
			position: fixed;
			top: $header-height-small;
			z-index: 100;

			right: -80vw;
			width: 80vw;
			min-height: 100%;

			box-shadow: 0 0 0 rgba(0, 0, 0, 0);
			background: $offcanvas-menu-background;

			transition: right .3s ease-out, box-shadow .3s;

			a
			{
				display: flex;
				align-items: center;
				justify-content: space-between;

				width: 100%;

				color: $offcanvas-menu-color;
				font: {
					weight: $offcanvas-menu-font-weight;
					family: $offcanvas-menu-font-family;
				}

				padding: 1rem;

				.icon
				{
					> i
					{
						vertical-align: middle;
						color: $offcanvas-menu-color;
					}
				}

				&.nuxt-link-active
				{
					color: $offcanvas-menu-active-color;

					.icon > i
					{
						color: $offcanvas-menu-active-color;
					}
				}
			}

			> ul
			{
				> li
				{
					&:first-child
					{
						border-top: none;
					}

					&:last-child
					{
						border-bottom: 1px solid rgba($offcanvas-menu-color, .4);
					}
				}

				ul
				{
					position: relative;
					overflow: hidden;
					transition: max-height .5s ease;

					li
					{
						// Padding needs to be on the anchor or the borders won't line up
						a
						{
							padding-left: 2rem;
						}

						ul a
						{
							padding-left: 3rem;
						}

						ul ul a
						{
							padding-left: 4rem;
						}

						ul ul ul a
						{
							padding-left: 5rem;
						}

						ul ul ul ul a
						{
							padding-left: 6rem;
						}
					}
				}
			}

			li
			{
				border-top: 1px solid rgba($offcanvas-menu-color, .4);

                &:not(.active)
                {
                    > ul
                    {
                        max-height: 0 !important;
                    }
                }

				&.active
				{
					> ul
					{
						// Default value, used as a fallback. Proper height should be calculated with JavaScript
						max-height: 25rem;
					}
				}
			}
		}

		@include breakpoint(md-and-up)
		{
			text-align: right;

			a
			{
				position: relative;
				display: inline-block;

				font: {
					weight: $menu-font-weight;
					family: $menu-font-family;
				}

				> .icon
				{
					display: none;
				}
			}

			> ul
			{
				> li
				{
					display: inline-block;
					margin: 0 1rem;

					&:last-child
					{
						margin-right: 0;
					}

					> a
					{
						color: $menu-color;

						&:after
						{
							content: '';
							height: 4px;
							width: 0;

							position: absolute;
							bottom: -8px;
							left: 0;

							background: $menu-hover-color;

							opacity: 0;
							transition: opacity .25s, width .25s, background .25s;
						}

						&.call-to-action
						{
							padding: .5rem 1rem;
							border: 2px solid $primary-color;
							border-radius: 2rem;

							transition: background .2s linear, color .2s ease;

							&:after
							{
								display: none;
							}
						}

						&.nuxt-link-active:not(:hover):after
						{
							background: $menu-color;
						}

						&:hover,
						&.nuxt-link-active
						{
							&:after
							{
								width: 100%;
								opacity: 1;
							}

							&.call-to-action
							{
								background: $primary-color;
								color: #fff;
							}
						}
					}

					> ul
					{
						margin-top: 2rem;

						&:before
						{
							border-left: 10px solid transparent;
							border-right: 10px solid transparent;
							border-bottom: 7px solid $menu-sub-background;

							top: -6px;
							left: 50%;
							margin-left: -5px;
						}
					}
				}

				li
				{
					position: relative;

					&.hover
					{
						> ul
						{
							top: 0;
							left: 50%;
							transform: translateX(-50%);
						}
					}
				}

				ul
				{
					position: absolute;
					left: -999rem;
					z-index: 100;

					min-width: 100%;
					max-height: none !important;

					&:before
					{
						content: '';
						position: absolute;
						width: 0;
						height: 0;
					}

					li
					{
						&.hover
						{
							> ul
							{
								top: 0;
								left: 100%;
								transform: translateX(0);
								padding-left: 6px;

								&:before
								{
									margin-top: -5px;
									top: 1rem;
									left: 0;

									border-top: 10px solid transparent;
									border-right: 7px solid $menu-sub-background;
									border-bottom: 10px solid transparent;
								}

								&.alt-direction,
								&.alt-direction .hover > ul
								{
									left: -6px;
									transform: translateX(-100%);

									&:before
									{
										right: -7px;
										left: auto;

										border-top: 10px solid transparent;
										border-left: 7px solid $menu-sub-background;
										border-bottom: 10px solid transparent;
									}
								}
							}
						}
					}

					a
					{
						width: 100%;
						padding: .5rem 2.5rem;

						color: $menu-sub-color;
						background: $menu-sub-background;

						font-size: $menu-sub-font-size;
						white-space: nowrap;
						text-align: left;

						transition: color .2s linear, background .2s ease;

						&:hover,
						&.nuxt-link-active
						{
							color: $menu-sub-hover-color;
							background: $menu-sub-hover-background;
						}
					}
				}
			}
		}
	}
</style>