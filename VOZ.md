# Guía de voz y línea editorial

Referencia para escribir (o redactar borradores de) entradas de la web.

## Quién escribe

Carlos Cabeza Doña. Jurista, de Barcelona, vive en Bruselas. Formación en Derecho y Gestión Pública; trabaja en asuntos europeos (Colegio de Europa). Escribe **a título personal**.

## De qué va la web

> Escribo sobre cómo Europa regula lo que escasea.

El hilo conductor: **qué pasa cuando una decisión europea (o estatal) aterriza en un territorio concreto**. Bruselas → pueblos, empresas, ríos, facturas.

### Temas (valor del campo `tema`)

| Tema | Ejemplos |
|---|---|
| UE | instituciones, presupuesto, ampliación, competencias, Estado de derecho |
| Digital | DMA/DSA, IA Act, datos, ciberseguridad, soberanía tecnológica |
| Sostenibilidad | Pacto Verde, taxonomía, CSRD/CSDDD, Ómnibus, biodiversidad |
| Energía | mercado eléctrico, renovables, hidrógeno, redes, precios |
| Agua | sequía, Directiva Marco, gestión de cuencas |
| Industria | Chips Act, Net-Zero Industry Act, ayudas de Estado, competitividad |
| Comercio | CBAM, acuerdos comerciales, aranceles, defensa comercial |
| España | transposición, fondos europeos, CCAA, casos concretos españoles |
| Actualidad | algo que acaba de pasar y merece una nota rápida |

## Cómo suena

- **Sin jerga.** Si aparece un término técnico, se explica en la misma frase. Siglas desarrolladas la primera vez.
- **Frases cortas y concretas.** Nada de "en un contexto cada vez más complejo".
- **Primera persona discreta.** "Me interesa", "creo que", "lo que no está claro es". Opinión razonada, no militancia.
- **Aterrizar siempre.** Cada entrada baja a algo tangible: un sector, una región, una cifra, una empresa, un caso.
- **Honestidad sobre lo que no se sabe.** Mejor "todavía no está claro" que inventar certezas.
- **Tono sereno.** Ni alarmista ni celebratorio. Sin exclamaciones, sin emojis.
- **Evitar muletillas de IA:** "cabe destacar", "en definitiva", "juega un papel crucial", "no solo… sino también", listas de tres por costumbre, abuso de rayas (—), negritas decorativas.

## Formato de una entrada

- **Extensión:** 500–900 palabras. Son "notas breves".
- **Primer párrafo = entradilla:** 2–3 frases que dicen de qué va y por qué importa.
- **Cuerpo:** 4–8 párrafos. Subtítulos `##` solo si pasa de ~700 palabras.
- **Cierre:** una idea abierta o lo que conviene vigilar después. Sin "en conclusión".
- **Fuentes:** enlaces en el propio texto a fuentes primarias (EUR-Lex, Comisión, Consejo, Parlamento, TJUE, BOE, CNMC, MITECO, Eurostat) o prensa seria. Sin inventar datos, cifras ni citas: todo lo que no esté verificado, fuera.
- **Título:** claro, informativo, sin clickbait. Puede llevar dos puntos.
- **Descripción:** una frase de 15–25 palabras que diga qué aporta la entrada.

```md
---
titulo: "…"
fecha: AAAA-MM-DD
tema: Energía
descripcion: "…"
borrador: true
---
```

## Flujo de borradores

1. Los borradores se crean con `borrador: true` en `src/content/escritos/` y **no se suben a GitHub** (el repo es público).
2. Carlos los revisa. Para publicar: poner `borrador: false`, revisar la fecha, y `git add . && git commit -m "..." && git push`.
3. Los descartados se borran.
