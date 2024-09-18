<script lang="ts" setup>
import { computed, useAttrs } from 'vue'

const props = withDefaults(
  defineProps<{
    color?: 'primary' | 'default'
    type?: 'button' | 'submit' | 'reset'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    color: 'default',
    type: 'button',
    size: 'md'
  }
)

const colorClass = computed(() => {
  let str = ''
  str = props.color === 'primary' ? 'bg-bank-blue-500 text-white' : 'bg-bank-gray-500 text-black'
  if (disabled.value) {
    str += ' opacity-50'
  }

  return str
})

const sizeClass = computed(() => {
  let str = ''
  switch (props.size) {
    case 'sm':
      str = 'min-w-14 p-2 text-sm'
      break
    case 'md':
      str = 'min-w-24 p-3 text-base'
      break
    case 'lg':
      str = 'p-4 text-lg'
      break
  }

  return str
})

const attr = useAttrs()
const disabled = computed(() => Boolean(attr.disabled) ?? false)
</script>

<template>
  <button class="rounded-3xl font-bold transition-all active:opacity-90" :class="[colorClass, sizeClass]" :type="props.type" :disabled="disabled">
    <slot></slot>
  </button>
</template>

