<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const props = withDefaults(
  defineProps<{
    title: string
    subTitle: string
    useSlot?: boolean
  }>(),
  {
    useSlot: false
  }
)
</script>

<template>
  <div class="relative mb-4 flex items-center justify-between">
    <div>
      <h5>{{ title }}</h5>
      <div class="my-1 opacity-80">
        <p v-if="!useSlot">{{ subTitle }}</p>
        <slot class="my-1 opacity-80" v-else />
      </div>
    </div>
    <ChevronRightIcon class="size-5" />
  </div>
</template>

