<template>
  <div class="button" v-editable="blok">
    <ButtonLink
      v-if="is_link(blok.link)"
      :link="blok.link"
      css-class="ml-0"
      color="#25a9ce"
    >
      <slot v-if="blok.text">{{blok.text}}</slot>
    </ButtonLink>
  </div>
</template>

<script>
  import ButtonLink from '@/components/util/ButtonLink';

  export default {
    name: 'BodyButton',
    props: {
      blok: Object,
    },
    components: { ButtonLink }
  }
</script>

<style scoped>
  .button {
    text-align: center;
  }

  .button >>> .v-btn {
    color: white;
  }
</style>
