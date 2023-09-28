<script setup lang="ts">
const { isRtl } = useRtl()
</script>

<template>
  <v-app>
    <v-locale-provider :rtl="isRtl">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-locale-provider>
  </v-app>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s;
}
.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translate(-100px, 0);
}

.v-locale--is-rtl {
    .slide-enter-from,
    .slide-leave-to {
        transform: translate(100px, 0);
    }
}

</style>
