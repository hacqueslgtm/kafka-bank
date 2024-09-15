<script setup lang="ts">
import { BellIcon, Cog6ToothIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.go(-1)
}

const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <header class="sticky top-0 grid h-[69px] flex-shrink-0 grid-cols-[1fr_auto_1fr] items-center justify-between overflow-hidden bg-white p-4">
    <button class="mx-1 p-1" @click="goBack">
      <ChevronLeftIcon class="size-7" />
    </button>
    <p class="text-lg font-bold">{{ props.title }}</p>
  </header>
</template>

