<template>
  <section v-editable="blok">
    <v-container>
      <v-layout>
        <v-flex>
          <v-alert
            :value="formSent"
            type="info"
            color="grey lighten-3 black--text"
          >
            Thank you for your request. We will contact you ASAP.
          </v-alert>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            v-if="!formSent"
            method="post"
            @submit.prevent="submit"
          >
            <div class="subject">
              <input type="text" name="subject">
            </div>

            <v-text-field
              box
              v-model="values.name"
              label="Name"
            ></v-text-field>

            <v-text-field
              box
              v-model="values.email"
              :rules="emailRules"
              label="Email address"
              required
              append-icon="alternate_email"
            ></v-text-field>

            <v-textarea
              box
              label="Question / remark"
              v-model="values.remark"
              :rules="remarkRules"
              required
            ></v-textarea>

            <v-btn
              depressed
              round
              :disabled="!valid"
              class="ml-0 default"
              type="submit"
            >
              {{ loading ? 'Sending...' : 'Send' }}
            </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
  import { stringify } from 'querystring';

  export default {
    name: 'ContactForm',
    props: ['blok'],
    data() {
      return {
        formSent: false,
        loading: false,
        recaptcha: null,
        valid: false,
        emailRules: [
          v => !!v || 'Please enter your email address',
          v => /@/.test(v) || 'Please enter a valid email address'
        ],
        remarkRules: [
          v => !!v || 'Please enter your question',
        ],
        values: {
          name: '',
          email: '',
          remark: '',
        },
      }
    },
    methods: {
      async submit() {
        this.valid = this.$refs.form.validate();

        if (!this.valid) return;

        try {
          this.loading = true;

          await this.$axios.$post('/',
            stringify({
              ...this.values,
              'form-name': 'contact'
            })
          );

          if (this.is_link(this.blok.page)) {
            this.$nuxt.$router.push({ path: this.url(this.blok.page) })
          } else {
            this.formSent = true;
          }

          this.loading = false;
        }
        catch (e) {
          console.error(e.response.data);

          this.loading = false;
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/_variables.scss";

  section {
    > .container {
      max-width: 40rem;
    }

    .subject {
      display: none;
    }
  }
</style>
