<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { EllipsisVerticalIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/base/BaseButton.vue'
import TransRecord from './components/TransRecord.vue'
import { decrypt, encrypt } from '@/utils'

const route = useRoute()

const acctParam = route.params.acct
const acct = Array.isArray(acctParam) ? decrypt(acctParam[0]) : decrypt(acctParam)

const tranRecord = [
  {
    date: '2024/09/01 09:15:30',
    type: '+',
    amount: 5000,
    balance: 10000,
    fromAccount: '092-174-92857',
    toAccount: '081-234-56789',
    toBank: '803',
    description: '薪資入帳',
    tag: '收入'
  },
  {
    date: '2024/09/03 14:22:45',
    type: '-',
    amount: 1200,
    balance: 8800,
    fromAccount: '081-234-56789',
    toAccount: '076-543-21098',
    toBank: '012',
    description: '餐廳消費',
    tag: '飲食'
  },
  {
    date: '2024/09/05 11:30:00',
    type: '+',
    amount: 3000,
    balance: 11800,
    fromAccount: '065-987-65432',
    toAccount: '081-234-56789',
    toBank: '803',
    description: '投資收益',
    tag: '投資'
  },
  {
    date: '2024/09/07 16:45:20',
    type: '-',
    amount: 2500,
    balance: 9300,
    fromAccount: '081-234-56789',
    toAccount: '054-321-09876',
    toBank: '700',
    description: '購物消費',
    tag: '購物'
  },
  {
    date: '2024/09/10 08:00:15',
    type: '+',
    amount: 10000,
    balance: 19300,
    fromAccount: '098-765-43210',
    toAccount: '081-234-56789',
    toBank: '803',
    description: '獎金入帳',
    tag: '收入'
  },
  {
    date: '2024/09/12 10:30:45',
    type: '-',
    amount: 3500,
    balance: 15800,
    fromAccount: '081-234-56789',
    toAccount: '123-456-78901',
    toBank: '822',
    description: '租金支付',
    tag: '住宿'
  },
  {
    date: '2024/09/15 18:20:00',
    type: '-',
    amount: 800,
    balance: 15000,
    fromAccount: '081-234-56789',
    toAccount: '234-567-89012',
    toBank: '007',
    description: '健身房月費',
    tag: '健康'
  },
  {
    date: '2024/09/18 09:45:30',
    type: '+',
    amount: 2000,
    balance: 17000,
    fromAccount: '345-678-90123',
    toAccount: '081-234-56789',
    toBank: '803',
    description: '兼職收入',
    tag: '收入'
  },
  {
    date: '2024/09/20 13:15:10',
    type: '-',
    amount: 1500,
    balance: 15500,
    fromAccount: '081-234-56789',
    toAccount: '456-789-01234',
    toBank: '050',
    description: '電子產品購買',
    tag: '購物'
  },
  {
    date: '2024/09/23 11:00:00',
    type: '+',
    amount: 4000,
    balance: 19500,
    fromAccount: '567-890-12345',
    toAccount: '081-234-56789',
    toBank: '803',
    description: '股息收入',
    tag: '投資'
  },
  {
    date: '2024/09/25 20:30:25',
    type: '-',
    amount: 1000,
    balance: 18500,
    fromAccount: '081-234-56789',
    toAccount: '678-901-23456',
    toBank: '118',
    description: '網購服裝',
    tag: '購物'
  },
  {
    date: '2024/09/28 15:40:50',
    type: '-',
    amount: 2200,
    balance: 16300,
    fromAccount: '081-234-56789',
    toAccount: '789-012-34567',
    toBank: '812',
    description: '水電費支付',
    tag: '生活費用'
  }
]

const router = useRouter()
const goLink = () => {
  router.push({ name: 'NtdAcctDetail', params: { id: encrypt(acct) } })
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
      <TransRecord v-for="(record, index) in tranRecord" :key="index" v-bind="record" />
    </section>
  </div>
</template>

