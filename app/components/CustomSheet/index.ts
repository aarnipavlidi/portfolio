import Component from "@/components/CustomSheet/component.vue";

export interface CustomSheetProps {
  open?: boolean;
  class?: string;
};

export const CustomSheet = { Contact: Component };
export default CustomSheet;
