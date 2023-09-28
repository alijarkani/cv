<script setup lang="ts">
const { isRtl } = useRtl()
</script>

<template>
  <v-locale-provider :rtl="isRtl">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-locale-provider>
</template>
