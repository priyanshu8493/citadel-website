# Coding Conventions

**Analysis Date:** 2026-03-25

## Naming Patterns

**Files:**
- PascalCase for React components: `Navbar.tsx`, `Hero.tsx`
- kebab-case for config files: `eslint.config.mjs`, `postcss.config.mjs`

**Functions:**
- camelCase: `useCountdown`, `calculateTimeLeft`
- React components: PascalCase: `Navbar`, `Hero`, `Marquee`

**Variables:**
- camelCase: `timeLeft`, `hasMounted`, `navLinks`
- Constants (when needed): SCREAMING_SNAKE_CASE

**Types:**
- Inline types with TypeScript syntax
- Example: `{ title: string; subtitle: string }`

## Code Style

**Formatting:**
- Tool: ESLint 9 with eslint-config-next
- Tab width: 2 spaces (default)
- Single quotes: preferred

**Linting:**
- Tool: ESLint 9
- Config: `eslint.config.mjs` with `nextVitals` and `nextTs`
- Rules: Strict TypeScript checking enabled

## Import Organization

**Order (automatic via ESLint):**
1. React/core imports
2. Third-party libraries (framer-motion, lucide-react, next)
3. Next.js built-ins (Image, Link)
4. Absolute imports (@/...)
5. Relative imports (./)

**Path Aliases:**
- `@/*` maps to `./` (root of project)
- Usage: `import Navbar from "@/components/Navbar"`

## Component Patterns

**Client Components:**
```typescript
"use client";
export default function ComponentName() {
  // Client-side logic
}
```

**Props:**
- Inline type definitions for simple components
- Example: `{ title: string; subtitle: string }`

**State:**
- React useState for local state
- useEffect for side effects (timers, mount detection)

## Error Handling

**Patterns:**
- Minimal error handling (static page)
- Hydration-safe patterns used:
```typescript
const [hasMounted, setHasMounted] = useState(false);
useEffect(() => { setHasMounted(true); }, []);
```

## Logging

**Framework:** Browser console
**Patterns:** Sparse - no console.log in production code

## Comments

**When to Comment:**
- Complex logic explained
- Section markers in JSX (e.g., `/* VIGNETTE OVERLAY */`)
- Inline style rationale

**JSDoc/TSDoc:**
- Not used in current codebase

## Function Design

**Size:** Small, focused functions
**Parameters:** Max 1-2 parameters typically
**Return Values:** JSX or primitives

## Module Design

**Exports:** Default exports only
**Barrel Files:** None used

---

*Convention analysis: 2026-03-25*
