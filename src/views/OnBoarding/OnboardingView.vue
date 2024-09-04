<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import FadeTransition from '@/components/transition/FadeTransition.vue'
import Img from '@/components/base/BaseImg.vue'
import SwitchLang from '@/components/SwitchLang.vue'
import Button from '@/components/base/BaseButton.vue'
import { useRouter } from 'vue-router'

interface SwiperItem {
  title: string
  content: string
}

const { t } = useI18n()
const swiperItem = computed<SwiperItem[]>(() => {
  return [
    {
      title: t('輕鬆理財,隨時隨地'),
      content: t('獲取實時賬戶更新,輕鬆管理您的財務,無論您身在何處。')
    },
    {
      title: t('安全可靠,值得信賴'),
      content: t('我們採用先進的加密技術,確保您的資金和個人信息安全無虞。')
    },
    {
      title: t('智能投資,財富增長'),
      content: t('利用我們的AI驅動投資建議,讓您的錢更聰明地運作。')
    },
    {
      title: t('一站式金融服務'),
      content: t('從存款到貸款,從投資到保險,滿足您所有的金融需求。')
    }
  ]
})

const swiperActIndex = ref(0)
const onSlideChange = (swiper: any) => {
  swiperActIndex.value = swiper.activeIndex
}

const router = useRouter()
const toLogin = () => {
  router.push({ name: 'UserLogin' })
}
const toRegister = () => {
  router.push('/register')
}
</script>

<template>
  <main class="flex flex-1 flex-col">
    <div class="flex-1">
      <div class="aspect-auto h-80 overflow-hidden h-sm:h-64">
        <FadeTransition>
          <Img v-if="swiperActIndex === 0" src="@/assets/onboarding-header-1.svg" class="h-full w-full object-cover" />
          <Img v-else-if="swiperActIndex === 1" src="@/assets/onboarding-header-2.jpeg" class="h-full w-full object-cover" />
          <Img v-else-if="swiperActIndex === 2" src="@/assets/onboarding-header-3.jpeg" class="h-full w-full object-cover" />
          <Img v-else src="@/assets/onboarding-header-4.jpeg" class="h-full w-full object-cover" />
        </FadeTransition>
      </div>
      <div class="h-fit py-4">
        <Swiper :modules="[Pagination, A11y]" :pagination="{ clickable: true, el: '.custom-swiper-pagination' }" @slideChange="onSlideChange">
          <SwiperSlide v-for="(item, index) in swiperItem" :key="index" class="px-4">
            <h2 class="text-balance text-center text-2xl font-bold">{{ item.title }}</h2>
            <p class="my-4 text-balance text-center">{{ item.content }}</p>
          </SwiperSlide>
          <div class="custom-swiper-pagination"></div>
        </Swiper>
      </div>
      <div class="flex justify-between px-4">
        <Button @click="toLogin">{{ $t('登入') }}</Button>
        <Button @click="toRegister" color="primary">{{ $t('註冊') }}</Button>
      </div>
    </div>
    <section class="my-4 flex justify-end px-4">
      <SwitchLang />
    </section>
  </main>
</template>

<style lang="scss" scoped></style>

