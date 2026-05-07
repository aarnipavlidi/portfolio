import Component from "@/components/CustomTextarea/component.vue";

export interface CustomTextareaProps {
  id: string;
  label?: string;
  placeholder?: string;
  class?: string;
};

export const CustomTextarea = { Default: Component };
export default CustomTextarea;
