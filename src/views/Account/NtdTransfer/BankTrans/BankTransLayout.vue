<script setup lang="ts">
import FadeTransition from '@/components/transition/FadeTransition.vue'
</script>

<template>
  <RouterView v-slot="{ Component }">
    <FadeTransition>
      <KeepAlive>
        <Component :is="Component" />
      </KeepAlive>
    </FadeTransition>
  </RouterView>
</template>

