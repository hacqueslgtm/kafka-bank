<script lang="ts" setup>
import { GlobeAsiaAustraliaIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const chgLang = (): void => {
  locale.value = locale.value === 'en' ? 'tw' : 'en'
}
</script>

<template>
  <button class="flex items-center" @click="chgLang()">
    <GlobeAsiaAustraliaIcon class="size-6" />
    <button class="w-9 p-1">{{ locale.toUpperCase() }}</button>
  </button>
</template>

