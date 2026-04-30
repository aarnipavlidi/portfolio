import Default from './default.vue'

export const CustomTextarea = { Default }
export default CustomTextarea

export interface CustomTextareaProps {
  id: string
  label?: string
  placeholder?: string
  rows?: number
  modelValue?: string
  class?: string
}
