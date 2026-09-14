import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const escritos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/escritos' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    tema: z.string(),
    descripcion: z.string(),
    borrador: z.boolean().default(false),
    // Opcional: origen o coautoría, se muestra bajo el título.
    nota: z.string().optional(),
    // Opcional: imagen en public/imagenes/ (ruta "/imagenes/x.jpg"), texto alternativo y crédito/licencia.
    imagen: z.string().optional(),
    imagenAlt: z.string().optional(),
    imagenCredito: z.string().optional(),
    // Solo en entradas inglesas (src/content/escritos/en/): id de la versión española, p. ej. "chips-act-caso-espanol".
    original: z.string().optional(),
  }),
});

export const collections = { escritos };
