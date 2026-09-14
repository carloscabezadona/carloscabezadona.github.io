import { getCollection, type CollectionEntry } from 'astro:content';
import { TEMA_COLORES } from './consts';

export type Escrito = CollectionEntry<'escritos'>;

/** Ruta interna respetando el `base` de GitHub Pages. */
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** "OCTUBRE 2026" */
export function mesAnio(fecha: Date) {
  return fecha
    .toLocaleDateString('es-ES', { month: 'long', year: 'numeric', timeZone: 'UTC' })
    .replace(' de ', ' ')
    .toUpperCase();
}

/** "14 de septiembre de 2026" */
export function fechaLarga(fecha: Date) {
  return fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function colorTema(tema: string) {
  return TEMA_COLORES[tema.toUpperCase()] ?? 'var(--green)';
}

/** "Energía" -> "energia" */
export function slugTema(tema: string) {
  return tema.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-');
}

/** Minutos de lectura (220 palabras/min, sin contar etiquetas HTML). */
export function minutosLectura(e: Escrito) {
  const palabras = (e.body ?? '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 220));
}

export async function escritosOrdenados() {
  const todos = await getCollection('escritos', ({ data }) => !data.borrador);
  return todos.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}

/** Temas con al menos una entrada publicada, en orden de uso. */
export async function temasUsados() {
  const cuenta = new Map<string, { tema: string; n: number }>();
  for (const e of await escritosOrdenados()) {
    const k = slugTema(e.data.tema);
    const prev = cuenta.get(k);
    cuenta.set(k, { tema: prev?.tema ?? e.data.tema, n: (prev?.n ?? 0) + 1 });
  }
  return [...cuenta.entries()].map(([slug, v]) => ({ slug, ...v })).sort((a, b) => b.n - a.n);
}

/** Hasta `n` entradas relacionadas: primero del mismo tema, luego las más recientes. */
export async function relacionados(actual: Escrito, n = 2) {
  const otros = (await escritosOrdenados()).filter((e) => e.id !== actual.id);
  const mismo = otros.filter((e) => slugTema(e.data.tema) === slugTema(actual.data.tema));
  return [...mismo, ...otros.filter((e) => !mismo.includes(e))].slice(0, n);
}
