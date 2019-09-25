const axios = require('axios');
const querystring = require('querystring');

/**
 * Get start page of current folder
 *
 * @param id
 * @param links
 *
 * @returns {*}
 */
const getStartPage = (id, links) =>
{
	for (let i in links)
	{
		const link = links[i];
		if (link.parent_id === id && link.is_startpage)
		{
			return link;
		}
	}
};

/**
 * Get sitemap routes
 *
 * @param items
 * @param parent
 * @param priority
 * @param links
 * @param stories
 * @param excluded
 */
const getRoutes = (items, parent, priority, links, stories, excluded) =>
{
	for (let i in links)
	{
		const link = links[i];

		if (link.is_startpage || parent !== link.parent_id || excluded.includes(link.name))
		{
			continue;
		}

		if (link.is_folder)
		{
			const startPage = getStartPage(link.id, links);

			if (!startPage || !stories.hasOwnProperty(startPage.uuid))
			{
				continue;
			}
		}
		else if (!link || !stories.hasOwnProperty(link.uuid))
		{
			continue;
		}

		const url = '/' + link.slug
			.replace('home', '')
			.replace(/^\/|\/$/g, '');

		items.push
		({
			url: url,
			priority: priority
		});

		getRoutes(items, link.id, priority - 0.1, links, stories, excluded);
	}
};

/**
 * Get sitemap
 *
 * @param accessToken
 *
 * @returns {Promise<*>}
 */
const sitemap = async (accessToken) =>
{
	const items = [];

	const spaceResult = await axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?` + querystring.stringify({
		'token': accessToken
	}));
	if (!spaceResult.data.space.version)
	{
		return;
	}

	const cacheVersion = spaceResult.data.space.version;

	const linksResult = await axios.get(`https://api.storyblok.com/v1/cdn/links?` + querystring.stringify({
		'token': accessToken
	}));
	if (!linksResult.data.links)
	{
		return;
	}

	const links = linksResult.data.links;

	const storiesResult = await axios.get(`https://api.storyblok.com/v1/cdn/stories?` + querystring.stringify({
		'token': accessToken,
		'cv': cacheVersion,
		'version': 'published',
		'filter_query[seo_indexable][in]': 'yes',
		'per_page': 100
	}));
	if (!storiesResult.data.stories)
	{
		return;
	}

	let stories = {};
	storiesResult.data.stories.forEach((story) =>
	{
		stories[story.uuid] = story;
	});

	getRoutes(items, 0, 1, links, stories, ['Sitemap', 'Settings']);

	return items;
};

module.exports = sitemap;