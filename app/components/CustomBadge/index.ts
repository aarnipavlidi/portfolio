import { defineComponent, h, type PropType } from 'vue'
import Component from './component.vue'

export type CustomBadgeTheme = 'primary' | 'secondary' | 'muted' | 'destructive'

export interface CustomBadgeProps {
  theme?: CustomBadgeTheme
  class?: string
}

const customBadgeBaseProps = {
  theme: {
    type: String as PropType<CustomBadgeTheme>
  },
  class: {
    type: String
  },
};

const Solid = defineComponent({
  name: 'CustomBadgeSolid',
  props: customBadgeBaseProps,
  setup(props, { slots }) {
    return () => h(Component, { ...props, variant: 'solid' }, slots)
  },
})

const Soft = defineComponent({
  name: 'CustomBadgeSoft',
  props: customBadgeBaseProps,
  setup(props, { slots }) {
    return () => h(Component, { ...props, variant: 'soft' }, slots)
  },
})

export const CustomBadge = { Solid, Soft }

// Default export so Nuxt's auto-import registry resolves CustomBadge correctly.
export default CustomBadge
