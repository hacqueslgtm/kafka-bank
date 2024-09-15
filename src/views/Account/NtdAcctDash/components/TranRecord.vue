<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
const props = defineProps<{
  date: string
  type: string
  amount: number
  fromAccount: string
  toAccount: string
  description: string
  tag: string
}>()
</script>

<template>
  <div class="my-3 grid grid-flow-col grid-cols-1 items-center gap-4">
    <div>
      <p class="my-3">{{ date }}</p>
      <p class="flex justify-between">
        <span>{{ description }}</span>
        <span :class="type === '+' ? 'text-bank-red-300' : 'text-bank-green-300'">{{ type }} {{ amount }}</span>
      </p>
    </div>
    <ChevronRightIcon class="h-6 w-6" />
  </div>
</template>

