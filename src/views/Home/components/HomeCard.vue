<script setup lang="ts">
import Button from '@/components/base/BaseButton.vue'
import BaseLink from '@/components/base/BaseLink.vue'
import { ArchiveBoxIcon, ArchiveBoxArrowDownIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const linkList = [
  {
    icon: ArchiveBoxIcon,
    title: t('帳單明細查詢'),
    subtitle: t('查看已出帳明細'),
    path: 'Transfer'
  },
  {
    icon: ArchiveBoxArrowDownIcon,
    title: t('未出帳明細查詢'),
    subtitle: t('查看最近的交易紀錄'),
    path: 'History'
  }
]
</script>

<template>
  <div class="p-4">
    <h2 class="mb-6 text-2xl font-bold">{{ $t('信用卡') }}</h2>
    <h3 class="mb-6 text-xl font-bold">{{ $t('當期應繳金額') }}</h3>
    <h1 class="my-6 text-3xl font-bold">$10520</h1>
    <div class="my-4 grid grid-flow-col gap-4">
      <Button>{{ $t('查看卡片') }}</Button>
      <Button>{{ $t('繳款') }}</Button>
    </div>
    <div>
      <BaseLink v-for="(item, index) in linkList" :key="index" :icon="item.icon" :title="item.title" :subtitle="item.subtitle" :path="item.path" />
    </div>
  </div>
</template>

