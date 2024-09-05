<script setup lang="ts">
import Button from '@/components/base/BaseButton.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const logout = () => {
  router.push('/login')
}
</script>

<template>
  <div>
    <Button @click="logout">{{ $t('使用者.登出') }}</Button>
  </div>
</template>

