# Codebase Structure

**Analysis Date:** 2026-03-25

## Directory Layout

```
R:\Code\citadel-website\
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (Server Component)
│   ├── page.tsx           # Home page (Client Component)
│   └── globals.css        # Global styles with Tailwind v4
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section with countdown
│   ├── Marquee.tsx        # Scrolling text banner
│   ├── TechnoChakra.tsx   # Animated decorative element
│   └── CommandDock.tsx    # Mobile/tablet navigation
├── public/                # Static assets
│   ├── *.png              # Logos and backgrounds
│   └── *.svg              # SVG icons
├── .planning/codebase/    # GSD documentation
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

## Directory Purposes

**app/:**
- Purpose: Next.js App Router structure
- Contains: layout.tsx, page.tsx, globals.css
- Key files: `app/page.tsx`, `app/layout.tsx`

**components/:**
- Purpose: Reusable React components
- Contains: TypeScript React components
- Key files: All `.tsx` files in this directory

**public/:**
- Purpose: Static assets served directly
- Contains: Images (logos, backgrounds), SVGs
- Key files: `uem-logo.png`, `citadel-logo1.png`, `kurukshetra-bg*.png`

## Key File Locations

**Entry Points:**
- `app/page.tsx`: Main landing page component
- `app/layout.tsx`: Root layout with fonts and metadata

**Configuration:**
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript path aliases (`@/*` → `./`)
- `eslint.config.mjs`: ESLint rules
- `postcss.config.mjs`: PostCSS with Tailwind v4

**Core Logic:**
- `components/Hero.tsx`: Hero section with countdown timer
- `components/Navbar.tsx`: Navigation component
- `components/TechnoChakra.tsx`: Decorative animated element

**Styling:**
- `app/globals.css`: Tailwind v4 @theme, scrollbar, marquee animation

## Naming Conventions

**Files:**
- PascalCase: `Navbar.tsx`, `Hero.tsx`, `TechnoChakra.tsx`
- kebab-case for config: `eslint.config.mjs`, `postcss.config.mjs`

**Components:**
- PascalCase filenames with default exports
- Example: `export default function Navbar()`

**CSS Classes:**
- Tailwind utility classes (kebab-case)
- Custom CSS variables (kebab-case with theme prefix)

## Where to Add New Code

**New Feature:**
- Primary code: Add to `app/page.tsx` or create new component in `components/`
- Tests: Create `__tests__/` directory (none currently exists)

**New Component/Module:**
- Implementation: `components/NewComponent.tsx`
- Pattern: Use `"use client"` directive for interactivity

**New Page:**
- Implementation: `app/new-page/page.tsx`
- Layout: Will automatically use `app/layout.tsx`

**New API Route:**
- Implementation: `app/api/route.ts` (does not currently exist)

**Utilities:**
- Shared helpers: Create `lib/` directory (does not currently exist)

## Special Directories

**public/:**
- Purpose: Static assets
- Generated: No
- Committed: Yes (images, SVGs)

**.next/:**
- Purpose: Build output
- Generated: Yes (by `next build`)
- Committed: No (in .gitignore)

**node_modules/:**
- Purpose: Dependencies
- Generated: Yes (by install)
- Committed: No (in .gitignore)

---

*Structure analysis: 2026-03-25*
