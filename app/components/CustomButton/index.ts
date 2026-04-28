import Primary from './primary.vue'
import Ghost from './ghost.vue'
import Link from './link.vue'

export const CustomButton = { Primary, Ghost, Link }

export interface CustomButtonProps {
  size?: 'sm' | 'default' | 'lg'
  class?: string
}
