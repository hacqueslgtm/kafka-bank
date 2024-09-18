<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="fixed left-0 top-0 h-screen w-screen">
    <header class="sticky top-0 grid h-[69px] flex-shrink-0 grid-cols-[1fr_auto_1fr] items-center justify-between overflow-hidden bg-white p-4">
      <button class="mx-1 p-1" @click="$emit('exit')">
        <XMarkIcon class="size-7" />
      </button>
      <p class="text-lg font-bold">{{ title }}</p>
    </header>
    <div class="h-[calc(100vh_-_70px)] min-h-[calc(100vh_-_70px)] overflow-y-auto bg-white">
      <slot></slot>
    </div>
  </div>
</template>

