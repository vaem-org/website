<template>
  <div class="breadcrumbs">
    <ul>
      <li>
        <nuxt-link to="/" title="Home">Home</nuxt-link>
      </li>
      <li v-for="(item, index) in items" :key="index">
        <nuxt-link :to="item.uuid|story_url" :title="item.name">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumbs',
    props: [
      'blok'
    ],
    data() {
      return {
        items: this.$store.state.breadcrumbs ? this.$store.state.breadcrumbs : []
      }
    }
  }
</script>

<style lang="scss"></style>
