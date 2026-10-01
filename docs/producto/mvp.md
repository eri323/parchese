# Definición del MVP

> Salió de la sesión del 29/09/2026 ([journal](../journal/2026-09-29-definicion-idea.md)). La idea completa está en
> [concepto.md](concepto.md) y el porqué de cada decisión, en [decisiones/](../decisiones/README.md).

## Criterio de éxito

1. Está publicada en Play Store (producción, aunque sea con 2 juegos).
2. La uso a diario en mis pausas.
3. Sirve como caso de portafolio: repo público, código limpio, pruebas y un caso de estudio escrito.

Las descargas y los ingresos **no** son meta.

## Qué entra y qué no

| Entra en el MVP | Queda para después |
|---|---|
| Modo **Pausa** | Modo **Reto**: reloj, puntaje y récords (v1.1) |
| Memoria y sopa de letras | Sudoku (durante la prueba cerrada), crucigrama (v1.2), otros candidatos |
| 4 temas: animales, comida, países, naturaleza | Más temas |
| Estadísticas suaves | Reto del día y recordatorios de pausa (v1.1) |
| Español, con la estructura lista para traducir | Inglés |
| Android | iOS |
| Modo oscuro, tamaño de texto del sistema, contraste AA | Modo daltónico (hoy ningún juego depende del color) |
| Efectos suaves y vibración, que se pueden silenciar | Música ambiente |

Lo que **nunca** entra: anuncios, compras, cuenta, recolectar datos, y rachas o logros en el modo Pausa.

## Arquitectura: registro de juegos con contrato común

Ver la [decisión 0002](../decisiones/0002-registro-de-juegos.md).

```
src/
  app/                  # pantallas de Expo Router: inicio, juego/[id], estadísticas, ajustes
  core/
    registry.ts         # lista de juegos: [memory, wordsearch]
    types.ts            # contrato GameModule, Difficulty, ThemeId
    rng.ts              # generador aleatorio con semilla (mulberry32)
    stats.ts            # registrarPartida() y consultas de la semana
    settings.ts         # sonido, vibración, tema claro/oscuro
    storage.ts          # adaptador MMKV (la única pieza que sabe dónde se guarda)
    i18n/es.json        # textos de la interfaz
    ui/                 # Botón, Tarjeta, Pantalla, tokens de color y tipografía
  games/
    memory/     { index.ts, engine.ts, engine.test.ts, Screen.tsx }
    wordsearch/ { index.ts, engine.ts, engine.test.ts, Screen.tsx }
  content/
    es/themes/*.json    # palabras y emojis por tema
    content.test.ts     # valida todo el contenido
```

**El contrato de cada juego:**

- `meta`: id, nombre (clave de i18n), ícono y las dificultades que soporta.
- `engine`: funciones puras, sin React:
  - `crear({ dificultad, tema, semilla }) → Estado`
  - `aplicar(estado, acción) → Estado`
  - `terminó(estado) → boolean`
  - `resumen(estado) → { movimientos, duraciónMs }`
- `Screen`: un componente que recibe el motor y avisa cuando termina la partida.

**La semilla.** Con la misma semilla sale siempre el mismo tablero. Eso hace que los tests siempre den el mismo
resultado. Además, el Reto del día futuro solo tiene que usar la fecha como semilla.

**El modo Reto.** Es otra pantalla que envuelve el mismo motor y le agrega reloj y puntaje a partir de `resumen()`.
El motor no cambia.

## Flujo de datos

1. En el inicio, el registro lista los juegos. Se elige juego, dificultad y tema, y se juega: son 3 toques como
   máximo. La app recuerda la última dificultad y el último tema.
2. `Screen` guarda el estado del motor en su estado local, y cada toque es un `aplicar()`.
3. Cuando `terminó()` da verdadero, se llama `stats.registrarPartida(...)` y aparece una pantalla de cierre
   tranquila, con «otra» o «listo». No hay puntaje.
4. `stats` guarda en MMKV un resumen por día, no un registro de cada partida. Así lo guardado no crece sin límite.
5. Zustand solo maneja los ajustes y las estadísticas. La partida en curso no pasa por Zustand.

## Errores y casos borde

- **Si la partida se interrumpe**, el estado se guarda cuando la app pasa a segundo plano. Al volver se ofrece
  «continuar», con una sola partida pendiente a la vez.
- **Si el JSON de contenido tiene errores**, lo detiene `content.test.ts` en desarrollo. Nunca llega al usuario.
- **Si la sopa no logra ubicar todas las palabras**, reintenta con otra semilla derivada. Tras N intentos, reduce la
  lista.
- **Si falla el almacenamiento**, se juega igual, sin estadísticas.

## Pruebas (Jest + RNTL)

**Memoria**
- La misma semilla da el mismo tablero.
- Cada carta tiene exactamente una pareja.
- El número de parejas corresponde a la dificultad.
- `terminó()` solo da verdadero cuando están todas las parejas.

**Sopa de letras**
- Todas las palabras quedan ubicadas y se pueden leer en las direcciones que permite la dificultad.
- El tamaño de la cuadrícula corresponde a la dificultad.
- Las letras de relleno no forman por accidente palabras de la lista.

**Contenido**
- Palabras en mayúsculas, con el alfabeto español (incluida la Ñ).
- Sin palabras repetidas dentro de un tema.
- Ninguna palabra más larga que la cuadrícula más pequeña.
- Cada tema tiene el mínimo de palabras.
- En la sopa, las tildes se quitan para buscar (Á→A), pero la palabra se muestra con su forma original.

**Estadísticas**
- Los resúmenes de la semana se prueban con la fecha inyectada, no con el reloj real.

**Interfaz**
- Una prueba de humo por pantalla.
- Una partida completa de memoria con semilla fija.

## Ruta

1. **Semanas 1–2:** scaffold, `core/`, el juego de memoria completo y las estadísticas.
2. **Semanas 3–4:** sopa de letras, los 4 temas revisados, ícono y splash con el branding definido, modo oscuro,
   ajustes y la política de privacidad.
3. **Semana 5:** nombre, `applicationId`, cuenta de Play y prueba cerrada (15 o más testers, 14 días).
4. **Durante la prueba:** el sudoku, con un test de que todo tablero tiene solución única.
5. **v1.1:** modo Reto, Reto del día y recordatorios opcionales.
