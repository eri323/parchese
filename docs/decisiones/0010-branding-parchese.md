# 0010 · Branding: «parchese», según la v2 de Claude Design

- **Estado:** aceptada
- **Fecha:** 2026-10-01
- **Sesión:** [journal](../journal/2026-10-01-branding.md)

## Contexto
Faltaba la identidad (nombre, paleta, tipografía, ícono, movimiento) para pasar a la fase 3. Se exploró en
[Claude Design](https://claude.ai/design/p/c7b9e26a-7247-40f4-b333-a379e0e01c45?file=Identidad+y+pantallas+v2.dc.html)
a partir de los [enfoques](../branding/enfoques.md). Hubo dos versiones.

## Opciones consideradas
1. **v1 · Remanso**: el tono de Respiro, con Literata, cartas con palabras y movimiento lento. Es calmada, pero
   se lee como una app de meditación.
2. **v2 · parchese**: Figtree sola, la ficha de juego como ícono, un acento por modo, íconos de trazo y
   movimiento rápido. Es más limpia y se distingue más en la tienda, pero choca con partes de la 0005 y la 0007.

## Decisión
La v2 gobierna en todo: lo que diga la v2 manda sobre cualquier documento anterior. Los valores están en
[tokens.ts](../../src/core/ui/tokens.ts) y el resumen en la *Vuelta de Claude Design* de
[enfoques.md](../branding/enfoques.md).

## Consecuencias
- **Reemplaza en parte a la [0007](0007-estilo-minimalista.md).** Sigue siendo minimalista, pero el movimiento
  ahora es rápido y discreto: nada dura más de 520 ms y el rebote solo se usa en «pareja» y «éxito».
- **Es la decisión aparte que pedía la [0005](0005-estadisticas-suaves.md) para Reto.** Reto muestra reloj,
  mejor tiempo y «Nuevo récord», y nada de eso aparece en Pausa. Sigue sin haber rachas ni medallas.
- **Amplía la 0005.** `core/stats.ts` guarda, además del resumen por día, la franja horaria de cada partida,
  para la frase «Sueles jugar después del almuerzo». El dato no sale del teléfono.
- Pendiente: el texto terciario (`textoTer`) no cumple AA. Hay que ajustarlo antes de la primera pantalla.
- Pendiente: verificar «parchese» y `app.parchese` en Play Store, en el dominio y en GitHub. Si está ocupado,
  se cambia el nombre en una decisión nueva y la paleta se queda igual.
