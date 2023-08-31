<template>
    <ul class="right-navbar__links-list">
        <li class="right-navbar__link" :class="{
            'right-navbar__link--active': item.active,
        }" v-for="item in linkListComputed" :key="item.id" @click="onLinkClick(item)">
            {{ item.text }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ListItem } from '../types'

const emit = defineEmits(['update:linkList', 'changeActiveLink'])
const props = defineProps<{
    linkList: Array<ListItem>
}>()

const linkListComputed = computed({
    get: () => props.linkList,
    set: (value) => emit('update:linkList', value),
})

function onLinkClick(item: ListItem): void {
    emit('changeActiveLink', item.id)
}

</script>

<style scoped lang="scss">
.right-navbar__link {
    &--active {
        color: red;
    }
}
</style>

