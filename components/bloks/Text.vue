<template>
  <div v-if="blok.body"
       v-html="$md.render(blok.body)"
       :class="colored ? 'colored' : false"
       v-editable="blok"></div>
</template>

<script>
  export default {
    name: 'BodyText',
    props: {
      'blok': Object,
      'colored': {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/_variables.scss';

  .colored {
    color: $primary-color;
  }

  /deep/ {
    pre code {
      display: block;
      padding: 1em;
      margin: 1em 0;

      &:before {
        display: none;
      }

      &:after {
        display: none;
      }
    }

    h2 {
      margin-bottom: 0.5em;
    }
  }
</style>
