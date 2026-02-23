# Portfolio Enhancement Plan

## 1. Hero Section — Psychologically Compelling Title & Summary

**Goal:** Transform the hero tagline and roles into copy that triggers recruiter urgency and curiosity. Use psychological hooks: social proof, specificity, loss aversion, and authority framing.

### Changes in `src/data/portfolio.ts`:
- **heroTagline**: Rewrite from passive description to outcome-driven hook that makes recruiters think "we need this person before someone else grabs them"
  - Current: "I ship production systems for distributed client teams across timezones — from AR camera pipelines and VR catalogues to full-stack platforms shipped to both app stores."
  - New: "The developer teams call when the deadline was yesterday. I've shipped 30+ production apps across AR, VR, mobile, and full-stack — and left every codebase cleaner than I found it."
  - **Psychology**: Loss aversion ("before someone else gets him"), specificity (30+ apps), authority ("teams call when"), contrast ("deadline was yesterday" = urgency), integrity signal ("cleaner than I found it")

- **heroRoles**: Rewrite to signal seniority and breadth without being generic
  - Current: `["Frontend Architect", "Full-Stack Developer", "Mobile Engineer", "Component Library Author"]`
  - New: `["Senior Full-Stack TypeScript Engineer", "Production-Shipped Mobile Developer", "Component Library Architect", "The One Who Fixes the Build"]`
  - **Psychology**: Specificity (TypeScript, not just "developer"), proof ("production-shipped"), humor at the end creates memorability and personality

- **Stats labels**: Make them recruiter-scannable
  - Current labels: "Years of Experience", "Production Clients", "Live Applications"
  - New labels: "Years Shipping Code", "Client Teams Embedded In", "Apps Live in Production"
  - **Psychology**: Active verbs ("shipping" not "of experience"), embedded = trust signal

### Changes in `src/components/Hero.tsx`:
- No structural changes needed — the data-driven approach means the copy changes flow through automatically

---

## 2. About Section — Stunning Redesign

**Goal:** Make the About section visually striking with a modern layout, subtle animations, and better information hierarchy.

### Changes in `src/components/About.tsx`:
- **Layout**: Replace simple 2-column grid with a more editorial layout:
  - Full-width opening "pull quote" statement (large, bold, gradient text) — the first paragraph becomes a hero statement
  - Below: 2-column layout with narrative text (left) and a floating stats/highlights card (right) instead of just the avatar
  - The avatar moves into a circular badge integrated into the stats card

- **Visual enhancements**:
  - Add a subtle left border accent line (blue-to-violet gradient) on the pull quote
  - Add a glassmorphism card for the highlights (years, clients, stack breadth)
  - Staggered reveal animations on scroll (already using FadeIn, enhance timing)
  - Add a "Currently at" badge showing current role + company

- **Content restructure** in `src/data/portfolio.ts`:
  - Split `aboutParagraphs` — first paragraph becomes a pull-quote, remaining become narrative
  - Add a `highlights` array: quick-scan bullet points for recruiters

### New About structure:
```
┌──────────────────────────────────────────────────┐
│  ABOUT · How I got here                          │
├──────────────────────────────────────────────────┤
│                                                  │
│  ┃ "I contributed to building a component        │
│  ┃  library that powers 10+ enterprise           │
│  ┃  projects. Not consumed it — helped write it."│
│  ┃                      (large pull-quote)       │
│                                                  │
│  ┌──────────────────┐  ┌──────────────────────┐  │
│  │ 6+ years deep... │  │ ┌────┐ Soheil Asami  │  │
│  │ in TypeScript     │  │ │ 🖼 │ @Tribes Dig.  │  │
│  │ across full stack │  │ └────┘               │  │
│  │                   │  │ ─────────────────── │  │
│  │ Self-taught.      │  │ ✓ 6+ yrs TypeScript │  │
│  │ Started as a      │  │ ✓ 10+ client teams  │  │
│  │ teacher...        │  │ ✓ Co-founded startup│  │
│  │                   │  │ ✓ Both app stores   │  │
│  └──────────────────┘  └──────────────────────┘  │
└──────────────────────────────────────────────────┘
```

---

## 3. Navbar Active State Fixes

### Problem 1: "About" is active/underlined on the main page (hero section)
**Root cause:** The Intersection Observer with `rootMargin: "-40% 0px -55% 0px"` detects the About section too early. On initial page load (hero section visible), no section should be active.

### Fix in `src/components/Navbar.tsx`:
- Add the hero section (`id="hero"`) to the observer
- When the hero is in view, set `activeSection` to `""` (no active nav item)
- This means: on page load or when scrolled to top, no nav item has the underline
- Only when user scrolls past hero into About does "About" become active

### Problem 2: No "deselect on click" behavior
**Requirement:** Clicking an already-active nav item should scroll to top and deselect it.

### Fix in `src/components/Navbar.tsx`:
- Desktop nav: Add onClick handler to each `<a>` that checks if `activeSection === href`
  - If yes: `e.preventDefault()`, `window.scrollTo({ top: 0, behavior: "smooth" })`, `setActiveSection("")`
  - If no: normal scroll behavior
- Mobile nav: Same logic in `handleMobileNavClick`

---

## 4. WCAG 2.1 AA Compliance Fixes

### Critical (Level A violations):

#### 4.1 Focus indicators on all interactive elements
**Files:** `Hero.tsx`, `Footer.tsx`, `Navbar.tsx`
- Add `focus:outline-2 focus:outline-offset-2 focus:outline-blue-500` to:
  - CTA buttons in Hero (lines 211-223)
  - Social links in Hero (lines 231-251)
  - Footer back-to-top button
  - All nav links

#### 4.2 Touch target sizes (minimum 44x44px)
**Files:** `ThemeToggle.tsx`, `Hero.tsx`, `Navbar.tsx`, `SelectedWork.tsx`
- `ThemeToggle.tsx`: Change `p-2` to `p-2.5` (40px total) or add `min-w-[44px] min-h-[44px]`
- Hero social links: Add `py-2 px-3` padding for minimum 44px height
- Navbar mobile toggle: Change `p-2` to `p-2.5`
- Compact project arrow links: Increase from `p-2` + 14px icon to `p-3`

#### 4.3 Mobile navigation — focus trap
**File:** `Navbar.tsx`
- Add focus trap when mobile overlay is open (trap Tab key within the overlay)
- Add Escape key handler to close mobile nav

#### 4.4 Form status messages — aria-live
**File:** `ContactForm.tsx`
- Add `role="status"` and `aria-live="polite"` to success/error message containers
- Add `aria-required="true"` to required form fields
- Add visual required field indicators (asterisk)

#### 4.5 Mobile nav buttons → semantic links
**File:** `Navbar.tsx`
- Change `<motion.button>` to `<motion.a>` in mobile nav for proper semantics

### High (Level AA violations):

#### 4.6 Color contrast improvements
**Files:** `Experience.tsx`, `SectionHeading.tsx`, `Hero.tsx`
- `Experience.tsx`: Change `text-zinc-500` skill pills to `text-zinc-600 dark:text-zinc-300`
- `SectionHeading.tsx`: Verify blue-500 meets 4.5:1 contrast ratio (it does on white, borderline on light backgrounds)
- `Hero.tsx` trusted brands: Change `text-zinc-400/50` to `text-zinc-400 dark:text-zinc-500` (remove opacity)

#### 4.7 Image slider ARIA
**File:** `ImageSlider.tsx`
- Add `role="img"` or `role="group"` with `aria-label` describing the gallery
- Add `aria-roledescription="carousel"` for image sliders

### Medium (Best practices):

#### 4.8 TrustedBy heading
- Already integrated into Hero — no separate section heading needed

#### 4.9 Disabled button contrast
**File:** `ContactForm.tsx`
- Change `disabled:opacity-50` to `disabled:opacity-60` and add `disabled:cursor-not-allowed`

---

## Files to modify (in order):

1. `src/data/portfolio.ts` — Copy rewrites (tagline, roles, stats, about highlights)
2. `src/components/About.tsx` — Full redesign
3. `src/components/Navbar.tsx` — Active state fixes + WCAG fixes
4. `src/components/Hero.tsx` — Focus indicators + touch targets + contrast
5. `src/components/ui/ContactForm.tsx` — WCAG form fixes
6. `src/components/ui/ThemeToggle.tsx` — Touch target size
7. `src/components/ui/ImageSlider.tsx` — ARIA improvements
8. `src/components/Experience.tsx` — Contrast fix on skill pills
9. `src/components/Footer.tsx` — Focus indicators
10. `src/components/ui/SectionHeading.tsx` — Contrast verification

## Lighthouse considerations (from screenshot):
- Performance, accessibility, best practices, SEO scores to be maintained or improved
- All changes maintain lazy loading, semantic HTML, and existing optimization patterns
