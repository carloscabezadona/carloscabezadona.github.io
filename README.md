# Web personal — Carlos Cabeza Doña

Sitio estático con [Astro](https://astro.build), publicado en https://carloscabezadona.github.io

## Local

```bash
npm install
npm run dev      # http://localhost:4321
npm run verify   # comprueba tipos, compila y revisa enlaces internos
```

## Escribir un análisis

Crea un `.md` en `src/content/escritos/`. El nombre del archivo es la URL (`/escritos/nombre-del-archivo/`).
La guía de estilo completa está en [VOZ.md](VOZ.md).

```md
---
titulo: "Título del análisis"
fecha: 2026-11-15
tema: Energía          # UE, Digital, Sostenibilidad, Energía, Agua, Industria, Comercio, España, Actualidad
descripcion: "Una frase con la tesis (portada, RSS y redes)."
imagen: "/imagenes/nombre.jpg"          # opcional, en public/imagenes/
imagenAlt: "Qué se ve en la imagen."
imagenCredito: "Qué muestra. Foto: Autor, Fuente, Licencia."
borrador: false        # true = no se publica
---
```

## Qué editar

- `src/consts.ts` — email, LinkedIn, analítica, colores por tema, publicaciones.
- `src/components/Secciones.astro` — textos de Sobre mí y Escríbeme.
- `public/og.png` — imagen por defecto al compartir (1200×630).

## Incluye

RSS (`/rss.xml`), sitemap (`/sitemap-index.xml`), `robots.txt`, Open Graph y datos estructurados (schema.org) por artículo, páginas por tema, 404, y analítica opcional sin cookies (GoatCounter).

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: comprueba tipos, compila, revisa enlaces y publica en GitHub Pages. Si algo falla, no se publica y la web sigue con la versión anterior. Las pull requests y otras ramas se comprueban con `ci.yml`.

**Dominio propio:** añade `public/CNAME` con el dominio y crea la variable de repositorio `CUSTOM_DOMAIN` = `https://tudominio.com`.
