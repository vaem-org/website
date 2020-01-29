<template>
  <section v-editable="blok">
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex
          v-for="(item, index) in blok.items"
          :key="index"
          xs12 sm6 md4
        >
          <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
          <div>
            <h3 v-if="item.title">{{ item.title }}</h3>
            <div v-if="item.text" v-html="$md.render(item.text)"></div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'Usps',
    props: ['blok'],
  }
</script>

<style lang="scss" scoped>
  @import "~vuetify-scss/bootstrap";
  @import "@/assets/scss/_variables.scss";

  section {
    .layout {
      > div {
        display: flex;
        align-items: flex-start;

        > i {
          border-radius: 50%;
          background: $primary-color;
          color: #fff;
          margin-right: 2rem;
          padding: 1rem;

          @include breakpoint(lg-and-up) {
            padding: 1.5rem;
            font-size: 2rem;
          }
        }

        h3 + div {
          margin-top: 1rem;
        }
      }
    }
  }
</style>
