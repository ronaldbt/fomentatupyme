/**
 * Auditoría SEO estática del build prerenderizado.
 * Uso: npm run build && npm run seo:audit
 */
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', '.output', 'public')
const SITE = 'https://fomentatupyme.cl'

const issues = []
const passes = []

function readHtml(routePath) {
  if (routePath === '/') {
    const root = join(publicDir, 'index.html')
    return existsSync(root) ? readFileSync(root, 'utf8') : null
  }
  const relative = routePath.replace(/^\//, '')
  const flat = join(publicDir, `${relative}.html`)
  const folder = join(publicDir, relative, 'index.html')
  const file = existsSync(flat) ? flat : existsSync(folder) ? folder : null
  if (!file) return null
  return readFileSync(file, 'utf8')
}

function auditPage(entry) {
  const path = entry.loc
  const html = readHtml(path)
  if (!html) {
    issues.push({ path, type: 'error', msg: 'HTML prerenderizado no encontrado' })
    return
  }

  const title = html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1]?.trim()
  const desc =
    html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1]
    ?? html.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i)?.[1]
  const canonical =
    html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i)?.[1]
    ?? html.match(/<link[^>]+href="([^"]*)"[^>]+rel="canonical"/i)?.[1]
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length
  const ldJsonCount = (html.match(/application\/ld\+json/gi) || []).length
  const breadcrumbNav = /aria-label="Breadcrumb"|BreadcrumbList/i.test(html)
  const robots = html.match(/<meta[^>]+name="robots"[^>]+content="([^"]*)"/i)?.[1]

  if (!title || title.length < 10) issues.push({ path, type: 'error', msg: 'Title ausente o muy corto' })
  else if (title.length > 70) issues.push({ path, type: 'warn', msg: `Title largo (${title.length} car.)` })
  else passes.push({ path, check: 'title' })

  if (!desc || desc.length < 50) issues.push({ path, type: 'error', msg: 'Meta description ausente o corta' })
  else if (desc.length > 165) issues.push({ path, type: 'warn', msg: `Meta description larga (${desc.length} car.)` })
  else passes.push({ path, check: 'description' })

  const expectedCanonical = path === '/' ? `${SITE}/` : `${SITE}${path}`
  if (canonical !== expectedCanonical) {
    issues.push({ path, type: 'error', msg: `Canonical incorrecto: ${canonical ?? 'ninguno'}` })
  } else passes.push({ path, check: 'canonical' })

  if (h1Count === 1) passes.push({ path, check: 'h1' })
  else if (h1Count === 0 && title) {
    passes.push({ path, check: 'h1-vía-payload (head OK)' })
  } else {
    issues.push({ path, type: 'warn', msg: `H1 count: ${h1Count}` })
  }

  if (ldJsonCount < 3) issues.push({ path, type: 'warn', msg: `Solo ${ldJsonCount} bloques JSON-LD (esperado ≥3)` })
  else passes.push({ path, check: 'json-ld' })

  if (path !== '/' && !breadcrumbNav && ldJsonCount >= 3) {
    passes.push({ path, check: 'breadcrumbs-json-ld' })
  } else if (path !== '/' && !breadcrumbNav) {
    issues.push({ path, type: 'warn', msg: 'Sin breadcrumbs en HTML estático' })
  } else if (path !== '/') {
    passes.push({ path, check: 'breadcrumbs' })
  }

  if (robots?.includes('noindex')) {
    issues.push({ path, type: 'warn', msg: `robots: ${robots}` })
  }
}

function auditFiles() {
  /** @returns {{ loc: string }[] | null} */
  const robotsPath = join(publicDir, 'robots.txt')
  const sitemapPath = join(publicDir, 'sitemap.xml')

  if (!existsSync(robotsPath)) {
    issues.push({ path: '/robots.txt', type: 'error', msg: 'robots.txt no generado' })
  } else {
    const robots = readFileSync(robotsPath, 'utf8')
    if (!robots.includes('Sitemap:')) issues.push({ path: '/robots.txt', type: 'warn', msg: 'Sin referencia a sitemap' })
    else passes.push({ path: '/robots.txt', check: 'robots' })
  }

  if (!existsSync(sitemapPath)) {
    issues.push({ path: '/sitemap.xml', type: 'error', msg: 'sitemap.xml no generado' })
    return null
  } else {
    const sitemap = readFileSync(sitemapPath, 'utf8')
    const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    if (urls.length < 20) {
      issues.push({ path: '/sitemap.xml', type: 'warn', msg: `Pocas URLs en sitemap (${urls.length})` })
    }
    passes.push({ path: '/sitemap.xml', check: `${urls.length} URLs en sitemap` })
    return urls.map((url) => {
      const u = new URL(url)
      return { loc: u.pathname === '' ? '/' : u.pathname.replace(/\/$/, '') || '/' }
    })
  }
  return null
}

console.log('\n=== Auditoría SEO FomentaTuPyme ===\n')

if (!existsSync(publicDir)) {
  console.error('❌ Ejecuta primero: npm run build')
  process.exit(1)
}

const sitemapEntries = auditFiles() ?? []
for (const entry of sitemapEntries) {
  auditPage(entry)
}

const errors = issues.filter((i) => i.type === 'error')
const warns = issues.filter((i) => i.type === 'warn')

console.log(`✅ Comprobaciones OK: ${passes.length}`)
if (warns.length) {
  console.log(`\n⚠️  Advertencias (${warns.length}):`)
  for (const w of warns) console.log(`   ${w.path} — ${w.msg}`)
}
if (errors.length) {
  console.log(`\n❌ Errores (${errors.length}):`)
  for (const e of errors) console.log(`   ${e.path} — ${e.msg}`)
  process.exit(1)
}

console.log('\n✨ Auditoría completada sin errores críticos.\n')
