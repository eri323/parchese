# 0004 · Español primero, con la estructura lista para traducir

- **Estado:** aceptada
- **Fecha:** 2026-09-29
- **Sesión:** [journal](../journal/2026-09-29-definicion-idea.md)

## Contexto
Sumar el inglés amplía el público, pero duplica las listas de palabras que hay que revisar a mano.

## Opciones consideradas
1. **Solo español, con la estructura lista para traducir.**
2. **Español e inglés desde el inicio.**
3. **Solo español, con los textos escritos directamente en el código.** Choca con el principio 5 (el contenido va
   como datos).

## Decisión
Español, con la estructura lista para traducir. Los textos de la interfaz van en `core/i18n/es.json` y el contenido
en `content/es/`.

## Consecuencias
- Agregar inglés es sumar `en.json` y `content/en/`, sin tocar las pantallas.
- Ningún texto visible se escribe directamente dentro de un componente.
