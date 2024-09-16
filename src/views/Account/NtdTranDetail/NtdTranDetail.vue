<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { NtdTranInfo } from '@/types/tran.types'
import { fmtMoney } from '@/utils'
import { computed } from 'vue'

const route = useRoute()

const dataParam = route.params.data as string

const info: NtdTranInfo = JSON.parse(decodeURIComponent(atob(dataParam)))

const tranDetails = computed(() => [
  { label: '日期', value: info.date },
  { label: '轉出帳號', value: info.fromAccount },
  { label: '金額', value: `${info.type} $${fmtMoney(info.amount)}`, class: info.type === '+' ? 'text-bank-red-300' : 'text-bank-green-300' },
  { label: '轉入帳號', value: info.toAccount },
  { label: '轉入銀行', value: info.toBank },
  { label: '餘額', value: `$${fmtMoney(info.balance)}` }
])

const tranDesc = computed(() => [
  { label: '備註', value: info.description },
  { label: '類型', value: info.tag }
])
</script>

<template>
  <div class="h-[calc(100vh_-_70px)] min-h-[calc(100vh_-_70px)] overflow-y-auto p-4">
    <h3 class="mb-6 mt-2 text-2xl font-bold">{{ $t('轉帳資訊') }}</h3>
    <p v-for="(detail, index) in tranDetails" :key="index" class="my-6 flex justify-between">
      <span>{{ $t(detail.label) }}</span>
      <span :class="detail.class">{{ detail.value }}</span>
    </p>
    <h3 class="mb-6 mt-2 text-2xl font-bold">{{ $t('轉帳說明') }}</h3>
    <p v-for="(desc, index) in tranDesc" :key="index" class="my-6 flex justify-between">
      <span>{{ $t(desc.label) }}</span>
      <span>{{ desc.value }}</span>
    </p>
  </div>
</template>

