import { ZodError } from "zod";
import { Resend } from "resend";
import { contactFormSchema } from "@@/shared/schemas/contact";

export default defineEventHandler(async (event) => {
  const { resendApiKey, contactEmailTo, contactEmailFrom } = useRuntimeConfig();

  if (!resendApiKey) {
    throw createError({
      statusCode: 500,
      message: "Server configuration error: Resend API key is missing.",
    });
  };

  const resend = new Resend(resendApiKey);

  try {
    const validateBody = await readValidatedBody(event, (raw) => contactFormSchema.parse(raw));

    const data = await resend.emails.send({
      from: contactEmailFrom,
      to: contactEmailTo,
      replyTo: validateBody.email,
      subject: `Portfolio Contact from ${validateBody.name}`,
      text: `Name: ${validateBody.name}\nEmail: ${validateBody.email}\n\nMessage:\n${validateBody.message}`,
      html: `<p><strong>From:</strong> ${validateBody.name} (${validateBody.email})</p><p><strong>Message:</strong></p><p>${validateBody.message.replace(/\n/g, "<br>")}</p>`,
    });

    if (data.error) {
      throw new Error(data.error.message);
    };

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      throw createError({
        statusCode: 400,
        message: "Validation failed",
      });
    };

    throw createError({
      statusCode: 500,
      message: "Failed to send email. Please try again later.",
    });
  };
});
