<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps<{
  title: string
  subTitle: string
}>()
</script>

<template>
  <div class="relative mb-4 flex items-center justify-between">
    <div>
      <h5>{{ title }}</h5>
      <p class="my-1 opacity-80">{{ subTitle }}</p>
    </div>
    <ChevronRightIcon class="size-5" />
  </div>
</template>

