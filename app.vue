<script setup lang="ts">
const { isRtl } = useRtl()
</script>

<template>
  <v-locale-provider :rtl="isRtl">
    <NuxtPage />
  </v-locale-provider>
</template>
