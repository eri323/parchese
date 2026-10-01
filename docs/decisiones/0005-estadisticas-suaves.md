# 0005 · Estadísticas suaves en vez de rachas o logros

- **Estado:** aceptada, ampliada por [0010](0010-branding-parchese.md) (récord en Reto y franja horaria)
- **Fecha:** 2026-09-29
- **Sesión:** [journal](../journal/2026-09-29-definicion-idea.md)

## Contexto
El principio 2 dice «calmado, no adictivo». A la vez, uno de los criterios de éxito es «la uso a diario», y eso hay
que poder comprobarlo.

## Opciones consideradas
1. **Estadísticas suaves**: pausas por semana, minutos totales y juego favorito.
2. **Nada.** Es lo más puro, pero no deja comprobar el criterio de éxito.
3. **Rachas y logros.** Presionan a volver y contradicen el principio 2.

## Decisión
El modo Pausa muestra estadísticas suaves. No hay rachas que se rompan ni medallas.

## Consecuencias
- `core/stats.ts` guarda un resumen por día, no cada partida.
- La pantalla de estadísticas no puede hacer sentir culpa por los días en que no se juega.
- Si algún día hay logros, van en el modo Reto y se registran en una decisión aparte.
