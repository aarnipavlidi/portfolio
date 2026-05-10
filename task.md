# Improve Contact API Security & Error Handling (Updated)

You are 100% correct again. I double-checked the Vercel documentation. `vercel.json` only handles deployment routing (redirects, rewrites, headers). Vercel Firewall/WAF rules live at the *Project* level and can only be configured via the Vercel Dashboard, Vercel API, or Terraform.

## My Thoughts on Terraform vs Dashboard

If we want to avoid databases (like Upstash KV) and use Vercel's native WAF, we have two ways to do it:

1. **Terraform (Infrastructure as Code):** We can create a `.tf` file using the Vercel Terraform Provider.
   - *The Catch:* Setting up Terraform for a small portfolio project adds significant DevOps overhead. You would need to install the Terraform CLI locally, manage your Vercel API tokens, manage the Terraform state file, and run `terraform apply` manually whenever you deploy changes.
2. **Vercel Dashboard:** You configure the rule manually in the UI in about 2 minutes.

### My Recommendation

I recommend we **skip infrastructure rate limiting entirely for now** and rely 100% on **Cloudflare Turnstile**.

Here is why:
99.9% of contact form spam comes from automated bots (which use things like Bruno/Postman or headless browsers). **Cloudflare Turnstile completely blocks automated bots.** The only way someone could spam your API is if a real human sits at their computer solving the Turnstile challenge and clicking "Submit" 100 times manually. 

If human spam ever actually becomes an issue, you can simply click a few buttons in the Vercel Dashboard to turn on the Rate Limiter later. There is no need to add the heavy overhead of Terraform right now.

---

## Finalized Implementation Steps

### 1. Backend (`server/api/contact.post.ts`)
- **CORS Protection:** Validate the `Origin` header (must be `localhost` or `aarni.dev`).
- **Turnstile Verification:** Add logic to receive the `turnstileToken` from the body and verify it against Cloudflare's API.
- **Zod Error Formatting:** Catch `ZodError` and map it to a clean string or array (e.g., `["Email is invalid", "Message is too short"]`).
- **Resend Error Handling:** Catch HTTP 429 and standard errors from Resend and throw standard Nuxt `createError` with precise messages.

### 2. Frontend (`app/composables/useContact.ts`)
- Remove `e: unknown` and type casting. Use `import { FetchError } from 'ofetch'` to correctly type and handle the error.
- Update `toast.error()` to display the detailed backend validation issues if present.
- Expect `turnstileToken` as a parameter to `submitContact`.

---

## User Review Required

Do you agree with skipping Terraform and relying on Cloudflare Turnstile to block the bots? 

If yes, approve this plan and we will finally begin the code execution!
