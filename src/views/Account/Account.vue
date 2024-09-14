<script setup lang="ts">
import AcctNav from './components/AcctNav.vue'
import FadeTransition from '@/components/transition/FadeTransition.vue'
</script>

<template>
  <AcctNav />
  <div class="flex h-full flex-col overflow-auto">
    <FadeTransition>
      <RouterView v-slot="{ Component }">
        <Component :is="Component" />
      </RouterView>
    </FadeTransition>
  </div>
</template>

