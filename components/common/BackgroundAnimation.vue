<script setup lang="ts">
import type { Engine } from 'tsparticles-engine'
import { loadTrianglesPreset } from 'tsparticles-preset-triangles'

const particlesOptions = {
  particles: {
    move: {
      speed: 0.12
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 100
    },
  },
  preset: 'triangles',
}

async function particlesInit (engine: Engine): Promise<void> {
  await loadTrianglesPreset(engine)
}
</script>

<template>
  <Particles id="tsparticles" :particles-init="particlesInit" :options="particlesOptions" />
</template>

<style>
#tsparticles:after {
  content: ' ';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/pattern.png") repeat;
}

#tsparticles {
  opacity: .12;
}
</style>
