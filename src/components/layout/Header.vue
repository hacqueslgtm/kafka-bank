<script setup lang="ts">
import { BellIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()
const goSetting = () => {
  router.push({ name: 'Setting' })
}

const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <header class="sticky top-0 flex h-[69px] flex-shrink-0 items-center justify-between overflow-hidden bg-white p-4">
    <button class="mx-1 p-1">
      <BellIcon class="size-7" />
    </button>
    <p class="text-lg font-bold">{{ props.title }}</p>
    <button class="mx-1 p-1" @click="goSetting">
      <Cog6ToothIcon class="size-7" />
    </button>
  </header>
</template>

