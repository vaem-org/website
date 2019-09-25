<template>
  <!-- eslint-disable-next-line vue/require-component-is -->
  <component v-bind="linkProps(to)" :class="cssClass">
    <slot></slot>
  </component>
</template>

<script>
  export default {
    name: 'AppLink',
    props: {
      to: {
        type: String,
        required: true
      },
      cssClass: {
        type: [String, Object],
        required: false
      }
    },
    methods: {
      linkProps(url) {
        if (url && url.match(/^(http(s)?|ftp):\/\//)) {
          return {
            is: 'a',
            href: url,
            target: '_blank',
            rel: 'noopener'
          }
        } else if (url) {
          return {
            is: 'router-link',
            to: url
          }
        } else {
          return {
            is: 'span'
          }
        }
      }
    }
  }
</script>
