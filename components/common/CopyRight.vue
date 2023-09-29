<script setup lang="ts">
const year = (new Date()).getYear() + 1900
</script>

<template>
  <div class="d-flex flex-column flex-sm-row py-2 font-italic">
    <span>© {{ year }} {{ $t('copyright.message') }}</span>
    <v-spacer />
    <span>
      {{ $t('copyright.design') }}
      <a href="https://en.wikipedia.org/wiki/Love" target="_blank" nofollow="">
        <v-icon color="red" size="x-small">mdi-heart</v-icon>
      </a>
      {{ $t('copyright.design_by') }}
    </span>
  </div>
</template>

<style scoped>
div {
  background: #ffffff33;
  * {
    background: none;
  }
}
</style>
