<template>
  <div class="call-to-action text-center">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="8"
        >
          <slot />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.call-to-action {
  margin: 4em 0;
}
</style>
