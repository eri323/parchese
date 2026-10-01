# 0009 · Método de trabajo: journal, decisiones y skills

- **Estado:** aceptada
- **Fecha:** 2026-09-29
- **Sesión:** [journal](../journal/2026-09-29-definicion-idea.md)

## Contexto
Es un proyecto personal, que se hace por partes y con IA. Las sesiones se cierran y se pierde el contexto, así que
hace falta dejar registro de qué se hizo y por qué se decidió.

## Opciones consideradas
1. **Un journal por sesión y las decisiones numeradas aparte.**
2. **Solo el journal**, con las decisiones marcadas dentro. Con el tiempo cuesta encontrar el porqué de algo.
3. **Un solo archivo continuo.** Crece sin límite.

## Decisión
Un journal por sesión en `docs/journal/` y las decisiones numeradas en `docs/decisiones/`. `docs/ESTADO.md` resume
dónde va el proyecto. Las rutinas quedan como skills: `/retomar`, `/cerrar-sesion`, `/registrar-decision`,
`/nuevo-tema` y `/nuevo-juego`. Hay dos agentes: `curador-contenido` y `revisor-principios`.

## Consecuencias
- Toda sesión empieza con `/retomar` y termina con `/cerrar-sesion`.
- Una decisión *aceptada* no se vuelve a discutir. Si cambia, se registra otra que la reemplaza.
- Un agente o una skill nueva solo se agrega cuando una tarea se repite o conviene hacerla fuera de la conversación
  principal para no llenarla. Cada uno se registra con su propia decisión.
