# Guía de voz y línea editorial

Referencia para escribir (o redactar borradores de) análisis de la web.
Modelo de tono: el policy brief «The CBAM after Omnibus I» (College of Europe / IEE-ULB, 2026) y la entrada `src/content/escritos/cbam-despues-del-omnibus.md`.

## Quién escribe

Carlos Cabeza Doña. Jurista, de Barcelona, trabaja en asuntos europeos desde Bruselas, vinculado al Colegio de Europa. Formación en Derecho y Gestión Pública. Escribe **a título personal**.

## De qué va la web

> Analizo cómo decide Europa y qué cambia eso sobre el terreno.

Política europea en clave institucional: **qué se propone, cómo se negocia (Comisión, Parlamento, Consejo, TJUE, Estados miembros) y qué efectos tiene** en sectores, empresas y territorios, con especial atención a España.

### Temas (valor del campo `tema`)

| Tema | Ejemplos |
|---|---|
| UE | instituciones, procedimiento legislativo, presupuesto, ampliación, Estado de derecho, agenda de simplificación |
| Digital | DMA/DSA, Reglamento de IA, datos, ciberseguridad, soberanía tecnológica |
| Sostenibilidad | Pacto Verde, Clean Industrial Deal, taxonomía, CSRD/CSDDD, paquetes Ómnibus |
| Energía | mercado eléctrico, renovables, hidrógeno, redes, RCDE UE |
| Agua | sequía, Directiva Marco del Agua, resiliencia hídrica |
| Industria | Chips Act, Net-Zero Industry Act, ayudas de Estado, competitividad (Informe Draghi) |
| Comercio | CBAM, acuerdos comerciales, aranceles, defensa comercial, OMC |
| España | transposición, fondos europeos, CCAA, posición española en el Consejo |
| Actualidad | decisión, sentencia o acuerdo reciente que merece una nota rápida |

## Cómo suena

- **Analítico y equilibrado.** Presenta el argumento a favor y el argumento en contra antes de valorar. Distingue lo que dice la norma de lo que ocurre en la práctica («sobre el papel… en la práctica…»).
- **Preciso en lo jurídico e institucional.** Cita las normas por su número (Reglamento (UE) 2025/2083), las fechas exactas y el trámite (propuesta, orientación general, trílogo, acuerdo provisional, publicación en el DOUE). Usa bien los nombres de las instituciones.
- **Basado en datos.** Cifras concretas con fuente. Porcentajes, umbrales, calendarios.
- **Técnico pero legible.** Los términos técnicos se usan, y la primera vez se explican en la misma frase. Siglas desarrolladas en la primera mención, con la sigla española si existe (RCDE UE, no solo EU ETS).
- **Juicio propio, prudente.** Primera persona cuando valora («mi lectura es que…»). Conclusiones condicionadas a lo que falta por saber («dependerá de…»).
- **Tono sereno.** Ni alarmista ni celebratorio. Sin exclamaciones, sin emojis.
- **Evitar muletillas de IA:** «cabe destacar», «en definitiva», «juega un papel crucial», «no solo… sino también», «en un contexto cada vez más complejo», listas de tres por costumbre, abuso de rayas (—), negritas decorativas.

## Estructura de un análisis

- **Extensión:** 700–1.200 palabras (notas de «Actualidad»: 400–600).
- **Entradilla:** primer párrafo, 2–3 frases con la pregunta relevante.
- **Bloques opcionales** (HTML dentro del Markdown; ya tienen estilo en la web):

```html
<div class="claves">
<h4>EN SÍNTESIS</h4>
<ol>
<li>Mensaje clave 1.</li>
<li>Mensaje clave 2.</li>
<li>Mensaje clave 3.</li>
</ol>
</div>

<div class="cifras">
<div><strong>50 t</strong>explicación breve</div>
<div><strong>~99 %</strong>explicación breve</div>
</div>

<div class="vigilar">
<h4>QUÉ VIGILAR</h4>
<ul>
<li>Próximo hito.</li>
</ul>
</div>

<div class="fuentes">
<p><strong>Fuentes principales.</strong> …</p>
</div>
```

- **Cuerpo con `##` subtítulos**, típicamente: qué ha cambiado → por qué (a favor / en contra) → efectos o riesgos → balance.
- **Tablas Markdown** para comparar «antes / después» o posiciones de las instituciones.
- **Cierre:** «Qué vigilar» y, si procede, recomendaciones numeradas. Última frase: la condición de la que depende el resultado. Sin «en conclusión».
- **Fuentes:** enlaces en el texto a fuentes primarias (EUR-Lex, Comisión, Consejo, Parlamento Europeo, TJUE, BOE, CNMC, MITECO, Eurostat) y a centros de análisis o prensa seria (Bruegel, CEPS, Real Instituto Elcano, Politico Europe, Euractiv, FT, El País, Expansión). Bloque «Fuentes principales» al final. **Sin inventar datos, cifras, fechas ni citas: lo que no esté verificado, fuera.**
- **Título:** informativo; se admite una pregunta o dos puntos. Sin clickbait.
- **Descripción:** una frase de 20–30 palabras con la tesis.

```md
---
titulo: "…"
fecha: AAAA-MM-DD
tema: Energía
descripcion: "…"
nota: "Opcional: origen o coautoría."
imagen: "/imagenes/slug-descriptivo.jpg"
imagenAlt: "Descripción literal de lo que se ve."
imagenCredito: "Qué muestra. Foto: Autor, Fuente, Licencia."
borrador: true
---
```

## Imagen de cada análisis

Cada análisis lleva **una imagen** que se muestra bajo el título y se usa al compartir en redes.

- **Qué buscar:** algo concreto y real relacionado con el asunto (un puerto con acero para comercio, una subestación o parque eólico para energía, un embalse para agua, un centro de datos o chips para digital, el Berlaymont / Consejo / hemiciclo para asuntos institucionales). Fotografía documental, sin montajes, sin ilustraciones genéricas de IA ni imágenes de stock «de ejecutivos».
- **Fuentes permitidas (solo estas):**
  - Wikimedia Commons con licencia CC0, CC BY o CC BY-SA (API: `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrsearch=TERMINOS%20filetype:bitmap&gsrlimit=15&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1920`, enviar cabecera User-Agent).
  - Flickr oficial del Parlamento Europeo o del Consejo de la UE, solo si la foto concreta tiene licencia Creative Commons.
  - Nunca imágenes de prensa, Google Images ni fuentes sin licencia clara. Evitar fotos donde personas privadas sean identificables.
- **Tamaño:** mínimo 1200 px de ancho, horizontal.
- **Procesado:** descargar dentro del proyecto y convertir a 1600×900 JPG con sharp (ya instalado):
  `node -e "require('sharp')('tmp.jpg').resize(1600,900,{fit:'cover'}).jpeg({quality:80,mozjpeg:true}).toFile('public/imagenes/SLUG.jpg')"` y borrar el temporal.
- **Crédito obligatorio** en `imagenCredito`, con autor, fuente y licencia exactos según los metadatos.
- Si no hay una imagen adecuada con licencia clara, **mejor sin imagen** que una dudosa.

## Flujo de borradores

1. Los borradores se crean con `borrador: true` en `src/content/escritos/` y **no se suben a GitHub** (el repo es público).
2. Carlos los revisa. Para publicar: `borrador: false`, revisar la fecha, y `git add . && git commit -m "..." && git push`.
3. Los descartados se borran.
