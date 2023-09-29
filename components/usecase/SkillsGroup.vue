<script setup lang="ts">
import SkillsList from '~/components/usecase/SkillsList.vue'
import { SkillGroupItem } from '~/types/skill'

interface Props {
    title: String
    groups: Array<SkillGroupItem>
    template: String
}

const display = useDisplay()

const props = defineProps<Props>()
const { title, groups, template } = props
</script>

<template>
  <div>
    <h4 class="text-h4 text-primary font-weight-bold font-italic mb-8">
      {{ $t(`skill.${title}`) }}
    </h4>
    <div class="ps-0 ps-md-10 d-flex flex-column" :class="{'grid-view': !display.mobile.value}" :style="{gridTemplateAreas: template}">
      <SkillsList
        v-for="group in groups"
        :key="group.title"
        class="mb-5 mb-md-0"
        :title="group.title"
        :icon="group.icon"
        :items="group.items"
      />
    </div>
  </div>
</template>

<style>
.grid-view {
  display: grid!important;
  row-gap: 10px;
}
</style>
