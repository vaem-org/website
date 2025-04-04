<script setup lang="ts">
const route = useRoute()
const { data: doc } = await useAsyncData(`doc-${route.params.slug}`, async () => {
  return queryCollection('docs').path(route.path).first()
})
</script>

<template>
  <main class="page">
    <c-nav-bar
      :hero="doc?.hero"
      :dark="!!doc?.hero"
    />
    <div
      v-if="doc"
      class="content"
    >
      <content-renderer
        v-if="doc"
        :value="doc"
      />
    </div>
    <v-container
      v-else
      class="content"
    >
      <h1>Page not found</h1>
      <p>
        Click
        <nuxt-link
          href="/"
          class="link"
        >
          here
        </nuxt-link>
        to return to the homepage
      </p>
    </v-container>
    <c-footer />
  </main>
</template>

<style scoped lang="scss">
.content {
  flex-grow: 1;

  :deep(a.link) {
    display: inline-block;
  }

  :deep(p) {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(.shiki) {
    margin: 1em 0;
  }
}

main.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
