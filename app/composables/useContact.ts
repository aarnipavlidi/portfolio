import { ref } from "vue";
import { toast } from "vue-sonner";
import { FetchError } from "ofetch";
import { DEFAULT_ERROR_MESSAGE } from "@@/shared/utils/constants";

export function useContact() {
  const isSubmitting = ref(false);
  const error = ref<string | null>(null);
  const success = ref(false);

  const submitContact = async (values: { name: string; email: string; message: string; turnstileToken: string }) => {
    isSubmitting.value = true;
    error.value = null;
    success.value = false;

    try {
      const response = await $fetch("/api/contact", {
        method: "POST",
        body: values,
      });

      success.value = response.success;
      toast.success(response.message, {
        class: "bg-secondary! text-secondary-foreground! border-secondary!",
      });

    } catch (originalError: unknown) {
      if (originalError instanceof FetchError) {
        if (originalError.data?.issues && Array.isArray(originalError.data.issues)) {
          error.value = originalError.data.issues.join(", ");
        } else {
          error.value = originalError.data?.message || originalError.message;
        };
      } else if (originalError instanceof Error) {
        error.value = originalError.message;
      } else {
        error.value = DEFAULT_ERROR_MESSAGE;
      };

      toast.error(error.value ?? DEFAULT_ERROR_MESSAGE);
      throw originalError;
    } finally {
      isSubmitting.value = false;
    };
  };

  return {
    isSubmitting,
    error,
    success,
    submitContact,
  };
};
