<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/base/BaseButton.vue'
import TranRecord from './components/TranRecord.vue'

const route = useRoute()

const acctParam = route.params.acct
const acct = Array.isArray(acctParam) ? atob(acctParam[0]) : atob(acctParam)

const tranRecord = [
  {
    date: '2024/09/01 09:15:30',
    type: '+',
    amount: 5000,
    fromAccount: '092-174-92857',
    toAccount: '081-234-56789',
    description: '薪資入帳',
    tag: '收入'
  },
  {
    date: '2024/09/03 14:30:45',
    type: '-',
    amount: 1200,
    fromAccount: '081-234-56789',
    toAccount: '076-528-97531',
    description: '房租',
    tag: '住宿'
  },
  {
    date: '2024/09/05 10:20:15',
    type: '-',
    amount: 500,
    fromAccount: '081-234-56789',
    toAccount: '012-345-67890',
    description: '電費',
    tag: '水電'
  },
  {
    date: '2024/09/07 16:45:00',
    type: '+',
    amount: 2000,
    fromAccount: '092-174-92857',
    toAccount: '081-234-56789',
    description: '退稅',
    tag: '其他收入'
  },
  {
    date: '2024/09/10 11:30:20',
    type: '-',
    amount: 800,
    fromAccount: '081-234-56789',
    toAccount: '135-792-46800',
    description: '購物',
    tag: '消費'
  },
  {
    date: '2024/09/12 09:05:40',
    type: '-',
    amount: 300,
    fromAccount: '081-234-56789',
    toAccount: '246-813-57900',
    description: '水費',
    tag: '水電'
  },
  {
    date: '2024/09/15 15:20:10',
    type: '+',
    amount: 1500,
    fromAccount: '092-174-92857',
    toAccount: '081-234-56789',
    description: '兼職收入',
    tag: '收入'
  },
  {
    date: '2024/09/18 13:40:30',
    type: '-',
    amount: 600,
    fromAccount: '081-234-56789',
    toAccount: '159-753-26800',
    description: '手機費',
    tag: '通訊'
  },
  {
    date: '2024/09/20 10:10:50',
    type: '-',
    amount: 1000,
    fromAccount: '081-234-56789',
    toAccount: '753-951-85200',
    description: '保險費',
    tag: '保險'
  },
  {
    date: '2024/09/22 17:30:25',
    type: '+',
    amount: 3000,
    fromAccount: '092-174-92857',
    toAccount: '081-234-56789',
    description: '投資收益',
    tag: '投資'
  },
  {
    date: '2024/09/25 12:50:15',
    type: '-',
    amount: 700,
    fromAccount: '081-234-56789',
    toAccount: '963-852-74100',
    description: '餐飲',
    tag: '飲食'
  },
  {
    date: '2024/09/27 08:45:30',
    type: '-',
    amount: 400,
    fromAccount: '081-234-56789',
    toAccount: '741-852-96300',
    description: '交通費',
    tag: '交通'
  },
  {
    date: '2024/09/29 16:15:40',
    type: '+',
    amount: 1200,
    fromAccount: '092-174-92857',
    toAccount: '081-234-56789',
    description: '銷售佣金',
    tag: '收入'
  },
  {
    date: '2024/10/01 09:30:00',
    type: '-',
    amount: 2000,
    fromAccount: '081-234-56789',
    toAccount: '357-159-26840',
    description: '學費',
    tag: '教育'
  },
  {
    date: '2024/10/03 14:20:35',
    type: '+',
    amount: 4000,
    fromAccount: '092-174-92857',
    toAccount: '081-234-56789',
    description: '獎金',
    tag: '收入'
  },
  {
    date: '2024/10/05 11:10:50',
    type: '-',
    amount: 900,
    fromAccount: '081-234-56789',
    toAccount: '753-159-26840',
    description: '健身會費',
    tag: '健康'
  },
  {
    date: '2024/10/07 15:40:20',
    type: '-',
    amount: 600,
    fromAccount: '081-234-56789',
    toAccount: '159-357-26840',
    description: '書籍',
    tag: '教育'
  },
  {
    date: '2024/10/10 10:05:30',
    type: '+',
    amount: 1800,
    fromAccount: '092-174-92857',
    toAccount: '081-234-56789',
    description: '退款',
    tag: '其他收入'
  },
  {
    date: '2024/10/12 13:25:45',
    type: '-',
    amount: 1500,
    fromAccount: '081-234-56789',
    toAccount: '951-357-26840',
    description: '醫療費用',
    tag: '健康'
  },
  {
    date: '2024/10/15 09:50:15',
    type: '+',
    amount: 6000,
    fromAccount: '092-174-92857',
    toAccount: '081-234-56789',
    description: '薪資入帳',
    tag: '收入'
  }
]

const router = useRouter()
const goLink = () => {
  router.push({ name: 'NtdAcctDetail', params: { id: btoa(acct) } })
}
</script>

<template>
  <div class="h-[calc(100vh_-_70px)] min-h-[calc(100vh_-_70px)] overflow-y-auto p-4">
    <div class="mb-8 mt-2 flex justify-between">
      <h1 class="text-3xl font-bold">{{ acct }}</h1>
      <button class="p-2" @click="goLink">
        <EllipsisVerticalIcon class="h-6 w-6" />
      </button>
    </div>
    <h2 class="mb-6 mt-2 text-xl font-bold">{{ $t('可用餘額') }}</h2>
    <h1 class="mb-6 mt-6 text-2xl font-bold">$1450</h1>
    <h2 class="mb-6 mt-2 text-xl font-bold opacity-80">{{ $t('餘額') }}</h2>
    <h1 class="mb-6 mt-6 text-2xl font-bold opacity-80">$1250</h1>
    <div class="my-4 grid grid-flow-col gap-4">
      <BaseButton>{{ $t('複製') }}</BaseButton>
      <BaseButton>{{ $t('分享') }}</BaseButton>
    </div>
    <section class="my-6">
      <!-- TODO 標題右邊新增提示訊息: 最多可查詢一年 -->
      <h1 class="mb-4 text-2xl font-bold">{{ $t('轉帳明細') }}</h1>
      <!-- TODO 篩選功能 照月份篩選 及 轉出/轉入 如果是當月份的話要及時打交易 其他月份可以存起來-->
      <!-- TODO 一次查詢一個月 下滑到最下面自動打下一個月的交易 要有loading動畫 -->
      <TranRecord v-for="(record, index) in tranRecord" :key="index" v-bind="record" />
    </section>
  </div>
</template>

