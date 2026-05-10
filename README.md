# Aarni Pavlidi — Personal Portfolio

A high-performance, strictly-typed personal portfolio showcasing my software engineering projects, experience, and skills. This project was built from the ground up to prioritize lightning-fast load times, seamless developer experience, and flawless SEO. 

The UI uses a completely custom, modular, and accessible design system heavily utilizing [shadcn/ui](https://ui.shadcn.com/) and Tailwind CSS. The application runs on Nuxt 4 and is fully configured for a Hybrid static/serverless deployment on Vercel.

## 🛠 Tech Stack

- **Framework:** Nuxt 4 & Vue 3 (Composition API)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 + CVA (Class Variance Authority)
- **Components:** Custom CVA wrappers over `shadcn-vue`
- **CMS:** Headless Markdown via `@nuxt/content` v3
- **Validation:** Zod (Runtime environment and API validation)
- **Security:** Cloudflare Turnstile (Bot Protection) + strict CORS policies
- **Email:** Resend API
- **Deployment:** Vercel (SSG Frontend + Serverless API)

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have the following installed:
- Node.js (`v24.14.0` is required, you can run `nvm use` to sync with the `.nvmrc` file)
- npm (The project strictly uses `npm` as the package manager)

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/aarnipavlidi/portfolio.git
cd portfolio
npm install
```

### 3. Environment Variables
To run the project locally (especially the contact form), you must set up your environment variables. 
The project uses strict build-time Zod validation. If any of these keys are missing or malformed, the Nuxt server will refuse to start.

Create a `.env` file in the root of your project:
```env
# Contact Form - Resend Integration
NUXT_RESEND_API_KEY="re_..."
NUXT_CONTACT_EMAIL_FROM="onboarding@resend.dev"
NUXT_CONTACT_EMAIL_TO="your.email@domain.com"

# Security - Cloudflare Turnstile
NUXT_PUBLIC_TURNSTILE_SITE_KEY="1x00000000000000000000AA"
NUXT_TURNSTILE_SECRET_KEY="1x0000000000000000000000000000000AA"
```
*(Note: You can use Cloudflare's standard dummy test keys for local Turnstile development if you do not want to create real ones).*

### 4. Development Server
Start the development server on `http://localhost:3000`:
```bash
npm run dev
```

---

## 🏗 Architecture & Features

* **Strict Two-Tier Component System:** Built around a CVA-driven architecture where `shadcn-vue` primitives act as a read-only base layer, and `Custom[Name]` components handle all variants, themes, and logic.
* **Content Management:** Uses `@nuxt/content` (v3) to pull structured data (like skills, experience, and projects) directly from local Markdown files. All markdown frontmatter is strictly typed via Zod schemas.
* **Hybrid Rendering:** Configured for Vercel. The entire frontend (`/`) is prerendered as static HTML (SSG) for instant edge delivery and perfect Lighthouse scores. The contact endpoint (`/api/contact`) runs securely as a Vercel Serverless Function.
* **API Hardening:** The contact route implements layered defense mechanisms: strict origin checks (CORS), Zod payload validation, Cloudflare Turnstile bot verification, and graceful Resend error handling.
