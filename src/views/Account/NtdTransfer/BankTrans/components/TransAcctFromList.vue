<script setup lang="ts">
import InlinePageOverlay from '@/components/layout/InlinePageOverlay.vue'
import type { BankTransInput } from '@/types/trans.types'
import { fmtMoney } from '@/utils'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { inject } from 'vue'

const props = defineProps<{
  list: { acct: string; branch: string; balance: number; available: number }[]
}>()

const request = inject('request') as BankTransInput
const exit = inject('exit') as () => void
// const emit = defineEmits(['exit'] as const)
const setFrom = (acct: string) => {
  request.from = acct
  exit()
}
</script>

<template>
  <InlinePageOverlay :title="$t('轉出')" @exit="exit">
    <div class="p-4">
      <p class="mb-6 mt-2 text-2xl font-bold">{{ $t('選擇轉出帳號') }}</p>
      <div class="my-6 grid grid-cols-[auto_0fr_0fr] items-center gap-4" v-for="(item, index) in list" :key="index" @click="setFrom(item.acct)">
        <div class="flex flex-col">
          <p class="text-lg">{{ item.acct }}</p>
          <p>{{ item.branch }}</p>
        </div>
        <p>${{ fmtMoney(item.available) }}</p>
        <p class="w-6">
          <CheckCircleIcon v-if="item.acct === request.from" class="h-6 w-6 fill-bank-green-300" />
        </p>
      </div>
    </div>
  </InlinePageOverlay>
</template>

