<template>
  <div>
    <h1 v-if="blok.title">{{ blok.title }}</h1>
    <div v-if="blok.text" v-html="$md.render(blok.text)"></div>
    <div v-if="blok.usps" class="usps">
      <div
        v-for="(item, index) in blok.usps"
        :key="index"
      >
        <div>
          <h3 v-if="item.title">{{ item.title }}</h3>
          <div v-if="item.text" v-html="$md.render(item.text)"></div>
        </div>

        <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['blok'],
  }
</script>

<style lang="scss" scoped>
  @import "~vuetify-scss/bootstrap";
  @import "@/assets/scss/_variables.scss";

  h1 + div {
    margin-top: $gutter-width;
  }

  .usps {
    > div {
      margin-top: $gutter-width * 3;
      align-items: center;
      justify-content: flex-end;
      display: flex;

      @include breakpoint(sm-and-up) {
        align-items: flex-start;
      }

      > i {
        border-radius: 50%;
        background: $primary-color;
        color: #fff;
        margin-left: $gutter-width * 2;
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
</style>
