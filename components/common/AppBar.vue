<script setup lang="ts">
import { useCommonStore } from '~/stores/common'
import SwitchLocale from '~/components/common/SwitchLocale.vue'

const common = useCommonStore()
const { t } = useI18n()
</script>

<template>
  <v-app-bar scroll-behavior="hide" color="grey-darken-4">
    <v-app-bar-nav-icon @click="common.toggleNavigationDrawer" />
    <v-app-bar-title>{{ t('title') }}</v-app-bar-title>
    <SwitchLocale />
  </v-app-bar>
</template>
