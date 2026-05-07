import { z } from "zod";
import { MIN_NAME_LENGTH, MIN_MESSAGE_LENGTH, MAX_MESSAGE_LENGTH } from "@@/shared/utils/constants";

export const contactFormSchema = z.object({
  name: z.string("Name is required.")
    .min(MIN_NAME_LENGTH, "Name must be at least 5 characters."),
  email: z.email("Please enter a valid email address."),
  message: z.string("Message is required.")
    .min(MIN_MESSAGE_LENGTH, "Message must be at least 10 characters.")
    .max(MAX_MESSAGE_LENGTH, "Message is too long."),
});
