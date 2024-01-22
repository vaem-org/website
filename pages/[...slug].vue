<template>
  <content-doc>
    <template #default="{ doc }">
      <c-nav-bar
        :hero="doc.hero"
        :dark="!!doc.hero"
      />
      <div class="content">
        <content-renderer :value="doc" />
      </div>
      <c-footer />
    </template>
    <template #not-found>
      <c-nav-bar />
      <v-container class="content">
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
    </template>
  </content-doc>
</template>

<style scoped lang="scss">
.content {
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
</style>
