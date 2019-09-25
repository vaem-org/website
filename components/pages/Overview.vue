<template>
    <div v-editable="blok">
        <component :key="blok._uid" v-for="blok in blok.body" :blok="blok" :is="blok.component | dashify"></component>

        <section class="overview">
            <v-container grid-list-xl>
                <v-layout row wrap>
                    <v-flex
                        v-for="(item, index) in items"
                        :key="index"
                        xs12 sm6 md4
                    >
                        <v-card
                            :elevation="1"
                        >
                            <v-img
                                v-if="item.image"
                                itemprop="image"
                                aspect-ratio="1.75"
                                :src="item.image | resize('800x500')"
                                :lazy-src="item.image | resize('120x75')"
                                :srcset="srcset(item.image, 1.6)"
                                sizes="auto"
                                :alt="item.title"
                            >
                                <template slot="placeholder">
                                    <v-layout
                                        fill-height
                                        align-center
                                        justify-center
                                        ma-0
                                    >
                                        <v-progress-circular indeterminate color="rgb(255, 59, 97)"></v-progress-circular>
                                    </v-layout>
                                </template>
                            </v-img>
                            <v-card-title primary-title class="px-4">
                                <div>
                                    <h3>{{ item.title }}</h3>
                                    <div v-if="item.text" v-html="$md.render(item.text)"></div>
                                </div>
                            </v-card-title>
                            <v-card-actions v-if="item.slug" class="px-4 pb-4">
                                <v-btn
                                    round
                                    outline
                                    nuxt
                                    class="default"
                                    :to="item.slug"
                                >
                                    <slot>Lees meer</slot>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'OverviewPage',
    props: ['blok'],
    data() {
      return {
        items: []
      }
    },
    mounted()
    {
      this.loadItems();
    },
    methods: {
      async loadItems() {
        const storiesResult = await this.$storyapi.get('cdn/stories', {
          'filter_query[seo_indexable][in]': 'yes',
          'per_page': 100,
          'starts_with': this.$attrs.full_slug,
          'is_startpage': 0,
          'sort_by': 'position:ASC'
        });

        if (!storiesResult.data.stories)
        {
          return;
        }

        let stories = {};
        storiesResult.data.stories.forEach((story) =>
        {
          stories[story.uuid] = {
            slug: story.full_slug,
            title: story.content.overview_title ? story.content.overview_title : story.name,
            text: story.content.overview_text,
            image: story.content.overview_image
          };
        });

        this.items = stories;
      },
      srcset(image, ratio) {
        const that = this;
        let src = '';

        [300, 600, 900, 1600].forEach((width) => {
        src += `${that.$options.filters.resize(image, `${width}x${ratio ? Math.round(width / ratio) : 0}`)} ${width}w, `;
        });

        src = src.slice(0, -2);

        return src;
      }
    }
  }
</script>