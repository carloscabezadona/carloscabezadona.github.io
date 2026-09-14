import { getCollection, type CollectionEntry } from 'astro:content';
import { TEMA_COLORES } from './consts';
import { T, type Lang } from './i18n';

export type Escrito = CollectionEntry<'escritos'>;

/** Ruta interna respetando el `base` de GitHub Pages. */
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** "OCTUBRE 2026" / "OCTOBER 2026" */
export function mesAnio(fecha: Date, lang: Lang = 'es') {
  return fecha
    .toLocaleDateString(T[lang].dateLocale, { month: 'long', year: 'numeric', timeZone: 'UTC' })
    .replace(' de ', ' ')
    .toUpperCase();
}

/** "14 de septiembre de 2026" / "14 September 2026" */
export function fechaLarga(fecha: Date, lang: Lang = 'es') {
  return fecha.toLocaleDateString(T[lang].dateLocale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function colorTema(tema: string) {
  return TEMA_COLORES[tema.toUpperCase()] ?? 'var(--green)';
}

/** "Energía" -> "energia" */
export function slugTema(tema: string) {
  return tema.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-');
}

/** Las entradas en inglés viven en src/content/escritos/en/. */
export const idioma = (e: Escrito): Lang => (e.id.startsWith('en/') ? 'en' : 'es');
export const slugDe = (e: Escrito) => e.id.replace(/^en\//, '');

/** Minutos de lectura (220 palabras/min, sin contar etiquetas HTML). */
export function minutosLectura(e: Escrito) {
  const palabras = (e.body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 220));
}

export async function escritosOrdenados(lang: Lang = 'es') {
  const todos = await getCollection('escritos', (e) => !e.data.borrador && idioma(e) === lang);
  return todos.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}

/** Versión en el otro idioma (enlazada con `original` en la entrada inglesa). */
export async function traduccion(e: Escrito) {
  if (idioma(e) === 'en') {
    return e.data.original ? (await escritosOrdenados('es')).find((x) => x.id === e.data.original) : undefined;
  }
  return (await escritosOrdenados('en')).find((x) => x.data.original === e.id);
}

/** Temas con al menos una entrada publicada, en orden de uso. */
export async function temasUsados(lang: Lang = 'es') {
  const cuenta = new Map<string, { tema: string; n: number }>();
  for (const e of await escritosOrdenados(lang)) {
    const k = slugTema(e.data.tema);
    const prev = cuenta.get(k);
    cuenta.set(k, { tema: prev?.tema ?? e.data.tema, n: (prev?.n ?? 0) + 1 });
  }
  return [...cuenta.entries()].map(([slug, v]) => ({ slug, ...v })).sort((a, b) => b.n - a.n);
}

/** Hasta `n` entradas relacionadas: primero del mismo tema, luego las más recientes. */
export async function relacionados(actual: Escrito, n = 2) {
  const otros = (await escritosOrdenados(idioma(actual))).filter((e) => e.id !== actual.id);
  const mismo = otros.filter((e) => slugTema(e.data.tema) === slugTema(actual.data.tema));
  return [...mismo, ...otros.filter((e) => !mismo.includes(e))].slice(0, n);
}
