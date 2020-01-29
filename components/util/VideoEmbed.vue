<template>
  <div :class="{'video-container': true, overlay: !playing}">
    <v-fade-transition>
      <v-btn
        icon
        color="rgb(255, 59, 97)"
        @click="play"
        absolute
        large
        v-if="!playing"
      >
        <v-icon color="white">play_arrow</v-icon>
      </v-btn>
    </v-fade-transition>
    <v-fade-transition>
      <v-img
        v-if="image && !playing"
        itemprop="image"
        :src="image | resize('640x360')"
        :lazy-src="image | resize('96x54')"
        :srcset="srcset(image, 16/9)"
        aspect-ratio="16/9"
        sizes="auto"
      >
      </v-img>
    </v-fade-transition>
    <vimeo-player
      v-if="player === 'vimeo'"
      :video-id="source"
      player-width="100%"
      player-height="100%"
      :options="{autoplay: 1, title: 0}"
    />
    <iframe
      v-else-if="player === 'youtube'"
      :src="`https://www.youtube.com/embed/${youtubeId}?${youtubeParams}`"
      allowfullscreen
      allow="autoplay; fullscreen"
    ></iframe>
  </div>
</template>

<script>
  import { stringify } from 'qs';
  import getYoutubeID from 'get-youtube-id';

  export default {
    name: 'VideoEmbed',
    props: {
      source: {
        type: String,
        default: ''
      },
      controls: {
        type: Boolean,
        default: true
      },
      image: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        playing: false,
        player: false,
        youtubeParams: stringify({
          autoplay: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          wmode: 'transparant'
        }),
      }
    },
    computed: {
      youtubeId() {
        return getYoutubeID(this.source);
      },
    },
    methods: {
      async play() {
        if (!this.assetId && this.source && this.source.indexOf('vimeo.com') !== -1) {
          this.player = 'vimeo';
          this.playing = true;
          this.$el.focus();
        } else if (!this.assetId && this.source && this.source.indexOf('youtu') !== -1) {
          this.player = 'youtube';
          this.playing = true;
          this.$el.focus();
        }
      },
      srcset(image, ratio) {
        const that = this;
        let src = '';

        [320, 640, 1280, 1920].forEach((width) => {
          src += `${that.$options.filters.resize(image,
            `${width}x${ratio ? Math.round(width / ratio) : 0}`)} ${width}w, `;
        });

        src = src.slice(0, -2);

        return src;
      }
    }
  }
</script>

<style lang="scss">
  @import "~vuetify-scss/bootstrap";

  .video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    background: get-color('grey', 'lighten-1');

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

    iframe,
    > div {
      border: none;
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .v-btn {
      z-index: 5;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
