<template>
  <div id="app">
    <div class="main-grid">
      <SliderContainer v-model:linkList="linkList" @changeActiveLink="changeActiveLink" />
      <RightNavbar v-model:linkList="linkList" @changeActiveLink="changeActiveLink" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RightNavbar from './components/RightNavbar.vue'
import { ref } from 'vue'

import type { ListItem } from './types'
import SliderContainer from './components/SliderContainer.vue';

const linkList = ref<Array<ListItem>>(
  [
    {
      name: 'start',
      text: 'Start',
      active: true,
      id: '0',
    },
    {
      name: 'skills',
      text: 'Skills',
      active: false,
      id: '1',
    },
    {
      name: 'experience',
      text: 'Experience',
      active: false,
      id: '2',
    },
    {
      name: 'projects',
      text: 'Projects',
      active: false,
      id: '3',
    },
    {
      name: 'contacts',
      text: 'Contacts',
      active: false,
      id: '4',
    },
  ]

)

function changeActiveLink(id: string): void {
  linkList.value.forEach((item) => {
    if (item.id === id) {
      item.active = true
    } else {
      item.active = false
    }
  })
}

</script>

<style scoped lang="scss">
.main-grid {
  display: grid;
  grid-template-columns: 1fr 390px;
  grid-template-rows: 100vh;
}
</style>
