<script lang="ts" setup>
import { defineProps } from 'vue';

// 定義組件的 props
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="mb-4">
    <label class="mb-2 block">{{ label }}</label>
    <input type="text" class="w-full rounded-xl bg-bank-gray-500 p-3 outline-bank-gray-800 placeholder:text-bank-gray-800" :placeholder="label" />
  </div>
</template>

<style scoped>
/* 添加一些基本的樣式 */
</style>

