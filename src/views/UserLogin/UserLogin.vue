<script lang="ts" setup>
import { BellIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';
import TextInput from '@/components/TextInput.vue'; // 引入 TextInput 組件
import SwitchLang from '@/components/SwitchLang.vue';
</script>

<template>
  <header class="relative p-4">
    <h1 class="text-2xl text-center">{{ $t('銀行') }}</h1>
    <button class="absolute right-4 top-1/2 -translate-y-1/2">
      <BellIcon class="size-7" />
    </button>
  </header>
  <main class="flex flex-1 flex-col">
    <div class="flex-1">
      <div class="flex-shrink-0 h-sm:h-16 h-md:h-48 h-lg:h-56 mb-4 rounded-lg overflow-hidden">
        <img src="@/assets/login-header.svg" class="w-full h-full object-cover" />
      </div>
      <form class="px-4 my-4">
        <TextInput :label="$t('身分證')" />
        <TextInput :label="$t('帳號')" />
        <TextInput :label="$t('密碼')" />
        <button class="bg-bank-blue-500 p-3 rounded-3xl w-full text-white my-2">
          {{ $t('登入') }}
        </button>
      </form>
      <section class="px-4 my-4">
        <button class="flex justify-between w-full my-2">
          <span>{{ $t('使用生物辨識登入') }}</span>
          <ArrowRightIcon class="size-5" />
        </button>
        <button class="text-bank-gray-800 my-2">{{ $t('忘記密碼？') }}</button>
      </section>
    </div>

    <section class="flex justify-between px-4 my-4">
      <div>
        <span class="text-bank-gray-800">{{ $t('沒有帳號嗎？') }}</span>
        <button class="text-bank-gray-800 ml-1 p-2">{{ $t('註冊') }}</button>
      </div>
      <SwitchLang />
    </section>
  </main>
</template>
