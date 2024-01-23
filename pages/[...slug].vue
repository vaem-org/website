<template>
  <main class="page">
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
