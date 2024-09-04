<script lang="ts" setup>
import { withDefaults, computed, useAttrs, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    color?: 'primary' | 'default'
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    color: 'default',
    type: 'button'
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

const attr = useAttrs()
const disabled = computed(() => Boolean(attr.disabled) ?? false)
</script>

<template>
  <button class="min-w-24 rounded-3xl p-3 font-bold transition-all active:opacity-90" :class="colorClass" :type="props.type" :disabled="disabled">
    <slot></slot>
  </button>
</template>

