<script setup>
import { onMounted, ref } from 'vue'
import G from '@/gl/G'

const canvas = ref(null)

onMounted(() => {
  if (canvas.value) {
    G.create(canvas.value)
  }
})
</script>

<template>
  <canvas ref='canvas' id='canvas'></canvas>
</template>
