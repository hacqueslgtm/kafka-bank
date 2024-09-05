<script setup lang="ts">
import Img from '@/components/base/BaseImg.vue'
import Button from '@/components/base/BaseButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const goLogin = () => {
  router.push({ name: 'Login' })
}
</script>

<template>
  <main class="fle flex-1 flex-col">
    <div class="flex-1">
      <div class="mb-4">
        <p class="text-center">{{ $t('您正在尋找的頁面無法使用') }}</p>
        <p class="text-center">{{ $t('請檢查網址並重試') }}</p>
      </div>
      <div class="h-md:h-48 h-lg:h-56 mb-4 flex-shrink-0 overflow-hidden h-sm:h-16">
        <Img src="@/assets/detective.png" class="h-full w-full object-cover" />
      </div>
      <div class="flex justify-between px-4">
        <Button color="primary" class="px-8" @click="goBack">{{ $t('上一頁') }}</Button>
        <Button class="px-8" @click="goLogin">{{ $t('回登入頁') }}</Button>
      </div>
      <!-- TODO 新增聯絡我等視窗 -->
    </div>
  </main>
</template>

