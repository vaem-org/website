<script setup lang="ts">
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

const img = useImage()
const height = 600

const resized = computed(() => {
  return img(src, {
    width: 1920,
    height,
    format: 'webp',
    fit: 'cover'
  })
})

const srcset = computed(() => {
  return img.getSizes(src, {
    sizes: 'xs:100vw sm:100vw',
    modifiers: {
      width: 1920,
      height,
      format: 'webp',
      fit: 'cover'
    }
  })
})

</script>

<template>
  <v-img
    :src="resized"
    :srcset="srcset.srcset"
    :sizes="srcset.sizes"
    alt="Hero image"
    :aspect-ratio="1920/height"
    transition="none"
  >
    <slot />
    <div class="d-flex fill-height">
      <div
        v-if="text"
        class="text d-none d-sm-block"
      >
        {{ text }}
      </div>
    </div>
  </v-img>
</template>

<style scoped>
.text {
  font-size: 2.5vw;
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
