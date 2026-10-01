# 0002 · Registro de juegos con contrato común y motores puros con semilla

- **Estado:** aceptada
- **Fecha:** 2026-09-29
- **Sesión:** [journal](../journal/2026-09-29-definicion-idea.md)

## Contexto
El principio 4 del concepto pide que cada juego sea independiente y que agregar uno no rompa los demás. Además, como
es un caso de portafolio, la lógica tiene que poder probarse sin interfaz.

## Opciones consideradas
1. **Registro con contrato común.** Cada juego es una carpeta que exporta `meta`, un `engine` puro y una `Screen`.
2. **Un motor de tablero genérico que comparten todos.** Reutiliza más código, pero obliga a adivinar hoy cómo serán
   juegos que todavía no existen, y juegos como 2048 o Simon no encajan.
3. **Juegos sueltos, sin contrato.** Es lo más rápido al inicio, pero la lógica queda mezclada con la interfaz y las
   estadísticas se duplican.

## Decisión
Registro con contrato común. El motor es puro (no depende de React) y recibe una **semilla**. Expone
`crear({dificultad, tema, semilla})`, `aplicar(estado, acción)`, `terminó(estado)` y `resumen(estado)`.
`core/registry.ts` lista los juegos. Las estadísticas y los ajustes viven en `core/` y los usan todos los juegos.

## Consecuencias
- Agregar un juego es crear una carpeta y agregar una línea al registro (skill `/nuevo-juego`).
- Con la semilla, cada test da siempre el mismo resultado. El Reto del día futuro solo usa la fecha como semilla.
- El modo Reto es otra pantalla que envuelve el mismo motor.
- Se revisa si aparece un juego que no se pueda expresar como `estado → acción → estado`.
