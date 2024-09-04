<script lang="ts" setup>
import { BellIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import Button from '@/components/base/BaseButton.vue' // 引入 Button 組件
import TextInput from '@/components/TextInput.vue' // 引入 TextInput 組件
import SwitchLang from '@/components/SwitchLang.vue'
</script>

<template>
  <header class="relative p-4">
    <h1 class="text-center text-2xl">{{ $t('銀行') }}</h1>
    <button class="absolute right-4 top-1/2 -translate-y-1/2">
      <BellIcon class="size-7" />
    </button>
  </header>
  <main class="flex flex-1 flex-col">
    <div class="flex-1">
      <div class="h-md:h-48 h-lg:h-56 mb-4 flex-shrink-0 overflow-hidden rounded-lg h-sm:h-16">
        <img src="@/assets/login-header.svg" class="h-full w-full object-cover" />
      </div>
      <form class="my-4 px-4">
        <TextInput :label="$t('身分證')" />
        <TextInput :label="$t('帳號')" />
        <TextInput :label="$t('密碼')" />
        <Button class="w-full" :color="'primary'">{{ $t('登入') }}</Button>
      </form>
      <section class="my-4 px-4">
        <button class="my-2 flex w-full justify-between">
          <span>{{ $t('使用生物辨識登入') }}</span>
          <ArrowRightIcon class="size-5" />
        </button>
        <button class="my-2 text-bank-gray-800">{{ $t('忘記密碼？') }}</button>
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

