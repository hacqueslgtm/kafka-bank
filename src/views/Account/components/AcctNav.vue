<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const currentRouteName = ref(route.name)

const slides = computed(() => [
  { name: 'NtdAcct', label: '台幣' },
  { name: 'FXAcct', label: '外幣' },
  { name: 'CKAcct', label: '支票' },
  { name: 'CDAcct', label: '定存' },
  { name: 'LoanAcct', label: '貸款' }
])

const goLink = (path: string) => {
  router.push({ name: path })
}

// 監聽路由變化
watch(route, newRoute => {
  currentRouteName.value = newRoute.name
})
</script>

<template>
  <div class="border-bank-gray-700 border-b">
    <Swiper :slides-per-view="3" navigation>
      <SwiperSlide
        v-for="slide in slides"
        :key="slide.name"
        class="relative p-2 text-center font-bold transition-all"
        :class="currentRouteName === slide.name ? 'text-black' : 'text-bank-gray-800'"
        @click="goLink(slide.name)"
      >
        {{ $t(slide.label) }}
        <p class="absolute bottom-0 left-1/2 h-1 w-20 -translate-x-1/2 transition-all" :class="currentRouteName === slide.name ? 'bg-bank-gray-700' : 'bg-bank-gray-600'"></p>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss"></style>

