<script setup lang="ts">
import AcctSum from './components/AcctSum.vue'
import AcctList from './components/AcctList.vue'
import BaseLink from '@/components/base/BaseLink.vue'
import { ArrowUpRightIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'

const linkList = [
  {
    icon: ArrowUpRightIcon,
    title: '向朋友轉帳',
    subtitle: '簡單又免費',
    path: 'Transfer'
  },
  {
    icon: ArrowDownTrayIcon,
    title: '明細查詢',
    subtitle: '查看最近的交易紀錄',
    path: 'History'
  }
]

const accts = [
  { acct: '124-35-9083651', branch: '松山分行', balance: 1200, available: 800 },
  { acct: '056-18-3742109', branch: '信義分行', balance: 3500, available: 2700 },
  { acct: '092-47-6120584', branch: '大安分行', balance: 750, available: 400 },
  { acct: '073-61-2958376', branch: '中山分行', balance: 2000, available: 1500 },
  { acct: '108-29-5467231', branch: '士林分行', balance: 4800, available: 3200 }
]
</script>

<template>
  <div class="p-4">
    <AcctSum />
    <AcctList v-for="(acct, index) in accts" :key="index" v-bind="acct" />
    <p class="mb-6 text-xl font-bold">{{ $t('快速功能') }}</p>
    <BaseLink v-for="(item, index) in linkList" :key="index" :icon="item.icon" :title="item.title" :subtitle="item.subtitle" :path="item.path" />
  </div>
</template>

<style scoped lang="scss"></style>

