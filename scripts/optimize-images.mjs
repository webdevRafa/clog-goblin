import { readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const repo = process.cwd()
const assets = path.join(repo, 'src', 'assets')
const entries = await readdir(assets)

for (const filename of entries.filter((name) => /^cartoon-\d+\.png$/.test(name))) {
  const source = path.join(assets, filename)
  const destination = path.join(assets, filename.replace(/\.png$/, '.webp'))
  await sharp(source)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(destination)
}

await sharp(path.join(repo, 'public', 'og.png'))
  .resize(1200, 630, { fit: 'cover' })
  .png({ compressionLevel: 9, palette: true, quality: 88 })
  .toFile(path.join(repo, 'public', 'og-optimized.png'))

await sharp(path.join(assets, 'cartoon-3.png'))
  .resize(256, 256, { fit: 'cover', position: 'top' })
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(repo, 'public', 'gary-favicon-optimized.png'))

