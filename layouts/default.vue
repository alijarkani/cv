<script setup lang="ts">
import NavigationDrawer from '~/components/common/NavigationDrawer.vue'
import AppBar from '~/components/common/AppBar.vue'

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
    </div>
  </v-main>
</template>

<style>
.v-main {
    overflow: hidden;
}

.abstract-bg {
    position: relative;
    min-height: calc(100vh - 60px);
}

.abstract-bg:after {
    content: ' ';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background-position-x: center;
    background-position-y: bottom;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("/bg-01.png");
}

.content {
  position: relative;
  z-index: 1;
}
</style>
