<script setup lang="ts">
import { HomeIcon, BuildingLibraryIcon, BanknotesIcon, ChartBarIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
import {
  HomeIcon as HomeIconSolid,
  BuildingLibraryIcon as BuildingLibraryIconSolid,
  BanknotesIcon as BanknotesIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  UserCircleIcon as UserCircleIconSolid
} from '@heroicons/vue/24/solid'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'

const { t } = useI18n()
const navLinks = computed(() => {
  return [
    { icon: HomeIcon, activeIcon: HomeIconSolid, name: 'Home', label: t('首頁') },
    { icon: BuildingLibraryIcon, activeIcon: BuildingLibraryIconSolid, name: 'Account', label: t('銀行帳號') },
    { icon: BanknotesIcon, activeIcon: BanknotesIconSolid, name: 'Card', label: t('信用卡') },
    { icon: ChartBarIcon, activeIcon: ChartBarIconSolid, name: 'Invest', label: t('投資') },
    { icon: UserCircleIcon, activeIcon: UserCircleIconSolid, name: 'User', label: t('個人') }
  ]
})

const router = useRouter()
const goLink = (name: string) => {
  router.push({ name })
}

const route = useRoute()
const highlight = computed(() => {
  return route.meta.highlight ?? ''
})
const isHighlight = (name: string) => {
  return highlight.value === name
}
</script>

<template>
  <div class="fixed bottom-0 grid w-full grid-flow-col border-t border-bank-gray-500 py-4">
    <button v-for="(item, index) in navLinks" :key="index" @click="goLink(item.name)" class="flex flex-col items-center justify-center">
      <component :is="item.activeIcon" class="size-7" v-if="isHighlight(item.name)" />
      <component :is="item.icon" class="size-7 stroke-bank-gray-800" v-else />
      <p class="pt-2 text-sm text-bank-gray-800" :class="{ 'text-black': isHighlight(item.name) }">{{ item.label }}</p>
    </button>
  </div>
</template>

