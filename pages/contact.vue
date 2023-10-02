<script setup lang="ts">
import contact from '~/constants/contact.json'
import SocialMedia from '~/components/common/SocialMedia.vue'
const { t } = useI18n()

useSeoMeta({
  title: t('contact.title'),
  description: t('contact.message'),
})
</script>

<template>
  <v-container class="d-flex flex-column justify-center">
    <div>
      <v-row class="my-3" justify="center">
        <v-col cols="12" sm="7" md="6">
          <basic-heading>{{ t('contact.title') }}</basic-heading>
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
        <v-col cols="12" sm="5" md="4" class="pt-2 pt-sm-10">
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
                  <a
                    :href="`mailto:${contact.email}`"
                    class="text-white text-decoration-none"
                    rel="nofollow"
                  >
                    {{ contact.email }}
                  </a>
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
                  <a
                    href="https://www.google.com/maps/place/Isfahan,+Isfahan+Province,+Iran/@32.6624703,51.5222158,11z/data=!3m1!4b1!4m6!3m5!1s0x3fbc35fe8c326799:0x7ab57816ef5837f5!8m2!3d32.6538966!4d51.6659656!16zL20vMDFnazN4?entry=ttu"
                    class="text-white text-decoration-none"
                    target="_blank"
                    rel="nofollow"
                  >
                    {{ t(`contact.${contact.location}`) }}
                  </a>
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
