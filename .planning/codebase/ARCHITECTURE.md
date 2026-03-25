# Architecture

**Analysis Date:** 2026-03-25

## Pattern Overview

**Overall:** Single-Page Application (SPA) with Next.js App Router

**Key Characteristics:**
- Static landing page (no dynamic routes)
- Client-side interactivity via React "use client" components
- Server Components for layout and metadata
- Single route (`/`) with anchor-based navigation

## Layers

**Layout Layer:**
- Purpose: Root HTML structure and font configuration
- Location: `app/layout.tsx`
- Contains: Metadata, font definitions, global CSS import
- Depends on: Google Fonts, globals.css

**Page Layer:**
- Purpose: Main landing page content
- Location: `app/page.tsx`
- Contains: Section components inline (About, Tracks, Timeline, Footer)
- Depends on: Components, lucide-react icons

**Component Layer:**
- Purpose: Reusable UI components
- Location: `components/*.tsx`
- Contains: Navbar, Hero, Marquee, TechnoChakra, CommandDock
- Pattern: "use client" for interactivity

**Styling Layer:**
- Purpose: Global theming and base styles
- Location: `app/globals.css`
- Contains: Tailwind v4 @theme, custom scrollbar, marquee animation

## Data Flow

**Static Page Flow:**
1. Browser requests `/`
2. Next.js serves `app/layout.tsx` (Server Component)
3. Root layout renders Google Fonts and applies metadata
4. `app/page.tsx` renders with imported components
5. Client components hydrate for interactivity

**No API routes or data fetching.**

## Key Abstractions

**Theme Variables (Tailwind v4 @theme):**
- `--color-gold: #C4923E` - Primary accent color
- `--color-gold-glow: #8B5A2B` - Secondary gold tone
- `--color-paper: #d4c7b0` - Text color

**Font Variables (CSS):**
- `--font-sans` - Inter
- `--font-cinzel` - Cinzel (headings)
- `--font-space` - Space Grotesk (tech elements)

## Entry Points

**Primary Entry:**
- Location: `app/page.tsx`
- Triggers: HTTP GET `/`
- Responsibilities: Renders full landing page with sections

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: Every page request
- Responsibilities: HTML structure, fonts, metadata

## Error Handling

**Strategy:** Minimal - no error boundaries
**Patterns:** None implemented

## Cross-Cutting Concerns

**Logging:** Console.log only (sparse usage)
**Validation:** None (static page)
**Authentication:** N/A

---

*Architecture analysis: 2026-03-25*
