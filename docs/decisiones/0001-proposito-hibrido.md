# 0001 · Propósito híbrido: Pausa primero, Reto después

- **Estado:** aceptada
- **Fecha:** 2026-09-29
- **Sesión:** [journal](../journal/2026-09-29-definicion-idea.md)

## Contexto
El concepto dejó abierto si la app es de «pausas activas y bienestar» o de «entretenimiento con puzzles». La
respuesta cambia el tono, el temporizador, la gamificación y la ficha de la tienda.

## Opciones consideradas
1. **Solo pausa y bienestar.** Es coherente con los principios, pero deja por fuera a quien quiere retarse.
2. **Solo entretenimiento.** Pone la app en un mercado saturado y va contra el principio «calmado, no adictivo».
3. **Híbrido con dos modos.** Pausa, calmado, por defecto y un modo Reto aparte. Es más flexible, pero puede
   duplicar el trabajo del MVP.

## Decisión
Híbrido. El MVP sale **solo con el modo Pausa**. En ese modo no se ve el reloj y las partidas están pensadas para 2 a
10 minutos, aunque no se cortan. El modo Reto, con reloj, puntaje y récords, llega en la v1.1. La lógica de los
juegos queda lista desde el inicio para soportarlo ([0002](0002-registro-de-juegos.md)).

## Consecuencias
- Se mantiene la ruta de 4 semanas del MVP.
- Cada motor devuelve `resumen()` (movimientos y duración) aunque el MVP no lo muestre.
- El branding tiene que contemplar los dos modos: Pausa como cara principal y Reto como acento.
