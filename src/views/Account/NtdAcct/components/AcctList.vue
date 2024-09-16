<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const props = defineProps<{
  acct: string
  branch: string
  balance: number
  available: number
}>()

const router = useRouter()
const goLink = () => {
  router.push({ name: 'NtdAcctDash', params: { acct: btoa(props.acct) } })
}
</script>

<template>
  <div class="my-6 grid grid-flow-col grid-cols-[auto_0fr_0fr] items-center gap-4" @click="goLink">
    <div>
      <p class="text-lg">{{ acct }}</p>
      <p>{{ branch }}</p>
    </div>
    <div>
      <p class="text-right text-lg">${{ balance }}</p>
      <p class="text-right">${{ available }}</p>
    </div>
    <ChevronRightIcon class="h-6 w-6" />
  </div>
</template>

<style scoped lang="scss"></style>

