<script setup lang="ts">
import { BellIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="relative p-4">
    <h1 class="text-center text-2xl">{{ $t('卡夫卡銀行') }}</h1>
    <button class="absolute right-4 top-1/2 -translate-y-1/2">
      <BellIcon class="size-7" />
    </button>
  </header>
</template>

