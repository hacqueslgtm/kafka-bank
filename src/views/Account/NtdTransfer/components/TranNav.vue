<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, watch, computed } from 'vue'

const route = useRoute()
const router = useRouter()
const currentRouteName = ref(route.name)

// 監聽路由變化
watch(route, newRoute => {
  currentRouteName.value = newRoute.name
})

const navItems = computed(() => [
  { name: 'BankTrans', label: '銀行帳號轉帳' },
  { name: 'MobileTrans', label: '手機號碼轉帳' }
])

const getClass = (routeName: string) => {
  return String(currentRouteName.value).includes(routeName) ? 'text-black' : 'text-bank-gray-800'
}

const getBgClass = (routeName: string) => {
  return String(currentRouteName.value).includes(routeName) ? 'bg-bank-gray-700' : 'bg-bank-gray-600'
}

const goLink = (name: string) => {
  router.replace({ name })
}
</script>

<template>
  <div class="grid grid-cols-[1fr_auto_1fr] border-b border-bank-gray-700">
    <div v-for="(item, index) in navItems" :key="index" class="relative p-2 text-center transition-all" @click="goLink(item.name)">
      <span class="font-bold" :class="getClass(item.name)">{{ $t(item.label) }}</span>
      <p class="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 transition-all" :class="getBgClass(item.name)"></p>
    </div>
  </div>
</template>

