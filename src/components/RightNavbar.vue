<template>
    <div class="right-navbar">
        <div class="right-navbar__links-container">
            <NavbarLinks v-model:linkList="linkListComputed" @changeActiveLink="onChangeActiveLink" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ListItem } from '@/types'

import NavbarLinks from './NavbarLinks.vue'

import canChangeSlides from '@/composables/canChangeSlide';
const emit = defineEmits(['update:linkList', 'changeActiveLink'])
const props = defineProps<{
    linkList: Array<ListItem>
}>()

const { linkListComputed,
    onChangeActiveLink,
} = canChangeSlides(props.linkList, emit)
</script>

<style scoped lang="scss"></style>