<template>
    <div class="slider">
        <div class="slider__container">
            <div v-for="slide in linkListComputed" @click="onChangeActiveLink(slide.id)">

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import canChangeSlide from '../composables/canChangeSlide'
import type { ListItem } from '../types'

const emit = defineEmits(['update:linkList', 'changeActiveLink'])
const props = defineProps<{
    linkList: Array<ListItem>
}>()

const { linkListComputed,
    onChangeActiveLink,
} = canChangeSlide(props.linkList, emit)

</script>

<style scoped lang="scss"></style>