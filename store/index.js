import error from '~/layouts/error';

export const state = () => ({
	cacheVersion: '',
	draftMode: false
});

export const mutations = {
	setCacheVersion (state, version) {
		state.cacheVersion = version
	},
	setDraftMode(state, draftMode) {
		state.draftMode = draftMode;
	},
	setBreadcrumbs(state, breadcrumbs) {
		state.breadcrumbs = breadcrumbs;
	},
	setLinks(state, links) {
		state.links = links;
	},
	setSettings(state, settings) {
		state.settings = settings;
	}
};

export const actions = {
	loadCacheVersion ({ commit }) {
		return this.$storyapi.get(`cdn/spaces/me`).then((res) => {
			commit('setCacheVersion', res.data.space.version)
		})
	},
	loadLinks({commit}) {
		return this.$storyapi.get(`cdn/links`).then((res) => {
			commit('setLinks', res.data.links)
		});
	},
	loadSettings({commit}, context) {
		return this.$storyapi.get(`cdn/stories/settings`, {
			version: context.version
		}).then((res) => {
			commit('setSettings', res.data.story.content)
		}).catch(err => console.error(`Unable to load settings: ${err.toString()}`));
	}
};
