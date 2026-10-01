# Branding: enfoques conceptuales

> Estado: **cerrado**. El branding quedó definido en la [0010](../decisiones/0010-branding-parchese.md); ver
> [Vuelta de Claude Design](#vuelta-de-claude-design). Lo de abajo es el material de partida.
> Actualizado: 2026-10-01

Estos son cuatro caminos posibles para la identidad de la app. Los cuatro respetan el mismo marco fijo; cambian la
metáfora, la personalidad y los detalles. Hay una recomendación al final, pero la idea es llevarlos a Claude Design,
explorarlos visualmente allá y traer de vuelta una sola definición.

---

## Marco fijo (no se negocia en ningún enfoque)

| Restricción | De dónde sale |
|---|---|
| Minimalista y calmado: paleta suave, mucho espacio, la tipografía como protagonista, animaciones lentas | [0007](../decisiones/0007-estilo-minimalista.md) |
| Público adulto (estudiantes y trabajadores en una pausa). Nada infantil | Concepto §3 |
| Dos modos: **Pausa** es la cara principal y **Reto** es un acento que llega en la v1.1 | [0001](../decisiones/0001-proposito-hibrido.md) |
| Sin rachas ni logros; las estadísticas no pueden hacer sentir culpa | [0005](../decisiones/0005-estadisticas-suaves.md) |
| Contraste AA (el mínimo de las pautas de accesibilidad WCAG) en modo claro y en modo oscuro, desde el inicio | [mvp.md](../producto/mvp.md) |
| Tipografías de Google Fonts, gratuitas y con buen soporte de tildes y Ñ | Repo público, sin licencias de pago |
| El sistema tiene que escalar: cada juego nuevo (sudoku, crucigrama, 2048…) necesita su lugar sin rediseñar | [0002](../decisiones/0002-registro-de-juegos.md) |
| El nombre tiene que estar libre en Play Store. El `applicationId` no se puede cambiar después de publicar | Concepto §10 |

### Criterios para el nombre
- Una palabra, o dos cortas, que se pronuncien igual en español y en inglés si es posible, pensando en la futura
  versión en inglés.
- Que evoque pausa o mente, no «juego» a secas.
- Que no sea un término genérico imposible de encontrar en la tienda («Puzzles», «Mente»).
- **Ninguno de los candidatos de abajo se ha verificado.** Antes de enamorarse de uno hay que buscarlo en Play
  Store, en el dominio y en el usuario de GitHub.

---

## A · Respiro

**Metáfora.** La pausa como una respiración: inhalas, juegas un rato y exhalas. Las formas se expanden y se contraen
despacio.

**Personalidad:** serena, cálida y sin prisa.

**Nombres candidatos:** Respiro, Remanso, Aire, Pausa Mental, Inhala.

**Paleta tentativa**

| Rol | Claro | Oscuro |
|---|---|---|
| Fondo | `#F4F2EE` arena clara | `#171C1B` |
| Superficie | `#FFFFFF` | `#212826` |
| Texto | `#2E3A36` | `#E6E9E4` |
| Texto secundario | `#5E6964` | `#A7B0AB` |
| Primario (Pausa), salvia | `#4F6F5F` | `#9DBBA9` |
| Acento Reto, coral suave | `#A3532F` | `#E09A80` |

**Tipografía:** Fraunces (títulos, en sus variantes suaves) con Figtree (interfaz).

**Ícono:** tres anillos concéntricos de salvia sobre fondo arena, como una onda de respiración. En la pantalla de
carga los anillos se expanden una sola vez.

**Pausa y Reto:** Pausa usa salvia y transiciones de 400–600 ms. Reto usa las mismas formas, pero coral, más
compactas y con transiciones de 200 ms.

**Voz y textos de ejemplo**
- Inicio: «¿Una pausa corta?»
- Cierre de partida: «Listo. Respira y sigue.»
- Estadísticas: «Esta semana te diste 12 pausas, 38 minutos para ti.»

**Encaja mejor con:** memoria y sudoku (juegos de ritmo pausado).

**Riesgos**
- Se lee como una app de meditación, y en la tienda compite en percepción con Calm o Headspace. Alguien puede
  esperar ejercicios de respiración.
- «Respiro» y «Aire» seguramente están ocupados.

---

## B · Cuaderno moderno

**Metáfora.** El cuadernillo de pasatiempos del periódico, pasado por un filtro minimalista: papel crema, tinta y un
solo color de acento, como un lápiz rojo.

**Personalidad:** ingeniosa, editorial y tranquila.

**Nombres candidatos:** Margen, Tintero, Recreo, Cuadrícula, Pasatiempo.

**Paleta tentativa**

| Rol | Claro | Oscuro |
|---|---|---|
| Fondo, papel | `#FAF7F0` | `#1A1917` |
| Superficie | `#FFFFFF` | `#242320` |
| Texto, tinta | `#1F2328` | `#EDE8DD` |
| Texto secundario | `#6B6A64` | `#A9A59A` |
| Primario (Pausa), terracota | `#A94F37` | `#E08A6F` |
| Acento Reto, azul tinta | `#2F4B7C` | `#8FA8D6` |

**Tipografía:** Newsreader (títulos) con IBM Plex Sans (interfaz) e IBM Plex Mono (letras de la cuadrícula).

**Ícono:** una cuadrícula de 3×3 con un trazo de lápiz que marca una diagonal, en tinta sobre crema.

**Pausa y Reto:** Pausa es «a lápiz», con trazos terracota. Reto es «a tinta», con azul y líneas más firmes.

**Voz y textos de ejemplo**
- Inicio: «La página de hoy.»
- Cierre de partida: «Resuelto. Buen trabajo de lápiz.»
- Estadísticas: «12 páginas resueltas esta semana.»

**Encaja mejor con:** sopa de letras, crucigrama y sudoku.

**Riesgos**
- Se acerca al estilo retro que se descartó en la [0007](../decisiones/0007-estilo-minimalista.md). La salida es no
  usar texturas de papel, solo el color.
- Memoria, que es el primer juego del MVP, encaja peor con la metáfora de papel.
- Puede verse «de otra época» para un público joven.

---

## C · Geometría suave

**Metáfora.** Cada juego es una forma básica con su propio color pastel: memoria es un círculo, la sopa de letras un
cuadrado, el sudoku un rombo y el crucigrama un triángulo. La app es una pequeña colección de formas.

**Personalidad:** ordenada, amable y moderna.

**Nombres candidatos:** Teselas, Pieza, Módulo, Nudo, Formas.

**Paleta tentativa**

| Rol | Claro | Oscuro |
|---|---|---|
| Fondo | `#F6F6F4` | `#16181C` |
| Superficie | `#FFFFFF` | `#20232A` |
| Texto | `#22252B` | `#E8E9EC` |
| Texto secundario | `#62666F` | `#A3A7B0` |
| Memoria, círculo | `#7FA7D9` | `#8FB4E3` |
| Sopa de letras, cuadrado | `#E3A87A` | `#EDB88E` |
| Sudoku, rombo | `#9BC4A3` | `#A9D1B1` |
| Crucigrama, triángulo | `#C4A3D9` | `#CFB1E2` |
| Acento Reto | el color del juego, sólido y con borde de texto | igual |

Los pasteles se usan como fondo de tarjetas y formas, **siempre con texto oscuro encima** (`#22252B`) para cumplir
AA. El texto nunca va de color pastel.

**Tipografía:** Outfit (títulos) con Manrope (interfaz).

**Ícono:** las cuatro formas en una cuadrícula de 2×2 sobre fondo claro. Otra opción es una sola forma compuesta,
por ejemplo un círculo dentro de un cuadrado.

**Pausa y Reto:** Pausa usa las formas en contorno o con relleno suave. Reto usa la misma forma con relleno sólido,
lo que da un puente visual natural entre los dos modos.

**Voz y textos de ejemplo**
- Inicio: «Elige una forma.»
- Cierre de partida: «Pieza completa.»
- Estadísticas: «Esta semana: 5 círculos y 4 cuadrados.»

**Encaja mejor con:** todos los juegos. Es el sistema que mejor escala, porque un juego nuevo solo necesita una
forma y un color nuevos.

**Riesgos**
- Puede verse genérico, como tantas apps de juegos, si la tipografía y el espacio no tienen carácter.
- Si los pasteles se saturan, la app se vuelve infantil.
- Con más de 6 juegos se acaban las formas simples que se distinguen bien.

---

## D · Jardín quieto

**Metáfora.** La mente como un jardín tranquilo. Las estadísticas suaves se muestran como un pequeño jardín que
crece con cada pausa y **nunca se marchita**.

**Personalidad:** orgánica, paciente y cercana.

**Nombres candidatos:** Brote, Musgo, Claro, Semilla, Vivero.

**Paleta tentativa**

| Rol | Claro | Oscuro |
|---|---|---|
| Fondo | `#F3F1EA` | `#181A15` |
| Superficie | `#FFFFFF` | `#22251E` |
| Texto | `#2B2F25` | `#E7E6DC` |
| Texto secundario | `#65695C` | `#A9AB9E` |
| Primario (Pausa), musgo | `#5E6B3F` | `#A9B77E` |
| Acento Reto, flor ocre | `#94592A` | `#DDA06B` |

**Tipografía:** Young Serif (títulos) con Figtree (interfaz).

**Ícono:** un brote de dos hojas, en musgo sobre fondo claro.

**Pausa y Reto:** Pausa es el jardín en calma. Reto es «la flor», con acento ocre y más contraste.

**Voz y textos de ejemplo**
- Inicio: «Un rato para ti.»
- Cierre de partida: «Algo creció hoy.»
- Estadísticas: «Tu jardín tiene 12 hojas nuevas esta semana.»

**Encaja mejor con:** la pantalla de estadísticas, que se vuelve el sello de la app.

**Riesgos**
- Es el enfoque más cercano a la gamificación. Si la planta «necesita» que vuelvas, contradice la
  [0005](../decisiones/0005-estadisticas-suaves.md). Hay que garantizar que nunca se marchite ni reclame atención.
- Pide ilustración: más trabajo y más difícil de mantener con un solo desarrollador.
- Se parece conceptualmente a Forest y otras apps de enfoque con plantas.

---

## Comparativa

| | A · Respiro | B · Cuaderno | C · Geometría | D · Jardín |
|---|---|---|---|---|
| Coherencia con «pausa» | Alta | Media | Media | Alta |
| Riesgo de gamificación | Bajo | Bajo | Bajo | **Alto** |
| Escala a juegos nuevos | Media | Media (mejor con los de letras) | **Alta** | Media |
| Distingue Pausa de Reto | Clara (salvia y coral) | Clara (lápiz y tinta) | **Muy clara** (contorno y sólido) | Media |
| Encaja con memoria, primer juego | Sí | Regular | Sí | Sí |
| Esfuerzo de construcción | Bajo | Bajo | Bajo | **Alto** (ilustración) |
| Qué tanto se distingue en la tienda | Media (se confunde con meditación) | Alta | Media | Alta |
| Valor como portafolio (se ve como un sistema de diseño) | Medio | Medio | **Alto** | Medio |

## Recomendación

**A · Respiro como tono, con el sistema de formas de C.**

- **De A:** la voz, la paleta salvia y arena, y el ritmo lento. Es lo más fiel al propósito principal: pausas, no
  competencia.
- **De C:** a cada juego le toca una forma y un matiz propio dentro de la paleta de A. Así el sistema escala a
  juegos nuevos y Reto se distingue de Pausa con el relleno de la forma, sin inventar otra estética.
- **Se descarta D** por el riesgo de gamificación y por el costo de ilustrar.
- **Se descarta B** porque encaja mal con memoria, que es el primer juego del MVP.

Es una recomendación, no una decisión. Claude Design puede demostrar que otra combinación funciona mejor.

## Preguntas abiertas para Claude Design

1. ¿La mezcla de A con C se ve coherente o se ve como dos ideas pegadas?
2. ¿Qué tan desaturada puede ser la paleta sin perder contraste AA en los botones?
3. ¿El ícono funciona a 48 px, en el cajón de apps, junto a otros íconos?
4. ¿Cómo se ve la pantalla de estadísticas para que se sienta como un resumen amable y no como un informe?
5. ¿Cómo es la tarjeta de un juego en el inicio para que se lea en menos de un segundo?
6. ¿Qué microanimación marca «partida terminada» sin sentirse como una celebración de videojuego?

---

## Brief para pegar en Claude Design

```
Estoy diseñando la identidad y las pantallas clave de una app móvil Android: minijuegos mentales cortos
(memoria, sopa de letras; luego sudoku y crucigrama) para despejar la mente en pausas de 2 a 10 minutos.
Funciona sin internet, sin cuenta, sin anuncios y no recolecta datos. Idioma: español (Colombia).

Público: adultos — estudiantes y personas que trabajan frente a un computador. No es para niños.

Marco fijo:
- Minimalista y calmado: paleta suave, mucho espacio, la tipografía como protagonista, animaciones lentas.
- Dos modos: "Pausa" (principal, sin reloj ni puntaje) y "Reto" (v1.1, con reloj; es un acento, no otra app).
- Sin rachas ni logros. Las estadísticas son suaves ("12 pausas esta semana") y nunca hacen sentir culpa.
- Contraste AA en modo claro y en modo oscuro. Tipografías de Google Fonts con buen soporte de tildes y Ñ.
- Cada juego necesita su propia identidad dentro del sistema, que tiene que escalar a juegos futuros.

Enfoque de partida: tono "Respiro" (la pausa como una respiración; salvia #4F6F5F, arena #F4F2EE, coral #A3532F
para Reto; Fraunces + Figtree) combinado con un sistema de "formas por juego" (memoria = círculo,
sopa = cuadrado, sudoku = rombo, crucigrama = triángulo; en Pausa van en contorno, en Reto sólidas).
Alternativas consideradas: "Cuaderno moderno" (crema, tinta y terracota, editorial) y "Jardín quieto"
(orgánico, musgo). Puedes proponer otra dirección si ves que funciona mejor.

Necesito de vuelta:
1. Nombre sugerido (o evaluar estos: Respiro, Remanso, Teselas, Pieza, Aire).
2. Paleta final con tokens (claro y oscuro): fondo, superficie, texto, texto secundario, primario,
   acento de Reto, un matiz por juego, éxito y error suave.
3. Tipografía: familias, pesos y escala (títulos, cuerpo, etiquetas, letras de la cuadrícula).
4. El ícono de la app: la idea y cómo se ve a 48 px.
5. Cuatro pantallas en modo claro y oscuro: Inicio (lista de juegos), Juego en curso (memoria),
   Cierre de partida, Estadísticas.
6. Principios de movimiento: duraciones, curvas y qué se anima y qué no.

Formato: los tokens como JSON o como tabla con valores hex y tamaños, para llevarlos a código
(React Native, archivo core/ui/tokens.ts).
```

---

## Vuelta de Claude Design

> Llenada el 2026-10-01. Registrada en la [decisión 0010](../decisiones/0010-branding-parchese.md). Vale la **v2**
> del proyecto de Claude Design; la v1 («Remanso», Literata, cartas con palabras) quedó descartada.

- **Enfoque elegido:** ninguno de los cuatro tal cual. Conserva de A el verde para Pausa, el terracota para Reto y
  la voz («¿Una pausa corta?», «Listo. Respira y sigue.»). De C toma una identidad por juego, hecha con un ícono y
  un matiz. La estética es la de una app de sistema: superficies blancas sobre un fondo cálido, un solo acento por
  modo y movimiento rápido y discreto.
- **Nombre:** `parchese`, siempre en minúsculas. En el prototipo también se probaron parche, ratico y recreo.
  El `applicationId` propuesto es `app.parchese`.
- **Nombre verificado en Play Store, dominio y GitHub:** **pendiente**.
- **Paleta (tokens):** en [tokens.ts](tokens.ts).
  - Claro: fondo `#F4F3F0`, texto `#1C1F1E`, Pausa `#3E6B57`, Reto `#A3532F`.
  - Oscuro: fondo `#0E0F0F`, Pausa `#8CC2A6`, Reto `#E8A084`.
  - Cada juego tiene su matiz y su tinte.
  - Todos los pares de texto cumplen AA, **salvo el texto terciario**: 2,45:1 en claro y 3,37:1 en oscuro.
- **Tipografía:** solo Figtree. Títulos en 750 con tracking negativo e interfaz en 400 y 600. La escala va de 32 a
  11 px.
- **Ícono:** una ficha de juego de mesa (cabeza, cuerpo y base). En claro va blanca sobre verde y en oscuro, verde
  claro sobre gris. Se lee en monocromo a 48, 32 y 20 px.
- **Enlace al diseño en Claude Design:** [Identidad y pantallas v2](https://claude.ai/design/p/c7b9e26a-7247-40f4-b333-a379e0e01c45?file=Identidad+y+pantallas+v2.dc.html).
  El prototipo interactivo es `ParcheseApp v2.dc.html`, en el mismo proyecto.
- **Qué cambió respecto a este documento y por qué:**
  - **Nombre.** «parchese» viene de «parche», un plan con amigos en Colombia, y evoca el juego de mesa. Se
    descartaron «Respiro» y «Remanso» porque leen como app de meditación, que era el riesgo de A.
  - **Tipografía.** Fraunces y Literata se cambiaron por Figtree sola: una sola familia, más limpia y más
    liviana.
  - **Formas.** Se cambiaron los círculos, cuadrados, rombos y triángulos por íconos de trazo, uno por juego:
    cartas, lupa, cuadrícula y crucigrama.
  - **Cartas de memoria.** Son 8 íconos de trazo (sol, luna, hoja, gota, nube, estrella, pez y montaña), sin
    ilustración.
  - **Movimiento.** Pasa a ser rápido y discreto: nada dura más de 520 ms y el rebote solo se usa al celebrar.
    Reemplaza el «animaciones lentas» de la 0007.
  - **Reto.** Muestra reloj, mejor tiempo y «Nuevo récord», y nada de esto aparece en Pausa.
  - **Progreso.** Muestra partidas y minutos de la semana, bloques por día con el color del juego, un patrón
    amable («Sueles jugar después del almuerzo») y el total histórico. No hay ceros que regañen ni comparaciones.
