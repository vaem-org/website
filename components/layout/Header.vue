<template>
  <header :class="{'at-top': atTop}" ref="header">
    <v-container fill-height px-4 py-0>
      <v-layout align-center>
        <v-flex>
          <nuxt-link to="/" class="logo">
            VAEM
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
  import EventBus from '~/plugins/event-bus';
  import Hamburger from '@/components/ui/Hamburger';
  import Menu from '@/components/layout/Menu';

  export default {
    components: { Hamburger, Menu },
    data() {
      return {
        drawer: false,
        atTop: true
      }
    },
    mounted() {
      EventBus.$on('toggleMenu', value => {
        this.drawer = value
      });

      window.addEventListener('scroll', () => {
        this.atTop = window.scrollTop > 0;
      });
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vuetify-scss/bootstrap";
  @import "@/assets/scss/_variables.scss";

  .v-navigation-drawer {
    top: $header-height-small;
    transition: all .2s;
    background: none;
  }

  header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 10px rgba(black, 0.2);

    height: $header-height-small;
    padding: $gutter-width / 2;

    display: flex;
    flex-wrap: wrap;

    background: get-color('grey', 'lighten-5');

    .logo {
      font-weight: bold;
      text-decoration: none;
      font-size: 2em;
      display: inline-block;
      &:hover {
        color: $primary-color;
      }
    }
  }
</style>
