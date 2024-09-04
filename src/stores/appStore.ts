import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isFirstUsed = ref(true)

  return {
    isFirstUsed: readonly(isFirstUsed)
  }
})

