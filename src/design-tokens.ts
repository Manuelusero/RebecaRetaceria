/**
 * Design Tokens - Rebeca Retacería
 * Colores, tipografías y espaciados del sistema de diseño
 */

export const colors = {
  // Backgrounds
  bgPrimary: '#FFFAE4',
  bgSecondary: '#FFFFFF',
  
  // Text colors
  textNav: '#666666',      // Productos, Contacto
  textBrand: '#B30505',    // Rebeca, títulos principales
  textSubtitle: '#777777', // Subtítulos
  textDark: '#0F0F0F',     // Títulos de sección
  textGray: '#777777',     // Información secundaria
} as const;

export const typography = {
  // Font families
  fontRoboto: 'Roboto, sans-serif',
  fontInter: 'Inter, sans-serif',
  
  // Font sizes
  sizeNav: '15px',
  sizeBrand: '64px',
  sizeSubtitle: '32px',
  sizeHero: '64px',
  sizeAccompany: '22px',
  sizeLabel: '15px',
  
  // Font weights
  weightBold: 700,
  weightSemiBold: 600,
  weightMedium: 500,
} as const;

export const spacing = {
  // Logo
  logoMarginLeft: '41px',
  logoMarginY: '8px',
  logoToProducts: '903px',
  
  // Hero image
  imageToRebeca: '114px',
  imageToSubtitle: '109px',
  textsToImage: '12px',
} as const;

export const sizes = {
  // Logo
  logoWidth: '60px',
  logoHeight: '64px',
  
  // Hero image
  heroImageWidth: '637px',
  heroImageHeight: '716px',
} as const;
