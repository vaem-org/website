<template>
  <footer itemscope itemtype="http://schema.org/Corporation" id="footer">
    <meta itemprop="url" :content="baseUrl">

    <div>
      <v-container grid-list-xl>
        <v-layout v-bind="binding">
          <v-flex>
            <v-logo :color-scheme="1"/>
          </v-flex>
          <v-flex
            v-if="$store.state.settings.footerTitle || $store.state.settings.footerText"
          >
            <h4 v-if="$store.state.settings.footerTitle">{{ $store.state.settings.footerTitle
              }}</h4>
            <div v-if="$store.state.settings.footerText"
                 v-html="$md.render($store.state.settings.footerText)"></div>
          </v-flex>
          <v-flex
            v-if="$store.state.settings.address || $store.state.settings.phoneNumber || $store.state.settings.email"
            class="contact"
          >
            <h4>Contact</h4>
            <a
              v-if="$store.state.settings.address"
              :href="`https://www.google.com/maps/dir//${encodeURIComponent($store.state.settings.address)}`"
              target="_blank"
            >
              <v-icon>place</v-icon>
              <span itemprop="address">{{ $store.state.settings.address }}</span>
            </a>
            <a
              v-if="$store.state.settings.phoneNumber"
              :href="`tel:${formatPhoneNumber($store.state.settings.phoneNumber)}`"
              itemprop="telephone"
              :content="formatPhoneNumber($store.state.settings.phoneNumber)"
            >
              <v-icon>phone</v-icon>
              <span>{{ friendlyFormatPhoneNumber($store.state.settings.phoneNumber) }}</span>
            </a>
            <a
              v-if="$store.state.settings.email"
              :href="`mailto:${$store.state.settings.email}`"
            >
              <v-icon>email</v-icon>
              <span itemprop="email">{{ $store.state.settings.email }}</span>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="copyright">
      <v-container class="copyright">
        <v-layout row wrap>
          <v-flex grow>&copy; VAEM {{ currentYear }}. All rights reserved.</v-flex>
          <v-flex :class="{'mt-3': $vuetify.breakpoint.xsOnly, 'shrink': $vuetify.breakpoint.smAndUp, 'text-xs-center': $vuetify.breakpoint.xsOnly}">
            <v-btn
              fab
              dark
              small
              depressed
              target="_blank"
              itemprop="sameAs"
              v-if="$store.state.settings.facebook"
              :href="$store.state.settings.facebook"
            >
              <i class="icon-facebook"></i>
            </v-btn>
            <v-btn
              fab
              dark
              small
              depressed
              target="_blank"
              itemprop="sameAs"
              v-if="$store.state.settings.linkedin"
              :href="$store.state.settings.linkedin"
            >
              <i class="icon-linkedin"></i>
            </v-btn>
            <v-btn
              fab
              dark
              small
              depressed
              target="_blank"
              itemprop="sameAs"
              v-if="$store.state.settings.twitter"
              :href="$store.state.settings.twitter"
            >
              <i class="icon-twitter"></i>
            </v-btn>
            <v-btn
              fab
              dark
              small
              depressed
              target="_blank"
              itemprop="sameAs"
              v-if="$store.state.settings.instagram"
              :href="$store.state.settings.instagram"
            >
              <i class="icon-instagram"></i>
            </v-btn>
            <v-btn
              fab
              dark
              small
              depressed
              target="_blank"
              itemprop="sameAs"
              v-if="$store.state.settings.github"
              :href="$store.state.settings.github"
            >
              <i class="icon-github"></i>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </footer>
</template>

<script>
  import VLogo from '@/components/VLogo';
  export default {
    name: 'Footer',
    components: { VLogo },
    methods: {
      formatPhoneNumber(number) {
        if (number.startsWith(0)) {
          number = '+31' + number.substr(1);
        }

        return number;
      },
      friendlyFormatPhoneNumber(number) {
        if (number.startsWith('+')) {
          number = `${number.substr(0, 3)} ${number.substr(3, 2)} ${number.substr(5)}`
        } else {
          if (number.match('^(0\\d0|088|085)\\d{7}$')) {
            number = `${number.substr(0, 3)} ${number.substr(3, 3)} ${number.substr(6)}`;
          } else {
            number = `${number.substr(0, 4)} ${number.substr(4, 3)} ${number.substr(7)}`;
          }
        }

        return number;
      }
    },
    computed: {
      baseUrl() {
        return process.env.baseUrl
      },
      currentYear() {
        return new Date().getFullYear()
      },
      binding() {
        const binding = {}

        if (this.$vuetify.breakpoint.smAndDown) binding.column = true

        return binding
      }
    },
    mounted() {
      this.$forceUpdate();
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vuetify-scss/bootstrap";
  @import "@/assets/scss/_variables.scss";

  footer {
    background: #17112d;
    color: white;

    > div:first-of-type {
      max-width: map-get($container-max-widths, 'lg');
      margin: 0 auto;
      padding: 3rem 0;
    }
  }

  h4 {
    margin-bottom: 1rem;
  }

  ul a,
  .contact a {
    text-decoration: none;

    &:hover,
    &:hover > i {
      color: $link-hover-color;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    a {
      display: flex;
      align-items: center;
      margin-top: .25rem;

      > i {
        font-size: 100%;
        position: relative;
        left: -.3rem;
      }
    }
  }

  .contact {
    min-width: 275px;

    a {
      display: flex;
      align-items: flex-start;
      margin-top: 1rem;

      > i {
        margin-right: 1rem;
        color: inherit;
      }
    }
  }

  .copyright {
    a {
      display: inline-block;
      height: 2rem;
      width: 2rem;

      margin: 0;

      + a {
        margin-left: .25rem;
      }
    }
  }

  h4 {
    color: inherit;
  }
</style>
