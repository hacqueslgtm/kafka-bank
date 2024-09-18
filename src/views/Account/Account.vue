<script setup lang="ts">
import AcctNav from './components/AcctNav.vue'
</script>

<template>
  <AcctNav />
  <div class="flex h-full flex-col overflow-auto">
    <RouterView v-slot="{ Component }">
      <Component :is="Component" />
    </RouterView>
  </div>
</template>

