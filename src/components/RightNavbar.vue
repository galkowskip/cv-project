<template>
    <div class="right-navbar">
        <div class="right-navbar__links-container">
            <NavbarLinks v-model:linkList="linkListComputed" @changeActiveLink="onChangeActiveLink" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NavbarLinks from './NavbarLinks.vue'

import type { ListItem } from '../types'

const emit = defineEmits(['update:linkList', 'changeActiveLink'])
const props = defineProps<{
    linkList: Array<ListItem>
}>()

const linkListComputed = computed({
    get: () => props.linkList,
    set: (value) => emit('update:linkList', value),
})

function onChangeActiveLink(id: string): void {
    emit('changeActiveLink', id)
}
</script>

<style scoped lang="scss"></style>