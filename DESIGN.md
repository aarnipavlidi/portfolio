# Stitch Design Reference — Portfolio 2026

> This file documents the visual design captured from Stitch (MCP) for the portfolio-2026 project.
> Use this as the ground truth reference when implementing or revisiting UI sections.
> Last updated: 2026-04-28

---

## Project Info

- **Stitch Project**: portfolio-2026
- **Project ID**: `4439104693549972015`
- **Screens captured**:
  - Mobile — `d72e23b3b0524305b83c4f1c301ec80a` (780×5130px)
  - Desktop — `161482258798478546` (2560×4220px)
  - Contact Sheet/Modal — _pending (to be shared)_

---

## Global Design Decisions

- **Color accent**: Primary orange (`--primary` token) used for:
  - CTA buttons
  - Subtitle text on desktop hero (`Software Engineer.`)
  - Company names in experience entries
- **Typography**:
  - Headings/labels: JetBrains Mono (`font-mono`)
  - Body/descriptions: Inter (`font-sans`)
- **Section heading style**:
  - Mobile: trailing dot — e.g. `Skills & Technologies.`, `Experience.`
  - Desktop: no trailing dot — e.g. `Skills & Technologies`, `Experience`
- **No structural borders** between sections — separation via vertical whitespace and tonal background shifts
- **Footer tagline** (desktop only): `Designed with minimalistic intent.`

---

## Avatar Image

- **File**: `public/avatar.jpg` (original, high resolution, ~4MB, B&W photo)
- **Subject**: Aarni Pavlidi — bald, round glasses, light sweater, light grey background
- **Style**: Black & white, professional but approachable
- **Optimisation**: To be converted to WebP and compressed before Vercel deployment
- **Usage**:
  - Mobile: circular avatar in top-right of nav bar
  - Desktop: circular avatar at the bottom of the left sidebar

---

## Mobile Design (390px frame)

### Navigation Bar
- **Left**: `AP` monogram in a small dark rounded square
- **Right**: Circular avatar photo
- No nav links visible — just logo + avatar
- Minimal, no background colour (transparent or white)

### Hero Section
- Full-width, single column
- **H1**: `Hi, I'm Aarni Pavlidi` — large, bold, JetBrains Mono
- **Subtitle**: `Software Engineer.` — same size/weight, default foreground colour
- **Body**: Short description — Inter, muted foreground
- **CTAs** (stacked or side-by-side):
  - `LinkedIn` — ghost/outline button
  - `Contact Me` — primary filled button (orange)

### Skills & Technologies Section
- **Heading**: `Skills & Technologies.` (with trailing dot)
- Tech badges in a wrapping flex row:
  - `Next.js`, `React`, `TypeScript`, `TailwindCSS`, `Nuxt`, `Supabase`, `PostgreSQL`, `Java`, `API Integrations`
- Badge style: small pill/rounded chips

### Experience Section
- **Heading**: `Experience.` (with trailing dot)
- Entries listed vertically, each showing:
  - Job title (bold, JetBrains Mono)
  - Date range
  - Company name
  - Description paragraph (Inter, body size)
- **Jobs**:
  1. Software Engineer — Futurice — 2025–Present
  2. Software Engineer — Identio — 2024–2025
  3. Software Developer — Houston Inc. — 2022–2024

### Projects Section
- **Heading**: `Projects` (no trailing dot on mobile too, based on HTML)
- Project card:
  - **Title**: `Affiliate Management Platform`
  - **Description**: Full-stack platform for affiliate tracking, payouts, analytics
  - **Tech badges**: Next.js, TypeScript, PostgreSQL
  - **Links**: Demo, Source code

### Footer
- `© 2026 Aarni Pavlidi.`
- Simple, centred or left-aligned

---

## Desktop Design (1280px frame)

### Layout
- **Two-column**: Fixed left sidebar (narrow) + scrollable right main content
- Sidebar is sticky/fixed — stays in place while content scrolls

### Left Sidebar
| Position | Content |
|---|---|
| Top | `AP` monogram logo |
| Middle | Vertical nav links: `About`, `Skills`, `Experience`, `Projects` |
| Bottom | Circular avatar photo |
| Bottom | Social icons: GitHub + (LinkedIn or similar) |

- Nav links are plain text, likely highlight/change colour on active section
- Clean, minimal sidebar — no background, no borders

### Hero Section
- **Line 1**: `Hi, I'm Aarni Pavlidi` — large, JetBrains Mono, foreground colour
- **Line 2**: `Software Engineer.` — same size, **primary orange colour**
- **Body**: Description paragraph — Inter, muted foreground
- **CTAs** (side by side):
  - `View Experience` — primary filled button (orange)
  - `Contact Me` — ghost/outline button

### Skills & Technologies Section
- **Heading**: `Skills & Technologies` (no trailing dot on desktop)
- Same wrapping badge chips as mobile
- Tech: `Next.js`, `React`, `TypeScript`, `TailwindCSS`, `Nuxt`, `Supabase`, `PostgreSQL`, `Java`, `API Integrations`

### Experience Section
- **Heading**: `Experience` (no trailing dot)
- Each entry:
  - **Company name**: in **primary orange** colour
  - Job title — JetBrains Mono
  - Date range — right-aligned or secondary colour
  - Description — Inter, body-sm, muted
- **Jobs**:
  1. Software Engineer — **Futurice** — 2025–Present
  2. Software Engineer — **Identio** — 2024–2025
  3. Software Developer — **Houston Inc.** — 2022–2024

### Projects Section
- **Heading**: `Projects`
- Card layout (single card visible):
  - **Title**: `Affiliate Management Platform`
  - Description paragraph
  - Tech badges: `Next.js`, `TypeScript`, `PostgreSQL`
  - Links: `Demo` (with external icon), `Source code`

### Footer
- Left/bottom of sidebar: GitHub + social icons
- Main area: `© 2026 Aarni Pavlidi. Designed with minimalistic intent.`

---

## Mobile vs Desktop Comparison

| Element | Mobile | Desktop |
|---|---|---|
| Layout | Single column | Fixed sidebar + scrollable content |
| Navigation | Logo + avatar top bar | Left sidebar with nav links |
| Avatar location | Top-right of nav bar | Bottom of left sidebar |
| Hero CTA 1 | `LinkedIn` (ghost) | `View Experience` (primary) |
| Hero CTA 2 | `Contact Me` (primary) | `Contact Me` (ghost) |
| Subtitle colour | Foreground (default) | Primary orange |
| Section headings | Trailing `.` | No trailing `.` |
| Company names | Plain foreground | Primary orange |
| Footer | Copyright only | Copyright + `Designed with minimalistic intent.` |
| Social icons | Not visible | Bottom of sidebar |

---

## Contact Sheet / Modal

- **Stitch Screen ID**: `7cd5c6d8cd1448eea09dc26144ec4db1` (780×1768px, mobile)
- Triggered by `Contact Me` button (both mobile and desktop)

### Visual Design
- **Background**: Dark (uses dark mode tokens — `bg-background` in dark)
- **Full screen** on mobile — covers the entire viewport
- **Partial width** on desktop — slides in from the right, `w-[480px]`

### Header
- **Title**: `Let's connect.` — JetBrains Mono, large/h3, bold
- **Close button**: `×` in **primary orange** — top right corner
- **Subtext**: `I'd love to hear from you. Send me a message and I'll respond as soon as possible.` — Inter, muted foreground

### Form Fields
| Label | Input type | Placeholder |
|---|---|---|
| `NAME` | text input | `John Doe` |
| `EMAIL` | email input | `john@example.com` |
| `MESSAGE` | textarea | `How can I help you?` |

- Labels: **uppercase**, small, JetBrains Mono (`label` variant)
- Inputs: slightly lighter dark background, rounded corners
- Textarea: taller, multi-line

### CTA Button
- `Send Message` — **full-width**, primary orange, rounded
- Positioned at the bottom of the form

### Responsive Behaviour
| Breakpoint | Behaviour |
|---|---|
| Mobile (default) | Slides up from **bottom**, covers **full screen** (`side="bottom"`, `h-full`) |
| Desktop (`lg:`) | Slides in from **right**, partial width (`side="right"`, `w-[480px]`) |

---

## Content (Real Data)

### Bio
> Passionate software developer with a background in circular economy studies, which led me to discover my love for programming. Highly skilled in frontend development, building scalable applications from scratch.

### Tech Stack (Skills)
`Next.js` · `React` · `TypeScript` · `TailwindCSS` · `Nuxt` · `Supabase` · `PostgreSQL` · `Java` · `API Integrations`

### Experience
| Role | Company | Period |
|---|---|---|
| Software Engineer | Futurice | 2025–Present |
| Software Engineer | Identio | 2024–2025 |
| Software Developer | Houston Inc. | 2022–2024 |

### Projects
| Title | Tech | Links |
|---|---|---|
| Affiliate Management Platform | Next.js, TypeScript, PostgreSQL | Demo, GitHub |

---

## Implementation Notes

- Sidebar nav active state: highlight the current section as user scrolls (IntersectionObserver)
- Mobile nav has no menu — layout shifts entirely at `lg:` breakpoint
- Avatar should use `rounded-full` for circular crop
- All section IDs for scroll anchoring: `#about`, `#skills`, `#experience`, `#projects`
- No `<hr>` or border separators between sections — use padding/margin only

---

*End of Stitch Design Reference — update this file as new screens are shared.*
