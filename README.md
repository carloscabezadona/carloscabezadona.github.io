# Web personal — Carlos Cabeza Doña

Sitio estático con [Astro](https://astro.build), desplegado en GitHub Pages.

## Local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Escribir una entrada

Crea un `.md` en `src/content/escritos/`. El nombre del archivo es la URL (`/escritos/nombre-del-archivo/`).

```md
---
titulo: "Título de la entrada"
fecha: 2026-11-15
tema: Agua            # Comercio, Industria, Agua… (color en src/consts.ts)
descripcion: "Una o dos frases para la portada, RSS y Open Graph."
borrador: false       # true = no se publica
---

El primer párrafo se muestra como entradilla.
```

## Qué editar

- `src/consts.ts` — email, LinkedIn, colores por tema, publicaciones.
- `src/components/Secciones.astro` — textos de Sobre mí y Escríbeme.
- `public/og.png` — imagen para compartir en redes (1200×630).

## Desplegar en GitHub Pages

1. Crea un repo en GitHub y sube el proyecto a la rama `main`.
2. En el repo: **Settings → Pages → Source: GitHub Actions**.
3. Cada push a `main` compila y publica (`.github/workflows/deploy.yml`).
   `SITE` y `BASE` se calculan solos, así que funciona tanto en `usuario.github.io` como en `usuario.github.io/repo`.
4. Dominio propio: añade `public/CNAME` con el dominio y crea la variable de repositorio
   `CUSTOM_DOMAIN` = `https://tudominio.com`.

RSS en `/rss.xml`, sitemap en `/sitemap-index.xml`.
