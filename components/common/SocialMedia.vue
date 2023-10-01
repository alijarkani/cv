<script setup lang="ts">
import socials from '~/constants/social.json'
const { t } = useI18n()
</script>

<template>
  <div class="text-center py-4">
    <a
      v-for="(social, i) in socials"
      :key="i"
      :href="social.url"
      class="mx-2 text-white"
      target="_blank"
      rel="nofollow"
    >
      <v-icon :icon="social.icon" />
      <v-tooltip
        activator="parent"
        location="top"
      >
        {{ t(`social.${social.key}`) }}
      </v-tooltip>
    </a>
  </div>
</template>
