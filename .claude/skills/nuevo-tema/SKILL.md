---
name: nuevo-tema
description: Agrega un tema de contenido nuevo (animales, comida, deportes…) a src/content/es/themes/. Delega la lista al agente curador-contenido, corre el validador y deja las dudas para la revisión manual. Úsalo cuando se pida un tema nuevo o ampliar uno existente.
---

# Nuevo tema

1. **Revisa que el tema no exista.** Busca en `src/content/es/themes/`. Si ya está y lo que se pide es ampliarlo,
   sigue igual, pero avísale al curador para que conserve lo que hay.
2. **Delega la lista al agente `curador-contenido`.** Pásale el id del tema en kebab-case, el nombre visible y si
   hay que generar o ampliar. El agente escribe el JSON y te devuelve las dudas que encontró.
3. **Registra el tema.** Si existe `src/content/es/index.ts` u otro índice de temas, agrega ahí el tema nuevo.
4. **Corre el validador.** Ejecuta `npx jest src/content` y copia el resultado **tal cual**, sin parafrasearlo.
5. **Entrégale a Erick la lista de dudas** del curador, para que la revise a mano. El tema no está terminado hasta
   que Erick lo apruebe. Díselo explícitamente.
6. **Actualiza `docs/producto/mvp.md`** solo si el tema cambia el alcance del MVP.

Si todavía no existe `src/content/`, porque la fase 3 no ha empezado, no inventes la estructura. Escribe el JSON en
`docs/producto/temas-borrador/<id>.json` y dilo.
