<script setup lang="ts">
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
    <div class="content">
      <slot />
    </div>
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
