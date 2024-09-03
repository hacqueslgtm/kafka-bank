<script lang="ts" setup>
import { defineProps } from 'vue';

// 定義組件的 props
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="mb-4">
    <label class="block mb-2">{{ label }}</label>
    <input
      type="text"
      class="rounded-xl w-full p-3 bg-bank-gray-500 placeholder:text-bank-gray-800 outline-bank-gray-800"
      :placeholder="label"
    />
  </div>
</template>

<style scoped>
/* 添加一些基本的樣式 */
</style>
