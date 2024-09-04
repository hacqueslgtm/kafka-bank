<script lang="ts" setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import Button from '@/components/base/BaseButton.vue' // 引入 Button 組件
import TextInput from '@/components/base/BaseTextInput.vue' // 引入 TextInput 組件
import SwitchLang from '@/components/SwitchLang.vue'
import { reactive } from 'vue'

interface UserLogin {
  id: string
  account: string
  password: string
}

const user = reactive<UserLogin>({
  id: '',
  account: '',
  password: ''
})

if (import.meta.env) {
  ;(user.id = 'T224095135A'), (user.account = 'admin'), (user.password = 'admin')
}
</script>

<template>
  <main class="flex flex-1 flex-col">
    <div class="flex-1">
      <div class="h-md:h-48 h-lg:h-56 mb-4 flex-shrink-0 overflow-hidden h-sm:h-16">
        <img src="@/assets/login-header.svg" class="h-full w-full object-cover" />
      </div>
      <form class="my-4 px-4">
        <TextInput :label="$t('身分證')" v-model="user.id" />
        <TextInput :type="'password'" :label="$t('帳號')" v-model="user.account" switch-visible />
        <TextInput :type="'password'" :label="$t('密碼')" v-model="user.password" switch-visible />
        <Button class="w-full" :color="'primary'">{{ $t('登入') }}</Button>
      </form>
      <section class="my-4 px-4">
        <button class="my-2 flex w-full justify-between transition-all active:opacity-90">
          <span>{{ $t('使用生物辨識登入') }}</span>
          <ArrowRightIcon class="size-5" />
        </button>
        <button class="my-2 text-bank-gray-800 transition-all active:opacity-90">{{ $t('忘記密碼？') }}</button>
      </section>
    </div>

    <section class="my-4 flex justify-between px-4">
      <div>
        <span class="text-bank-gray-800">{{ $t('沒有帳號嗎？') }}</span>
        <button class="ml-1 p-2 text-bank-gray-800">{{ $t('註冊') }}</button>
      </div>
      <SwitchLang />
    </section>
  </main>
</template>

