<script setup lang="ts">
import type { BankTransInput } from '@/types/trans.types'
import { reactive, ref } from 'vue'

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
</script>

<template>
  <div class="p-4">
    <form class="mb-4 mt-2">
      <BaseCusEvtInput :title="$t('轉出')" :sub-title="$t('選擇轉出帳號')" @click="switchAcctFromVisible" />
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
      <TransAcctFromList v-if="isAcctFromVisible" @exit="switchAcctFromVisible" />
    </Transition>
    <Transition name="slide">
      <TransAcctToList v-if="isAcctToVisible" @exit="switchAcctToVisible"></TransAcctToList>
    </Transition>
  </div>
</template>

