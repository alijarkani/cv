<script setup lang="ts">
interface Props {
  src: String
}

defineProps<Props>()
</script>

<template>
  <v-dialog max-width="800" width="90%" scrollable>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        variant="text"
      >
        {{ $t('projects.preview') }}
      </v-btn>
    </template>

    <template #default="{ isActive }">
      <v-card class="position-relative" color="transparent">
        <v-btn class="ma-2 close-btn" color="white" variant="tonal" icon="mdi-close" @click="isActive.value = false" />

        <v-img :src="src">
          <template #placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="grey-lighten-4"
                indeterminate
              />
            </div>
          </template>
        </v-img>
      </v-card>
    </template>
  </v-dialog>
</template>

<style>
.v-btn.close-btn {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.close-btn .v-btn__underlay {
  background: black!important;
  opacity: .22!important;
}
</style>
