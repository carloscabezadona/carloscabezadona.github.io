// Comprueba que todos los enlaces e imágenes internos de dist/ apuntan a archivos que existen.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const base = (process.env.BASE ?? '/').replace(/\/$/, '');

const html = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) html.push(p);
  }
})(DIST);

const rotos = [];
for (const file of html) {
  const src = readFileSync(file, 'utf8');
  for (const [, ref] of src.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    if (ref.startsWith('//')) continue;
    let rel = decodeURIComponent(base && ref.startsWith(base) ? ref.slice(base.length) : ref);
    const destino = join(DIST, rel);
    const ok = existsSync(destino) && statSync(destino).isFile()
      || existsSync(join(destino, 'index.html'));
    if (!ok) rotos.push(`${file} -> ${ref}`);
  }
}

if (rotos.length) {
  console.error(`✗ ${rotos.length} enlace(s) interno(s) roto(s):\n` + [...new Set(rotos)].join('\n'));
  process.exit(1);
}
console.log(`✓ Enlaces internos correctos en ${html.length} páginas`);
