import Default from './default.vue'

export const CustomInput = { Default }
export default CustomInput

export interface CustomInputProps {
  id: string
  label?: string
  placeholder?: string
  type?: string
  modelValue?: string
  class?: string
}
