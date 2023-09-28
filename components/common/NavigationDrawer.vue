<script setup lang="ts">
import { useCommonStore } from '~/stores/common'
import SocialMedia from '~/components/common/SocialMedia.vue'
import SwitchLocale from '~/components/common/SwitchLocale.vue'
import items from '~/constants/sidebar.json'

const localePath = useLocalePath()
const display = useDisplay()
const common = useCommonStore()
</script>

<template>
  <v-navigation-drawer
    v-model="common.showNavigationDrawer"
    color="cyan-darken-4"
    :permanent="!display.mobile"
    :temporary="display.mobile.value"
  >
    <template #prepend>
      <v-list-item
        lines="two"
        prepend-avatar="/avatar.png"
        :title="$t('owner.full_name')"
        :subtitle="$t('owner.job')"
      >
        <template #append>
          <SwitchLocale />
        </template>
      </v-list-item>
    </template>

    <template #append>
      <SocialMedia />
    </template>

    <v-divider />

    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.key"
        :prepend-icon="item.icon"
        :title="$t(`sidebar.${item.key}`)"
        :to="localePath(item.to)"
      />
    </v-list>
  </v-navigation-drawer>
</template>
