import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const blog = defineCollection({
  type: 'page',
  source: 'blog/**/*.md',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    h1: z.string().optional(),
  }),
})

export default defineContentConfig({
  collections: {
    blog,
  },
})
