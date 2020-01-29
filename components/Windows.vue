<template>
  <section class="windows" v-editable="blok">
    <v-container>
      <v-layout align-center justify-center>
        <v-item-group
          v-model="window"
          class="shrink mr-4"
          mandatory
          tag="v-flex"
        >
          <v-item
            v-for="n in (blok.items).length"
            :key="n"
          >
            <div slot-scope="{ active, toggle }">
              <v-btn
                :input-value="active"
                icon
                @click="toggle"
              >
                <v-icon>chevron_right</v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>

        <v-flex xs12 md10 lg9 xl6>
          <v-window
            v-model="window"
            class="elevation-1"
            vertical
          >
            <v-window-item
              v-for="(item, index) in blok.items"
              :key="index"
            >
              <v-card flat>
                <v-card-text>
                  <v-layout align-center mb-3>
                    <v-avatar
                      v-if="item.icon"
                      color="grey lighten-3"
                      class="mr-3"
                    >
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-avatar>
                    <strong class="title" v-if="item.title">{{ item.title }}</strong>
                  </v-layout>
                  <div v-if="item.text" v-html="$md.render(item.text)"></div>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'Windows',
    props: ['blok'],
    data: () => ({
      window: 0
    }),
  }
</script>
