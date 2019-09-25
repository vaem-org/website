import Vue from 'vue'

export default function ({ store }) {
	if (!store.state.links) {
		return store.dispatch('loadLinks')
	}
}
