# Estado del proyecto

> Actualizado: 2026-10-01 · [última sesión](journal/2026-10-01-branding.md)

**Fase actual:** cierre de la 2 y paso a la 3. El producto, el andamiaje y el branding están definidos. Falta
verificar el nombre antes de crear el repo.

## Hecho
- Producto y MVP definidos ([mvp.md](producto/mvp.md)), con el andamiaje de trabajo con IA.
- Branding **parchese** ([0010](decisiones/0010-branding-parchese.md)), con tokens en
  [tokens.ts](../src/core/ui/tokens.ts).

## Siguiente
1. Verificar «parchese» y `app.parchese` en Play Store, en el dominio y en GitHub.
2. **Fase 3:**
   - Cambiar a la cuenta personal: `gh auth switch -u eri323` y el correo personal en el git local.
   - Crear el repo público y hacer el scaffold de Expo.
   - Llevar `tokens.ts` a `src/core/ui/`.

## Abierto
- El nombre y el `applicationId` no están verificados.
- El texto terciario no cumple AA y hay que ajustarlo antes de la primera pantalla.
- Los testers de la prueba cerrada (15 o más): hay que conseguirlos antes de la semana 5.
