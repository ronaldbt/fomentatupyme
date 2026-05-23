import { getSitemapEntries } from '~/data/sitemap-routes'

export default defineEventHandler(() => {
  return getSitemapEntries()
})
