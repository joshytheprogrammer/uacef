import { defineStore } from 'pinia'

export const useMobileStore = defineStore('mobile', {
  state: () => ({ 
    isMobile: false
  }),
  actions: {
    checkWidth() {
      if(!process.client) {
        this.isMobile = false 
        return
      }

      let w = window.innerWidth

      // If statement to check width
      w > 767 ? this.isMobile = false : this.isMobile = true

      return
    },
  },
  getters: {
    getDevice(state) {
      return state.isMobile
    },
  }
})