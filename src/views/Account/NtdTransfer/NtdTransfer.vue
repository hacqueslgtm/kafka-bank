<script setup lang="ts">
import TranNav from './components/TranNav.vue'
import FadeTransition from '@/components/transition/FadeTransition.vue'
</script>

<template>
  <div>
    <TranNav />
    <FadeTransition>
      <RouterView v-slot="{ Component }">
        <Component :is="Component" />
      </RouterView>
    </FadeTransition>
  </div>
</template>

