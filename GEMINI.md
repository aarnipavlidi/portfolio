# GEMINI.md — AI Assistant Requirements & Project Constraints

> This file defines the hard rules, constraints, and coding standards that all AI assistants
> (Claude, Gemini, Copilot, etc.) must follow when working on this project.
> Violating these rules will require rework. When in doubt, re-read this file.

---

## 1. Framework & Runtime

- **Nuxt version**: `4.4.2` — exact, do not suggest or use any other version
- **Vue version**: `^3.5` (managed by Nuxt, do not override)
- **TypeScript**: Strict mode enabled — all files must be TypeScript (`.ts` / `.vue` with `<script setup lang="ts">`)
- **Node**: Always use modern ESM imports (`import`/`export`), never `require()`
- **Package manager**: `npm` — always use `npm install`. Never use `pnpm` or `yarn`
- **Directory structure**: Nuxt 4 `app/` directory layout. All application code lives inside `app/`. Do NOT place components/pages/composables at the project root level.

---

## 2. Styling Rules

### 2.1 Tailwind CSS

- Use **Tailwind CSS v4** (CSS-first, no `tailwind.config.ts` config object for colours)
- The Vite plugin `@tailwindcss/vite` is used — NOT `@nuxtjs/tailwindcss`
- Custom design tokens (colours, radius, shadows, fonts) are defined via CSS custom properties in `app/assets/css/main.css`

### 2.2 Color Palette — STRICT

**Only the following CSS custom property tokens are allowed for color usage.** Never use:
- Raw hex values (e.g., `#EB7C39`, `#131315`)
- Raw RGB/RGBA values
- Tailwind default color palette (e.g., `bg-blue-500`, `text-gray-900`)
- Any color not listed below

> This palette was explicitly chosen and provided for this project. It is the **only** valid color system. No exceptions.

#### Allowed Tailwind color classes (mapped from CSS vars):

```
bg-background          text-background
bg-foreground          text-foreground
bg-card                text-card
bg-card-foreground     text-card-foreground
bg-popover             text-popover
bg-popover-foreground  text-popover-foreground
bg-primary             text-primary
bg-primary-foreground  text-primary-foreground
bg-secondary           text-secondary
bg-secondary-foreground text-secondary-foreground
bg-muted               text-muted
bg-muted-foreground    text-muted-foreground
bg-accent              text-accent
bg-accent-foreground   text-accent-foreground
bg-destructive         text-destructive
bg-destructive-foreground text-destructive-foreground
border-border          ring-ring
bg-input               border-input
bg-sidebar             text-sidebar-foreground
bg-sidebar-primary     text-sidebar-primary
bg-sidebar-accent      text-sidebar-accent
bg-sidebar-border      ring-sidebar-ring
```

#### Full CSS Palette (source of truth — lives in `app/assets/css/main.css`)

```css
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1.0000 0 0);
  --foreground: oklch(0.2101 0.0318 264.6645);
  --card: oklch(1.0000 0 0);
  --card-foreground: oklch(0.2101 0.0318 264.6645);
  --popover: oklch(1.0000 0 0);
  --popover-foreground: oklch(0.2101 0.0318 264.6645);
  --primary: oklch(0.6716 0.1368 48.5130);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.5360 0.0398 196.0280);
  --secondary-foreground: oklch(1.0000 0 0);
  --muted: oklch(0.9670 0.0029 264.5419);
  --muted-foreground: oklch(0.5510 0.0234 264.3637);
  --accent: oklch(0.9491 0 0);
  --accent-foreground: oklch(0.2101 0.0318 264.6645);
  --destructive: oklch(0.6368 0.2078 25.3313);
  --destructive-foreground: oklch(0.9851 0 0);
  --border: oklch(0.9276 0.0058 264.5313);
  --input: oklch(0.9276 0.0058 264.5313);
  --ring: oklch(0.6716 0.1368 48.5130);
  --chart-1: oklch(0.5940 0.0443 196.0233);
  --chart-2: oklch(0.7214 0.1337 49.9802);
  --chart-3: oklch(0.8721 0.0864 68.5474);
  --chart-4: oklch(0.6268 0 0);
  --chart-5: oklch(0.6830 0 0);
  --sidebar: oklch(0.9670 0.0029 264.5419);
  --sidebar-foreground: oklch(0.2101 0.0318 264.6645);
  --sidebar-primary: oklch(0.6716 0.1368 48.5130);
  --sidebar-primary-foreground: oklch(1.0000 0 0);
  --sidebar-accent: oklch(1.0000 0 0);
  --sidebar-accent-foreground: oklch(0.2101 0.0318 264.6645);
  --sidebar-border: oklch(0.9276 0.0058 264.5313);
  --sidebar-ring: oklch(0.6716 0.1368 48.5130);
  --font-sans: Inter, ui-sans-serif, sans-serif, system-ui;
  --font-serif: serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.75rem;
  --shadow-x: 0px;
  --shadow-y: 1px;
  --shadow-blur: 4px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.05;
  --shadow-color: #000000;
  --shadow-2xs: 0px 1px 4px 0px hsl(0 0% 0% / 0.03);
  --shadow-xs: 0px 1px 4px 0px hsl(0 0% 0% / 0.03);
  --shadow-sm: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 1px 2px -1px hsl(0 0% 0% / 0.05);
  --shadow: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 1px 2px -1px hsl(0 0% 0% / 0.05);
  --shadow-md: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 2px 4px -1px hsl(0 0% 0% / 0.05);
  --shadow-lg: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 4px 6px -1px hsl(0 0% 0% / 0.05);
  --shadow-xl: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 8px 10px -1px hsl(0 0% 0% / 0.05);
  --shadow-2xl: 0px 1px 4px 0px hsl(0 0% 0% / 0.13);
  --tracking-normal: 0rem;
  --spacing: 0.25rem;
}

.dark {
  --background: oklch(0.1797 0.0043 308.1928);
  --foreground: oklch(0.8109 0 0);
  --card: oklch(0.1822 0 0);
  --card-foreground: oklch(0.8109 0 0);
  --popover: oklch(0.1797 0.0043 308.1928);
  --popover-foreground: oklch(0.8109 0 0);
  --primary: oklch(0.7214 0.1337 49.9802);
  --primary-foreground: oklch(0.1797 0.0043 308.1928);
  --secondary: oklch(0.5940 0.0443 196.0233);
  --secondary-foreground: oklch(0.1797 0.0043 308.1928);
  --muted: oklch(0.2520 0 0);
  --muted-foreground: oklch(0.6268 0 0);
  --accent: oklch(0.3211 0 0);
  --accent-foreground: oklch(0.8109 0 0);
  --destructive: oklch(0.5940 0.0443 196.0233);
  --destructive-foreground: oklch(0.1797 0.0043 308.1928);
  --border: oklch(0.2520 0 0);
  --input: oklch(0.2520 0 0);
  --ring: oklch(0.7214 0.1337 49.9802);
  --chart-1: oklch(0.5940 0.0443 196.0233);
  --chart-2: oklch(0.7214 0.1337 49.9802);
  --chart-3: oklch(0.8721 0.0864 68.5474);
  --chart-4: oklch(0.6268 0 0);
  --chart-5: oklch(0.6830 0 0);
  --sidebar: oklch(0.1822 0 0);
  --sidebar-foreground: oklch(0.8109 0 0);
  --sidebar-primary: oklch(0.7214 0.1337 49.9802);
  --sidebar-primary-foreground: oklch(0.1797 0.0043 308.1928);
  --sidebar-accent: oklch(0.3211 0 0);
  --sidebar-accent-foreground: oklch(0.8109 0 0);
  --sidebar-border: oklch(0.2520 0 0);
  --sidebar-ring: oklch(0.7214 0.1337 49.9802);
  --font-sans: Inter, ui-sans-serif, sans-serif, system-ui;
  --font-serif: serif;
  --font-mono: JetBrains Mono, monospace;
  --radius: 0.75rem;
  --shadow-x: 0px;
  --shadow-y: 1px;
  --shadow-blur: 4px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.05;
  --shadow-color: #000000;
  --shadow-2xs: 0px 1px 4px 0px hsl(0 0% 0% / 0.03);
  --shadow-xs: 0px 1px 4px 0px hsl(0 0% 0% / 0.03);
  --shadow-sm: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 1px 2px -1px hsl(0 0% 0% / 0.05);
  --shadow: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 1px 2px -1px hsl(0 0% 0% / 0.05);
  --shadow-md: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 2px 4px -1px hsl(0 0% 0% / 0.05);
  --shadow-lg: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 4px 6px -1px hsl(0 0% 0% / 0.05);
  --shadow-xl: 0px 1px 4px 0px hsl(0 0% 0% / 0.05), 0px 8px 10px -1px hsl(0 0% 0% / 0.05);
  --shadow-2xl: 0px 1px 4px 0px hsl(0 0% 0% / 0.13);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);

  --tracking-tighter: calc(var(--tracking-normal) - 0.05em);
  --tracking-tight: calc(var(--tracking-normal) - 0.025em);
  --tracking-normal: var(--tracking-normal);
  --tracking-wide: calc(var(--tracking-normal) + 0.025em);
  --tracking-wider: calc(var(--tracking-normal) + 0.05em);
  --tracking-widest: calc(var(--tracking-normal) + 0.1em);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    letter-spacing: var(--tracking-normal);
  }
}
```

---

## 3. Typography — STRICT

### 3.1 Font Families

| Role | Font | CSS Variable |
|---|---|---|
| Headings (h1–h4, display) | **JetBrains Mono** | `font-mono` |
| Body text, descriptions | **Inter** | `font-sans` |
| Badges, labels, code, metadata | **JetBrains Mono** | `font-mono` |

**Never** use `font-serif` for any text in this project.

### 3.2 Typography Component — MANDATORY

**All text in the application MUST be rendered through the `<Typography>` component.**

Do NOT use raw HTML tags (`<h1>`, `<p>`, `<span>`) with manual Tailwind text classes for text rendering.
Do NOT add ad-hoc `text-xl`, `font-bold`, `leading-tight` etc. to arbitrary elements.

```vue
<!-- ✅ CORRECT -->
<Typography variant="h2">Experience</Typography>
<Typography variant="body-lg" class="text-muted-foreground">Description here</Typography>
<Typography variant="label" class="text-primary uppercase">2019 – Present</Typography>

<!-- ❌ WRONG -->
<h2 class="text-2xl font-bold font-mono">Experience</h2>
<p class="text-lg leading-relaxed">Description here</p>
<span class="text-xs tracking-widest uppercase text-amber-500">2019 – Present</span>
```

The only allowed `class` additions to `<Typography>` are:
- **Color overrides**: `text-primary`, `text-muted-foreground`, `text-secondary`, etc.
- **Spacing**: `mt-4`, `mb-2`, `mx-auto`, etc.
- **Alignment**: `text-center`, `text-left`, `text-right`
- **Opacity**: `opacity-70`

### 3.3 Typography Scale (Mathematical — based on powers of two)

Base unit: `1rem = 16px`. All sizes derived from halving/doubling:

| Variant | `font-size` | `line-height` | `font-family` | `letter-spacing` | Default tag |
|---|---|---|---|---|---|
| `display` | `4rem` | `1.0` | JetBrains Mono | `-0.04em` | `<h1>` |
| `h1` | `3rem` | `1.1` | JetBrains Mono | `-0.03em` | `<h1>` |
| `h2` | `2rem` | `1.2` | JetBrains Mono | `-0.02em` | `<h2>` |
| `h3` | `1.5rem` | `1.25` | JetBrains Mono | `-0.01em` | `<h3>` |
| `h4` | `1.25rem` | `1.3` | JetBrains Mono | `0` | `<h4>` |
| `body-lg` | `1.125rem` | `1.5` | Inter | `0` | `<p>` |
| `body` | `1rem` | `1.5` | Inter | `0` | `<p>` |
| `body-sm` | `0.875rem` | `1.5` | Inter | `0` | `<p>` |
| `label` | `0.75rem` | `1.25` | JetBrains Mono | `0.05em` | `<span>` |
| `mono` | `0.875rem` | `1.75` | JetBrains Mono | `0` | `<code>` |

---

## 4. Component Rules

### 4.1 Two-Tier Component System

#### Tier 1 — shadcn-vue Primitives (`app/components/ui/`)

All shadcn-vue components are installed **as-is** via the CLI into `app/components/ui/`. **NEVER modify files in this directory directly.** They are the raw unstyled foundation.

```bash
# Install shadcn components as-is — never touch after install
npx shadcn-vue@latest add button badge card input textarea sheet label
```

These are accessed as: `<Button>`, `<Badge>`, `<Card>`, `<Input>`, `<Sheet>`, etc.

If a shadcn component needs styling changes or new behaviour → **create a Custom wrapper. Never edit the source in `ui/`.**

#### Tier 2 — Custom Components (`app/components/Custom*/` and `app/components/Section/`)

All project-specific components live here in their own folder, each containing:
- **`[variant].vue`** — one dedicated file per variant (e.g., `primary.vue`, `ghost.vue`), same pattern as `Section` components
- **`index.ts`** — creates the dot-notation namespace and exports types

```
app/components/CustomButton/
├── primary.vue     ← primary variant (standalone)
├── ghost.vue       ← ghost variant (standalone)
├── aarni.vue       ← aarni variant (standalone)
└── index.ts        ← Exports: CustomButton = { Primary, Ghost, Aarni }
```

### 4.2 Separate-File + Dot-Notation Pattern

**This is the primary component pattern for ALL custom components in this project** — the same pattern used by `Section` components.

Each variant gets its **own dedicated `.vue` file**. There is no monolithic `component.vue` with all variants inside.

#### Variant file — one file per variant

```vue
<!-- app/components/CustomButton/primary.vue -->
<script setup lang="ts">
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'

const props = defineProps<{
  size?: 'sm' | 'default' | 'lg'
  class?: string
}>()
</script>

<template>
  <Button
    :class="cn(
      'bg-primary text-primary-foreground',
      props.class
    )"
  >
    <slot />
  </Button>
</template>
```

#### `index.ts` — Namespace export (enables dot notation)

```ts
import Primary from './primary.vue'
import Ghost from './ghost.vue'
import Aarni from './aarni.vue'

export const CustomButton = { Primary, Ghost, Aarni }

export interface CustomButtonProps {
  size?: 'sm' | 'default' | 'lg'
  class?: string
}
```

#### Usage — always via dot notation import

```vue
<script setup lang="ts">
import { CustomButton } from '~/components/CustomButton'
import { Section } from '~/components/Section'
</script>

<template>
  <CustomButton.Primary>View Work</CustomButton.Primary>
  <CustomButton.Aarni>Special CTA</CustomButton.Aarni>
  <Section.Hero id="hero" />
  <Section.Skills id="skills" />
</template>
```

### 4.3 Naming Convention

```
✅ Custom wrappers (shadcn base):     Custom prefix + dot notation, one file per variant
   CustomButton/primary.vue          → CustomButton.Primary
   CustomButton/ghost.vue            → CustomButton.Ghost
   CustomBadge/default.vue           → CustomBadge.Default
   CustomBadge/tech.vue              → CustomBadge.Tech
   CustomCard/project.vue            → CustomCard.Project
   CustomCard/experience.vue         → CustomCard.Experience
   CustomSheet/contact.vue           → CustomSheet.Contact
   CustomInput/default.vue           → CustomInput.Default

✅ Standalone components (no shadcn): Descriptive name + dot notation, one file per entry
   Section/Hero.vue + index.ts       → Section.Hero
   Section/Skills.vue + index.ts     → Section.Skills
   Typography/Typography.vue         → <Typography /> (single, variant prop — no dot notation needed)
   layout/AppNav.vue                 → <AppNav /> (single, no variants)

❌ NEVER:
   Modifying any file in ui/                     (shadcn primitives are read-only)
   components/ui/CustomButton.vue                (custom code in ui/ folder)
   Single component.vue with all variants inside (use separate files per variant instead)
```

### 4.4 File Locations

| Component type | Location |
|---|---|
| shadcn-vue primitives (installed as-is, never modified) | `app/components/ui/` |
| Custom wrappers around shadcn primitives | `app/components/Custom[Name]/` |
| Standalone sections namespace | `app/components/Section/` |
| Typography (variant-prop, no namespace) | `app/components/Typography/` |
| Layout components | `app/components/layout/` |
| Composables | `app/composables/` |
| Server API routes | `server/api/` |
| Shared types (client + server) | `shared/types/` |

### 4.5 Component Variants

Variant dispatch is handled by **file structure** — each variant is its own `.vue` file, imported directly in `index.ts`. Do NOT use a single `component.vue` with CVA to dispatch variants.

`class-variance-authority` (CVA) may still be used **within** a single variant file for prop-based sub-state styling (e.g., `size` variants: `sm`, `default`, `lg`). Do NOT use `v-if`/ternary chains for any styling logic.

### 4.6 `cn()` Utility

Always use the `cn()` utility (wrapping `clsx` + `tailwind-merge`) for conditional/merged class names:

```ts
import { cn } from '~/lib/utils'

// ✅ Correct
:class="cn('base-class', { 'conditional-class': isActive })"

// ❌ Wrong
:class="['base-class', isActive ? 'conditional-class' : '']"
```

---

## 5. Design Rules

### 5.1 No Structural Borders

**NEVER** use 1px solid borders to visually separate content sections.

```html
<!-- ❌ FORBIDDEN: border as section divider -->
<div class="border-b border-border">...</div>
<hr class="border-border" />

<!-- ✅ CORRECT: tonal background shift for separation -->
<section class="bg-background">...</section>
<section class="bg-muted">...</section>
```

Exception: Input fields and form elements may use `border-input` for accessibility.

### 5.2 No Horizontal Rules (`<hr>`)

Do not use `<hr>` elements for visual separation. Use vertical whitespace (`mt-10`, `py-16`) instead.

### 5.3 Dark Mode

- **No user-facing dark/light mode toggle** — the app respects system preference only
- Use `dark:` Tailwind prefix for dark mode overrides
- Both modes must be designed and tested
- `@nuxtjs/color-mode` handles class injection with `preference: 'system'` and `classSuffix: ''`

### 5.4 Spacing

Spacing values must align to the typographic scale (based on multiples of `0.25rem`):
- Prefer: `0.5rem`, `1rem`, `1.5rem`, `2rem`, `2.5rem`, `4rem` etc.
- Between section list items: minimum `2.5rem` vertical space
- Section padding: minimum `4rem` vertical

### 5.5 Shadows

Use only the shadow tokens defined in the design system:
```
shadow-2xs  shadow-xs  shadow-sm  shadow  shadow-md  shadow-lg  shadow-xl  shadow-2xl
```
No custom `box-shadow` values.

---

## 6. Responsive Design Rules

### 6.1 Mobile-First

Always write styles mobile-first. Never use `max-md:` or `max-lg:` as the primary approach.

```html
<!-- ✅ Mobile first -->
<div class="flex-col md:flex-row">

<!-- ❌ Desktop first -->
<div class="flex-row max-md:flex-col">
```

### 6.2 Breakpoints (Three Primary)

| Name | Prefix | Min Width |
|---|---|---|
| Mobile (default) | none | 0 |
| Tablet | `md:` | 768px |
| Desktop | `lg:` | 1024px |

Use `xl:` (1280px) only for fine-tuning, not as a primary breakpoint.

### 6.3 Stitch Design Frames

- Mobile 390px frame → ground truth for default (no prefix) styles
- Desktop 1280px frame → ground truth for `lg:` / `xl:` styles
- Tablet 768px → interpolated, requires iteration

---

## 7. Content Management Rules

### 7.1 Nuxt Content v3

All static portfolio data (skills, experience, projects) lives in `.md` files under `content/`. Structured data goes in YAML **frontmatter**, rich descriptions go in the **markdown body**.

Docs: https://content.nuxt.com/docs/files/markdown

### 7.2 Content Schemas

Schemas are defined in `content.config.ts` at the project root using Zod:

```ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content'
```

All collection fields must be typed — no `any` or untyped schema fields.

### 7.3 Content Format

All content lives as `.md` files. Structured data in frontmatter, rich text in the markdown body:

```md
---
role: "Senior Frontend Developer"
company: "Company Name"
techStack:
  - "Vue.js"
  - "TypeScript"
---

Description and highlights go here as markdown...
```

### 7.4 Querying

Use `queryCollection()` (Nuxt Content v3 API) for all content queries. Do NOT use `queryContent()` (v2 API).

---

## 8. Server API Rules

### 8.1 Contact Route

- Path: `server/api/contact.post.ts`
- Validate all input server-side with Zod before calling Resend
- Never expose `RESEND_API_KEY` in client-side code
- Return typed responses with proper HTTP status codes

### 8.2 Environment Variables

| Variable | Usage |
|---|---|
| `RESEND_API_KEY` | Resend API key — server-side only |
| `CONTACT_EMAIL_TO` | Destination email address |
| `CONTACT_EMAIL_FROM` | Sender address (must be verified domain) |

All secrets must be in `.env` (gitignored). Template in `.env.example`.

---

## 9. Code Quality Rules

### 9.1 TypeScript

- `strict: true` in `tsconfig.json`
- No `any` type — use `unknown` with type guards if needed
- All component props must be typed with `defineProps<{...}>()`
- All composable return types must be explicitly typed

### 9.2 Vue Component Style

```vue
<!-- Template for all .vue files -->
<script setup lang="ts">
// 1. Imports
// 2. Props & emits
// 3. Composables
// 4. Reactive state
// 5. Computed
// 6. Methods
// 7. Lifecycle hooks
</script>

<template>
  <!-- Template -->
</template>
```

- Always use `<script setup lang="ts">` (Composition API + TypeScript)
- Never use Options API
- Never use `defineComponent()`

### 9.3 Imports

- Use `~` or `@` alias for project-root imports (configured by Nuxt automatically)
- Auto-imported composables (from `app/composables/`) do not need explicit imports
- Auto-imported components (from `app/components/`) do not need explicit imports

### 9.4 ESLint & Prettier

**Do NOT install ESLint or Prettier during the initial scaffold unless:**
1. The Nuxt installation wizard explicitly suggests them AND
2. The user explicitly confirms they want them installed

The initial scope is intentionally minimal: Nuxt + TailwindCSS + shadcn-vue + TypeScript + Storybook.

---

## 10. Storybook Rules

### 10.1 Story Files

Every component in `app/components/ui/` and `app/components/sections/` must have a corresponding Storybook story in `stories/`.

### 10.2 Story Naming

```ts
// stories/ui/Badge.stories.ts
const meta: Meta = {
  title: 'UI/Badge/Default',    // Category/Component/Variant
}
```

### 10.3 Dark Mode in Storybook

Stories must demonstrate both light and dark mode variants using Storybook's backgrounds or a decorator.

---

## 11. Git & Commit Rules

### 11.1 Commit Message Format

```
type(scope): short description

Types: feat | fix | style | refactor | docs | chore | test
Scope: ui | layout | sections | content | server | config | storybook

Examples:
feat(ui): add Typography component with all variants
fix(layout): correct nav active state on section change
style(sections): adjust hero spacing for mobile breakpoint
```

### 11.2 Files Never to Commit

- `.env` (secrets)
- `node_modules/`
- `.nuxt/`
- `.output/`
- `dist/`

---

## 12. Deployment Rules

- **Build command**: `nuxt build` (NOT `nuxt generate`)
- **Deploy target**: Vercel
- **Domain**: `aarni.dev`
- Homepage must be pre-rendered: `routeRules: { '/': { prerender: true } }`
- Contact API must remain a serverless function (do NOT prerender `/api/**`)

---

## 13. Performance Rules

- All images in `public/` must be optimised (WebP format, compressed)
- Avatar image will be provided by the user — optimise before deployment
- Use `<NuxtImg>` (from `@nuxt/image`) for all images where possible
- Lazy-load images below the fold
- No unused dependencies — regularly audit with `npx depcheck`

---

## 14. Accessibility Rules

- All interactive elements must have accessible labels
- Minimum touch target size: `44px × 44px`
- Color contrast must meet WCAG AA minimum
- All icons used decoratively must have `aria-hidden="true"`
- Form inputs must have associated `<label>` elements

---

*End of GEMINI.md — Last updated: 2026-04-28*
