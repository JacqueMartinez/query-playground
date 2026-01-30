# Arkham Query Playground

Playground de consultas SQL con autocompletado, ejecución contra API mock y paneles de resultados/historial.

## Descripción

Este proyecto ofrece una interfaz para construir y ejecutar consultas SQL básicas sobre datasets mock. Incluye:

- Editor tipo bloque de código con autocompletado (tablas, columnas, keywords y funciones).
- Ejecución de consultas contra endpoints mock de Next.js.
- Resultados en tabla con estados de carga y error.
- Historial y guardado de consultas, persistidos en `localStorage`.
- Soporte para tema claro/oscuro (toggle en el header).

## Requisitos

- Node.js 20+ recomendado
- npm (o yarn/pnpm)

## Tecnologías y versiones

Dependencias principales:

- Next.js 16.1.5
- React 19.2.3
- React DOM 19.2.3
- Tailwind Merge 3.4.0
- clsx 2.1.1

Dev/Tooling:

- TypeScript 5.x
- Tailwind CSS 4.1.18
- ESLint 9.x
- Prettier 3.8.1
- PostCSS 8.5.6

## Scripts

- `npm run dev` inicia el servidor de desarrollo
- `npm run build` compila para producción
- `npm run start` arranca el build de producción
- `npm run lint` ejecuta ESLint
- `npm run format` formatea con Prettier
- `npm run format:check` valida formato

## Endpoints mock

Disponibles en Next.js API Routes:

- `GET /api/core/user`
- `GET /api/data/datasets`
- `POST /api/data/query`

## Estructura principal

- `src/network` cliente HTTP
- `src/data` acceso a APIs
- `src/domain` tipos de dominio
- `src/presentation` UI, hooks y estado
- `src/mocks` datasets y resultados mock

## Levantar el proyecto

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.
