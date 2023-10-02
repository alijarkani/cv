<script setup lang="ts">
import { useCommonStore } from '~/stores/common'
import SocialMedia from '~/components/common/SocialMedia.vue'
import items from '~/constants/sidebar.json'

const localePath = useLocalePath()
const common = useCommonStore()
const { t } = useI18n()
</script>

<template>
  <v-navigation-drawer
    v-model="common.showNavigationDrawer"
    color="secondary"
    temporary
  >
    <template #prepend>
      <v-list-item
        lines="three"
        :title="t('owner.full_name')"
        :subtitle="t('owner.job')"
        class="user"
      >
        <template #prepend>
          <v-avatar size="85" class="rounded-0">
            <v-img
              src="/images/avatar.png"
              :alt="t('owner.full_name')"
            />
          </v-avatar>
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
    transform: rotate(4deg);
    transition: all 1s ease;
  }

  .v-avatar:hover {
    transform: rotate(0);
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
