# Casa Olivia — Gestión comercial

Demo de un sistema de gestión a medida desarrollado por Anduril Tech para Casa Olivia, una tienda ficticia de decoración. Reúne ventas, clientes, catálogo, inventario y reportes con datos de septiembre de 2026 y moneda ARS.

## Recorridos disponibles

- Resumen: indicadores calculados, ventas por tramo, pedidos recientes y alertas que llevan al módulo correspondiente.
- Ventas: búsqueda, filtro por estado y período, detalle y avance de pendiente → pagado → preparando → enviado.
- Nueva venta: cliente, producto, cantidad y canal; validación de stock, total calculado y actualización de inventario.
- Clientes: historial agregado y acceso a sus pedidos.
- Productos e inventario: búsqueda por nombre, SKU y categoría; reposición simulada hasta el doble del stock mínimo.
- Reportes: ventas por canal y descarga CSV del período seleccionado.

Los cambios viven en memoria y se reinician al recargar. No hay cobros, envíos, facturación, autenticación ni persistencia real. Los importes de ventas incluyen todos los pedidos; “Por cobrar” incluye solamente los pendientes. Las alertas de stock y cobro corresponden al estado actual, independientemente del período del gráfico.

## Diseño y accesibilidad

CSS mobile first: dos columnas de indicadores, pedidos como tarjetas en teléfono, navegación modal compacta y grillas ampliadas en tablet y desktop. La identidad única es Casa Olivia, con superficies claras, azul para acciones y colores semánticos acompañados de texto. Fuentes del sistema, sin solicitudes externas ni dependencias nuevas.

Los diálogos nativos contienen el foco, admiten Escape y devuelven el foco al cerrar. Hay enlace para saltar al contenido, etiquetas en formularios, estados vacíos, mensajes de éxito, botones deshabilitados y respeto por movimiento reducido.

## Desarrollo

```sh
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

En PowerShell con ejecución de scripts restringida, usar `pnpm.cmd`.

## Capturas comerciales

Usar **Resumen / Septiembre 2026**, sin diálogos abiertos, a 1440 × 900. En teléfono, usar el mismo resumen a 375 px o la vista Ventas para mostrar pedidos en tarjetas. Las capturas de verificación se guardan en `artifacts/`.

## Estructura

- `src/data/mock-data.ts`: pedidos, productos, tipos y formato monetario.
- `src/components/commerce-demo.tsx`: navegación, vistas y componentes compartidos.
- `src/app/globals.css`: diseño responsive y estados visuales.

Se conserva Next.js 16, React 19, TypeScript y Lucide. Una implementación para un cliente puede conectar estas vistas a sus reglas comerciales y servicios, sin presentar funciones inexistentes como disponibles.
