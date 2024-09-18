<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { fmtMoney } from '@/utils'

const props = defineProps<{
  status: boolean
  dailyLimit: number
  monthlyLimit: number
  dailyLimitRemain: number
  atmLimit: number
}>()

const { t } = useI18n()
const tranLimit = [
  { label: '啟用非約定轉帳', value: t(props.status ? '啟用' : '未啟用') },
  { label: '單筆', value: props.dailyLimit },
  { label: '每日', value: props.monthlyLimit },
  { label: '每月', value: props.dailyLimitRemain },
  { label: 'ATM提款限額', value: props.atmLimit }
]
</script>

<template>
  <div>
    <h3 class="mb-6 mt-8 text-2xl font-bold">{{ $t('非約定轉帳限額') }}</h3>
    <p class="my-6 flex justify-between">
      <span>{{ $t('啟用非約定轉帳') }}</span>
      <span>{{ $t(status ? '啟用' : '未啟用') }}</span>
    </p>
    <p class="my-6 flex justify-between">
      <span>{{ $t('單筆') }}</span>
      <span>${{ fmtMoney(dailyLimit) }}</span>
    </p>
    <p class="my-6 flex justify-between">
      <span>{{ $t('每日') }}</span>
      <span>${{ fmtMoney(monthlyLimit) }}</span>
    </p>
    <p class="my-6 flex justify-between">
      <span>{{ $t('每月') }}</span>
      <span>${{ fmtMoney(dailyLimitRemain) }}</span>
    </p>
    <p class="my-6 flex justify-between">
      <span>{{ $t('ATM提款限額') }}</span>
      <span>${{ fmtMoney(atmLimit) }}</span>
    </p>
  </div>
</template>

