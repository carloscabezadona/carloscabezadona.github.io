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
  }),
});

export const collections = { escritos };
