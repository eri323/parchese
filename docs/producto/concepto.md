# App de puzzles mentales — Documento conceptual

> Estado: idea definida (ver [mvp.md](mvp.md)) · Autor: Erick · Última actualización: 29/09/2026

---

## 1. La idea en una frase

Una app móvil con **minijuegos mentales cortos** (sopas de letras, sudokus, crucigramas, memoria y similares) para **despejar la mente en pausas breves**, con varios niveles de dificultad y temas, que funcione **sin internet** y **sin cuenta**.

## 2. El problema que resuelve

- Cuando necesito una pausa, abro redes sociales y termino más distraído que descansado.
- Las apps de puzzles existentes suelen estar llenas de anuncios, piden registro o se enfocan en un solo tipo de juego.
- Quiero algo que se abra rápido, dure 2 a 10 minutos y deje la sensación de haber "ejercitado" la mente, no de haber perdido el tiempo.

## 3. Para quién es

- **Primario:** yo, como usuario diario.
- **Secundario (si se publica):** estudiantes y personas que trabajan frente a un computador y buscan pausas cortas, sin anuncios invasivos.
- **No es para:** niños como público objetivo (evita las políticas de Familias de Google Play).

## 4. Principios del producto

1. **Rápido de abrir, rápido de jugar.** De abrir la app a estar jugando en menos de 3 toques.
2. **Calmado, no adictivo.** Nada de mecánicas diseñadas para retener a la fuerza.
3. **Offline y privado.** Todo el progreso vive en el celular.
4. **Modular.** Cada juego es independiente; agregar uno nuevo no rompe los demás.
5. **Contenido como datos.** Niveles, temas y palabras en JSON, no en el código.

## 5. Catálogo de juegos (propuesto)

| Juego | Complejidad técnica | Fuente del contenido | Fase |
|---|---|---|---|
| Memoria (parejas) | Baja | Emojis / íconos por tema | MVP |
| Sopa de letras | Media | Listas de palabras por tema | MVP |
| Sudoku | Media-alta | Generado por algoritmo | v1.1 |
| Crucigrama | Alta | Prearmados en JSON | v1.2 |
| Candidatos extra | Baja-media | — | Por definir |

Candidatos extra: 2048, secuencia tipo Simon, cálculo mental rápido, ordenar letras (anagramas), encuentra la diferencia.

## 6. Dimensiones de variedad

- **Dificultad:** Fácil · Medio · Difícil (cada juego define qué significa: tamaño de cuadrícula, número de parejas, casillas vacías, tiempo).
- **Temas:** Animales, países, comida, tecnología, deportes, ciencia… (aplican sobre todo a memoria, sopa de letras y crucigrama).

## 7. Stack técnico (base)

- Expo + React Native + TypeScript
- Expo Router (navegación)
- Zustand (estado)
- MMKV o expo-sqlite (persistencia local)
- Reanimated + expo-haptics (animaciones y vibración)
- Jest + React Native Testing Library (pruebas de lógica y componentes)
- EAS Build (compilación para tienda)

## 8. Arquitectura conceptual

```
src/
  app/            # pantallas (Expo Router)
  core/
    difficulty.ts
    themes.ts
    progress.ts
    ui/           # componentes base: botón, tarjeta, temporizador
  games/
    memory/
    wordsearch/
    sudoku/
    crossword/
  content/        # JSON de temas, palabras, crucigramas
```

Cada juego expone lo mismo: metadatos (nombre, ícono, dificultades soportadas), su pantalla y su lógica pura (testeable sin UI).

## 9. Ruta tentativa

1. **Semanas 1–2:** menú, juego de memoria, progreso local.
2. **Semanas 3–4:** sopa de letras, ícono, splash, modo oscuro.
3. **Semana 5:** cuenta de Google Play y prueba cerrada (12+ testers, 14 días continuos).
4. **Durante la prueba:** construir el sudoku.
5. **Publicación:** salir con 2–3 juegos; el resto llega como actualizaciones.

---

## 10. Puntos a debatir

Marca cada uno cuando quede decidido.

### Producto

- [ ] **Nombre de la app.** Debe estar libre en Play Store y el `applicationId` no se puede cambiar después de publicar.
- [x] **Propósito dominante:** → híbrido: Pausa principal, Reto aparte ([0001](../decisiones/0001-proposito-hibrido.md)).
- [x] **Juegos del MVP:** → memoria + sopa de letras; sudoku durante la prueba cerrada ([mvp](mvp.md)).
- [x] **Sesiones cortas vs. partidas largas:** → el modo Pausa está pensado para 2–10 min; sin límite duro ([0001](../decisiones/0001-proposito-hibrido.md)).
- [x] **Temporizador:** → invisible en Pausa; solo en modo Reto (v1.1) ([0001](../decisiones/0001-proposito-hibrido.md)).

### Progresión y motivación

- [x] **Gamificación:** → estadísticas suaves, sin rachas ni logros ([0005](../decisiones/0005-estadisticas-suaves.md)).
- [x] **"Reto del día":** → v1.1, junto con el modo Reto; el motor con semilla ya lo permite ([0002](../decisiones/0002-registro-de-juegos.md)).
- [x] **Recordatorios de pausa:** → fuera del MVP; se evalúan en v1.1.

### Contenido

- [x] **Generado vs. prearmado:** → memoria y sopa generadas por algoritmo desde listas; crucigrama prearmado ([0006](../decisiones/0006-contenido.md)).
- [x] **Origen de las listas de palabras:** → IA + revisión manual + validador automático ([0006](../decisiones/0006-contenido.md)).
- [x] **Temas iniciales:** → 4: animales, comida, países, naturaleza ([0006](../decisiones/0006-contenido.md)).
- [x] **Idioma:** → español, listo para traducir ([0004](../decisiones/0004-espanol-listo-i18n.md)).

### Diseño

- [x] **Estilo visual:** → minimalista y calmado; el detalle sale del branding ([0007](../decisiones/0007-estilo-minimalista.md)).
- [x] **Sonido:** → efectos suaves + vibración, silenciables; sin música ([mvp](mvp.md)).
- [x] **Accesibilidad:** → tamaño de texto del sistema, contraste AA, modo oscuro ([mvp](mvp.md)).

### Negocio y publicación

- [x] **Monetización:** → gratis, sin anuncios, sin recolectar datos ([0003](../decisiones/0003-gratis-sin-datos.md)).
- [x] **Plataformas:** → solo Android en el MVP ([0008](../decisiones/0008-android-sin-telemetria.md)).
- [x] **Reporte de errores:** → nada en el MVP ([0008](../decisiones/0008-android-sin-telemetria.md)).
- [ ] **Reclutamiento de testers:** ¿quiénes serán los 12+ testers con Android? (UNISANGIL, trabajo, familia).

### Portafolio y aprendizaje

- [x] **Repositorio público o privado.** → público (caso de portafolio).
- [x] **Nivel de pruebas:** → cobertura alta en motores puros y validador de contenido ([mvp](mvp.md)).
- [x] **Criterio de éxito:** → publicada en Play Store + la uso a diario + caso de portafolio ([mvp](mvp.md)).

---

## 11. Riesgos conocidos

| Riesgo | Mitigación |
|---|---|
| Querer todos los juegos a la vez y no terminar ninguno | Un juego completo antes de empezar el siguiente |
| Contenido en español con errores | Revisión manual de toda lista generada con IA |
| Estilo visual inconsistente entre juegos | Componentes base y paleta definidos antes del segundo juego |
| Retraso por la prueba cerrada de Google Play | Reclutar 15+ testers antes de subir el primer build |
| Perder motivación en un proyecto personal | Publicar temprano con pocos juegos y usar la app a diario |
