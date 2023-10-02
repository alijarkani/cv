<script setup lang="ts">
import items from '~/constants/sidebar.json'
import SwitchLocale from '~/components/common/SwitchLocale.vue'
const { t } = useI18n()
const localePath = useLocalePath()
const display = useDisplay()
const buttons = items.filter(item => item.key !== 'home')

definePageMeta({
  layout: 'empty'
})

useSeoMeta({
  title: t('home.title'),
  description: t('home.description'),
})
</script>

<template>
  <v-container>
    <v-row class="my-10">
      <v-col class="ps-2 ps-md-16 my-3 text-center text-lg-start">
        <div class="text-primary page-title stylish" :class="{'huge-text': display.smAndUp.value}">
          <span>{{ t('owner.first_name') }}</span>
          <br>
          <span>{{ t('owner.last_name') }}</span>
        </div>
        <p class="text-h5 font-weight-bold font-italic mt-4">
          {{ t('owner.job') }}
        </p>
      </v-col>
      <v-col class="align-self-center my-3">
        <v-img class="mx-auto shaped" width="400" src="/images/full.jpeg" alt="Ali Jarkani" />
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-center mt-10 mb-4 nav-buttons">
      <v-col>
        <v-btn
          v-for="item in buttons"
          :key="item.key"
          :prepend-icon="item.icon"
          :to="localePath(item.to)"
          color="white"
          variant="tonal"
          size="x-large"
          class="font-weight-bold mx-sm-2 my-2"
          :block="display.xs.value"
        >
          {{ t(`sidebar.${item.key}`) }}
        </v-btn>

        <SwitchLocale>
          <template #activator="{ props }">
            <v-btn
              prepend-icon="mdi-translate"
              color="white"
              variant="tonal"
              size="x-large"
              class="font-weight-bold mx-sm-2 my-2"
              v-bind="props"
              :block="display.xs.value"
            >
              {{ t('language') }}
            </v-btn>
          </template>
        </SwitchLocale>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.page-title {
  font-size: 4rem;
  font-weight: bold;
}

.page-title.huge-text {
  font-size: 8rem;
}

.nav-buttons .v-btn {
  border: 1px solid #ffffff88;
  text-transform: none;
}

.v-img.shaped {
  position: relative;
  overflow: visible;
}

.shaped:before, .shaped:after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  border: 2px solid #ed553b;
  border-radius: 50%;
}

.shaped:before {
  top: 5%;
  right: -10px;
  width: 15px;
  height: 15px;
}

.shaped:after {
  top: 80%;
  left: -20px;
  animation-delay: 2s!important;
}

.shaped img {
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  animation-delay: 1s!important;
  border: 1px solid #ffffff88;
}

.shaped img, .shaped:before, .shaped:after {
  animation: float 10s ease-in-out infinite;
}

@keyframes float {
  0%, 100%  {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
}
</style>
