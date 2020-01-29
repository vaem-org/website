<template>
  <header :class="{absolute}">
    <v-container fill-height px-4 py-0>
      <v-layout align-center>
        <v-flex xs3>
          <nuxt-link to="/">
            <v-logo :text-color="absolute ? '#FFF' : '#000'"/>
          </nuxt-link>
        </v-flex>
        <v-flex>
          <Menu/>
        </v-flex>
        <v-flex shrink hidden-md-and-up>
          <Hamburger/>
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
  import Hamburger from '@/components/ui/Hamburger';
  import Menu from '@/components/layout/Menu';
  import VLogo from '@/components/VLogo';

  export default {
    components: { VLogo, Hamburger, Menu },
    props: {
      absolute: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  header {
    z-index: 100;

    display: flex;
    flex-wrap: wrap;

    &.absolute {
      position: absolute;
      top: 2em;
      left: 0;
      right: 0;
    }
  }

  .logo {
    margin: 0.5em 0;
  }
</style>
