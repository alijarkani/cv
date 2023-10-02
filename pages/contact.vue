<script setup lang="ts">
import contact from '~/constants/contact.json'
import SocialMedia from '~/components/common/SocialMedia.vue'
const { t } = useI18n()
</script>

<template>
  <v-container class="d-flex flex-column justify-center">
    <div>
      <basic-heading>{{ t('contact.title') }}</basic-heading>
      <v-row class="my-3">
        <v-col cols="12" sm="6">
          <basic-paragraph>
            {{ t('contact.message') }}
          </basic-paragraph>
          <v-form :action="`mailto:${contact.email}`">
            <v-text-field
              variant="solo-filled"
              :label="t('contact.form.subject')"
              name="subject"
            />

            <v-textarea
              variant="solo-filled"
              :label="t('contact.form.message')"
              name="body"
            />

            <v-btn
              class="font-weight-bold"
              color="primary"
              type="submit"
            >
              {{ t('contact.form.send') }}
            </v-btn>
          </v-form>
        </v-col>
        <v-col cols="12" sm="6">
          <v-list lines="three" class="bg-transparent contact">
            <v-list-item>
              <template #prepend>
                <v-icon color="primary">
                  mdi-at
                </v-icon>
              </template>
              <template #title>
                <v-list-item-title class="text-primary font-italic">
                  {{ t('contact.email') }}
                </v-list-item-title>
              </template>
              <template #subtitle>
                <v-list-item-title color="primary">
                  {{ contact.email }}
                </v-list-item-title>
              </template>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <template #prepend>
                <v-icon color="primary">
                  mdi-map-marker
                </v-icon>
              </template>
              <template #title>
                <v-list-item-title class="text-primary font-italic">
                  {{ t('contact.location') }}
                </v-list-item-title>
              </template>
              <template #subtitle>
                <v-list-item-title color="primary">
                  {{ t(`contact.${contact.location}`) }}
                </v-list-item-title>
              </template>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <template #prepend>
                <v-icon color="primary">
                  mdi-phone
                </v-icon>
              </template>
              <template #title>
                <v-list-item-title class="text-primary font-italic">
                  {{ t('contact.phone') }}
                </v-list-item-title>
              </template>
              <template #subtitle>
                <v-list-item-title color="primary">
                  {{ contact.phone }}
                </v-list-item-title>
              </template>
            </v-list-item>
          </v-list>
          <SocialMedia />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style>
.v-container {
  min-height: calc(100vh - 100px);
}
.contact .v-list-item__prepend {
  align-self: center;
}
</style>
