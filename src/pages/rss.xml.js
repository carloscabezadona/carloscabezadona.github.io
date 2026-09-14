import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { escritosOrdenados, url } from '../utils';

export async function GET(context) {
  const escritos = await escritosOrdenados();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: new URL(url('/'), context.site),
    customData: '<language>es-es</language>',
    items: escritos.map((e) => ({
      title: e.data.titulo,
      pubDate: e.data.fecha,
      description: e.data.descripcion,
      categories: [e.data.tema],
      link: url(`/escritos/${e.id}/`),
    })),
  });
}
