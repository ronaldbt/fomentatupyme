<script setup lang="ts">
import { getBlogBySlug } from '~/data/blog'

const route = useRoute()
const slug = route.params.slug as string
const post = getBlogBySlug(slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' })
}

definePageMeta({ layout: 'default' })

usePageSeo({
  title: post.metaTitle,
  description: post.metaDescription,
  path: `/blog/${post.slug}`,
})
</script>

<template>
  <PageHero
    eyebrow="Blog"
    :h1="post.h1"
    :intro="post.intro"
  >
    <template #breadcrumbs>
      <Breadcrumbs
        :items="[
          { label: 'Inicio', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: post.title },
        ]"
      />
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
