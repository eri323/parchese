---
name: registrar-decision
description: Registra una decisión del proyecto como archivo numerado en docs/decisiones/, desde la plantilla, y actualiza el índice y el journal del día. Úsalo cuando se elija algo que cambia el rumbo (una librería, una regla, un alcance, algo de branding) o cuando haya que reemplazar una decisión aceptada.
---

# Registrar decisión

1. **Busca el número siguiente.** Revisa los archivos `NNNN-*.md` de `docs/decisiones/` y usa el mayor más 1, con
   4 dígitos.
2. **Revisa si choca con algo ya aceptado.** Lee el índice (`docs/decisiones/README.md`). Si la nueva decisión
   contradice una que ya está *aceptada*, confirma con Erick que la va a **reemplazar**. En ese caso, cambia el
   estado de la anterior a `reemplazada por [NNNN](NNNN-titulo.md)` y corrige su fila en el índice.
3. **Crea el archivo.** Se llama `docs/decisiones/NNNN-titulo-en-kebab.md` y se arma desde `_plantilla.md`.
   - Si Erick ya eligió, el **Estado** es `aceptada`. Si todavía está en discusión, es `propuesta`.
   - En **Opciones consideradas** van las que de verdad se discutieron, con sus pros y contras, no un relleno.
   - En **Consecuencias** va qué se vuelve más fácil, qué más difícil, y qué tendría que pasar para reconsiderarla.
   - El archivo no debe pasar de 40 renglones.
4. **Agrega una fila al índice**, en `docs/decisiones/README.md`.
5. **Enlázala en el journal de hoy**, en la sección *Decidido*, si la entrada existe. Si no existe, la enlazará
   `/cerrar-sesion`.
6. **Actualiza `CLAUDE.md` solo si hace falta.** Es decir, si la decisión cambia una regla de *Cómo trabajamos* o
   de *Lo que no se hace*.

Responde con la ruta del archivo y la decisión en una frase.
