// Tiny build: bundles + tree-shakes Three.js and splits level files into lazy chunks.
// Output goes to ./js so the repo root (index.html + js/) is directly playable and zippable.
import { build } from 'esbuild';
import { rmSync, readdirSync, statSync } from 'fs';
import { gzipSync } from 'zlib';
import { readFileSync, writeFileSync } from 'fs';
import { createHash } from 'crypto';

rmSync('js', { recursive: true, force: true });
await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  splitting: true,
  format: 'esm',
  minify: true,
  target: ['es2020'],
  outdir: 'js',
  chunkNames: 'c-[hash]',
  legalComments: 'none',
  logLevel: 'warning',
});

let total = 0, gz = 0;
for (const f of readdirSync('js')) {
  const p = 'js/' + f, s = statSync(p).size, z = gzipSync(readFileSync(p)).length;
  total += s; gz += z;
  console.log(`${p.padEnd(24)} ${(s / 1024).toFixed(1).padStart(7)} KB  (gzip ${(z / 1024).toFixed(1)} KB)`);
}
console.log(`total ${(total / 1024).toFixed(1)} KB, gzip ${(gz / 1024).toFixed(1)} KB`);

// cache-bust: stamp index.html with a content hash of the entry bundle (chunks are already hashed),
// so players never keep running an old build from the browser / CDN cache
const ver = createHash('sha1').update(readFileSync('js/main.js')).digest('hex').slice(0, 8);
let html = readFileSync('index.html', 'utf8');
html = html.replace(/\.\/js\/main\.js(\?v=[0-9a-f]+)?/g, './js/main.js?v=' + ver)
  .replace(/<meta name="build" content="[^"]*">/, `<meta name="build" content="${ver}">`);
if (!html.includes('<meta name="build"')) html = html.replace('<meta charset="utf-8">', `<meta charset="utf-8">\n<meta name="build" content="${ver}">`);
writeFileSync('index.html', html);
console.log('build stamp', ver);
