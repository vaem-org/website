<template>
  <section :class="`text${blok.coloredBackground ? ' colored-background' : ''}`" v-editable="blok">
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 md10 lg8 xl6 class="body">
          <h1 v-if="blok.title">{{ blok.title }}</h1>
          <component
            v-for="subBlok of blok.blocks"
            :key="subBlok._uid"
            :is="subBlok.component | dashify"
            :blok="subBlok"
            :on-primary-background="blok.coloredBackground"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'TextBlock',
    props: ['blok'],
  }
</script>

<style lang="scss" scoped>
  @import "~vuetify-scss/bootstrap";
  @import "@/assets/scss/_variables.scss";

  section {
    &.colored-background {
      background: $colored-background;
      color: $colored-background-text-color;

      .colored {
        color: black
      }
    }

    .body > :not(h1) {
      margin-top: $gutter-width;
    }
  }
</style>
