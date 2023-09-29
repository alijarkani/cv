<script setup lang="ts">
import SkillsList from '~/components/usecase/SkillsList.vue'
import { SkillGroupItem } from '~/types/skill'

interface Props {
    groups: Array<SkillGroupItem>
    template: String
}

const display = useDisplay()

const props = defineProps<Props>()
const { groups, template } = props
</script>

<template>
  <div>
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
