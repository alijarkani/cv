<script setup lang="ts">
import ProjectPreview from '~/components/projects/ProjectPreview.vue'
import { Project } from '~/types/project'

interface Props {
  project: Project
}

defineProps<Props>()
const { t } = useI18n()
</script>

<template>
  <v-card
    max-width="350"
    class="mx-auto"
  >
    <v-img
      v-if="project.thumbnail"
      :src="project.thumbnail"
      height="200px"
      cover
      :alt="t(`projects.${project.name}.title`)"
    />

    <v-card-title>
      {{ t(`projects.${project.name}.title`) }}
    </v-card-title>

    <v-card-subtitle>
      {{ t(`projects.${project.name}.subtitle`) }}
    </v-card-subtitle>

    <v-card-text>
      <p>{{ t('projects.role') }}: {{ t(`projects.roles.${project.role}`) }}</p>

      <v-chip-group class="mt-2" variant="outlined">
        <v-chip v-for="tag in project.tags" :key="tag" class="ma-1">
          {{ t(`projects.tags.${tag}`) }}
        </v-chip>
      </v-chip-group>
    </v-card-text>

    <v-divider />

    <v-card-actions class="py-1">
      <ProjectPreview v-if="project.image" :src="project.image" />

      <v-spacer />

      <v-btn
        v-if="project.url"
        :href="project.url"
        target="_blank"
        size="small"
        icon="mdi-web"
        nofollow
      />
    </v-card-actions>
  </v-card>
</template>

<style>
.v-chip-group {
  height: 84px;
  overflow: hidden;
}
</style>
