# Technology Stack

**Analysis Date:** 2026-03-25

## Languages

**Primary:**
- TypeScript 5.x - All source files use TypeScript

## Runtime

**Environment:**
- Node.js 20.x (from @types/node)
- Next.js 16.2.1 with React 19.2.4

**Package Manager:**
- Yarn (yarn.lock present)

## Frameworks

**Core:**
- Next.js 16.2.1 - App Router framework
- React 19.2.4 - UI library

**Styling:**
- Tailwind CSS v4 with @tailwindcss/postcss
- Custom CSS variables for theming

**Animation:**
- Framer Motion 12.x - For motion/animation effects

**Icons:**
- Lucide React 0.577.0 - Icon library

## Build/Dev Tools

- ESLint 9 with eslint-config-next
- TypeScript 5.x compiler

## Key Dependencies

**Critical:**
- `framer-motion` 12.x - Complex animations (Hero, TechnoChakra)
- `lucide-react` - Icon set
- `next/font/google` - Google Fonts (Cinzel, Kalam, Space_Grotesk, Inter, Outfit)

**Project-Specific:**
- `@tailwindcss/postcss` - Tailwind v4 integration

## Configuration

**Build:**
- `next.config.ts` - Minimal Next.js config
- `tsconfig.json` - TypeScript with path aliases (`@/*` → `./`)

**Styling:**
- `postcss.config.mjs` - PostCSS with Tailwind plugin
- `app/globals.css` - Global styles with Tailwind v4 @theme

**Linting:**
- `eslint.config.mjs` - ESLint with Next.js core-web-vitals and TypeScript configs

## Platform Requirements

**Development:**
- Node.js 20+
- Yarn/npm/pnpm/bun

**Production:**
- Vercel (default Next.js deployment target)
- Static export possible with `output: 'export'` in next.config.ts

---

*Stack analysis: 2026-03-25*
