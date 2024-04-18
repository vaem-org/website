<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    itemscope
    itemtype="https://schema.org/Corporation"
  >
    <v-container>
      <v-row align="center">
        <v-col
          cols="12"
          sm="4"
        >
          <c-logo
            :color-scheme="1"
            width="15rem"
          />
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <content-doc
            path="_footer"
            :head="false"
          />
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="contact"
        >
          <h2>Contact</h2>
          <a
            href="mailto:info@vaem.org"
          >
            <v-icon
              class="mr-2"
              icon="$mdiEmail"
            />
            <span itemprop="email">info@vaem.org</span>
          </a>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="copyright">
      <div class="d-flex align-center">
        <div class="flex-grow-1">
          &copy; VAEM {{ currentYear }}. All rights reserved.
        </div>
        <div class="flex-shrink-1">
          <v-btn
            icon
            fab
            dark
            depressed
            target="_blank"
            itemprop="sameAs"
            href="https://github.com/vaem-org"
          >
            <img
              src="~/assets/images/github.svg"
              alt="Github"
              width="16"
            >
          </v-btn>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background: #17112d;
  color: white;
  padding: 2em 0;
  margin-top: 3em;

  a {
    color: inherit;
  }
}
</style>
