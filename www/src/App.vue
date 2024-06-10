<script setup>
import Header from './core/components/Header.vue'
import { ref, watch, onMounted } from 'vue'
import { client } from '@/config/Sanity'
import { main } from '@/core/stores/main'

const query = `*[_type=='main']`

onMounted(async () => {
  await client.fetch(query).then(t => {
    main.data = t[0]
  })
})
</script>

<template>
  <template v-if='main.data'>
    <main id='main' class='m'>
      <Header />
      <RouterView />
    </main>
  </template>
</template>

<style lang='scss'>
.m {
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
