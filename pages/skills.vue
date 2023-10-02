<script setup lang="ts">
import skills from '~/constants/skills.json'
import SkillsGroup from '~/components/usecase/SkillsGroup.vue'

const blocks = [
  'backend frontend',
  'scientific frontend',
  'devops frontend',
  'vcs frontend',
  'ai_libraries database',
]

const template = ref(blocks.map(e => `'${e}'`).join(' '))
const { t } = useI18n()

useSeoMeta({
  title: t('skill.title'),
  description: t('skill.description'),
})
</script>

<template>
  <v-container>
    <basic-heading>{{ t('skill.title') }}</basic-heading>
    <basic-paragraph>{{ t('skill.description') }}</basic-paragraph>
    <skills-group :template="template" :groups="skills" />
    <basic-paragraph class="mt-10 mb-16 font-italic">
      <v-icon>mdi-dots-horizontal-circle-outline</v-icon>
      {{ t('skill.more') }}
    </basic-paragraph>
  </v-container>
</template>
