# App de puzzles mentales

Proyecto **personal** de Erick.

Es una app móvil de minijuegos mentales cortos (memoria, sopa de letras, sudoku…) para despejar la mente en pausas
de 2 a 10 minutos. Funciona sin internet y sin cuenta.

- Idea completa: [docs/producto/concepto.md](docs/producto/concepto.md)
- Qué entra en el MVP: [docs/producto/mvp.md](docs/producto/mvp.md)
- Por qué se decidió cada cosa: [docs/decisiones/](docs/decisiones/README.md)
- Dónde vamos: [docs/ESTADO.md](docs/ESTADO.md)

## Principios (criterio para revisar cualquier cambio)

1. **Rápido de abrir, rápido de jugar.** Máximo 3 toques desde que se abre la app hasta estar jugando.
2. **Calmado, no adictivo.** En el modo Pausa no hay rachas, logros, reloj visible ni presión.
3. **Offline y privado.** No recolecta datos: ni analítica ni reporte de errores ([0003](docs/decisiones/0003-gratis-sin-datos.md)).
4. **Modular.** Cada juego es independiente; agregar uno no rompe los demás ([0002](docs/decisiones/0002-registro-de-juegos.md)).
5. **El contenido va como datos.** Palabras y temas en JSON; los textos de la interfaz en i18n, nunca escritos dentro del código.

## Stack y arquitectura (el código llega en la fase 3)

Expo + React Native + TypeScript · Expo Router · Zustand · MMKV · Reanimated + expo-haptics · Jest + RNTL · EAS Build.

```
src/app/        pantallas de Expo Router
src/core/       registry, types, rng con semilla, stats, settings, storage, i18n, ui/
src/games/<id>/ index.ts · engine.ts · engine.test.ts · Screen.tsx
src/content/es/ temas en JSON + content.test.ts
```

- **El motor de cada juego es puro:** no importa React ni nada nativo. Recibe una semilla y es determinista, así
  que la misma semilla produce siempre el mismo tablero.
  Expone `crear`, `aplicar`, `terminó` y `resumen`.
- **El modo Reto (v1.1)** será otra pantalla que envuelve el mismo motor. El motor no cambia para soportarlo.
- `core/storage.ts` es el único archivo que sabe cómo se persiste.

## Cómo trabajamos

- **Al empezar una sesión:** `/retomar`.
- **Al decidir algo que cambia el rumbo:** `/registrar-decision`. Lo que está *aceptado* en `docs/decisiones/` no
  se vuelve a discutir; si hay que cambiarlo, se registra una decisión nueva que lo reemplace.
- **Al terminar una sesión:** `/cerrar-sesion`, que deja el journal y `ESTADO.md` al día.
- **Juego nuevo:** `/nuevo-juego`. **Tema nuevo:** `/nuevo-tema`.
- **Primero el test del motor, después el motor.**
- **Un juego completo antes de empezar el siguiente.**
- Antes de dar por terminada una pantalla, pásala por el agente `revisor-principios`.
- Solo se agrega un agente o una skill cuando la tarea se repite, y se registra con una decisión.

## Contenido

- Español de Colombia, con tildes y Ñ correctas.
- Toda lista generada con IA pasa por el agente `curador-contenido` **y** por la revisión manual de Erick antes de
  entrar.
- El validador `content.test.ts` tiene que pasar.

## Lo que no se hace

- Recolectar datos, poner anuncios, pedir cuenta o exigir conexión a internet.
- Rachas, logros, récords o reloj visible en el modo Pausa. El mejor tiempo y «Nuevo récord» viven solo en
  Reto ([0010](docs/decisiones/0010-branding-parchese.md)).
- Hacer commits o push con una identidad que no sea la personal **eri323**. Ver `CLAUDE.local.md`.
- Textos visibles escritos directamente en los componentes.
- Lógica de juego dentro de `Screen.tsx`.
- Empezar un juego nuevo con otro a medias.

## Branding

Definido en la [0010](docs/decisiones/0010-branding-parchese.md): **parchese**, siempre en minúsculas, con Figtree
y una ficha de juego como ícono. Los tokens están en [src/core/ui/tokens.ts](src/core/ui/tokens.ts). Manda la
v2 de Claude Design, y ante cualquier duda visual se consulta ese diseño. El nombre aún no está verificado en
Play Store.

## Expo

La guía de Expo que trae el scaffold está en `AGENTS.md`. Se lee antes de tocar cualquier API de Expo:

@AGENTS.md
