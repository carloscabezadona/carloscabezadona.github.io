# CLAUDE.md — web personal de Carlos Cabeza Doña

Sitio estático en Astro 5, publicado en https://carloscabezadona.github.io (repo `carloscabezadona/carloscabezadona.github.io`, rama `main`, GitHub Pages vía Actions).

## Reglas que no se negocian

- **No rediseñar.** Paleta (`--bone #FBF8F1`, `--warm #F3EDE0`, `--ink #232420`, `--soft #6F6F64`, `--line #E5DFD0`, `--green #3D6B4A`, `--green-d #2C4E36`), tipografía (Cormorant Garamond + Karla) y el SVG del hero (`src/components/Hero.astro`) se conservan tal cual. Las mejoras usan esos tokens.
- **Nada se publica sin el visto bueno de Carlos.** Los borradores llevan `borrador: true` y **no se suben a GitHub** (el repo es público). Solo se hace commit/push de una entrada cuando él dice «publica».
- **Sin datos inventados.** Toda cifra, fecha, cita o referencia normativa lleva fuente enlazada y verificada. Lo que no se pueda verificar, fuera.
- **Imágenes solo con licencia libre** (Wikimedia Commons CC0/CC BY/CC BY-SA, Flickr oficial del PE o del Consejo con CC), siempre con crédito en `imagenCredito`. Mejor sin imagen que con una dudosa.
- La foto de Carlos (`public/imagenes/carlos-cabeza.jpg`) es solo para «Sobre mí» salvo que él pida otra cosa.
- **Perfil público:** abogado; Máster en Estudios Políticos y de Gobernanza Europea, College of Europe (Brujas); en prácticas en la Comisión Europea. **No mencionar en la web ni en el repo en qué unidad o gabinete de la Comisión trabaja.** Contenido basado solo en información pública.
- **Web bilingüe.** Todo cambio de texto se hace en español y en inglés (`src/i18n.ts`, `Secciones.astro`, `consts.ts`), y cada análisis publicado tiene su versión en `src/content/escritos/en/`.

## Voz y contenido

`VOZ.md` es la guía editorial completa (temas, tono, estructura, bloques HTML, flujo de imágenes). Léela antes de escribir. Modelo de referencia: `src/content/escritos/cbam-despues-del-omnibus.md`.
Resumen: análisis de política europea en clave institucional; tono profesional y periodístico; argumentos a favor y en contra; normas citadas por su número; cierre con «Qué vigilar». En español, con siglas españolas (RCDE UE).

## Estructura

- `src/content/escritos/*.md` — entradas en español; `src/content/escritos/en/*.md` — en inglés (con `original: "<id español>"`). Frontmatter validado en `src/content.config.ts`: `titulo`, `fecha`, `tema`, `descripcion`, `borrador?`, `nota?`, `imagen?`, `imagenAlt?`, `imagenCredito?`, `original?`.
- `tema` ∈ UE, Digital, Sostenibilidad, Energía, Agua, Industria, Comercio, España, Actualidad (en inglés: EU, Digital, Sustainability, Energy, Water, Industry, Trade, Spain, Current affairs). Colores en `TEMA_COLORES` (`src/consts.ts`).
- `src/i18n.ts` — rutas y textos de interfaz en ES/EN.
- `src/views/` — plantillas compartidas (Inicio, Listado, Articulo, TemaPagina); `src/pages/` solo tiene envoltorios por idioma.
- `src/consts.ts` — título, email (`carloscabezadona@gmail.com`), LinkedIn, GoatCounter, publicaciones (ES/EN).
- `src/components/Secciones.astro` — textos de Publicaciones, Sobre mí y Escríbeme (ES/EN).
- `src/utils.ts` — `url()` (respeta `base`, úsalo en todo enlace interno), fechas, tiempo de lectura, temas, relacionados, `idioma()`, `traduccion()`.
- `src/styles/global.css` — CSS original del diseño arriba; añadidos debajo, marcados con comentarios.
- `public/imagenes/` — imágenes de artículos, 1600×900 JPG (sharp: `resize(1600,900,{fit:'cover'}).jpeg({quality:80,mozjpeg:true})`).
- Rutas ES: `/`, `/escritos/`, `/escritos/<archivo>/`, `/temas/<tema>/`, `/publicaciones/`, `/sobre-mi/`, `/escribeme/`, `/rss.xml`.
- Rutas EN: `/en/`, `/en/analysis/`, `/en/analysis/<file>/`, `/en/topics/<topic>/`, `/en/publications/`, `/en/about/`, `/en/contact/`, `/en/rss.xml`.
- Comunes: `/sitemap-index.xml`, `404`. Cada página declara `hreflang` y un enlace ES/EN en la barra superior.

## Comandos

```bash
npm run dev       # http://localhost:4321
npm run verify    # astro check + build + enlaces internos (ejecutar antes de cada push)
```

## Publicar

1. `npm run verify` sin errores.
2. Commit en español, descriptivo. Autor: `Carlos Cabeza Doña <carloscabezadona@gmail.com>` (git no tiene user configurado globalmente; usar `git -c user.name=... -c user.email=...`).
3. `git push` a `main`. El workflow `deploy.yml` vuelve a comprobar tipos, build y enlaces; si algo falla no despliega y la web sigue con la versión anterior.
4. Comprobar en la URL publicada (tarda 1–2 min).

## Tarea programada

`borrador-web-personal` (cada día a las 08:00, en `~/.claude/scheduled-tasks/borrador-web-personal/SKILL.md`): redacta un borrador con imagen siguiendo `VOZ.md`, tema distinto de las 3 últimas entradas, sin commit. Carlos responde «publica», «cambia X» o «descarta».

## Entorno

Windows 10, PowerShell y Git Bash. Node 22+ en CI (local 26). Sin `gh` CLI.
