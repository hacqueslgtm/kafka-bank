<script setup lang="ts"></script>

<template>
  <Transition name="fade" mode="out-in">
    <slot></slot>
  </Transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

