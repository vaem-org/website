<script setup>
const emailRules = [
  v => !!v || 'Please enter your email address',
  v => /@/.test(v) || 'Please enter a valid email address',
]

const remarkRules = [
  v => !!v || 'Please enter your question',
]
const values = ref({
  name: '',
  email: '',
  remark: '',
})

const valid = ref(false)
const loading = ref(false)
const submitted = ref(false)

const { data: formSubmitted } = await useAsyncData('form-submitted', async () => {
  return queryCollection('docs').path('/.form-submitted').first()
})

async function submit() {
  if (!valid.value) {
    return
  }

  try {
    loading.value = true

    await $fetch('/',
      {
        method: 'POST',
        body: new URLSearchParams({
          ...values.value,
          'form-name': 'contact',
        }),
      },
    )
    submitted.value = true
  }
  catch (e) {
    console.error(e.response.data)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-form
        v-if="!submitted"
        v-model="valid"
        data-netlify="true"
        name="contact"
        @submit.prevent="submit"
      >
        <v-text-field
          v-model="values.name"
          box
          label="Name"
          class="mb-3"
          autofocus
          name="name"
        />

        <v-text-field
          v-model="values.email"
          box
          :rules="emailRules"
          label="Email address"
          required
          append-inner-icon="mdi-at"
          class="mb-3"
          name="email"
        />

        <v-textarea
          v-model="values.remark"
          box
          label="Question / remark"
          :rules="remarkRules"
          required
          class="mb-3"
          name="remark"
        />

        <v-btn
          depressed
          round
          :disabled="!valid || loading"
          class="ml-0 mt-5 default"
          type="submit"
          color="primary"
          :loading="loading"
        >
          {{ loading ? 'Sending...' : 'Send' }}
        </v-btn>
      </v-form>
      <div v-else>
        <content-renderer
          v-if="formSubmitted"
          :value="formSubmitted"
        />
      </div>
    </v-col>
  </v-row>
</template>
