export default function ({ app, isServer, route, store, isDev }) {
	if (!store.state.settings) {
		const version = route.query._storyblok || isDev ? 'draft' : 'published';
		return store.dispatch('loadSettings', {version: version});
	}
}