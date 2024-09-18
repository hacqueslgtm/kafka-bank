<script setup lang="ts">
import TranNav from './components/TranNav.vue'
</script>

<template>
  <div>
    <TranNav />
    <RouterView v-slot="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </div>
</template>

