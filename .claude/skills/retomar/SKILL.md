---
name: retomar
description: Recupera el contexto del proyecto al empezar una sesión. Lee ESTADO.md, la última entrada del journal y el índice de decisiones, y resume dónde vamos y qué sigue. Úsalo al inicio de cada sesión o cuando alguien pregunte «¿en qué íbamos?».
---

# Retomar

1. Lee `docs/ESTADO.md`.
2. Busca en `docs/journal/` la entrada más reciente por nombre de archivo, sin contar `README.md`, y léela.
3. Lee `docs/decisiones/README.md`. Solo abre una decisión si el paso siguiente depende de ella.
4. Si hay código (`src/`), mira `git status` y `git log --oneline -5` para detectar trabajo sin terminar que el
   journal no registró.

Responde en un máximo de 5 renglones:
- **Fase:** en qué fase va el proyecto.
- **Última sesión:** qué se hizo, en una línea.
- **Siguiente:** el primer paso concreto, tomado de *Siguiente* en el journal o en ESTADO.
- **Abierto:** lo que sigue pendiente de decidir, si hay algo.
- **Ojo:** algo que no cuadre, por ejemplo cambios sin commit o un ESTADO desactualizado frente al journal. Omite este
  renglón si todo está en orden.

No propongas un plan largo. Pregunta si arrancamos por el paso siguiente.
