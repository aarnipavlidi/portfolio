import { z } from "zod";

export const envSchema = z.object({
  NUXT_RESEND_API_KEY: z.string("You are missing your Resend API key for the environment variables!"),
  NUXT_CONTACT_EMAIL_FROM: z.email("You are missing your sender email for the environment variables!"),
  NUXT_CONTACT_EMAIL_TO: z.email("You are missing your receiver email for the environment variables!"),
  NUXT_PUBLIC_TURNSTILE_SITE_KEY: z.string("You are missing your Turnstile site key for the environment variables!"),
  NUXT_TURNSTILE_SECRET_KEY: z.string("You are missing your Turnstile secret key for the environment variables!"),
});
