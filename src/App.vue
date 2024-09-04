<script setup lang="ts">
import FadeTransition from './components/transition/FadeTransition.vue'
</script>

<template>
  <div class="flex h-screen flex-col">
    <RouterView name="header" v-slot="{ Component }">
      <FadeTransition>
        <Component :is="Component" />
      </FadeTransition>
    </RouterView>

    <RouterView v-slot="{ Component }">
      <FadeTransition>
        <Component :is="Component" />
      </FadeTransition>
    </RouterView>

    <RouterView name="footer" />
  </div>
</template>

<style scoped></style>

