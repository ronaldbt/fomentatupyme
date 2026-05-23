/**
 * Crea regla de redirección www → apex en Cloudflare.
 * Uso: CLOUDFLARE_API_TOKEN=xxx node scripts/setup-cloudflare-www-redirect.mjs
 */
const ZONE_NAME = 'fomentatupyme.cl'
const TOKEN = process.env.CLOUDFLARE_API_TOKEN

if (!TOKEN) {
  console.error('Falta CLOUDFLARE_API_TOKEN (API Token con Zone:Read y Zone Rules:Edit).')
  process.exit(1)
}

const api = async (path, options = {}) => {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  const data = await res.json()
  if (!data.success) {
    throw new Error(JSON.stringify(data.errors ?? data, null, 2))
  }
  return data.result
}

const zones = await api(`/zones?name=${ZONE_NAME}`)
const zone = zones[0]
if (!zone) {
  console.error(`Zona no encontrada: ${ZONE_NAME}`)
  process.exit(1)
}

console.log(`Zona: ${zone.id} (${zone.name})`)

// Regla dinámica: Redirect Rules (rulesets phase http_request_dynamic_redirect)
const rulesets = await api(`/zones/${zone.id}/rulesets`)
let redirectRuleset = rulesets.find((r) => r.phase === 'http_request_dynamic_redirect')

if (!redirectRuleset) {
  redirectRuleset = await api(`/zones/${zone.id}/rulesets`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'www to apex redirect',
      kind: 'zone',
      phase: 'http_request_dynamic_redirect',
    }),
  })
  console.log('Ruleset creado:', redirectRuleset.id)
}

const wwwRule = {
  description: 'Redirect www.fomentatupyme.cl to fomentatupyme.cl',
  expression: '(http.host eq "www.fomentatupyme.cl")',
  action: 'redirect',
  action_parameters: {
    from_value: {
      status_code: 301,
      target_url: {
        expression:
          'concat("https://fomentatupyme.cl", http.request.uri.path, if(len(http.request.uri.query) > 0, concat("?", http.request.uri.query), ""))',
      },
      preserve_query_string: false,
    },
  },
}

const existing = await api(`/zones/${zone.id}/rulesets/${redirectRuleset.id}`)
const hasRule = existing.rules?.some((r) => r.description === wwwRule.description)

if (hasRule) {
  console.log('La regla www ya existe.')
} else {
  await api(`/zones/${zone.id}/rulesets/${redirectRuleset.id}/rules`, {
    method: 'POST',
    body: JSON.stringify(wwwRule),
  })
  console.log('Regla de redirección www creada.')
}

console.log('Listo. Prueba: curl -I https://www.fomentatupyme.cl')
