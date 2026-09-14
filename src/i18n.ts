// Textos y rutas de la web en español e inglés.
export type Lang = 'es' | 'en';

export const RUTAS = {
  inicio: { es: '/', en: '/en/' },
  analisis: { es: '/escritos/', en: '/en/analysis/' },
  publicaciones: { es: '/publicaciones/', en: '/en/publications/' },
  sobre: { es: '/sobre-mi/', en: '/en/about/' },
  contacto: { es: '/escribeme/', en: '/en/contact/' },
  rss: { es: '/rss.xml', en: '/en/rss.xml' },
} as const;

export const rutaArticulo = (lang: Lang, slug: string) => (lang === 'en' ? `/en/analysis/${slug}/` : `/escritos/${slug}/`);
export const rutaTema = (lang: Lang, slug: string) => (lang === 'en' ? `/en/topics/${slug}/` : `/temas/${slug}/`);

export const T = {
  es: {
    htmlLang: 'es',
    locale: 'es_ES',
    rssLang: 'es-es',
    dateLocale: 'es-ES',
    descripcion: 'Política europea, de Bruselas al territorio',
    nav: { inicio: 'Inicio', analisis: 'Análisis', publicaciones: 'Publicaciones', sobre: 'Sobre mí', contacto: 'Escríbeme' },
    otroIdioma: { corto: 'EN', largo: 'English' },
    statement: 'Analizo cómo decide Europa y qué cambia eso sobre el terreno.',
    statementHand:
      'El carbono que cruza fronteras, la energía que encarece la industria, las reglas del mercado digital, los fondos que llegan o no llegan a España. Son decisiones que se negocian entre la Comisión, el Parlamento y el Consejo y que acaban aplicándose en empresas y territorios concretos. Escribo análisis breves, con datos y fuentes.',
    analisisNota: 'Política europea en clave institucional: normas, negociaciones y efectos.',
    todos: 'Todos',
    verTodos: 'Ver todos los análisis →',
    ultimo: 'ÚLTIMO ANÁLISIS',
    leer: 'Leer el análisis',
    min: 'MIN',
    minLectura: 'MIN DE LECTURA',
    nTema: (n: number) => `${n} análisis sobre este tema.`,
    temaDesc: (t: string) => `Análisis de política europea sobre ${t.toLowerCase()}.`,
    compartir: 'COMPARTIR',
    copiar: 'Copiar enlace',
    copiado: 'Enlace copiado',
    noCopiado: 'No se pudo copiar',
    autorBio: (fecha: string) => `Abogado especializado en asuntos europeos. Publicado el ${fecha}. Escribo a título personal.`,
    sigue: 'Sigue leyendo',
    volver: '← TODOS LOS ANÁLISIS',
    pubsNota: 'Policy briefs, trabajos académicos e investigación aplicada.',
    sobreTitulo: 'Sobre mí',
    contactoTitulo: 'Escríbeme',
    contactoTexto:
      'Si trabajas en políticas europeas, en una administración o en un sector afectado por estas normas, me interesa conocer tu punto de vista.',
    pie: { secciones: 'SECCIONES', seguir: 'SEGUIR', legal: 'Opiniones a título personal. Imágenes con licencia libre, créditos en cada artículo.' },
    traduccion: 'Leer en inglés',
  },
  en: {
    htmlLang: 'en',
    locale: 'en_GB',
    rssLang: 'en-gb',
    dateLocale: 'en-GB',
    descripcion: 'European policy, from Brussels to the ground',
    nav: { inicio: 'Home', analisis: 'Analysis', publicaciones: 'Publications', sobre: 'About', contacto: 'Contact' },
    otroIdioma: { corto: 'ES', largo: 'Español' },
    statement: 'I analyse how Europe decides, and what that changes on the ground.',
    statementHand:
      'Carbon crossing borders, energy prices squeezing industry, the rules of the digital market, EU funds that reach Spain or fail to. These decisions are negotiated between the Commission, the Parliament and the Council, and end up being applied in real companies and regions. I write short analyses, backed by data and sources.',
    analisisNota: 'EU policy through an institutional lens: rules, negotiations and impact.',
    todos: 'All',
    verTodos: 'See all analyses →',
    ultimo: 'LATEST ANALYSIS',
    leer: 'Read the analysis',
    min: 'MIN',
    minLectura: 'MIN READ',
    nTema: (n: number) => `${n} ${n === 1 ? 'analysis' : 'analyses'} on this topic.`,
    temaDesc: (t: string) => `EU policy analysis on ${t.toLowerCase()}.`,
    compartir: 'SHARE',
    copiar: 'Copy link',
    copiado: 'Link copied',
    noCopiado: 'Could not copy',
    autorBio: (fecha: string) => `Lawyer specialising in EU affairs. Published on ${fecha}. Views are my own.`,
    sigue: 'Keep reading',
    volver: '← ALL ANALYSES',
    pubsNota: 'Policy briefs, academic work and applied research.',
    sobreTitulo: 'About',
    contactoTitulo: 'Get in touch',
    contactoTexto:
      'If you work on EU policy, in public administration or in a sector affected by these rules, I would be glad to hear your perspective.',
    pie: { secciones: 'SECTIONS', seguir: 'FOLLOW', legal: 'Views are my own. Images under free licences, credited in each article.' },
    traduccion: 'Leer en español',
  },
} as const;
