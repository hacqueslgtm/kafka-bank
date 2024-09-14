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
</script>

<template>
  <div class="p-4">
    <AcctSum />
    <AcctList />
    <AcctList />
    <AcctList />
    <AcctList />
    <AcctList />
    <p class="mb-6 text-xl font-bold">{{ $t('快速功能') }}</p>
    <BaseLink v-for="(item, index) in linkList" :key="index" :icon="item.icon" :title="item.title" :subtitle="item.subtitle" :path="item.path" />
  </div>
</template>

<style scoped lang="scss"></style>

