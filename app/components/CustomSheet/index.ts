import Contact from './contact.vue'

export const CustomSheet = { Contact }

export interface CustomSheetProps {
  open?: boolean
  side?: 'left' | 'right' | 'top' | 'bottom'
  class?: string
}
