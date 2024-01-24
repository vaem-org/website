<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <v-col cols="12" lg="4">
    <div class="d-flex align-start">
      <div class="icon">
        <v-icon
          size="1.5em"
          :icon="icon"
        />
      </div>
      <div class="text">
        <slot />
      </div>
    </div>
  </v-col>
</template>

<style scoped>
.icon {
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  color: #fff;
  margin-right: 2rem;
  padding: 1rem;
}
</style>
