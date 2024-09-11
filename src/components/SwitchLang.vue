<script lang="ts" setup>
import { GlobeAsiaAustraliaIcon } from '@heroicons/vue/24/outline'
import { useI18n } from 'vue-i18n'
import loadLangMsg from '@/utils/loadLangMsg'

const i18n = useI18n()

const { locale, messages } = i18n

const chgLang = async (): Promise<void> => {
  const targetLocale = locale.value === 'en-US' ? 'zh-TW' : 'en-US'

  if (!Object.keys(messages.value[targetLocale]).length) {
    try {
      const newMessages = await loadLangMsg(targetLocale)
      i18n.setLocaleMessage(targetLocale, newMessages)
    } catch (error) {
      console.error(`Failed to load messages for ${targetLocale}:`, error)
      // 可以在這裡添加錯誤處理邏輯，例如顯示一個錯誤通知
    } finally {
      //
    }
  }

  locale.value = targetLocale
}
</script>

<template>
  <button class="flex items-center" @click="chgLang()">
    <GlobeAsiaAustraliaIcon class="size-6" />
    <button class="p-1">{{ locale.toUpperCase() }}</button>
  </button>
</template>

