<script setup lang="ts">
import { getArticleSchema } from '~/data/schema'
import { getBlogBySlug } from '~/data/blog'

const route = useRoute()
const slug = route.params.slug as string
const post = getBlogBySlug(slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' })
}

definePageMeta({ layout: 'default' })

const breadcrumbs = [
  { label: 'Inicio', to: '/' },
  { label: 'Blog', to: '/blog' },
  { label: post.title },
]

usePageSeo({
  title: post.metaTitle,
  description: post.metaDescription,
  path: `/blog/${post.slug}`,
  pageType: 'Article',
  breadcrumbs,
  jsonLd: getArticleSchema({
    headline: post.h1,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    datePublished: post.date,
  }),
})
</script>

<template>
  <PageHero
    eyebrow="Blog"
    :heading="post.h1"
    :intro="post.intro"
  >
    <template #breadcrumbs>
      <Breadcrumbs :items="breadcrumbs" />
    </template>
    <p class="text-[10px] font-black uppercase tracking-widest text-white/30 mt-6">
      {{ post.date }}
    </p>
  </PageHero>
  <section class="pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ContentSections :sections="post.sections" />
    </div>
  </section>
  <SiteCta />
</template>
