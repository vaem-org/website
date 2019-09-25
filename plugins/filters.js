import Vue from 'vue'

Vue.filter('resize', (image, size) => {
	if (typeof image !== 'undefined') {
		return '//img2.storyblok.com/' + size + '/' + image.replace('//a.storyblok.com', '');
	}
	return null;
})

Vue.filter('dashify', function(value) {
	if (typeof value === 'undefined') {
		return 'undefined'
	}

	let dashified = value.toString()
		.replace(/([A-Z])/g, ' $1')
		.trim()
		.toLowerCase()
		.replace(/[ _]/g, '-');

	return 'blok-' + dashified;
})

Vue.filter('data-size', (url, resized) => {
	if (url) {
		let sizes = url.split('/')[resized ? 6 : 5].split('x');
		sizes = sizes.filter(item => item);

		if (sizes && sizes.length === 2) {
			if (resized) {
				const width = url.split('/')[3].split('x')[0];

				sizes = [width, sizes[1] * (width / sizes[0])];
			}

			return `{"width": ${parseInt(sizes[0])}, "height": ${parseInt(sizes[1])}}`;
		}
	}

	return `{"width": 200, "height": 200}`;
})

/**
 * Link field type url
 *
 * @param link
 * @returns {*}
 */
const url = (link) =>
{
	if (typeof link !== 'undefined') {
		if (link.linktype === 'story') {
			const links = Vue.prototype.$nuxt.$store.state.links;
			if (link.id && links.hasOwnProperty(link.id)) {
				return '/' + links[link.id]['slug']
					.replace('home', '')
					.replace(/^\/|\/$/g, '');
			}
		} else {
			return link.url;
		}
	}
}

/**
 * Story url
 *
 * @param uuid
 * @returns {string}
 */
const story_url = (uuid) =>
{
	if (typeof uuid !== 'undefined') {
		const links = Vue.prototype.$nuxt.$store.state.links;
		if (links.hasOwnProperty(uuid)) {
			return '/' + links[uuid]['slug']
				.replace('home', '')
				.replace(/^\/|\/$/g, '');
		}
	}
}

/**
 * Check if link is defined
 *
 * @param link
 * @returns {boolean}
 */
const is_link = (link) =>
{
	const links = Vue.prototype.$nuxt.$store.state.links;

	return typeof link !== 'undefined' && (
		(link.linktype === 'story' && link.id !== '' && links.hasOwnProperty(link.id)) ||
		(link.linktype === 'url' && link.url !== '')
	);
}

Vue.mixin({methods: {
		url,
		story_url,
		is_link
	}});

Vue.filter('url', url);
Vue.filter('story_url', story_url);
Vue.filter('is_link', is_link);
