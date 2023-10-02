<script setup lang="ts">
const route = useRoute()
const locale = useLocale()

useHead({
  htmlAttrs: {
    lang: locale.current.value,
  },
  meta: [
    { property: 'og:image', content: '/avatar.png' },
    { property: 'og:url', content: route.fullPath },
    { property: 'theme-color', content: '#000' },
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
