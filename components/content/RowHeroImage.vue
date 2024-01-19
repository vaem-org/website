<script setup lang="ts">
import header3 from '~/assets/images/header-3.jpg'

const { src } = defineProps({
  src: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  }
})

const resolved = ({
  'header-3': header3
})[src]
</script>

<template>
  <v-img
    :src="resolved"
    alt="Hero image"
    :aspect-ratio="1800/800"
    transition="none"
  >
    <slot />
    <div class="d-flex fill-height">
      <div
        v-if="text"
        class="text"
      >
        {{ text }}
      </div>
    </div>
  </v-img>
</template>

<style scoped>
.text {
  font-size: 3vw;
  white-space: pre-line;
  font-weight: bold;
  color: white;
  align-self: center;
  justify-self: center;
  text-align: left;
  margin-left: 20%;
  width: 40%;
  line-height: 125%;
}
</style>
