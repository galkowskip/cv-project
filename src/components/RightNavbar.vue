<template>
    <div class="right-navbar">
        <div class="right-navbar__links-container">
            <NavbarLinks :progress="progress" v-model:linkList="linkListComputed" @changeActiveLink="onChangeActiveLink" />
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
    progress: number
}>()

const { linkListComputed,
    onChangeActiveLink,
} = canChangeSlides(props.linkList, emit)
</script>

<style scoped lang="scss">
.right-navbar {
    position: relative;
    right: 0;
    top: 0;

    &__links-container {
        position: fixed;
        top: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1rem;
        background-color: #fff;
        z-index: 1;

        @media (max-width: 768px) {
            display: none;
        }
    }
}
</style>