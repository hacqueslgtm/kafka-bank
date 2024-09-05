<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import type { Component } from 'vue'

const props = defineProps<{
  icon: Component
  title: string
  subtitle: string
  path: string
}>()
</script>

<template>
  <div class="my-4 grid grid-flow-col grid-cols-[auto_1fr_auto] items-center gap-4">
    <div class="flex aspect-square h-12 items-center justify-center rounded-xl bg-bank-gray-500">
      <component :is="props.icon" class="h-6 w-6" />
    </div>
    <div>
      <p>{{ props.title }}</p>
      <p class="text-sm text-bank-gray-800">{{ props.subtitle }}</p>
    </div>
    <div>
      <ChevronRightIcon class="h-6 w-6" />
    </div>
  </div>
</template>

