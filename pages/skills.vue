<script setup lang="ts">
import skills from '~/constants/skills.json'
import SkillsGroup from '~/components/usecase/SkillsGroup.vue'

const blocks = [
  'backend frontend',
  'scientific frontend',
  'devops frontend',
  'ai_libraries vcs',
  'ai_libraries database',
]

const template = ref(blocks.map(e => `'${e}'`).join(' '))
</script>

<template>
  <v-container>
    <h4 class="text-h4 text-primary font-weight-bold font-italic mb-8">
      {{ $t('sidebar.skills') }}
    </h4>
    <skills-group :template="template" :groups="skills" />
    <basic-paragraph class="mt-10 mb-16 font-italic">
      <v-icon>mdi-dots-horizontal-circle-outline</v-icon>
      {{ $t('skill.more') }}
    </basic-paragraph>
  </v-container>
</template>
