# Comprehensive Codebase Exploration

**Analysis Date:** 2026-03-25

## Project Overview

**Project Name:** Citadel 1.0 Website
**Type:** Static Marketing Landing Page / Hackathon Event Website
**Purpose:** Event registration and information hub for "Citadel 1.0" - a Techno-Vedic hackathon hosted by UEM Kolkata
**Domain:** Event marketing, hackathon promotion
**Target Users:** Developers, students, tech enthusiasts interested in participating

---

## Technology Ecosystem

### Core Framework
```
Next.js 16.2.1 + React 19.2.4
├── App Router (modern routing)
├── TypeScript 5.x
├── Tailwind CSS v4 (new @theme syntax)
├── Framer Motion 12.x (animations)
├── Lucide React (icons)
└── Google Fonts (5 font families)
```

### Development Tooling
```
├── ESLint 9 (code quality)
├── TypeScript (type safety)
├── Yarn (package manager)
└── Vercel (deployment target)
```

---

## File-by-File Analysis

### Configuration Files

| File | Purpose | Status |
|------|---------|--------|
| `package.json` | Dependencies & scripts | ✅ Current |
| `tsconfig.json` | TypeScript config + path aliases | ✅ Current |
| `next.config.ts` | Next.js configuration | ⚠️ Minimal (empty config) |
| `eslint.config.mjs` | ESLint rules | ✅ Configured |
| `postcss.config.mjs` | PostCSS + Tailwind v4 | ✅ Configured |
| `.gitignore` | Git exclusions | ✅ Standard |

### Application Files

| File | Type | Lines | Purpose |
|------|------|-------|---------|
| `app/layout.tsx` | Server Component | 58 | Root layout, fonts, metadata |
| `app/page.tsx` | Client Component | 126 | Main landing page |
| `app/globals.css` | Styles | 63 | Tailwind config, animations |
| `app/favicon.ico` | Asset | - | Site favicon |

### Components (5 total)

| Component | Type | Lines | Dependencies |
|-----------|------|-------|--------------|
| `Navbar.tsx` | Client | 69 | next/image, next/link, lucide-react |
| `Hero.tsx` | Client | 123 | framer-motion, Marquee |
| `Marquee.tsx` | Client | 31 | None (pure CSS animation) |
| `TechnoChakra.tsx` | Client | 71 | framer-motion |
| `CommandDock.tsx` | Client | 32 | lucide-react |

### Public Assets (14 files)

**Images (11):**
- `uem-logo.png` - UEM Kolkata logo
- `citadel-logo1.png` - Citadel event logo
- `kurukshetra-bg*.png` (6) - Background images
- `kurukshetra-bg*.jpg` (1) - Background image

**SVGs (3):**
- `next.svg` - Next.js logo (default)
- `vercel.svg` - Vercel logo (default)
- `window.svg` - Window icon (default)
- `globe.svg` - Globe icon (default)
- `file.svg` - File icon (default)

---

## Component Architecture

### Dependency Graph

```
layout.tsx (Server)
    │
    └── page.tsx (Client)
            │
            ├── <Navbar />
            ├── <Hero />
            │       │
            │       ├── useCountdown (hook)
            │       └── <Marquee />
            │
            ├── Inline: About Section
            ├── Inline: Tracks Section
            ├── Inline: Timeline Section
            │
            └── <footer>
                    └── Inline: UEM logo
```

### Component Complexity

**Simple Components:**
- `Marquee.tsx` - Pure display, CSS animation
- `CommandDock.tsx` - Static nav grid

**Medium Complexity:**
- `Navbar.tsx` - Responsive layout, hover states
- `TechnoChakra.tsx` - Complex animation, multiple layers

**Complex Components:**
- `Hero.tsx` - Countdown timer, hydration safety, multiple animations

---

## Page Structure (Single Page Application)

### Sections on `/`

1. **Navbar** (fixed, 100px height)
   - Logo cluster (UEM + Citadel)
   - Navigation links (6 items)
   - CTA button (Discord)

2. **Hero Section** (100vh)
   - Event title "CITADEL v1.0"
   - Tagline "the dharma of code"
   - Countdown timer
   - Register button (Devfolio)
   - Discord button
   - Marquee (bottom)

3. **About Section** (#about)
   - Section header with decorative elements
   - Inspirational quote
   - 3 feature cards (Precision, Unity, Victory)

4. **Tracks Section** (#tracks)
   - 3 track cards (AI, Blockchain, Sustainability)
   - Hover effects for details

5. **Timeline Section** (#timeline)
   - 3 timeline events
   - Visual timeline indicator

6. **Footer**
   - UEM logo
   - Copyright text

---

## Styling System

### Tailwind v4 Configuration

```css
/* app/globals.css */
@theme {
  --color-gold: #C4923E;       
  --color-gold-glow: #8B5A2B;  
  --color-paper: #d4c7b0;      
}
```

### Custom CSS

- **Scrollbar:** Bronze gradient styling
- **Marquee Animation:** 10s linear infinite
- **Background:** Fixed, centered, cover

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| gold | #C4923E | Primary accent |
| gold-glow | #8B5A2B | Secondary gold |
| paper | #d4c7b0 | Text color |
| black | #080705 | Background base |
| zinc-100 to zinc-600 | Tailwind scale | UI hierarchy |

### Typography Scale

| Font | Variable | Usage |
|------|----------|-------|
| Outfit | --font-outfit | Primary UI, headings |
| Cinzel | --font-cinzel | Decorative headings |
| Kalam | --font-kalam | Script elements |
| Space Grotesk | --font-space | Tech elements |
| Inter | --font-sans | Body text |

---

## Animation Patterns

### Framer Motion Usage

```typescript
// Hero.tsx - Fade in
motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}

// TechnoChakra.tsx - Rotation loops
motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
```

### CSS Animations

```css
/* Marquee - Scrolling text */
@keyframes marquee-ultra-fast {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

## State Management

### Local State Only

```typescript
// Hero.tsx - Countdown state
const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

// Hero.tsx - Hydration guard
const [hasMounted, setHasMounted] = useState(false);
useEffect(() => { setHasMounted(true); }, []);
```

### No Global State
- No Redux, Zustand, or Context API
- No server state (no React Query/SWR)

---

## Routing

### Current Routes

| Path | File | Type | Content |
|------|------|------|---------|
| `/` | `app/page.tsx` | Client | Landing page |
| `/_app` | implicit | - | Next.js default |

### Future Route Possibilities

Based on nav links:
- `/timeline` → Timeline page
- `/prizes` → Prizes page
- `/sponsors` → Sponsors page
- `/mentors` → Mentors page
- `/crew` → Crew page

---

## Data Flow

### Static Data (Hardcoded)

```typescript
// Navbar.tsx
const navLinks = [
  { name: "HOME", href: "#" },
  { name: "TIMELINE", href: "#timeline" },
  // ...
];

// page.tsx
const tracks = ["AI & Intelligence", "Blockchain & Security", "Sustainability & Flow"];
const timeline = [
  { time: "09:00 AM", event: "Opening Ceremony", desc: "..." },
  // ...
];
```

### No API Calls
- Zero fetch/axios/swr usage
- No server-side data fetching
- No form submissions

---

## Performance Characteristics

### Bundle Size (Estimated)
- Next.js core: ~150KB
- React 19: ~5KB
- Framer Motion: ~150KB
- Lucide React: ~50KB
- **Total: ~350KB gzipped (approx)**

### Optimization Opportunities

1. **Image Optimization**
   - Multiple background images not optimized
   - No `next/image` for backgrounds (using CSS `url()`)

2. **Font Loading**
   - 5 Google Fonts loaded (could consolidate)

3. **Animation Performance**
   - Framer Motion for simple CSS animations (overkill)
   - `background-attachment: fixed` causes repaints on scroll

---

## Git History Context

**Branches:**
- `main` - Production branch
- `rajeet` - Development branch

**Recent commits:** Not analyzed (requires `git log`)

---

## Security Analysis

### Client-Side Only
- No sensitive data in client bundle
- No API keys or secrets

### External Resources
- Cloudinary CDN (noise texture) - trusted source
- Google Fonts - trusted source

### Potential Issues
1. External Discord link is placeholder
2. External Devfolio link may need updating
3. No CSP headers configured

---

## Missing Infrastructure

### No Testing
- No Jest, Vitest, or Playwright
- Zero test files
- No coverage requirements

### No Error Handling
- No error boundaries
- No 404 page
- No loading states

### No Environment Config
- Links hardcoded in components
- No `.env.local` or `.env.example`

---

## Recommendations Summary

### High Priority
1. Replace placeholder Discord link
2. Add proper error handling (error.tsx)
3. Create 404 page (not-found.tsx)

### Medium Priority
1. Add basic unit tests for countdown timer
2. Optimize background images
3. Consider replacing Framer Motion with CSS for simple animations

### Low Priority
1. Consolidate font usage
2. Add environment variables for external links
3. Add loading states with Suspense

---

*Exploration completed: 2026-03-25*
*Files analyzed: 12 source files, 14 assets, 8 config files*
*Total lines of TypeScript/React: ~580 lines*
