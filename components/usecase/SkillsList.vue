<script setup lang="ts">
import { SkillItem } from '~/types/skill'

interface Props {
    title: String
    icon?: String
    items: Array<SkillItem>
}

const props = defineProps<Props>()
const { title, items, icon } = props
const { t } = useI18n()
</script>

<template>
  <div :style="{gridArea: title}">
    <h5 class="text-h6 text-primary font-weight-bold mb-2">
      <v-icon v-if="icon" size="small" class="me-2">
        {{ icon }}
      </v-icon>
      <span>{{ t(`skill.${title}`) }}</span>
    </h5>
    <div class="ps-5">
      <v-row v-for="item in items" :key="item.key">
        <v-col>
          <a target="_blank" :href="item.url" class="font-weight-bold font-italic text-decoration-none text-white">{{ t(`skill.${item.key}`) }}</a>
        </v-col>
        <v-col>
          <v-rating
            v-model="item.rate"
            density="compact"
            empty-icon="mdi-record"
            full-icon="mdi-record"
            length="5"
            color="grey"
            active-color="primary"
            readonly
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
