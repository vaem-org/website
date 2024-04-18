<script setup lang="ts">
const { src } = defineProps({
  src: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})

const img = useImage()
const height = 600

const resized = computed(() => {
  return img(src, {
    width: 1920,
    height,
    format: 'webp',
    fit: 'cover',
  })
})

const srcset = computed(() => {
  return img.getSizes(src, {
    sizes: 'xs:100vw sm:100vw',
    modifiers: {
      width: 1920,
      height,
      format: 'webp',
      fit: 'cover',
    },
  })
})

const style = computed(() => ({
  paddingBottom: `${height / 1920 * 100}%`,
}))
</script>

<template>
  <div
    class="responsive"
    :style="style"
  >
    <img
      :src="resized"
      :srcset="srcset.srcset"
      :sizes="srcset.sizes"
      alt="Hero image"
      transition="none"
    >
    <div
      v-if="text"
      class="d-flex fill-height content"
    >
      <h1
        class="text d-none d-sm-block"
      >
        {{ text }}
      </h1>
    </div>
  </div>
</template>

<style scoped>
.responsive {
  position: relative;
}

img, .content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

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
