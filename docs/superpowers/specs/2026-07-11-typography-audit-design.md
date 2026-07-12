# Typography Audit & Standardization Design

## Goal
Make font sizes across the Mewdon web app uniform, responsive (specifically smaller on mobile), and easy to maintain by moving away from inline Tailwind typography classes to semantic component classes.

## Architecture & Components

We will implement a Semantic Typography System using Tailwind CSS `@apply` directives inside the main global CSS file (e.g. `app/globals.css`).

### The Typography Scale

We will define a unified set of text utility classes:

**Headings (Used for titles and section headers):**
- `.text-h1` → `@apply text-4xl sm:text-5xl md:text-6xl;`
- `.text-h2` → `@apply text-3xl sm:text-4xl md:text-5xl;`
- `.text-h3` → `@apply text-xl sm:text-2xl md:text-3xl;`

**Body Text (Used for paragraphs, descriptions, links):**
- `.text-body-lg` → `@apply text-lg sm:text-xl md:text-2xl;`
- `.text-body` → `@apply text-base sm:text-lg md:text-xl;`
- `.text-body-sm` → `@apply text-sm sm:text-base md:text-lg;`

**Specialty (Badges, tiny disclaimers):**
- `.text-micro` → `@apply text-[10px] sm:text-xs md:text-sm;`

## Data Flow / Process
1. Define `@layer components` in the main stylesheet.
2. The classes will automatically inherit Tailwind's font-size directives.
3. Replace existing hardcoded responsive strings across `.js` components with the new semantic classes.

## Testing & Verification
- Check all pages to ensure no visual regressions on desktop.
- Verify that font sizes correctly scale down on smaller mobile screens.
