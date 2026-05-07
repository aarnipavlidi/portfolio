import { ref } from "vue";
import { toast } from "vue-sonner";

export function useContact() {
  const isSubmitting = ref(false);
  const error = ref<string | null>(null);
  const success = ref(false);

  const submitContact = async (values: { name: string; email: string; message: string }) => {
    isSubmitting.value = true;
    error.value = null;
    success.value = false;

    try {
      await $fetch("/api/contact", {
        method: "POST",
        body: values,
      });
      success.value = true;
      toast.success("Thank you for your message! I'll get back to you as soon as possible.", {
        class: "bg-secondary! text-secondary-foreground! border-secondary!",
      });

    } catch (e: unknown) {
      const fetchError = e as { data?: { message?: string }; message?: string };
      error.value = fetchError.data?.message || fetchError.message || "Failed to send message.";
      toast.error(error.value);
      throw e;
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    isSubmitting,
    error,
    success,
    submitContact,
  };
}
