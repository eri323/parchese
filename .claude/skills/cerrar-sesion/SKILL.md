---
name: cerrar-sesion
description: Cierra una sesión de trabajo. Escribe la entrada del journal del día, actualiza docs/ESTADO.md y revisa si quedaron decisiones sin registrar. Úsalo al terminar de trabajar o cuando Erick diga «cerremos», «hasta aquí» o similar.
---

# Cerrar sesión

1. **Reconstruye lo que pasó.** Toma la conversación de esta sesión y, si hay repo, `git log` y `git status`
   desde el último journal.
2. **Busca decisiones sin registrar.** ¿Se eligió algo que cambia el rumbo? Por ejemplo: una librería, una regla
   nueva, algo que antes estaba abierto o una decisión aceptada que se contradijo. Si encuentras alguna, **pregúntale
   a Erick** si se registra. Si dice que sí, sigue la skill `registrar-decision` antes de continuar.
3. **Escribe el journal.** Crea `docs/journal/AAAA-MM-DD-tema.md` con la fecha de hoy y el formato de
   `docs/journal/README.md`: Hecho, Decidido, Aprendido, Siguiente. Si ya hay una entrada de hoy, agrega `-2` al
   nombre.
   - **Aprendido** es lo más valioso: incluye lo que costó, lo que sorprendió y lo que conviene recordar.
   - **Siguiente** es un solo paso concreto, no una lista de deseos.
4. **Actualiza `docs/ESTADO.md`.** Cambia la fecha, el enlace a la última sesión, la fase, Hecho, Siguiente y
   Abierto. No debe pasar de 20 renglones: si Hecho crece mucho, resume lo viejo.
5. **Si hay repo**, recuérdale a Erick que haga commit de lo que haya quedado pendiente. Tú no haces commit sin que
   él lo pida.

Muestra al final la ruta del journal y el paso *Siguiente*, en dos renglones.
