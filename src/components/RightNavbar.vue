<template>
    <div class="right-navbar">
        <div class="right-navbar__avatar-container">
            <AvatarContainer />
        </div>
        <div class="right-navbar__links-container">
            <NavbarLinks :progress="progress" v-model:linkList="linkListComputed" @changeActiveLink="onChangeActiveLink" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ListItem } from '@/types'

import NavbarLinks from './NavbarLinks.vue'

import canChangeSlides from '@/composables/canChangeSlide';
import AvatarContainer from './AvatarContainer.vue';
const emit = defineEmits(['update:linkList', 'changeActiveLink'])
const props = defineProps<{
    linkList: Array<ListItem>
    progress: Number | String
}>()

const { linkListComputed,
    onChangeActiveLink,
} = canChangeSlides(props.linkList, emit)
</script>

<style scoped lang="scss">
.right-navbar {
    position: fixed;
    right: 0;
    top: 0;
    width: 280px;
    height: 100%;

    &__links-container {
        top: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1rem;
        background-color: #00677D;
        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            right: -200px;
            bottom: -200px;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background-color: transparent;
            background: radial-gradient(circle, rgb(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
            z-index: 10;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }
    &__avatar-container {
        position: absolute;
        top: 120px;
        left: -80px;
        z-index: 10;
    }
}
</style>