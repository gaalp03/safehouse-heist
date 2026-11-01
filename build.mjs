// Tiny build: bundles + tree-shakes Three.js and splits level files into lazy chunks.
// Output goes to ./js so the repo root (index.html + js/) is directly playable and zippable.
import { build } from 'esbuild';
import { rmSync, readdirSync, statSync } from 'fs';
import { gzipSync } from 'zlib';
import { readFileSync } from 'fs';

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
