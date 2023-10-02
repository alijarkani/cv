<script setup lang="ts">
import NavigationDrawer from '~/components/common/NavigationDrawer.vue'
import AppBar from '~/components/common/AppBar.vue'
import CopyRight from '~/components/common/CopyRight.vue'

const route = useRoute()

useHead({
  meta: [
    { property: 'og:image', content: '/avatar.png' },
    { property: 'og:url', content: route.fullPath },
  ]
})
</script>

<template>
  <v-main>
    <NavigationDrawer />
    <AppBar />
    <div class="content">
      <slot />
    </div>
    <CopyRight class="mx-n4 px-8" />
  </v-main>
</template>

<style>
.v-main {
  overflow: hidden;
}

.content {
  position: relative;
  z-index: 1;
}
</style>
