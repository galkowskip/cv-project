<template>
  <div id="app">
    123qwe
    <RightNavbar v-model:linkList="linkList" @changeActiveLink="changeActiveLink" />
  </div>
</template>

<script setup lang="ts">
import RightNavbar from './components/RightNavbar.vue'
import { ref } from 'vue'

import type { ListItem } from './types'

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

<style scoped></style>
