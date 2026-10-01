# Journal

Hay una entrada por sesión de trabajo. El nombre del archivo es `AAAA-MM-DD-tema.md`, y si hay dos sesiones el
mismo día se agrega `-2`. Las entradas se crean con `/cerrar-sesion`.

El journal cuenta **qué pasó** en cada sesión. El **porqué** de cada decisión vive en
[decisiones/](../decisiones/README.md), y aquí solo se enlaza.

## Formato

```markdown
# AAAA-MM-DD · Tema de la sesión

## Hecho
- Qué se construyó, escribió o cerró. Rutas de archivo cuando aplique.

## Decidido
- [NNNN](../decisiones/NNNN-titulo.md) título, o «nada nuevo».

## Aprendido
- Lo que costó, lo que sorprendió y lo que conviene recordar la próxima vez.

## Siguiente
- El primer paso concreto de la próxima sesión.
```

Se escribe corto: de 10 a 25 renglones. Si algo necesita más espacio, probablemente es una decisión o un documento
en `docs/`.
