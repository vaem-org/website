<template>
  <div v-editable="blok">
    <v-toolbar
      flat
      dark
    >
      <v-toolbar-title>{{ this.$attrs.page_name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat nuxt :to="overviewUrl" exact>
          <v-icon>apps</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <component :key="blok._uid" v-for="blok in blok.body" :blok="blok"
               :is="blok.component | dashify"></component>
  </div>
</template>

<script>
  export default {
    name: 'DetailPage',
    props: ['blok'],
    data: () => ({
      overviewUrl: ''
    }),
    mounted() {
      this.overviewUrl = (location.pathname).substring(0,
        ((location.pathname).lastIndexOf('/') === -1 ? (location.pathname).length : (location.pathname).lastIndexOf(
          '/')))
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/_variables.scss";

  div > .v-toolbar {
    background-color: $primary-color;
  }
</style>
