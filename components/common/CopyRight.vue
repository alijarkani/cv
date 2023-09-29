<script setup lang="ts">
const year = (new Date()).getFullYear()
</script>

<template>
  <div class="d-flex flex-column flex-sm-row py-2 font-italic text-center">
    <span>© {{ year }} {{ $t('copyright.message') }}</span>
    <v-spacer />
    <span>
      {{ $t('copyright.design') }}
      <a
        class="text-decoration-none"
        href="https://en.wikipedia.org/wiki/Love"
        target="_blank"
        nofollow
      >
        <v-icon color="red" size="x-small">mdi-heart</v-icon>
      </a>
      {{ $t('copyright.design_by') }}
    </span>
  </div>
</template>

<style scoped>
div {
  background: #ffffff33;
  position: relative;
  z-index: 1;

  * {
    background: none;
  }
}
</style>
