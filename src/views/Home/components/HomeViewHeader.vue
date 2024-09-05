<script setup lang="ts">
import { BellIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()
const goUser = () => {
  router.push({ name: 'UserData' })
}
</script>

<template>
  <header class="flex h-[69px] justify-between overflow-hidden p-4">
    <button class="mx-1 p-1">
      <BellIcon class="size-7" />
    </button>
    <button class="mx-1 p-1" @click="goUser">
      <Cog6ToothIcon class="size-7" />
    </button>
  </header>
</template>

