// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages:
// - Repo "USUARIO.github.io"  -> SITE = 'https://USUARIO.github.io', BASE = '/'
// - Repo "otro-nombre"        -> SITE = 'https://USUARIO.github.io', BASE = '/otro-nombre'
// - Dominio propio (CNAME)    -> SITE = 'https://tudominio.com',     BASE = '/'
// El workflow de despliegue los rellena solo; en local se usan los valores por defecto.
const SITE = process.env.SITE ?? 'https://USUARIO.github.io';
const BASE = process.env.BASE ?? '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
