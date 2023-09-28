<script setup lang="ts">
import NavigationDrawer from '~/components/common/NavigationDrawer.vue'
import AppBar from '~/components/common/AppBar.vue'

const display = useDisplay()
</script>

<template>
  <v-app>
    <v-main>
      <NavigationDrawer />
      <AppBar v-if="display.height.value && display.mobile.value" />
      <slot />
    </v-main>
  </v-app>
</template>
