<template>
    <ul class="right-navbar__links-list">
        <li class="right-navbar__link" :class="{
            'right-navbar__link--active': item.active,
        }" v-for="item in linkListComputed" :key="item.id" @click="onChangeActiveLink(item.id)">
            {{ item.text }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { ListItem } from '@/types'
import canChangeSlides from '@/composables/canChangeSlide';

const emit = defineEmits(['update:linkList', 'changeActiveLink'])

const props = defineProps<{
    linkList: Array<ListItem>
}>()

const {
    linkListComputed,
    onChangeActiveLink,
} = canChangeSlides(props.linkList, emit)
</script>

<style scoped lang="scss">
.right-navbar__link {
    &--active {
        color: red;
    }
}
</style>

