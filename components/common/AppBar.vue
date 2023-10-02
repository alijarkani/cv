<script setup lang="ts">
import { useCommonStore } from '~/stores/common'
import SwitchLocale from '~/components/common/SwitchLocale.vue'
import items from '~/constants/sidebar.json'
const { t } = useI18n()
const localePath = useLocalePath()
const display = useDisplay()
const common = useCommonStore()
</script>

<template>
  <v-app-bar scroll-behavior="hide" color="grey-darken-4">
    <v-container class="d-flex align-center">
      <v-app-bar-nav-icon v-if="display.xs.value" @click="common.toggleNavigationDrawer" />
      <v-app-bar-title v-if="display.xs.value">
        {{ t('title') }}
      </v-app-bar-title>

      <div v-if="display.smAndUp.value" class="menu-items">
        <v-btn
          v-for="item in items"
          :key="item.key"
          :prepend-icon="item.icon"
          :to="localePath(item.to)"
          color="white"
          variant="text"
          class="font-weight-bold me-1"
        >
          {{ t(`sidebar.${item.key}`) }}
        </v-btn>
      </div>
      <v-spacer v-if="display.smAndUp.value" />
      <SwitchLocale />
    </v-container>
  </v-app-bar>
</template>
