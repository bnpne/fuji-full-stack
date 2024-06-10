<script setup>
import { onMounted } from 'vue'
import { main } from '@/core/stores/main'

onMounted(() => {
  console.log(main)
})
</script>

<template>
  <div id='page' class='h'>
    <div></div>
  </div>
</template>

<style lang='scss'>
.h {
  flex-grow: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
