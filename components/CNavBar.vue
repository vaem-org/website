<script lang="ts" setup>
defineProps({
  dark: Boolean,
  hero: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="position-relative">
    <row-hero-image
      v-if="hero"
      v-bind="hero"
    />
    <v-container
      :class="{ 'position-absolute': hero }"
    >
      <content-navigation
        v-slot="{ navigation }"
      >
        <div
          class="nav-bar align-center"
          :class="{ dark }"
        >
          <nuxt-link to="/">
            <c-logo
              :text-color="dark ? 'white' : 'black'"
            />
          </nuxt-link>
          <ul class="justify-end">
            <li
              v-for="link of navigation"
              :key="link._path"
            >
              <nuxt-link :to="link._path">
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </content-navigation>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  margin-top: 2em;

  ul {
    list-style: none;
    display: inline-flex;
    gap: 1em;
    flex-grow: 1;
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
    font-size: 1.25rem;
  }

  &.dark {
    color: white;
  }
}

.c-logo {
  width: 20em;
}

.position-absolute {
  top: 0;
  left: 0;
  right: 0;
}
</style>
