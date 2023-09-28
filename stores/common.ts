import { defineStore } from 'pinia'

export const useCommonStore = defineStore('main', {
  state: () => ({
    showNavigationDrawer: false,
  }),
  actions: {
    toggleNavigationDrawer () {
      this.showNavigationDrawer = !this.showNavigationDrawer
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
