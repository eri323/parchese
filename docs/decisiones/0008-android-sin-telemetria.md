# 0008 · Solo Android y sin reporte de errores en el MVP

- **Estado:** aceptada
- **Fecha:** 2026-09-29
- **Sesión:** [journal](../journal/2026-09-29-definicion-idea.md)

## Contexto
Publicar en iOS cuesta USD 99 al año. Un servicio como Sentry obliga a declarar que se recolectan datos de
diagnóstico, y eso choca con [0003](0003-gratis-sin-datos.md).

## Decisión
El MVP sale solo en Android y sin reporte automático de errores. Los errores se detectan con las pruebas, con el uso
diario y con los testers de la prueba cerrada.

## Consecuencias
- El stack sigue siendo multiplataforma (Expo), así que iOS queda abierto para después.
- Sin telemetría, un error en el celular de un usuario solo se conoce si él lo reporta. Se revisa si crece la base
  de usuarios.
