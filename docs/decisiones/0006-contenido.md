# 0006 · Contenido: 4 temas generados con IA, revisados a mano y validados con un test

- **Estado:** aceptada
- **Fecha:** 2026-09-29
- **Sesión:** [journal](../journal/2026-09-29-definicion-idea.md)

## Contexto
Memoria y sopa de letras necesitan listas de palabras por tema. El concepto ya señala un riesgo: que el contenido en
español salga con errores.

## Opciones consideradas
1. **4 temas, generados con IA, revisados a mano y validados con un test.**
2. **Entre 6 y 8 temas.** Son unas 250 palabras para revisar antes de la prueba cerrada.
3. **Fuentes abiertas** (diccionarios libres). Cuesta más agrupar las palabras por tema, y en un repo público hay que
   revisar las licencias.

## Decisión
4 temas (animales, comida, países y naturaleza), cada uno con 30 a 40 palabras. El agente `curador-contenido` los
genera con IA, se revisan a mano y el test `content/content.test.ts` los valida. Los tableros de memoria y de sopa
de letras se generan con un algoritmo. El crucigrama (v1.2) vendrá armado de antemano.

## Consecuencias
- Cada tema nuevo sigue el mismo flujo (skill `/nuevo-tema`).
- El validador revisa que las palabras estén en mayúsculas, usen el alfabeto español con Ñ y no se repitan. También
  revisa el largo máximo de cada palabra y el mínimo de palabras por tema.
- En la sopa de letras las palabras se buscan sin tildes, pero se muestran con su forma original.
