<template>
	<main>
    <Header :absolute="useAbsoluteHeader"/>
		<component v-if="story.content.component" :page_name="story.name" :full_slug="story.full_slug" :key="story.content._uid" :blok="story.content" :is="story.content.component | dashify"></component>
	</main>
</template>

<script>
	import Header from '@/components/layout/Header';
	import get from 'lodash/get';

  const loadData = ({api, cacheVersion, errorCallback, version, path}) => api.get(`cdn/stories/${path}`, {
		version: version,
		cv: cacheVersion
	}).then((res) => {
		return res.data
	}).catch((res) => {
		if (!res.response) {
			console.error(res);
			errorCallback({statusCode: 404, message: 'Failed to receive content form api'})
		} else {
			console.error(res.response.data);
			errorCallback({statusCode: res.response.status, message: res.response.data})
		}
	});

	const loadBreadcrumbs = async ({api, version, cacheVersion, story}) => {
		let slug = '';
		let items = [];

		let names = story.full_slug.replace(/^\/|\/$/g, '').split('/');
		for (let name of names) {
			slug = slug + '/' + name;

			const res = await api.get(`cdn/stories${slug}`, {
				'version': version,
				'cv': cacheVersion
			});
			if (res.data.story) {
				items.push(res.data.story);
			}
		}

		return items;
	};

	export default {
    components: { Header },
    data() {
			return {story: {content: {}}}
		},
		mounted() {
			this.$storybridge.on(['input', 'published', 'change'], (event) => {
				if (event.action === 'input') {
					if (event.story.id === this.story.id) {
						this.story.content = event.story.content
					}
				} else {
					if (event.storyId === this.story.id) {
						loadData({
							version: 'draft',
							api: this.$storyapi,
							cacheVersion: this.$store.state.cacheVersion,
							errorCallback: console.error,
							path: this.story.full_slug
						}).then((data) => {
							this.story = data.story
						})
					} else {
						window.location.reload()
					}
				}
			})
		},
		async asyncData(context) {
			// Check if we are in the editing mode
			let editMode = false;

			if (context.query._storyblok || (typeof window !== 'undefined' && context.store.state.draftMode)) {
				context.store.commit('setDraftMode', true);
				if (typeof window !== 'undefined' && window.location === window.parent.location) {
					context.store.commit('setDraftMode', false);
				}

				editMode = true
			}

			let version = editMode ? 'draft' : 'published';
			let path = context.route.path === '/' ? 'home' : context.route.path;

			// Load the JSON from the API
			let data = await loadData({
				api: context.app.$storyapi,
				version: version,
				cacheVersion: context.store.state.cacheVersion,
				errorCallback: context.error,
				path: path
			});

			// Load breadcrumbs
			let breadcrumbs = [];
			if (data) {
				breadcrumbs = await loadBreadcrumbs({
					api: context.app.$storyapi,
					version: version,
					cacheVersion: version,
					story: data.story
				});
			}

			context.store.commit('setBreadcrumbs', breadcrumbs);

			return data;
		},
    computed: {
      useAbsoluteHeader() {
        return get(this, 'story.content.body[0].component') === 'carousel';
      }
    },
		head() {
			let story = this.story;
			const data = {
				title: story.content.seo_title ? story.content.seo_title : `${story.name} - VAEM`,
				meta: [
					{ name: 'description', content: story.content.seo_description ? story.content.seo_description : '' },
					{ name: 'robots', content: story.content.seo_indexable === 'yes' ? 'index, follow' : 'noindex, follow' },
					{ property: 'og:site_name', content: 'Softmedia' },
					{ property: 'og:title', content: story.content.seo_og_title ? story.content.seo_og_title : 'Softmedia - ' + story.name },
					{ property: 'og:description', content: story.content.seo_og_description ? story.content.seo_og_description : '' },
				]
			};

			if (story.content.og_image) {
				data.meta.push(
					{property: 'og:image', content: `//img2.storyblok.com/1500x0'${story.content.seo_og_image.replace('//a.storyblok.com', '')}`}
				)
			} else {
				data.meta.push(
					{property: 'og:image', content: `${process.env.BASE_URL}/opengraph/1200x628.jpg`},
					{property: 'og:image:width', content: '1200'},
					{property: 'og:image:height', content: '628'},
					{property: 'og:image', content: `${process.env.BASE_URL}/opengraph/1080x1920.jpg`},
					{property: 'og:image:width', content: '1080'},
					{property: 'og:image:height', content: '1920'},
				)
			}

			return data;
		}
	}
</script>
