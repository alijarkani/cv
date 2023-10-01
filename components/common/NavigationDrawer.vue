<script setup lang="ts">
import { useCommonStore } from '~/stores/common'
import SocialMedia from '~/components/common/SocialMedia.vue'
import SwitchLocale from '~/components/common/SwitchLocale.vue'
import items from '~/constants/sidebar.json'

const localePath = useLocalePath()
const display = useDisplay()
const common = useCommonStore()
const { t } = useI18n()
</script>

<template>
  <v-navigation-drawer
    v-model="common.showNavigationDrawer"
    color="secondary"
    :permanent="!display.mobile"
    :temporary="display.mobile.value"
  >
    <template #prepend>
      <v-list-item
        lines="three"
        prepend-avatar="/avatar.png"
        :title="t('owner.full_name')"
        :subtitle="t('owner.job')"
        class="user"
      >
        <template #prepend>
          <v-avatar size="55">
            <v-img
              src="/avatar.png"
              :alt="t('owner.full_name')"
            />
          </v-avatar>
        </template>
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
        :title="t(`sidebar.${item.key}`)"
        :to="localePath(item.to)"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
.v-navigation-drawer {
  .v-avatar {
    border: 1px solid #ffffff44;
  }

  .user {
    .v-list-item-title, .v-list-item-subtitle {
      font-weight: 900;
      font-style: italic;
      margin-bottom: 2px;
      margin-top: 2px;
    }

    .v-list-item__append {
      height: 100%;
    }
  }
}

</style>
