<template>
  <div :class="{'image': true, 'border': blok.border}" v-editable="blok">
    <v-img :src="blok.image | resize('1280x0/filters:format(jpg)')" :aspect-ratio="aspectRatio" v-if="blok.image"/>
  </div>
</template>

<script>
  import { getResolution } from 'assets/js/image';

  export default {
    name: 'BodyImage',
    props: {
      blok: Object
    },
    computed: {
      aspectRatio() {
        const [width, height] = getResolution(this.blok.image);

        return height !== 0 ? width / height : 0.001;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~/assets/scss/_variables.scss";
  .image {
    padding-left: 10%;
    padding-right: 10%;
    margin: 2em 0 !important;

    &.border .v-image {
      box-shadow: 0 0 15px rgba(black, 0.2);
    }
  }
</style>
