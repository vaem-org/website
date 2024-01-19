<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    itemscope
    itemtype="https://schema.org/Corporation"
  >
    <v-container>
      <v-row>
        <v-col>
          <c-logo :color-scheme="1" />
        </v-col>
        <v-col>
          <content-doc path="_footer" />
        </v-col>
        <v-col
          class="contact"
        >
          <h4>Contact</h4>
          <a
            href="mailto:info@vaem.org"
          >
            <v-icon
              class="mr-2"
            >
              mdi-email
            </v-icon>
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
