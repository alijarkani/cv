<script setup lang="ts">
import { useCommonStore } from '~/stores/common'
import SwitchLocale from '~/components/common/SwitchLocale.vue'

const common = useCommonStore()
</script>

<template>
  <v-app-bar scroll-behavior="hide" color="cyan-darken-2">
    <v-app-bar-nav-icon @click="common.toggleNavigationDrawer" />
    <v-app-bar-title>{{ $t('title') }}</v-app-bar-title>
    <v-spacer />
    <SwitchLocale />
  </v-app-bar>
</template>
