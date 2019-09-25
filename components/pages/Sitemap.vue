<template>
	<main>
		<section class="sitemap">
			<h1>Sitemap</h1>
			<Tree :items="items"></Tree>
		</section>
	</main>
</template>

<script>
	import Tree from '~/components/util/Tree';

	export default {
		name: 'SitemapPage',
		props: [
			'blok'
		],
		components: {
			Tree: Tree
		},
		data() {
			return {
				items: []
			}
		},
		mounted()
		{
			this.loadItems();
		},
		methods: {
			getStartPage(id, links)
			{
				for (let i in links)
				{
					const link = links[i];
					if (link.parent_id === id && link.is_startpage)
					{
						return link;
					}
				}
			},
			generateTree(parent, links, stories, excluded)
			{
				let tree = [];

				for (let i in links)
				{
					const link = links[i];

					if (link.is_startpage || link.parent_id !== parent || excluded.includes(link.name))
					{
						continue;
					}

					if (link.is_folder)
					{
						const startPage = this.getStartPage(link.id, links);

						if (!startPage || !stories.hasOwnProperty(startPage.uuid))
						{
							continue;
						}
					}
					else if (!link || !stories.hasOwnProperty(link.uuid))
					{
						continue;
					}

					const children = this.generateTree(link.id, stories, links, excluded);

					tree.push
					({
						link: link,
						children: children
					});
				}

				return tree;
			},
			async loadItems()
			{
				const linksResult = await this.$storyapi.get('cdn/links');
				if (!linksResult.data.links)
				{
					return;
				}

				const links = linksResult.data.links;

				const storiesResult = await this.$storyapi.get('cdn/stories', {
					'filter_query[seo_indexable][in]': 'yes',
					'per_page': 100
				});
				if (!storiesResult.data.stories)
				{
					return;
				}

				let stories = {};
				storiesResult.data.stories.forEach((story) =>
				{
					stories[story.uuid] = story;
				});

				this.items = this.generateTree(0, links, stories, ['Sitemap', 'Settings']);
			}
		}
	}
</script>

<style lang="scss"></style>