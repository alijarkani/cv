<script setup lang="ts">
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
