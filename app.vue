<script setup lang="ts">
import { TransitionProps } from 'vue'
import BackgroundAnimation from '~/components/common/BackgroundAnimation.vue'
const { isRtl } = useRtl()
const locale = useLocale()

const i18n = useI18n()

const onBeforeEnter = async () => {
  await i18n.finalizePendingLocaleChange()
  locale.current.value = i18n.locale.value
}

const transition: TransitionProps = {
  name: 'page',
  mode: 'out-in',
  onBeforeEnter,
}
</script>

<template>
  <v-app>
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <BackgroundAnimation />
    <v-locale-provider :rtl="isRtl">
      <NuxtLayout>
        <NuxtPage :transition="transition" />
      </NuxtLayout>
    </v-locale-provider>
  </v-app>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: translate(-100px, 0);
}

.v-locale--is-rtl {
  .page-enter-from,
  .page-leave-to {
    transform: translate(100px, 0);
  }
}

.layout-enter-active,
.layout-leave-active {
  transition: all .4s ease;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}

</style>
