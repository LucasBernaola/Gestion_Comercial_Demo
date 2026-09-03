# Nexo — demo de gestión comercial

Demo conceptual y frontend para el portfolio de Anduril Tech. Usa datos ficticios y no representa a un cliente real.

## Decisiones de producto

- **Usuario principal:** dueña/o o responsable administrativo de un comercio pequeño o mediano que hoy trabaja entre planillas, WhatsApp y herramientas separadas.
- **Problema:** no tiene una visión confiable de ventas, pedidos, clientes y stock; pierde tiempo consolidando información y suele reaccionar tarde.
- **Funciones esenciales:** resumen ejecutivo, pedidos y estados, búsqueda global, alertas de inventario, clientes, catálogo y reportes.
- **Navegación:** estructura lateral por dominios (Resumen, Ventas, Clientes, Productos, Inventario y Reportes), con acciones frecuentes siempre visibles.
- **Pantallas del MVP:** dashboard operativo, listado de ventas y vistas de entrada para los demás dominios.
- **Recorrido principal:** revisar indicadores → detectar pedidos o stock que requieren atención → abrir el módulo correspondiente → iniciar una venta.

## Estructura técnica

- Next.js 16 + React 19 + TypeScript estricto.
- Datos simulados desacoplados en `src/data`.
- Presentación e interacción en componentes reutilizables.
- CSS responsive mobile-first en comportamiento: navegación tipo drawer, tablas desplazables y métricas reorganizadas.

## MVP y evolución

El MVP demuestra el tablero, la navegación y el seguimiento de ventas. Una versión comercial sumaría persistencia/API, autenticación y permisos, CRUD completo, movimientos de stock, facturación, integraciones, auditoría y exportación de reportes, definidos según el negocio real.

## Uso

```bash
pnpm install
pnpm dev
```
