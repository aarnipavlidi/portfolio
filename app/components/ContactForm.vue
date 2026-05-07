<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { CustomInput } from "@/components/CustomInput";
import { CustomTextarea } from "@/components/CustomTextarea";
import { CustomButton } from "@/components/CustomButton";
import { useContact } from "@/composables/useContact";
import { useContactSheet } from "@/composables/useContactSheet";
import { LoaderCircle } from "lucide-vue-next";
import Typography from "~/components/Typography/component.vue";
import { contactFormSchema } from "@@/shared/schemas/contact";

const { submitContact, isSubmitting } = useContact();
const { close } = useContactSheet();

const contactSchema = toTypedSchema(contactFormSchema);

const { handleSubmit, defineField, errors, resetForm } = useForm({
  validationSchema: contactSchema,
});

const [name, nameAttrs] = defineField("name");
const [email, emailAttrs] = defineField("email");
const [message, messageAttrs] = defineField("message");

const onSubmit = handleSubmit(async (values) => {
  await submitContact(values);
  resetForm();
  close();
});
</script>

<template>
  <form class="flex flex-col gap-6 mt-4" @submit.prevent="onSubmit">
    <div class="flex flex-col gap-1">
      <CustomInput.Default
        id="contact-name"
        v-model="name"
        label="NAME"
        placeholder="What's your name?"
        v-bind="nameAttrs"
      />
      <Typography v-if="errors.name" variant="body-sm" class="text-destructive mt-1">
        {{ errors.name }}
      </Typography>
    </div>

    <div class="flex flex-col gap-1">
      <CustomInput.Default
        id="contact-email"
        v-model="email"
        label="EMAIL"
        placeholder="What's your email?"
        v-bind="emailAttrs"
      />
      <Typography v-if="errors.email" variant="body-sm" class="text-destructive mt-1">{{ errors.email }}</Typography>
    </div>

    <div class="flex flex-col gap-1">
      <CustomTextarea.Default
        id="contact-message"
        v-model="message"
        label="MESSAGE"
        placeholder="Enter your message here and I'll get back to you as soon as possible."
        v-bind="messageAttrs"
      />
      <Typography v-if="errors.message" variant="body-sm" class="text-destructive mt-1">{{ errors.message }}</Typography>
    </div>

    <CustomButton.Solid
      type="submit"
      :disabled="isSubmitting"
      class="w-full mt-2"
    >
      <LoaderCircle v-if="isSubmitting" class="mr-2 h-4 w-4 animate-spin inline" />
      {{ isSubmitting ? "Sending message..." : "Send Message" }}
    </CustomButton.Solid>
  </form>
</template>
