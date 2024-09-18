<script setup lang="ts">
import { useRoute } from 'vue-router'
import AcctInfo from './components/AcctInfo.vue'
import TranLimit from './components/TransLimit.vue'
import { decrypt } from '@/utils'

const route = useRoute()
const acctParam = route.params.acct
const acct = Array.isArray(acctParam) ? decrypt(acctParam[0]) : decrypt(acctParam)

const acctInfo = {
  acct,
  name: '王小明',
  acctType: '綜合儲蓄帳戶',
  openDate: '2024/09/01',
  openBranch: '台北分行',
  openBranchCode: '001'
}

const tranLimit = {
  status: true,
  dailyLimit: 500000,
  monthlyLimit: 1000000,
  dailyLimitRemain: 500000,
  atmLimit: 1000000
}
</script>

<template>
  <div class="h-[calc(100vh_-_70px)] min-h-[calc(100vh_-_70px)] overflow-y-auto p-4">
    <AcctInfo v-bind="acctInfo" />
    <TranLimit v-bind="tranLimit" />
  </div>
</template>

