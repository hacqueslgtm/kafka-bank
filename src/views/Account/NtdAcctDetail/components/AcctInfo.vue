<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  acct: string
  name: string
  acctType: string
  openDate: string
  openBranch: string
  openBranchCode: string
}>()

const acctInfo = computed(() => [
  { label: '帳號', value: props.acct },
  { label: '戶名', value: props.name },
  { label: '帳戶類型', value: props.acctType },
  { label: '開戶日期', value: props.openDate },
  { label: '開戶分行', value: `${props.openBranch}(${props.openBranchCode})` }
])
</script>

<template>
  <div>
    <h3 class="mb-6 mt-2 text-2xl font-bold">{{ $t('帳戶資訊') }}</h3>
    <p v-for="(info, index) in acctInfo" :key="index" class="my-6 flex justify-between">
      <span>{{ $t(info.label) }}</span>
      <span>{{ info.value }}</span>
    </p>
  </div>
</template>

