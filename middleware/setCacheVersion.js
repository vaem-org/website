import Vue from 'vue'

export default function ({ store }) {
  if (!store.state.cacheVersion) {
    return store.dispatch('loadCacheVersion')
  }
}
