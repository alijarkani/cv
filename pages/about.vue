<script setup lang="ts">
const display = useDisplay()
const { tm } = useI18n()
</script>

<template>
  <v-container class="pb-0">
    <v-row>
      <v-col cols="12" md="8" class="pb-0">
        <basic-heading>{{ $t('about.title') }}</basic-heading>

        <basic-paragraph>
          {{ $t('about.description') }}
        </basic-paragraph>

        <div>
          <v-chip
            v-for="label in tm('about.labels')"
            :key="label"
            class="me-1 mb-1"
          >
            {{ label.loc.source }}
          </v-chip>
        </div>
      </v-col>
      <v-col v-if="display.mdAndUp.value" cols="12" md="4" class="image-box" :class="{'push-down': display.md.value}">
        <v-img width="300" class="mx-auto grayscale" src="/body.png" />
      </v-col>
    </v-row>

    <v-row class="my-5">
      <v-col>
        <basic-heading>{{ $t('education.title') }}</basic-heading>
        <v-table>
          <thead class="font-italic">
            <tr>
              <th>{{ $t('education.grade') }}</th>
              <th>{{ $t('education.major') }}</th>
              <th>{{ $t('education.university') }}</th>
              <th>{{ $t('education.location') }}</th>
              <th>{{ $t('education.date') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in tm('education.items')" :key="item.grade.loc.source">
              <td>{{ item.grade.loc.source }}</td>
              <td>{{ item.major.loc.source }}</td>
              <td>{{ item.university.loc.source }}</td>
              <td>{{ item.location.loc.source }}</td>
              <td>{{ item.date.loc.source }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

    <div v-if="display.smAndDown.value" class="mt-5">
      <v-img max-width="300" class="mx-auto grayscale" src="/body.png" />
    </div>
  </v-container>
</template>

<style>
th {
  font-weight: bold!important;
  color: white!important;
}

.grayscale img {
  filter: grayscale(1);
  transition: filter 0.5s ease;
}

.grayscale img:hover {
  filter: grayscale(0);
}

.image-box {
  margin-bottom: -100px;
}
.image-box.push-down {
  margin-top: 45px;
}

.v-table {
  position: relative;
  z-index: 1;
}
</style>
