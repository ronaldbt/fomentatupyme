/**
 * Configura www.fomentatupyme.cl → redirección 301 a fomentatupyme.cl (Firebase Hosting).
 * Usa credenciales locales de `firebase login`.
 */
import { readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

const PROJECT = 'fomentatupyme'
const SITE = 'fomentatupyme'
const WWW = 'www.fomentatupyme.cl'
const APEX = 'fomentatupyme.cl'

const configPath = join(homedir(), '.config', 'configstore', 'firebase-tools.json')
const config = JSON.parse(readFileSync(configPath, 'utf8'))
const accessToken = config?.tokens?.access_token

if (!accessToken) {
  console.error('No hay access_token. Ejecuta: firebase login')
  process.exit(1)
}

const listRes = await fetch(
  `https://firebasehosting.googleapis.com/v1beta1/projects/${PROJECT}/sites/${SITE}/customDomains`,
  { headers: { Authorization: `Bearer ${accessToken}` } },
)

if (!listRes.ok) {
  console.error('Error al listar dominios:', await listRes.text())
  process.exit(1)
}

const { customDomains = [] } = await listRes.json()
const existing = customDomains.find((d) => d.name?.includes(WWW) || d.labels?.domain === WWW)

if (existing?.redirectTarget === APEX) {
  console.log('www ya redirige a', APEX)
  process.exit(0)
}

const createRes = await fetch(
  `https://firebasehosting.googleapis.com/v1beta1/projects/${PROJECT}/sites/${SITE}/customDomains?customDomainId=${encodeURIComponent(WWW)}`,
  {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ redirectTarget: APEX }),
  },
)

const text = await createRes.text()
let data
try {
  data = JSON.parse(text)
} catch {
  data = text
}

if (!createRes.ok) {
  console.error('Error al configurar www:', JSON.stringify(data, null, 2))
  process.exit(1)
}

console.log('Solicitud enviada. Firebase provisionará la redirección www → apex.')
console.log('Operación:', data.name ?? '(ver consola Firebase Hosting)')
