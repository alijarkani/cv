<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
const i18n = useI18n()
const locales = i18n.locales
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <slot name="activator" :props="props">
        <v-btn size="x-small" variant="tonal" icon="mdi-translate" v-bind="props" />
      </slot>
    </template>

    <v-list>
      <v-list-item
        v-for="locale in locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >
        <template #prepend>
          <v-avatar color="transparent">
            {{ locale.flag }}
          </v-avatar>
        </template>
        <v-list-item-title>{{ locale.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
