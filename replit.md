# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Egwafin Microfinance Bank Website (`artifacts/egwafin-website`)
- **Type**: react-vite, served at `/`
- **Description**: Premium single-page marketing website for Egwafin MFB (Nigerian licensed microfinance bank)
- **Design**: Dark matte black theme with vibrant lime green (#a3e635) accents, Plus Jakarta Sans font
- **Sections**: Floating nav, hero, stats counter, value prop, services accordion, marquee banner, features, products, testimonials, contact form, footer
- **Animations**: Framer Motion scroll reveals, stats count-up (Intersection Observer), CSS infinite marquee
- **Images**: AI-generated images of Nigerian businesspeople, farmers, entrepreneurs

### API Server (`artifacts/api-server`)
- **Type**: Express 5 API, served at `/api`
- **Description**: Shared backend API server (currently minimal — health check only)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
