import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: '*.md',
      type: 'page',
      schema: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        hero: z.object({
          src: z.string().nonempty(),
          text: z.string().nonempty(),
        }),
      }),
    }),
  },
})
