import { defineComponent, h, type PropType } from 'vue'
import Component from './component.vue'

export type CustomButtonTheme = 'primary' | 'secondary' | 'muted' | 'destructive'

export interface CustomButtonProps {
  theme?:      CustomButtonTheme
  transition?: boolean
  size?:       'sm' | 'default' | 'lg'
  class?:      string
}

// Object-based props are required (not a string array) so Vue knows the runtime
// type of each prop. Specifically, `transition: { type: Boolean }` enables
// boolean casting — without it, <Component transition /> is NOT cast to `true`.
// String union types still need `String as PropType<T>` so Volar can narrow them
// in templates; `Boolean` needs no `as` since it is a native constructor.
const customButtonBaseProps = {
  theme: {
    type: String as PropType<CustomButtonTheme>
  },
  transition: {
    type: Boolean
  },
  size: {
    type: String as PropType<'sm' | 'default' | 'lg'>
  },
  class: {
    type: String
  },
};

const Solid = defineComponent({
  name: 'CustomButtonSolid',
  props: customButtonBaseProps,
  setup(props, { slots }) {
    return () => h(Component, { ...props, variant: 'solid' }, slots)
  },
})

const Outline = defineComponent({
  name: 'CustomButtonOutline',
  props: customButtonBaseProps,
  setup(props, { slots }) {
    return () => h(Component, { ...props, variant: 'outline' }, slots)
  },
})

const Ghost = defineComponent({
  name: 'CustomButtonGhost',
  props: customButtonBaseProps,
  setup(props, { slots }) {
    return () => h(Component, { ...props, variant: 'ghost' }, slots)
  },
})

const Link = defineComponent({
  name: 'CustomButtonLink',
  props: customButtonBaseProps,
  setup(props, { slots }) {
    return () => h(Component, { ...props, variant: 'link' }, slots)
  },
})

export const CustomButton = { Solid, Outline, Ghost, Link }

// Default export so Nuxt's auto-import registry resolves CustomButton correctly
// (.nuxt/types/components.d.ts maps CustomButton to ['default']).
export default CustomButton
