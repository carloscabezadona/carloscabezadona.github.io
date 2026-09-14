import { getCollection } from 'astro:content';
import { TEMA_COLORES } from './consts';

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

export function colorTema(tema: string) {
  return TEMA_COLORES[tema.toUpperCase()] ?? 'var(--green)';
}

export async function escritosOrdenados() {
  const todos = await getCollection('escritos', ({ data }) => !data.borrador);
  return todos.sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf());
}
