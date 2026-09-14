import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE } from './consts';
import { RUTAS, rutaArticulo, T, type Lang } from './i18n';
import { escritosOrdenados, slugDe, url } from './utils';

export async function rssIdioma(context: APIContext, lang: Lang) {
  const escritos = await escritosOrdenados(lang);
  return rss({
    title: SITE_TITLE,
    description: T[lang].descripcion,
    site: new URL(url(RUTAS.inicio[lang]), context.site),
    customData: `<language>${T[lang].rssLang}</language>`,
    items: escritos.map((e) => ({
      title: e.data.titulo,
      pubDate: e.data.fecha,
      description: e.data.descripcion,
      categories: [e.data.tema],
      link: url(rutaArticulo(lang, slugDe(e))),
    })),
  });
}
