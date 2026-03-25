# Codebase Concerns

**Analysis Date:** 2026-03-25

## Tech Debt

**Countdown Timer:**
- Issue: Countdown target date is hardcoded ("2026-05-15T00:00:00")
- Files: `components/Hero.tsx`
- Impact: Timer will show "00:00:00:00" after event date
- Fix approach: Move to config/env var or remove after event

**External Discord Link:**
- Issue: Discord link placeholder "https://discord.gg/yourlink"
- Files: `components/Navbar.tsx`, `components/Hero.tsx`
- Impact: Links don't work until updated
- Fix approach: Replace with actual Discord invite link

**Devfolio Link:**
- Issue: Hardcoded registration URL "https://devfolio.co/"
- Files: `components/Hero.tsx`
- Impact: May need updating after event
- Fix approach: Move to config/env var

## Known Bugs

No known bugs detected.

## Security Considerations

**External Image CDN:**
- Risk: External noise texture loaded from Cloudinary
- Files: `components/Marquee.tsx` (line 18)
- Current mitigation: None (third-party resource)
- Recommendations: Download and host locally if reliability is critical

**Hardcoded URLs:**
- Risk: External links are hardcoded
- Files: Multiple components
- Recommendations: Consider env vars for link management

## Performance

**Large Background Images:**
- Problem: Multiple large background images in `/public/`
- Files: `public/kurukshetra-bg*.png`
- Cause: No image optimization for different viewport sizes
- Improvement path: Use next/image with proper sizing

**Fixed Background Attachment:**
- Problem: `background-attachment: fixed` can cause performance issues on mobile
- Files: `app/globals.css` (line 25)
- Impact: May cause scroll jank on older devices
- Improvement path: Consider removing or using CSS transform instead

## Fragile Areas

**Theme Hardcoding:**
- Files: `app/globals.css`, all components
- Why fragile: Colors hardcoded throughout (`#C4923E`, `#d4c7b0`, etc.)
- Safe modification: Use Tailwind theme variables consistently
- Test coverage: Manual verification needed

**Marquee Animation:**
- Files: `components/Marquee.tsx`
- Why fragile: CSS animation relies on specific text length calculation
- Safe modification: Ensure repeated text creates seamless loop

## Scaling Limits

**Single Page Design:**
- Current capacity: Single landing page
- Limit: Adding more pages requires new route files
- Scaling path: Next.js App Router handles additional routes well

## Dependencies at Risk

**Framer Motion:**
- Risk: Heavy animation library for simple effects
- Impact: Bundle size, potential compatibility issues with React 19
- Migration plan: Consider CSS animations for simple effects

## Missing Critical Features

**No Testing Infrastructure:**
- Problem: Zero test coverage
- Blocks: Safe refactoring, regression prevention

**No Error Boundaries:**
- Problem: No error handling for component failures
- Blocks: Graceful degradation

**No Environment Configuration:**
- Problem: Links and dates hardcoded
- Blocks: Different configs for dev/staging/prod

## Test Coverage Gaps

**Component Testing:**
- What's not tested: All 5 components
- Files: `components/*.tsx`
- Risk: UI breakage goes unnoticed
- Priority: Medium

**Page Rendering:**
- What's not tested: Main page render
- Files: `app/page.tsx`
- Risk: Section integration breaks
- Priority: Low (visual verification acceptable for landing page)

**Countdown Timer:**
- What's not tested: Timer logic and edge cases
- Files: `components/Hero.tsx`
- Risk: Timer shows incorrect values
- Priority: Low (single use case)

---

*Concerns audit: 2026-03-25*
