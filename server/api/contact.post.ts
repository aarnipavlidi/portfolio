import { ZodError } from "zod";
import { Resend } from "resend";
import { contactFormSchema } from "@@/shared/schemas/contact";
import { ALLOWED_ORIGINS } from "@@/shared/utils/constants";

export default defineEventHandler(async (event) => {
  const { resendApiKey, contactEmailTo, contactEmailFrom, turnstile } = useRuntimeConfig();

  const origin = getRequestHeader(event, "origin") || getRequestHeader(event, "referer");

  if (origin && !ALLOWED_ORIGINS.some(allowed => origin.startsWith(allowed))) {
    throw createError({
      statusCode: 403,
      message: "You are not authorized to access this resource!",
    });
  };

  try {
    const rawBody = await readBody(event);

    if (turnstile.secretKey) {
      const token = rawBody.turnstileToken;

      if (!token) {
        throw createError({
          statusCode: 400,
          message: "There was an issue with Cloudflare verification, please try again!",
        });
      }

      const turnstileResponse = await verifyTurnstileToken(token);

      if (!turnstileResponse.success) {
        throw createError({
          statusCode: 403,
          message: "There was an issue with Cloudflare verification, please try again!",
        });
      };
    };

    const validateBody = contactFormSchema.parse(rawBody);

    const resend = new Resend(resendApiKey);
    const data = await resend.emails.send({
      from: contactEmailFrom,
      to: contactEmailTo,
      replyTo: validateBody.email,
      subject: `Portfolio Contact from ${validateBody.name}`,
      text: `Name: ${validateBody.name}\nEmail: ${validateBody.email}\n\nMessage:\n${validateBody.message}`,
      html: `<p><strong>From:</strong> ${validateBody.name} (${validateBody.email})</p><p><strong>Message:</strong></p><p>${validateBody.message.replace(/\n/g, "<br>")}</p>`,
    });

    if (data.error) {
      if (data.error.name === "rate_limit_exceeded") {
        throw createError({
          statusCode: 429,
          message: "You have been sending too many emails! Please try again later!",
        });
      };

      throw new Error(data.error.message);
    };

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you as soon as possible.",
    };
  } catch (error: unknown) {
    if (error && typeof error === "object" && "statusCode" in error) {
      throw error;
    };

    if (error instanceof ZodError) {
      const issues = error.issues.map(err => err.message);
      throw createError({
        statusCode: 400,
        message: "There was an issue validating your message. Please try again!",
        data: { issues },
      });
    };

    throw createError({
      statusCode: 500,
      message: "There was an issue sending your message. Please try again later!",
    });
  };
});
