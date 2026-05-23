import sharp from 'sharp'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public', 'images')
const source = join(publicDir, 'hero_marketing_chile.png')

const variants = [
  { width: 640, name: 'hero_marketing_chile-640.webp' },
  { width: 928, name: 'hero_marketing_chile.webp' },
]

for (const { width, name } of variants) {
  const out = join(publicDir, name)
  await sharp(source)
    .resize(width, null, { withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(out)
  const meta = await sharp(out).metadata()
  console.log(`✓ ${name} (${meta.width}×${meta.height})`)
}
