<script setup lang="ts">
import { TransitionProps } from 'vue'
const { isRtl } = useRtl()
const locale = useLocale()

const i18n = useI18n()

const onBeforeEnter = async () => {
  await i18n.finalizePendingLocaleChange()
  locale.current.value = i18n.locale.value
}

const transition: TransitionProps = {
  name: 'slide',
  mode: 'out-in',
  onBeforeEnter,
}
</script>

<template>
  <v-app>
    <v-locale-provider :rtl="isRtl">
      <NuxtLayout>
        <NuxtPage :transition="transition" />
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
