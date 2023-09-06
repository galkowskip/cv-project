<template>
    <ul class="right-navbar__links-list">
        <div class="right-navbar__progress-indicator progress-indicator">
            <div class="progress-indicator__progress" :style="{
                transform: `scaleY(${progress})`,
            }"></div>
        </div>
        <li class="right-navbar__link" :class="{
            'right-navbar__link--active': item.active,
        }" v-for="item in linkListComputed" :key="item.id" @click="onChangeActiveLink(item.id)">
            {{ item.text }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { ListItem } from '@/types'
import canChangeSlides from '@/composables/canChangeSlide';

const emit = defineEmits(['update:linkList', 'changeActiveLink'])

const props = defineProps<{
    linkList: Array<ListItem>
    progress: Number | String
}>()

const {
    linkListComputed,
    onChangeActiveLink,
} = canChangeSlides(props.linkList, emit)
</script>

<style scoped lang="scss">
.right-navbar {
    &__link {
        &--active {
            color: red;
        }
    }
    &__links-list {
        position: relative;
    }
    .progress-indicator {
        position: absolute;
        top: -8px;
        left: 0;
        width: 20px;
        height: 100%;
        background-color: #fff;
        z-index: 1;

        &__progress {
            height: 100%;
            background-color: red;
            transform-origin: top center;
            transform: scaleY(0);
            transition: transform 0.3s ease-in-out;
        }
    }
}
</style>

