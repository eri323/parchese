// parchese — tokens de diseño (decisión 0010). Fuente: Claude Design, «Identidad y pantallas v2» y «ParcheseApp v2».
// En la fase 3 este archivo pasa a src/core/ui/tokens.ts.

const juegoClaro = {
  memoria: { matiz: '#466880', tinte: '#E6F0F8' },
  sopa: { matiz: '#775E3B', tinte: '#F5EDE1' },
  sudoku: { matiz: '#625E81', tinte: '#EFEDFA' },
  crucigrama: { matiz: '#7A576A', tinte: '#F8EBF2' },
} as const;

const juegoOscuro = {
  memoria: { matiz: '#9BC0DB', tinte: '#1D2A33' },
  sopa: { matiz: '#D7BC94', tinte: '#30281C' },
  sudoku: { matiz: '#BBB7E0', tinte: '#292837' },
  crucigrama: { matiz: '#D9B1C7', tinte: '#33252D' },
} as const;

export const color = {
  claro: {
    fondo: '#F4F3F0', superficie: '#FFFFFF', texto: '#1C1F1E', textoSec: '#696E6B', textoTer: '#9A9E9B',
    relleno: 'rgba(120,120,128,0.12)', separador: 'rgba(60,60,67,0.12)', barra: 'rgba(250,249,247,0.82)',
    primario: '#3E6B57', sobrePrimario: '#FFFFFF', primarioTinte: '#E3EFE8',
    reto: '#A3532F', sobreReto: '#FFFFFF', retoTinte: '#FBE9E1',
    error: '#B3261E', errorTinte: '#FCE8E6',
    juego: juegoClaro,
  },
  oscuro: {
    fondo: '#0E0F0F', superficie: '#1C1E1D', texto: '#F2F3F1', textoSec: '#A1A6A3', textoTer: '#6C716E',
    relleno: 'rgba(118,118,128,0.24)', separador: 'rgba(255,255,255,0.09)', barra: 'rgba(24,26,25,0.82)',
    primario: '#8CC2A6', sobrePrimario: '#0E0F0F', primarioTinte: '#1E2E26',
    reto: '#E8A084', sobreReto: '#0E0F0F', retoTinte: '#36241C',
    error: '#FF8A80', errorTinte: '#3A1E1C',
    juego: juegoOscuro,
  },
} as const;

// textoTer NO cumple AA para texto (claro 2.45:1, oscuro 3.37:1 sobre superficie): solo para chevrones y
// adornos. La v2 lo usa en la pestaña inactiva y en los días futuros: pendiente de ajustar (ver decisión 0010).
// El acento cambia con el modo: verde en Pausa, terracota en Reto. Los colores de juego solo van en sus íconos,
// cartas y gráficas.
export const sombra = {
  claro: { tarjeta: '0 1px 2px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.04)', selector: '0 1px 3px rgba(0,0,0,0.10), 0 3px 8px rgba(0,0,0,0.06)' },
  oscuro: { tarjeta: 'none', selector: '0 1px 3px rgba(0,0,0,0.4)' },
} as const;

export const fuente = { interfaz: 'Figtree' } as const;

// Marca: «parchese» siempre en minúsculas, Figtree 750, tracking −3.5 %.
export const tipo = {
  tituloGrande: { fontFamily: 'Figtree', fontWeight: '750', fontSize: 32, lineHeight: 38, letterSpacing: -0.8 },
  titulo: { fontFamily: 'Figtree', fontWeight: '700', fontSize: 22, lineHeight: 28, letterSpacing: -0.44 },
  encabezado: { fontFamily: 'Figtree', fontWeight: '600', fontSize: 17, lineHeight: 22, letterSpacing: -0.17 },
  cuerpo: { fontFamily: 'Figtree', fontWeight: '400', fontSize: 16, lineHeight: 22 },
  secundario: { fontFamily: 'Figtree', fontWeight: '400', fontSize: 14, lineHeight: 19 },
  seccion: { fontFamily: 'Figtree', fontWeight: '600', fontSize: 13, lineHeight: 18, letterSpacing: 0.52, textTransform: 'uppercase' },
  pestana: { fontFamily: 'Figtree', fontWeight: '600', fontSize: 11, lineHeight: 14 },
  boton: { fontFamily: 'Figtree', fontWeight: '600', fontSize: 17, lineHeight: 22 },
  cifra: { fontFamily: 'Figtree', fontWeight: '750', fontSize: 34, lineHeight: 40, letterSpacing: -1.02, fontVariant: ['tabular-nums'] },
} as const;

export const espacio = { xs: 4, s: 8, m: 12, l: 16, xl: 20, xxl: 24, xxxl: 32 } as const;
export const radio = { selector: 8, boton: 14, icono: 14, carta: 16, tarjeta: 22, panel: 30, etiqueta: 999 } as const;
export const medida = { boton: 52, toque: 44, iconoJuego: 48, carta: 84, barraProgreso: 4 } as const;

// Nada dura más de 520 ms. El rebote solo se usa para celebrar (pareja, éxito).
export const movimiento = {
  duracion: {
    pantalla: 440, pestana: 300, presionar: 150, voltear: 460, pareja: 340, panel: 420, exito: 520,
    noCoinciden: 1150, // total: se muestra, se marca en rojo y vuelve boca abajo
  },
  curva: {
    principal: [0.32, 0.72, 0, 1], // arranca rápido y frena suave
    estandar: [0.25, 0.1, 0.25, 1], // pestaña, presionar, fundidos
    celebrar: [0.34, 1.56, 0.64, 1], // rebote: solo pareja y éxito
  },
  escalaPresionado: 0.97,
} as const;

// Íconos de trazo, viewBox 24. Trazo 1.6 en los juegos y 1.7 en las cartas.
export const ficha =
  'M12 2.6a3.2 3.2 0 1 0 0 6.4a3.2 3.2 0 1 0 0-6.4z M9.4 9.6h5.2L16.2 17H7.8z M6.5 17.6h11a1.5 1.5 0 0 1 1.5 1.5V21H5v-1.9a1.5 1.5 0 0 1 1.5-1.5z';

type Matiz = 'primario' | 'reto' | keyof typeof juegoClaro;

// En la fase 3 los nombres pasan a i18n y la lista a src/games/memoria como datos.
export const cartaMemoria: readonly { id: string; matiz: Matiz; d: string }[] = [
  { id: 'sol', matiz: 'reto', d: 'M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M12 2.5v2.5 M12 19v2.5 M2.5 12H5 M19 12h2.5 M5.3 5.3l1.8 1.8 M16.9 16.9l1.8 1.8 M5.3 18.7l1.8-1.8 M16.9 7.1l1.8-1.8' },
  { id: 'luna', matiz: 'sudoku', d: 'M19.5 14.5A8 8 0 1 1 9.5 4.5a6.3 6.3 0 0 0 10 10z' },
  { id: 'hoja', matiz: 'primario', d: 'M5 19C5 10.5 10 5.5 19.5 4.5 18.5 14 13.5 19 5 19z M5 19l8.5-8.5' },
  { id: 'gota', matiz: 'memoria', d: 'M12 3c3.6 4.6 6 8 6 11a6 6 0 0 1-12 0c0-3 2.4-6.4 6-11z' },
  { id: 'nube', matiz: 'memoria', d: 'M7.5 18.5h9.5a4 4 0 0 0 .6-7.95A5.8 5.8 0 0 0 6.6 9.9 4.3 4.3 0 0 0 7.5 18.5z' },
  { id: 'estrella', matiz: 'sopa', d: 'M12 3.5l2.6 5.3 5.9.85-4.25 4.15 1 5.85L12 16.9l-5.25 2.75 1-5.85L3.5 9.65l5.9-.85z' },
  { id: 'pez', matiz: 'crucigrama', d: 'M2.5 7.5l3 4.5-3 4.5 M5.5 12c2.8-3.6 5.8-5 8.8-5 3 0 5.2 2 6.7 5-1.5 3-3.7 5-6.7 5-3 0-6-1.4-8.8-5z M16 11v.01' },
  { id: 'montana', matiz: 'primario', d: 'M2.5 19.5l6.5-11 4.2 7 2.8-4.3 5.5 8.3z M7 12.5l2 1.5 1.8-1.4' },
];

// Receta para el matiz de un juego nuevo (heredada de la v1, comprobar AA al usarla):
// claro oklch(0.50 0.055 h) · oscuro oklch(0.79 0.055 h). Evitar h ≈ 160 (verde Pausa) y h ≈ 44 (terracota Reto).
