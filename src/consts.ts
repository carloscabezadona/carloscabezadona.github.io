export const SITE_TITLE = 'Carlos Cabeza Doña';
export const SITE_DESCRIPTION = 'Política europea, de Bruselas al territorio';
export const EMAIL = 'carloscabezadona@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/carlos--cabeza';

// Analítica sin cookies (GoatCounter). Pon aquí tu código, p. ej. 'carloscabezadona'.
// Vacío = sin analítica.
export const GOATCOUNTER = 'carloscabezadona';

// Color de cada tema (clave en mayúsculas, en español e inglés). Si un tema no está, usa el verde.
export const TEMA_COLORES: Record<string, string> = {
  COMERCIO: '#C89B4A', TRADE: '#C89B4A',
  INDUSTRIA: '#A85C36', INDUSTRY: '#A85C36',
  AGUA: '#4E7E84', WATER: '#4E7E84',
  ENERGÍA: '#C89B4A', ENERGY: '#C89B4A',
  SOSTENIBILIDAD: '#3D6B4A', SUSTAINABILITY: '#3D6B4A',
  DIGITAL: '#4E7E84',
  UE: '#2C4E36', EU: '#2C4E36',
  ESPAÑA: '#A85C36', SPAIN: '#A85C36',
  ACTUALIDAD: '#6F6F64', 'CURRENT AFFAIRS': '#6F6F64',
};

const COAUTORES = 'A. Fleury-Isambert, J. Fourré, M. Gülderen';

export const PUBLICACIONES = {
  es: [
    {
      t: 'The CBAM after Omnibus I: an assessment of the simplification of the EU Carbon Border Adjustment Mechanism',
      src: `Policy brief · College of Europe / IEE-ULB · julio 2026 · con ${COAUTORES} y A. Valera Córdoba`,
    },
    {
      t: 'Ecosistemas de innovación en Europa: hacia hubs regionales especializados',
      src: 'College of Europe / DG RTD, proyecto TellUs · en prensa',
    },
    {
      t: 'Medidas sancionadoras y actuación administrativa en la gestión de la sequía en Cataluña',
      src: 'Universitat de Barcelona · 2025',
    },
  ],
  en: [
    {
      t: 'The CBAM after Omnibus I: an assessment of the simplification of the EU Carbon Border Adjustment Mechanism',
      src: `Policy brief · College of Europe / IEE-ULB · July 2026 · with ${COAUTORES} and A. Valera Córdoba`,
    },
    {
      t: 'Innovation ecosystems in Europe: towards specialised regional hubs',
      src: 'College of Europe / DG RTD, TellUs project · forthcoming',
    },
    {
      t: 'Sanctions and administrative action in drought management in Catalonia (in Spanish)',
      src: 'University of Barcelona · 2025',
    },
  ],
};
