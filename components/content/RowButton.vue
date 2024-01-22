<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="text-center">
    <v-btn
      :to="to"
      depressed
      round
      color="primary"
    >
      {{ text }}
    </v-btn>
  </div>
</template>
