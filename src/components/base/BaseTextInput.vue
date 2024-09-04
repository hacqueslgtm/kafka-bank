<script lang="ts" setup>
import { defineProps, ref, useAttrs } from 'vue'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import FadeTransition from '../transition/FadeTransition.vue'

// 定義組件的 props
const props = withDefaults(
  defineProps<{
    label?: string
    type?: string
  }>(),
  {
    type: 'text'
  }
)
const [modelValue] = defineModel()
const type = ref(props.type)

const attr = useAttrs()
// 判斷是否要顯示切換按鈕
const isSwitchVisible = 'switch-visible' in attr ?? false
const isVisible = ref(props.type === 'text' ? true : false)
const chgType = () => {
  isVisible.value = !isVisible.value
  type.value = isVisible.value ? 'text' : 'password'
}
</script>

<template>
  <div class="relative mb-4">
    <label class="mb-2 block" v-if="props.label">{{ label }}</label>
    <input
      :type="type"
      class="relative w-full rounded-xl bg-bank-gray-500 p-3 pr-9 outline-bank-gray-800 placeholder:text-bank-gray-800"
      :placeholder="label"
      v-model.trim="modelValue"
    />
    <button type="button" v-if="isSwitchVisible" class="absolute bottom-2 right-2 p-2" @click="chgType">
      <FadeTransition>
        <EyeIcon class="size-4" v-if="isVisible" />
        <EyeSlashIcon class="size-4" v-else />
      </FadeTransition>
    </button>
  </div>
</template>

<style scoped>
/* 添加一些基本的樣式 */
</style>

