<script setup lang="ts">
import type { BankTransInput } from '@/types/trans.types'
import { provide, reactive, ref } from 'vue'

import BaseTextInput from '@/components/base/BaseTextInput.vue'
import BaseCusEvtInput from '@/components/base/BaseCusEvtInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import FadeTransition from '@/components/transition/FadeTransition.vue'
import TransAcctFromList from './components/TransAcctFromList.vue'
import TransAcctToList from './components/TransAcctToList.vue'

const request = reactive<BankTransInput>({
  date: '',
  from: '',
  amount: null,
  toBank: '',
  to: '',
  description: '',
  tag: ''
})

provide('request', request)

const isTagVisible = ref(false)
const isDescVisible = ref(false)
const isAcctFromVisible = ref(false)
const isAcctToVisible = ref(false)

const setTagVisible = () => {
  isTagVisible.value = true
}

const setDescVisible = () => {
  isDescVisible.value = true
}

const switchAcctFromVisible = () => {
  isAcctFromVisible.value = !isAcctFromVisible.value
}

const switchAcctToVisible = () => {
  isAcctToVisible.value = !isAcctToVisible.value
}

const acctFromList = [
  { acct: '124-35-9083651', branch: '松山分行', balance: 1200, available: 800 },
  { acct: '056-18-3742109', branch: '信義分行', balance: 3500, available: 2700 },
  { acct: '092-47-6120584', branch: '大安分行', balance: 750, available: 400 },
  { acct: '073-61-2958376', branch: '中山分行', balance: 2000, available: 1500 },
  { acct: '108-29-5467231', branch: '士林分行', balance: 4800, available: 3200 }
]

const acctToList = {
  self: [
    { acct: '124-35-9083651', branch: '松山分行', balance: 1200, available: 800 },
    { acct: '056-18-3742109', branch: '信義分行', balance: 3500, available: 2700 },
    { acct: '092-47-6120584', branch: '大安分行', balance: 750, available: 400 },
    { acct: '073-61-2958376', branch: '中山分行', balance: 2000, available: 1500 },
    { acct: '108-29-5467231', branch: '士林分行', balance: 4800, available: 3200 }
  ],
  designated: [
    {
      acct: '123530937712315',
      bankCode: '808'
    },
    {
      acct: '987654321098765',
      bankCode: '012'
    },
    {
      acct: '456789012345678',
      bankCode: '007'
    },
    {
      acct: '246813579024681',
      bankCode: '822'
    },
    {
      acct: '135792468013579',
      bankCode: '013'
    }
  ],
  nonDesignated: [
    {
      acct: '123456789',
      name: '王小明',
      bankCode: '007',
      notify: 'wang@example.com'
    },
    {
      acct: '987654321',
      name: '李小華',
      bankCode: '012',
      notify: 'lee@example.com'
    },
    {
      acct: '246813579',
      name: '張大同',
      bankCode: '005',
      notify: ''
    },
    {
      acct: '135792468',
      name: '陳小梅',
      bankCode: '822',
      notify: ''
    },
    {
      acct: '975318642',
      name: '林小玉',
      bankCode: '013',
      notify: 'lin@example.com'
    }
  ]
}

provide('exit', () => {
  isAcctFromVisible.value = false
  isAcctToVisible.value = false
})
</script>

<template>
  <div class="p-4">
    <form class="mb-4 mt-2">
      <BaseCusEvtInput :title="$t('轉出')" :sub-title="$t('選擇轉出帳號')" @click="switchAcctFromVisible" :use-slot="request.from === '' ? false : true">
        <template v-slot:default>
          <p>{{ request.from }}</p>
        </template>
      </BaseCusEvtInput>
      <BaseTextInput v-model="request.amount" :placeholder="'$0'" :label="$t('金額')" />
      <BaseCusEvtInput :title="$t('轉入')" :sub-title="$t('選擇銀行及帳號')" @click="switchAcctToVisible" />
      <FadeTransition>
        <BaseTextInput v-model="request.description" :label="$t('備註')" v-if="isDescVisible" />
      </FadeTransition>
      <!-- TODO Add Tag Component + FadeTransition -->
      <div class="flex flex-row gap-2">
        <BaseButton size="sm" @click="setDescVisible" v-if="!isDescVisible">{{ $t('新增備註') }}</BaseButton>
        <BaseButton size="sm" @click="setTagVisible" v-if="!isTagVisible">{{ $t('新增標籤') }}</BaseButton>
      </div>
    </form>
    <Transition name="slide">
      <TransAcctFromList v-if="isAcctFromVisible" :list="acctFromList" />
    </Transition>
    <Transition name="slide">
      <TransAcctToList v-if="isAcctToVisible" :list="acctToList"></TransAcctToList>
    </Transition>
  </div>
</template>

