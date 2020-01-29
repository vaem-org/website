<template>
  <div class="error-message">
    <h1>This page cannot be found.</h1>
    <p>Click
      <nuxt-link to="/" title="Home">here</nuxt-link>
      to open the homepage.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Error404',
    props: [
      'error'
    ]
  }
</script>

<style lang="scss"></style>
