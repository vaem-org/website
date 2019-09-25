<template>
  <section v-editable="blok" :class="{'colored-background': blok.coloredBackground}">
    <v-container>
      <v-layout>
        <v-flex>
          <masonry
            v-if="blok.items.length"
            ref="masonry"
            :gutter="10"
            :cols="$vuetify.breakpoint.xsOnly ? 1 : ($vuetify.breakpoint.smOnly ? 2 : ($vuetify.breakpoint.xlOnly ? 4 : 3))"
          >
            <div
              v-for="(item, index) in blok.items" :key="index"
              :class="{'gallery-item': true, popup: item.image && !item.video, overlay: item.title && !item.video}"
              @click="item.image && !item.video ? openPopup(item.image) : false"
            >
              <VideoEmbed
                v-if="item.video"
                :source="item.video"
                :image="item.image"
              />
              <figure
                v-else-if="item.image"
                :style="`padding-bottom: ${aspectRatio(item.image)}%;`"
              >
                <v-img
                  itemprop="image"
                  :src="item.image | resize('600x0')"
                  :lazy-src="item.image | resize('10x0')"
                  :srcset="srcset(item.image)"
                  sizes="auto"
                >
                  <template slot="placeholder">
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate
                                           color="rgb(255, 59, 97)"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </figure>
              <h4 v-if="!item.video && item.title">{{ item.title }}</h4>
            </div>
          </masonry>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  import VideoEmbed from '@/components/util/VideoEmbed'
  import PhotoSwipe from 'photoswipe/dist/photoswipe'
  import PhotoSwipeDefaultUI from 'photoswipe/dist/photoswipe-ui-default'
  import _ from 'lodash';

  export default {
    name: 'Gallery',
    props: ['blok'],
    components: { VideoEmbed },
    data() {
      return {
        gallery: false
      }
    },
    methods: {
      srcset(image, ratio) {
        const that = this;
        let src = '';

        [300, 600, 900, 1600].forEach((width) => {
          src += `${that.$options.filters.resize(image,
            `${width}x${ratio ? Math.round(width / ratio) : 0}`)} ${width}w, `;
        });

        src = src.slice(0, -2);

        return src;
      },
      aspectRatio(image) {
        let sizes = image.split('/')[5];

        if (sizes) {
          sizes = sizes.split('x');

          return (sizes[1] / sizes[0]) * 100;
        }
      },
      initGallery() {
        if (this.blok.items.length && !this.gallery) {
          const items = [];

          (this.blok.items).forEach(item => {
            if (item.image && !item.video) {
              const sizes = JSON.parse(this.$options.filters['data-size'](item.image));
              items.push({
                src: item.image,
                w: sizes.width,
                h: sizes.height,
                title: item.title
              });
            }
          })

          this.gallery = {
            element: document.querySelectorAll('.pswp')[0],
            items: items,
            options: {
              maxSpreadZoom: 1,
              getDoubleTapZoom: function (isMouseClick, item) {
                return item.initialZoomLevel;
              }
            }
          };
        }
      },
      openPopup(source) {
        this.initGallery()

        const gallery = this.gallery;
        const pswp = new PhotoSwipe(
          gallery.element,
          PhotoSwipeDefaultUI,
          gallery.items,
          Object.assign(gallery.options, { index: _.findIndex(gallery.items, ['src', source]) })
        );

        pswp.init()
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "~vuetify-scss/bootstrap";
  @import "@/assets/scss/_variables.scss";

  $gutter: 10px; // Should match masonry gutter

  section {
    &.colored-background {
      background: get-color('grey', 'lighten-4');
    }
  }

  .gallery-item {
    position: relative;

    &:not(:last-child) {
      margin-bottom: $gutter;
    }

    &.overlay {
      &:before {
        content: '';

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;

        background: #000;
        opacity: .2;
      }
    }

    &.popup {
      cursor: zoom-in;
    }

    figure {
      position: relative;
      height: 0;
      overflow: hidden;

      > .v-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }

    h4 {
      position: absolute;
      top: 50%;
      left: $gutter;
      right: $gutter;
      transform: translateY(-50%);
      z-index: 5;

      text-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
      text-align: center;
      color: #fff;
      font-size: 1.5rem;

      @include breakpoint(lg-and-up) {
        font-size: 2rem;
      }
    }
  }
</style>
