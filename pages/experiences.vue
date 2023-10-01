<script setup lang="ts">
import projects from '~/constants/projects.json'
import ProjectCard from '~/components/projects/ProjectCard.vue'
const { tm, rt, t } = useI18n()
const display = useDisplay()
</script>

<template>
  <v-container>
    <basic-heading>{{ t('experience.title') }}</basic-heading>

    <div class="my-5">
      <v-timeline side="end">
        <v-timeline-item
          v-for="(item, i) in tm('experience.items')"
          :key="i"
          size="small"
        >
          <template #opposite>
            <span v-if="display.smAndUp.value" class="font-italic" v-text="rt(item.date)" />
          </template>

          <v-card color="transparent">
            <v-card-title class="ps-0">
              {{ rt(item.title) }}
            </v-card-title>
            <v-card-subtitle class="font-weight-bold ps-0 text-wrap">
              {{ rt(item.position) }}
            </v-card-subtitle>
            <v-card-text v-if="display.xs.value" class="font-italic ps-0">
              {{ rt(item.date) }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>

    <basic-heading>{{ t('projects.title') }}</basic-heading>

    <v-row class="my-3">
      <v-col
        v-for="project in projects"
        :key="project.name"
        cols="12"
        sm="6"
        md="4"
        xl="3"
      >
        <ProjectCard :project="project" />
      </v-col>
    </v-row>

    <basic-paragraph class="mt-10 mb-16 font-italic">
      <v-icon>mdi-dots-horizontal-circle-outline</v-icon>
      {{ t('experience.more') }}
    </basic-paragraph>
  </v-container>
</template>
