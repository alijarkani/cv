<script setup lang="ts">
import NavigationDrawer from '~/components/common/NavigationDrawer.vue'
import AppBar from '~/components/common/AppBar.vue'
import CopyRight from '~/components/common/CopyRight.vue'

const display = useDisplay()
</script>

<template>
  <v-main>
    <NavigationDrawer />
    <AppBar v-if="display.height.value && display.mobile.value" />
    <div class="abstract-bg pt-2 pt-lg-10 px-lg-4">
      <div class="content">
        <slot />
      </div>
      <CopyRight class="mx-n4 px-8" />
    </div>
  </v-main>
</template>

<style>
.v-main {
    overflow: hidden;
}

.abstract-bg {
    position: relative;
}

.abstract-bg:after {
    content: ' ';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.05;
    background-position: left bottom;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/bg-01.png");
}

.content {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 80px);
}
</style>
