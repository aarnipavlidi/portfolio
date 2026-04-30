import Component from "@/components/CustomInput/component.vue";

export interface CustomInputProps {
  id: string;
  label?: string;
  placeholder?: string;
  type?: string;
  modelValue?: string;
  class?: string;
};

export const CustomInput = { Default: Component };
export default CustomInput;
