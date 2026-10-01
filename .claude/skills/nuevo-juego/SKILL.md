---
name: nuevo-juego
description: Crea la estructura de un juego nuevo en src/games/<id>/ siguiendo el contrato GameModule (decisión 0002). El test del motor va primero, después el motor puro con semilla, la pantalla y el registro. Úsalo cuando se vaya a empezar un juego nuevo (memoria, sopa, sudoku…).
---

# Nuevo juego

## Antes de empezar
- **Un juego completo antes del siguiente.** Revisa `docs/ESTADO.md` y el registro. Si hay otro juego a medias, es
  decir, un motor sin tests que pasen o una pantalla sin revisar, **detente y avísale a Erick**.
- Confirma con él:
  - el `id` (en kebab-case, en inglés, igual que las carpetas);
  - las dificultades y qué significa cada una (tamaño de la cuadrícula, número de piezas, casillas vacías…);
  - si el juego usa temas.
- Lee `src/core/types.ts` para usar el contrato vigente, no el que recuerdes.

## Pasos, en este orden
1. **`engine.test.ts` primero.** Escribe los tests del motor antes de escribirlo.
   - Con la misma semilla, `crear` devuelve el mismo estado.
   - Cada dificultad produce el tamaño esperado.
   - Las reglas del juego se cumplen. Por ejemplo, en memoria cada carta tiene exactamente una pareja.
   - `aplicar` no modifica el estado que recibe.
   - `terminó` solo es verdadero cuando el juego de verdad terminó.
   - `resumen` devuelve los movimientos y la duración.
   Córrelos y **muestra que fallan**.
2. **`engine.ts`.** Escribe el motor hasta que los tests pasen. El motor es puro: no importa React ni nada nativo.
   Para lo aleatorio usa el generador de `core/rng.ts`, nunca `Math.random`.
3. **`Screen.tsx`.** Solo dibuja el juego y convierte cada toque en `aplicar(estado, acción)`. No contiene lógica
   del juego. Los textos salen de i18n y los colores de los tokens de `core/ui`. Cuando la partida termina, avisa a
   quien la abrió; las estadísticas las registra el contenedor.
4. **`index.ts`.** Exporta `{ meta, engine, Screen }` con los tipos del contrato.
5. **Registro.** Agrega una línea en `src/core/registry.ts` y las claves de i18n en `core/i18n/es.json`.
6. **Verificación.** Corre todos los tests con `npx jest`, pasa el juego por el agente `revisor-principios` y
   pruébalo en el dispositivo o el emulador.

## Al terminar
Si al construir el juego apareció algo que obliga a cambiar el contrato, **no lo cambies en silencio**. Registra una
decisión con `/registrar-decision`.
