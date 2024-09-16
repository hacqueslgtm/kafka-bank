<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'
import { fmtMoney } from '@/utils'

const props = defineProps<{
  date: string
  type: string
  amount: number
  fromAccount: string
  toAccount: string
  toBank: string
  description: string
  balance: number
  tag: string
}>()

const router = useRouter()
const goLink = () => {
  router.push({ name: 'NtdTranDetail', params: { data: btoa(encodeURIComponent(JSON.stringify(props))) } })
}
</script>

<template>
  <div class="my-3 grid grid-flow-col grid-cols-1 items-center gap-4">
    <div>
      <p class="my-3">{{ date }}</p>
      <p class="flex justify-between">
        <span>{{ description }}</span>
        <span :class="type === '+' ? 'text-bank-red-300' : 'text-bank-green-300'">{{ type }} ${{ fmtMoney(amount) }}</span>
      </p>
    </div>
    <button @click="goLink">
      <ChevronRightIcon class="h-6 w-6" />
    </button>
  </div>
</template>

