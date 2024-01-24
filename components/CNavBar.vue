<script lang="ts" setup>
defineProps({
  dark: Boolean,
  hero: {
    type: Object,
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
          <nuxt-link to="/" aria-label="Home">
            <c-logo
              :text-color="dark ? 'white' : 'black'"
            />
          </nuxt-link>
          <ul class="justify-end my-3 mt-sm-0">
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
@use 'assets/styles/settings';

.nav-bar {
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

.position-absolute {
  top: 0;
  left: 0;
  right: 0;
}

.c-logo {
  width: 6rem;
}

@media #{map-get(settings.$display-breakpoints, 'sm-and-up')} {
  .nav-bar {
    display: flex;
  }

  .c-logo {
    width: 20rem;
  }
}
</style>
