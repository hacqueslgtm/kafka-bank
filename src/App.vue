<script setup lang="ts">
import { useRoute } from 'vue-router'
import FadeTransition from './components/transition/FadeTransition.vue'
import { onBeforeMount, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const hasFooter = ref(false)

watch(
  () => route.meta.highlight,
  value => {
    hasFooter.value = !!route.meta.highlight
  }
)
</script>

<template>
  <div class="fixed flex h-screen w-full flex-col">
    <div class="flex h-full flex-col overflow-auto" :class="{ 'max-h-[calc(100vh_-_5.5rem)]': hasFooter }">
      <FadeTransition>
        <RouterView name="header" v-slot="{ Component }">
          <Component :is="Component" />
        </RouterView>
      </FadeTransition>
      <FadeTransition>
        <RouterView v-slot="{ Component }">
          <Component :is="Component" />
        </RouterView>
      </FadeTransition>
    </div>
  </div>
  <RouterView name="footer" />
</template>

<style scoped></style>

