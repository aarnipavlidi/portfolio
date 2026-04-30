# Portfolio 2026 — Project Planning

> Last updated: 2026-04-28
> Status: Pre-implementation planning phase
> Domain: aarni.dev

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Versions](#2-tech-stack--versions)
3. [Architecture Overview](#3-architecture-overview)
4. [Folder Structure](#4-folder-structure)
5. [Design System & Color Palette](#5-design-system--color-palette)
6. [Typography System](#6-typography-system)
7. [Component Architecture](#7-component-architecture)
8. [Page Sections & Layout](#8-page-sections--layout)
9. [Navigation](#9-navigation)
10. [Contact Form](#10-contact-form)
11. [Responsive Design & Breakpoints](#11-responsive-design--breakpoints)
12. [Content Management](#12-content-management)
13. [Storybook Setup](#13-storybook-setup)
14. [Deployment Strategy](#14-deployment-strategy)
15. [Development Phases](#15-development-phases)
16. [Open Questions & Future Iterations](#16-open-questions--future-iterations)

---

## 1. Project Overview

A complete revamp of the personal portfolio for **Aarni Pavlidi** — a frontend developer portfolio built with a minimalistic and clean editorial aesthetic. The site is a single-page application (SPA) with smooth-scroll navigation, automatic dark/light mode detection (system preference only, no toggle), and a server-side contact form powered by Resend.

### Goals

| Goal | Priority |
|---|---|
| Exceptional SEO (pre-rendered static HTML) | HIGH |
| Fast performance (Core Web Vitals) | HIGH |
| Clean, minimalistic editorial design | HIGH |
| Dark & light mode (system preference) | HIGH |
| Working contact form via Resend | HIGH |
| Storybook component library | MEDIUM |
| Image optimisation for avatar | MEDIUM |
| Open Graph / social card | MEDIUM |

### Design Philosophy

Inspired by the **"The Technical Editor"** north star defined in the Stitch design system. Key principles:
- Minimalism with intentional whitespace
- Tonal depth over borders/lines (no 1px dividers)
- JetBrains Mono for headings to reinforce the developer identity
- Inter for body text for maximum readability
- Amber primary + Teal secondary as accent pair against a near-neutral base

> ⚠️ **Strict Color Rule**: Only the OKLCH CSS custom property tokens defined in the provided palette (`app/assets/css/main.css`) may be used anywhere in the project. No raw hex, RGB, or default Tailwind colors (e.g., `text-gray-900`, `bg-blue-500`) are permitted. This is a hard constraint — see `GEMINI.md` Section 2 for the full palette.

---

## 2. Tech Stack & Versions

### Core

| Package | Version | Reason |
|---|---|---|
| `nuxt` | `4.4.2` (exact) | Latest Nuxt 4, native `app/` directory, best-in-class DX |
| `vue` | `^3.5` | Managed by Nuxt |
| `typescript` | `^5.8` | Strict type safety throughout |

### Styling

| Package | Version | Reason |
|---|---|---|
| `tailwindcss` | `^4.1` | CSS-first approach, OKLCH color support, no config file required |
| `@tailwindcss/vite` | `^4.1` | Vite plugin for Tailwind v4 (installed as dev dep) |
| `shadcn-nuxt` | Latest | Nuxt module for shadcn-vue integration + auto-import |
| `tw-animate-css` | `^1.3` | Tailwind-compatible animation utilities (added by shadcn-vue CLI) |

> **Important**: We use `@tailwindcss/vite` directly via `nuxt.config.ts` `vite.plugins`, NOT `@nuxtjs/tailwindcss`. This is the correct approach for Tailwind v4 per the official Tailwind + Nuxt guide.

#### TailwindCSS Installation Steps (per https://tailwindcss.com/docs/installation/framework-guides/nuxt)

```bash
# 1. Install packages
npm install -D tailwindcss @tailwindcss/vite

# 2. Create the CSS file
# app/assets/css/main.css — add: @import "tailwindcss";

# 3. Configure nuxt.config.ts:
# import tailwindcss from '@tailwindcss/vite'
# vite: { plugins: [tailwindcss()] }
# css: ['~/assets/css/main.css']
```

#### shadcn-vue Installation Steps (per https://www.shadcn-vue.com/docs/installation/nuxt)

```bash
# 1. Add the shadcn Nuxt module
npx nuxi@latest module add shadcn-nuxt

# 2. Configure nuxt.config.ts (modules + shadcn config)

# 3. Add optional SSR width plugin (prevents hydration errors on mobile)
# app/plugins/ssr-width.ts

# 4. Run Nuxt prepare
npx nuxi prepare

# 5. Run the shadcn-vue CLI init
npx shadcn-vue@latest init

# 6. Add individual components as needed
npx shadcn-vue@latest add sheet button badge card input textarea
```

**shadcn `nuxt.config.ts` configuration:**
```ts
modules: ['shadcn-nuxt'],
shadcn: {
  prefix: '',           // No prefix — shadcn components kept as <Button>, <Sheet>, etc.
  componentDir: '@/components/ui'  // Installed to app/components/ui/
}
```

### UI & Icons

| Package | Version | Reason |
|---|---|---|
| `lucide-vue-next` | Latest | Clean, consistent icon library |
| `@nuxtjs/color-mode` | Latest | System-aware dark/light mode, class-based |

### Content

| Package | Version | Reason |
|---|---|---|
| `@nuxt/content` | `^3.5` | File-based CMS for static portfolio data (YAML/MD) |

### Forms & Validation

| Package | Version | Reason |
|---|---|---|
| `vee-validate` | `^4` | Vue form validation |
| `@vee-validate/zod` | Latest | Zod schema integration |
| `zod` | `^3` | Runtime type validation for forms + server API |

### Communication

| Package | Version | Reason |
|---|---|---|
| `resend` | `^4` | Email sending via Vercel serverless function |

### Utilities

| Package | Version | Reason |
|---|---|---|
| `@vueuse/nuxt` | Latest | Composable utilities (breakpoints, etc.) |
| `class-variance-authority` | `^0.7` | CVA for component variants |
| `clsx` | Latest | Conditional class names |
| `tailwind-merge` | `^3` | Merge Tailwind classes without conflicts |

### Developer Tooling

| Package | Version | Reason |
|---|---|---|
| `@nuxtjs/storybook` | Latest | Storybook integration for component development |
| `@storybook/vue3` | `^9` | Storybook for Vue |

> **Package manager**: All install commands use `npm install`. Never use `pnpm` or `yarn`.
>
> **ESLint & Prettier**: Do NOT install these by default. If Nuxt's installation wizard suggests them, pause and confirm with the user before proceeding. Only the following are in scope for the initial scaffold:
> 1. Nuxt `4.4.2`
> 2. TailwindCSS v4 + `@tailwindcss/vite`
> 3. shadcn-vue (via `shadcn-nuxt` module)
> 4. TypeScript (added by Nuxt)
> 5. Storybook

---

## 3. Architecture Overview

### Rendering Strategy

We use **`nuxt build` + Vercel** with `routeRules` for hybrid rendering:

```
Route          Strategy
/              prerender: true  →  Static HTML, served from CDN edge
/api/contact   serverless       →  Vercel Serverless Function (Resend)
```

This means:
- ✅ The portfolio is pre-rendered at build time → perfect SEO & Core Web Vitals
- ✅ After hydration, Vue Router takes over → full SPA feel with no full page reloads
- ✅ The contact API route lives as a Vercel Serverless Function
- ✅ `scroll-behavior: smooth` handles in-page section navigation

### Why NOT `nuxt generate`?

`nuxt generate` produces purely static files and cannot serve server routes at all. Since we need `server/api/contact.post.ts` to work (for Resend), we must use `nuxt build` which Vercel handles as a hybrid deployment.

### Dark / Light Mode

- `@nuxtjs/color-mode` with `preference: 'system'` and `classSuffix: ''`
- The `html` element receives class `dark` or `light` based on `prefers-color-scheme` media query
- **No user-facing toggle exists**
- Tailwind `dark:` variant works off this class
- CSS custom properties swap in `:root` vs `.dark {}` blocks (provided palette)

---

## 4. Folder Structure

```
portfolio/                            # Project root
├── app/                              # ← Nuxt 4 app directory
│   ├── assets/
│   │   └── css/
│   │       └── main.css             # Tailwind v4 entry + full color palette
│   │
│   ├── components/
│   │   ├── ui/                      # ← shadcn-vue components installed AS-IS via CLI
│   │   │   ├── button.vue           #   <Button>        (shadcn primitive, do not modify)
│   │   │   ├── badge.vue            #   <Badge>         (shadcn primitive, do not modify)
│   │   │   ├── card.vue             #   <Card>          (shadcn primitive, do not modify)
│   │   │   ├── input.vue            #   <Input>         (shadcn primitive, do not modify)
│   │   │   ├── textarea.vue         #   <Textarea>      (shadcn primitive, do not modify)
│   │   │   ├── sheet.vue            #   <Sheet>         (shadcn primitive, do not modify)
│   │   │   ├── label.vue            #   <Label>         (shadcn primitive, do not modify)
│   │   │   └── ...                  #   other shadcn components as needed
│   │   │
│   │   ├── CustomButton/            # ← Custom wrapper around shadcn <Button>
│   │   │   ├── component.vue        #   ALL variants defined here via CVA
│   │   │   └── index.ts             #   Exports: CustomButton = { Default, Aarni, Ghost }
│   │   │                            #   Usage: <CustomButton.Default />
│   │   │
│   │   ├── CustomBadge/             # ← Custom wrapper around shadcn <Badge>
│   │   │   ├── component.vue        #   ALL variants (Default, Tech) via CVA
│   │   │   └── index.ts             #   Usage: <CustomBadge.Tech />
│   │   │
│   │   ├── CustomCard/              # ← Custom wrapper around shadcn <Card>
│   │   │   ├── component.vue        #   ALL variants (Project, Experience) via CVA
│   │   │   └── index.ts             #   Usage: <CustomCard.Project />
│   │   │
│   │   ├── CustomSheet/             # ← Custom wrapper around shadcn <Sheet>
│   │   │   ├── component.vue        #   Contact variant
│   │   │   └── index.ts             #   Usage: <CustomSheet.Contact />
│   │   │
│   │   ├── CustomInput/             # ← Custom wrapper around shadcn <Input>
│   │   │   ├── component.vue        #   ALL variants via CVA
│   │   │   └── index.ts             #   Usage: <CustomInput.Default />
│   │   │
│   │   ├── Typography/              # ← Standalone (no shadcn base), variant prop-based
│   │   │   └── Typography.vue       #   → <Typography variant="h1|body|..." />
│   │   │                            #   No dot notation — single component, variant prop
│   │   │
│   │   ├── Section/                 # ← Page sections (no shadcn base)
│   │   │   ├── Hero.vue             #   Full hero section
│   │   │   ├── Skills.vue           #   Skills grid section
│   │   │   ├── Experience.vue       #   Work history section
│   │   │   ├── Projects.vue         #   Projects grid section
│   │   │   └── index.ts             #   Exports: Section = { Hero, Skills, ... }
│   │   │                            #   Usage: <Section.Hero />
│   │   │
│   │   └── layout/                  # Layout-level components (no shadcn base)
│   │       ├── AppNav.vue           #   Sidebar nav (desktop) / top nav (mobile)
│   │       └── AppFooter.vue        #   Footer section
│   │
│   ├── composables/
│   │   ├── useContact.ts            # Contact form state + API submission
│   │   └── useBreakpoint.ts         # Breakpoint helpers via @vueuse/core
│   │
│   ├── layouts/
│   │   └── default.vue              # App shell: nav + <slot /> + footer
│   │
│   ├── pages/
│   │   └── index.vue                # Root page — renders all sections in order
│   │
│   └── app.vue                      # Root Vue component
│
├── content/                         # ← Nuxt Content v3 (all .md files)
│   ├── experience/
│   │   ├── 1.senior-developer.md    # Frontmatter + markdown body
│   │   └── 2.previous-role.md
│   ├── projects/
│   │   ├── 1.project-name.md        # Frontmatter + markdown body
│   │   └── 2.another-project.md
│   └── skills.md                    # Frontmatter only (no body needed)
│
├── server/
│   └── api/
│       └── contact.post.ts          # Resend email handler → Vercel Serverless Fn
│
├── public/
│   ├── avatar.jpg                   # Personal photo (to be added)
│   ├── avatar-placeholder.jpg       # Temporary placeholder
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── robots.txt
│   └── og-image.png                 # Open Graph social card
│
├── .storybook/
│   ├── main.ts                      # Storybook config
│   └── preview.ts                   # Global decorators + CSS import
│
├── stories/
│   ├── ui/
│   │   ├── Badge.stories.ts
│   │   ├── Button.stories.ts
│   │   ├── Card.stories.ts
│   │   ├── Input.stories.ts
│   │   └── Typography.stories.ts
│   └── sections/
│       ├── Hero.stories.ts
│       ├── Skills.stories.ts
│       ├── Experience.stories.ts
│       └── Projects.stories.ts
│
├── shared/
│   └── types/
│       └── index.ts                 # Shared types (client + server)
│
├── nuxt.config.ts                   # Nuxt configuration
├── content.config.ts                # Nuxt Content collection schemas (at project root)
├── components.json                  # shadcn-vue config (generated by shadcn-vue init)
├── .env.example                     # Environment variable template
├── .env                             # Local secrets (gitignored)
├── vercel.json                      # Vercel deployment config (if needed)
├── tsconfig.json
├── eslint.config.mjs
├── PLANNING.md                      # This file
├── GEMINI.md                        # AI assistant requirements
└── package.json
```

---

## 5. Design System & Color Palette

### Color System

All colors are defined via OKLCH CSS custom properties. **Only the variables defined in the design system may be used for colors** — no raw hex/rgb values in component code.

The full CSS palette lives in `app/assets/css/main.css` and is bridged to Tailwind via `@theme inline {}`. See `GEMINI.md` for the full CSS block.

#### Light Mode Tokens

| Token | OKLCH | Purpose |
|---|---|---|
| `--background` | `oklch(1.0000 0 0)` | Page background |
| `--foreground` | `oklch(0.2101 0.0318 264.6645)` | Default text |
| `--primary` | `oklch(0.6716 0.1368 48.5130)` | Amber accent (CTAs, highlights) |
| `--secondary` | `oklch(0.5360 0.0398 196.0280)` | Teal accent |
| `--muted` | `oklch(0.9670 0.0029 264.5419)` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.5510 0.0234 264.3637)` | Muted text |
| `--border` | `oklch(0.9276 0.0058 264.5313)` | Borders |
| `--card` | `oklch(1.0000 0 0)` | Card backgrounds |
| `--accent` | `oklch(0.9491 0 0)` | Hover/active states |

#### Dark Mode Tokens

| Token | OKLCH | Purpose |
|---|---|---|
| `--background` | `oklch(0.1797 0.0043 308.1928)` | Page background |
| `--foreground` | `oklch(0.8109 0 0)` | Default text |
| `--primary` | `oklch(0.7214 0.1337 49.9802)` | Amber accent (brighter in dark) |
| `--secondary` | `oklch(0.5940 0.0443 196.0233)` | Teal accent |
| `--muted` | `oklch(0.2520 0 0)` | Muted backgrounds |
| `--border` | `oklch(0.2520 0 0)` | Borders |
| `--card` | `oklch(0.1822 0 0)` | Card backgrounds |

### Radius

`--radius: 0.75rem` is the base. Derived values:
- `--radius-sm: calc(0.75rem - 4px)` → `0.5rem` (8px)
- `--radius-md: calc(0.75rem - 2px)` → `0.625rem` (10px)
- `--radius-lg: 0.75rem` (12px)
- `--radius-xl: calc(0.75rem + 4px)` → `1rem` (16px)

---

## 6. Typography System

### Font Families

| Role | Font | Usage |
|---|---|---|
| Headings / Display | **JetBrains Mono** | All `h1`–`h4`, display text, hero statements |
| Body | **Inter** | Body copy, paragraphs, descriptions |
| Special / Labels | **JetBrains Mono** | Badges, code, category labels, metadata |

Both fonts loaded via Google Fonts / Nuxt font optimisation.

### Mathematical Scale (based on jxnblk.com/blog/mathematical-web-typography)

Base: `1rem = 16px`. Scale derived from powers of two and their halves:

| Variant | Size | Line Height | Font | Letter Spacing | Use Case |
|---|---|---|---|---|---|
| `display` | `4rem` (64px) | `1.0` | JetBrains Mono | `-0.04em` | Hero name, huge statements |
| `h1` | `3rem` (48px) | `1.1` | JetBrains Mono | `-0.03em` | Primary section headings |
| `h2` | `2rem` (32px) | `1.2` | JetBrains Mono | `-0.02em` | Sub-section headings |
| `h3` | `1.5rem` (24px) | `1.25` | JetBrains Mono | `-0.01em` | Card titles, group headings |
| `h4` | `1.25rem` (20px) | `1.3` | JetBrains Mono | `0` | Minor headings |
| `body-lg` | `1.125rem` (18px) | `1.5` | Inter | `0` | Main body copy |
| `body` | `1rem` (16px) | `1.5` | Inter | `0` | Default body text |
| `body-sm` | `0.875rem` (14px) | `1.5` | Inter | `0` | Secondary body, captions |
| `label` | `0.75rem` (12px) | `1.25` | JetBrains Mono | `0.05em` | ALL-CAPS labels, badges |
| `mono` | `0.875rem` (14px) | `1.75` | JetBrains Mono | `0` | Code snippets |

### Typography Component

A single `<Typography>` component in `app/components/ui/Typography.vue` accepts a `variant` prop and an `as` prop. **All text rendering across the site must go through this component.** No ad-hoc Tailwind text classes on raw HTML elements.

```vue
<!-- Usage examples -->
<Typography variant="display">Aarni Pavlidi</Typography>
<Typography variant="h2" as="h2">Experience</Typography>
<Typography variant="body-lg">Frontend developer based in Finland...</Typography>
<Typography variant="label" class="uppercase text-primary">2019 – 2023</Typography>
```

The component accepts:
- `variant`: `display | h1 | h2 | h3 | h4 | body-lg | body | body-sm | label | mono`
- `as`: HTML tag override (defaults to semantically appropriate tag per variant)
- `class`: Additional utility classes for color/spacing overrides only

---

## 7. Component Architecture

### Two Tiers of Components

#### Tier 1 — shadcn-vue Primitives (`app/components/ui/`)

Installed **as-is** via the CLI. **Never modify these files.** They are the raw foundation.

```bash
npx shadcn-vue@latest add button badge card input textarea sheet label
```

#### Tier 2 — Custom Components (`app/components/Custom*/` and `app/components/Section/`)

All project-specific components live here. Two sub-types:

1. **Custom shadcn wrappers** — prefixed with `Custom`: `CustomButton`, `CustomBadge`, `CustomCard`, etc.
2. **Standalone components** — descriptive name: `Section`, `Typography`, `AppNav`, etc.

### Separate File Per Variant

Each variant for a custom component lives in its **own dedicated `.vue` file** — the same pattern used by `Section` components. There is no monolithic `component.vue` with all variants inside.

```
app/components/CustomButton/
├── primary.vue     ← primary variant (standalone)
├── ghost.vue       ← ghost variant (standalone)
├── aarni.vue       ← aarni variant (standalone)
└── index.ts        ← namespace export: CustomButton = { Primary, Ghost, Aarni }
```

**Variant file — one file per variant:**

```vue
<!-- app/components/CustomButton/primary.vue -->
<script setup lang="ts">
import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'  // shadcn base

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

### Dot Notation — The PRIMARY Usage Pattern

The `index.ts` imports each variant file directly and exports a namespace object. **This is the primary way all custom components are used** — always via the dot notation import.

```ts
// app/components/CustomButton/index.ts
import Primary from './primary.vue'
import Ghost from './ghost.vue'
import Aarni from './aarni.vue'

export const CustomButton = { Primary, Ghost, Aarni }

export interface CustomButtonProps {
  size?: 'sm' | 'default' | 'lg'
  class?: string
}
```

**Usage in any component:**

```vue
<script setup lang="ts">
import { CustomButton } from '~/components/CustomButton'
</script>

<template>
  <CustomButton.Primary size="lg">View Work</CustomButton.Primary>
  <CustomButton.Aarni>Special CTA</CustomButton.Aarni>
  <CustomButton.Ghost>Cancel</CustomButton.Ghost>
</template>
```

### Sections Follow the Same Pattern

Section components follow exactly the same file-per-entry structure — each section has its own `.vue` file, grouped under a `Section` namespace via `index.ts`:

```
app/components/Section/
├── Hero.vue        ← full hero section (unique, not a CVA variant)
├── Skills.vue
├── Experience.vue
├── Projects.vue
└── index.ts        ← Section = { Hero, Skills, Experience, Projects }
```

```ts
// app/components/Section/index.ts
import Hero from './Hero.vue'
import Skills from './Skills.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'

export const Section = { Hero, Skills, Experience, Projects }
```

**Usage:**

```vue
<script setup lang="ts">
import { Section } from '~/components/Section'
</script>

<template>
  <Section.Hero id="hero" />
  <Section.Skills id="skills" />
  <Section.Experience id="experience" />
  <Section.Projects id="projects" />
</template>
```

---

## 8. Page Sections & Layout

### Section Order (Single Page)

```
┌─────────────────────────────────────────────┐
│  AppNav (left sidebar desktop / top mobile) │
├─────────────────────────────────────────────┤
│  HeroSection           id="hero"            │
├─────────────────────────────────────────────┤
│  SkillsSection         id="skills"          │
├─────────────────────────────────────────────┤
│  ExperienceSection     id="experience"      │
├─────────────────────────────────────────────┤
│  ProjectsSection       id="projects"        │
├─────────────────────────────────────────────┤
│  AppFooter                                  │
└─────────────────────────────────────────────┘
```

### Section Details

#### Hero Section
- Full viewport height on desktop, auto height on mobile
- Content: Personal avatar (optimised), name (display typography), title/role, brief tagline
- Primary CTA: "View Work" → smooth scroll to `#projects`
- Secondary CTA: "Contact Me" → triggers `<SheetContact />`
- Avatar: circular crop, uses placeholder initially, will be replaced with actual photo
- Background: `--background`, no decorative borders

#### Skills Section
- Grouped skill categories (e.g. Frontend, Tools, Languages)
- Each skill rendered as `<BadgeTech />` using JetBrains Mono
- Content sourced from `content/skills.yml` via Nuxt Content

#### Experience Section
- Chronological list of work experience
- No horizontal rules — sections separated by whitespace (`2.5rem`) only
- Each entry: role, company, date range, description bullets
- `<CardExperience />` component, no explicit borders (tonal background shift)
- Content sourced from `content/experience/*.yml`

#### Projects Section
- Grid layout: 1 col mobile, 2 col tablet, 2-3 col desktop
- `<CardProject />` component: project name, description, tech stack badges, links
- Tech stack rendered as `<BadgeTech />` in JetBrains Mono / secondary color
- Content sourced from `content/projects/*.yml`
- Links: Live URL + GitHub URL (optional)

#### Footer
- Simple, minimal
- Social links: GitHub, LinkedIn (icons via Lucide)
- Copyright line
- Built-with credits

---

## 9. Navigation

### Layout Strategy

| Breakpoint | Navigation Type |
|---|---|
| Mobile (< `md`, < 768px) | Fixed top bar, name/logo + hamburger or icon links |
| Tablet (`md`–`lg`, 768px–1024px) | Fixed top bar (wider), inline nav links |
| Desktop (`lg`+, ≥ 1024px) | Fixed left sidebar (~240px) |

### Nav Items

```
Home        → smooth scroll to #hero
Skills      → smooth scroll to #skills
Experience  → smooth scroll to #experience
Projects    → smooth scroll to #projects
Contact     → triggers <SheetContact />
```

### Active State

Use `IntersectionObserver` (via `@vueuse/core`'s `useIntersectionObserver`) to detect which section is currently in view and highlight the corresponding nav item.

### Mobile Navigation

- Top bar with name on left, icon links on right (GitHub, "Contact" icon)
- No hamburger menu for MVP — direct icon links to each section or minimal top nav

---

## 10. Contact Form

### Behaviour

| Breakpoint | Sheet Behaviour |
|---|---|
| Mobile (< `lg`) | `side="bottom"` — slides up from bottom, full width |
| Desktop (`lg`+) | `side="right"` — slides in from right, ~480px wide (not full screen) |

### Implementation

```vue
<!-- Sheet.Contact.vue -->
<Sheet v-model:open="isOpen">
  <SheetContent :side="sheetSide" class="lg:w-[480px]">
    <SheetHeader>
      <SheetTitle>
        <Typography variant="h3">Get in touch</Typography>
      </SheetTitle>
    </SheetHeader>
    <!-- Contact form content -->
  </SheetContent>
</Sheet>
```

The `sheetSide` is computed:
```ts
const { lg } = useBreakpoints({ lg: 1024 })
const sheetSide = computed(() => lg.value ? 'right' : 'bottom')
```

### Form Fields

- **Name** — required, min 2 chars
- **Email** — required, valid email format
- **Message** — required, min 10 chars, max 1000 chars

### Server Route: `server/api/contact.post.ts`

```
POST /api/contact
Body: { name: string, email: string, message: string }
Response 200: { success: true }
Response 422: { error: 'Validation failed', details: [...] }
Response 500: { error: 'Failed to send email' }
```

Uses Zod for server-side validation, Resend for email delivery.

### Environment Variables

```bash
# .env.example
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=your@email.com
CONTACT_EMAIL_FROM=noreply@aarni.dev
```

---

## 11. Responsive Design & Breakpoints

### Breakpoint Strategy

Following Tailwind's mobile-first approach. We use **three primary breakpoints**:

| Name | Tailwind Prefix | Min Width | Design Reference |
|---|---|---|---|
| Mobile | (default) | 0px | Stitch mobile frame (390px) |
| Tablet | `md:` | 768px (48rem) | Interpolated from mobile design |
| Desktop | `lg:` | 1024px (64rem) | Stitch desktop frame (1280px) |

We also have `xl:` (1280px) available for minor tweaks to match the exact Stitch desktop frame width.

### Mobile-First Implementation Rule

Always write base styles for mobile first, then override at `md:` and `lg:`:

```html
<!-- Correct: mobile first -->
<div class="flex flex-col gap-4 md:flex-row md:gap-8 lg:gap-12">

<!-- Wrong: desktop first -->
<div class="flex flex-row gap-12 max-md:flex-col">
```

### Layout Shifts at Breakpoints

| Element | Mobile | Tablet (`md:`) | Desktop (`lg:`) |
|---|---|---|---|
| Navigation | Top bar | Top bar (wider) | Left sidebar |
| Page content | Full width | Full width with padding | Left offset by nav width |
| Hero | Stacked (avatar above text) | Side by side | Side by side |
| Projects grid | 1 column | 2 columns | 2–3 columns |
| Skills | Wrapped badges | Wrapped badges | Wrapped badges (wider) |
| Experience | Full width cards | Full width cards | Offset layout |

### Stitch Design Frames as Ground Truth

- **Mobile (390px)**: Use as exact reference for `default` styles
- **Desktop (1280px)**: Use as reference for `lg:` and `xl:` styles
- **Tablet (768px)**: Interpolate between the two — will require iteration
- Re-iteration phase is planned for all breakpoints after initial implementation

---

## 12. Content Management

### Nuxt Content v3 with Markdown

All portfolio content lives as `.md` files in the `content/` directory. Structured data goes in the YAML **frontmatter** block; rich text descriptions go in the **markdown body**. This gives us the best of both worlds: queryable structured data + rendered HTML for descriptions.

Docs: https://content.nuxt.com/docs/files/markdown

### Content Schema

#### `skills.md` (frontmatter-only, no body needed)

```md
---
categories:
  - name: "Frontend"
    skills:
      - "Vue.js"
      - "TypeScript"
      - "TailwindCSS"
      - "Nuxt"
  - name: "Tools"
    skills:
      - "Git"
      - "Figma"
      - "Storybook"
---
```

#### `content/experience/1.senior-developer.md`

```md
---
role: "Senior Frontend Developer"
company: "Company Name"
startDate: "2022-01"
endDate: null
location: "Helsinki, Finland"
techStack:
  - "Vue.js"
  - "TypeScript"
---

Responsible for architecting and building scalable frontend applications...

- Led migration from legacy JavaScript to TypeScript across the codebase
- Built reusable component library improving team delivery speed by 40%
```

#### `content/projects/1.project-name.md`

```md
---
title: "Project Title"
techStack:
  - "Vue.js"
  - "Nuxt"
liveUrl: "https://..."
githubUrl: "https://..."
featured: true
image: "/projects/project-name.jpg"
---

A personal portfolio project built with Nuxt 4 and TailwindCSS,
featuring a clean editorial design with dark/light mode support.
```

### Collection Config (`content.config.ts`)

```ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      type: 'page',
      source: 'experience/*.md',
      schema: z.object({
        role: z.string(),
        company: z.string(),
        startDate: z.string(),
        endDate: z.string().nullable(),
        location: z.string(),
        techStack: z.array(z.string()),
      })
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        techStack: z.array(z.string()),
        liveUrl: z.string().optional(),
        githubUrl: z.string().optional(),
        featured: z.boolean().default(false),
        image: z.string().optional(),
      })
    }),
    skills: defineCollection({
      type: 'page',
      source: 'skills.md',
      schema: z.object({
        categories: z.array(z.object({
          name: z.string(),
          skills: z.array(z.string()),
        }))
      })
    }),
  }
})
```

### Querying Content

```ts
// In a section component
const { data: projects } = await useAsyncData('projects',
  () => queryCollection('projects').order('featured', 'DESC').all()
)

// For a single file (skills)
const { data: skills } = await useAsyncData('skills',
  () => queryCollection('skills').first()
)
```

---

## 13. Storybook Setup

### Configuration

Using `@nuxtjs/storybook` which provides a Nuxt-aware Storybook setup.

```ts
// .storybook/main.ts
export default {
  framework: '@nuxtjs/storybook',
  stories: ['../stories/**/*.stories.ts'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
}
```

> Install Storybook: `npm install -D @nuxtjs/storybook`

### Preview Config

```ts
// .storybook/preview.ts
import '~/assets/css/main.css'  // Load design tokens
```

### Story Conventions

Each component in `ui/` and `sections/` has a corresponding `.stories.ts` file.

```ts
// stories/ui/Badge.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import BadgeDefault from '~/components/ui/Badge.Default.vue'

const meta: Meta<typeof BadgeDefault> = {
  title: 'UI/Badge/Default',
  component: BadgeDefault,
}

export const Default: StoryObj = {
  args: { label: 'Vue.js' }
}

export const Primary: StoryObj = {
  args: { label: 'TypeScript', variant: 'primary' }
}
```

### Running Storybook

```bash
npm run storybook        # Start Storybook dev server
npm run build-storybook  # Build static Storybook
```

---

## 14. Deployment Strategy

### Vercel + Nuxt Build

```bash
Build Command:    nuxt build
Output Directory: .output/public  (for static assets)
Install Command:  npm install
```

### nuxt.config.ts Key Settings

```ts
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true },          // Pre-render homepage as static
  },

  nitro: {
    prerender: {
      routes: ['/'],
    }
  },

  colorMode: {
    preference: 'system',
    classSuffix: '',
  },
})
```

### Environment Variables on Vercel

Set in Vercel dashboard → Project Settings → Environment Variables:

```
RESEND_API_KEY          = re_xxxx...
CONTACT_EMAIL_TO        = aarni@aarni.dev
CONTACT_EMAIL_FROM      = noreply@aarni.dev
```

### Domain Configuration

- Domain: `aarni.dev`
- Add domain in Vercel dashboard
- Update DNS records to point to Vercel
- `vercel.json` for any redirect rules (e.g., www → non-www)

### vercel.json (if needed)

```json
{
  "redirects": [
    {
      "source": "/www.aarni.dev/(.*)",
      "destination": "https://aarni.dev/$1",
      "permanent": true
    }
  ]
}
```

---

## 15. Development Phases

### Phase 1: Clean Scaffold ✅ Planning
- [x] Create `PLANNING.md`
- [x] Create `GEMINI.md`
- [x] Delete all existing Next.js/Prismic code
- [x] Init fresh Nuxt 4.4.2 project (`npm create nuxt@4.4.2 .` — validate any extra suggestions with user before accepting)
- [x] Install TailwindCSS v4: `npm install -D tailwindcss @tailwindcss/vite`
- [x] Configure `nuxt.config.ts` with Tailwind vite plugin + css array
- [x] Create `app/assets/css/main.css` with full OKLCH color palette
- [x] Install shadcn-nuxt: `npx nuxi@latest module add shadcn-nuxt`
- [x] Run `npx shadcn-vue@latest init`
- [x] Add initial shadcn components: `npx shadcn-vue@latest add button badge card input textarea sheet label`
- [x] Add `app/plugins/ssr-width.ts` (prevents hydration errors on mobile)
- [x] Install + configure Nuxt Content v3: `npm install @nuxt/content`
- [x] Create `content.config.ts` with collection schemas
- [ ] ⏸️ Install + configure Storybook — **POSTPONED**
- [x] Set up `@nuxtjs/color-mode`: `npm install @nuxtjs/color-mode`
- [x] Create `.env.example`
- [ ] ⚠️ ESLint/Prettier: DO NOT install unless Nuxt wizard suggests it AND user confirms
- [x] Add `.nvmrc` with Node 24.14.0

### Phase 2: Design System & Base Components ✅
- [x] Implement `Typography.vue` component with all variants
- [x] Implement `Button.Default.vue`, `Button.Ghost.vue`, `Button.Link.vue`
- [x] Implement `Badge.Default.vue`, `Badge.Tech.vue`
- [x] Implement `Card.Project.vue`, `Card.Experience.vue`
- [x] Implement `Input.Default.vue`, `Textarea.Default.vue`
- [x] Implement `Sheet.Contact.vue`
- [ ] ⏸️ Write Storybook stories for all base components — **POSTPONED**
- [ ] ⏸️ Verify dark/light mode switching works correctly — **POSTPONED (do during Phase 7)**

### Phase 3: Layout & Navigation ✅
- [x] Implement `AppNav.vue` (desktop sidebar + mobile top bar)
- [x] Implement `AppFooter.vue`
- [x] Implement `default.vue` layout
- [x] Implement smooth scroll navigation
- [x] Implement active section detection (IntersectionObserver)
- [x] Implement `<SheetContact />` trigger from nav

### Phase 4: Sections (Using Stitch Designs as Reference) ✅
- [x] Implement `Section/Hero.vue` — mobile/desktop CTAs, subtitle colour (`lg:text-primary`)
- [x] Implement `Section/Skills.vue` — wired to Nuxt Content, flattens categories into badge list
- [x] Implement `Section/Experience.vue` — wired to Nuxt Content, company colour `lg:text-primary`
- [x] Implement `Section/Projects.vue` — wired to Nuxt Content, no trailing dot, conditional links
- [x] Create content files: `content/skills.md`, `content/experience/1–3.*.md`, `content/projects/1.*.md`
- [x] Update `content.config.ts` — added `description` field to experience & projects, `location` optional
- [x] Wire up `index.vue` page — all sections composed via `Section.*` dot notation, uses `<AppFooter />`

### Phase 5: Contact Form & Email ⏸️ SKIPPED (for now)
- [ ] Implement `server/api/contact.post.ts`
- [ ] Implement `useContact.ts` composable
- [ ] Connect form in `Sheet.Contact.vue` to server route
- [ ] Add loading, success, and error states
- [ ] Test email delivery via Resend

### Phase 6: Content & Real Data ✅
- [x] Real experience data — filled in during Phase 4 (`content/experience/1–3.*.md`)
- [x] Real skills data — filled in during Phase 4 (`content/skills.md`)
- [x] Real projects data — filled in during Phase 4 (`content/projects/1.affiliate-platform.md`)
- [x] Avatar optimised — `public/avatar.jpg` (3.1 MB) → `public/avatar.webp` (8 KB, 600×600 face-crop via sharp)
- [x] OG image created — `public/og.jpg` (23 KB, 1200×630, top-crop of avatar photo)
- [x] SEO meta tags — `useSeoMeta` in `index.vue` (title, description, OG, Twitter Card)
- [x] Global `app.head` in `nuxt.config.ts` (charset, viewport, favicon, Google Fonts preconnect)
- [x] Homepage prerender — `routeRules: { '/': { prerender: true } }` in `nuxt.config.ts`
- [ ] Add real Open Graph designed image (1200×630 branded) — **deferred to Phase 8**

### Phase 7: Responsive Iteration
- [ ] Review all sections on mobile (390px)
- [ ] Review all sections on tablet (768px)
- [ ] Review all sections on desktop (1280px)
- [ ] Iterate based on Stitch design reviews
- [ ] Performance audit (Lighthouse)

### Phase 8: Deployment
- [ ] Configure Vercel project
- [ ] Set environment variables on Vercel
- [ ] Connect `aarni.dev` domain
- [ ] Test production build
- [ ] Final SEO review (meta tags, OG, robots.txt)

---

## 16. Open Questions & Future Iterations

| # | Question | Status |
|---|---|---|
| 1 | Final avatar image to be provided by user | ⏳ Pending |
| 2 | Real content (projects, experience, skills) to be provided | ⏳ Pending |
| 3 | Tablet layout specifics (interpolated from designs) | 🔄 Will iterate |
| 4 | OG image design | 🔄 Future |
| 5 | Any animation/micro-interaction requirements? | ❓ TBD |
| 6 | Blog section in the future? (Nuxt Content supports MD) | ❓ TBD |
| 7 | Analytics (e.g. Vercel Analytics, Plausible) | ❓ TBD |
| 8 | Storybook deployment (Chromatic?) | ❓ TBD |

---

*End of PLANNING.md*
