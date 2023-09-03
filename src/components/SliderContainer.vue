<template>
    <div class="slider">
        <div class="slider__container" ref="container">
            <div red="slide" v-for="(slide, index) in linkList" @click="onChangeActiveLink(slide.id)" class="slide" :class="{
                'slide--active': slide.active,
                'slide--prev': prevSlideIndex === index,
                'slide--next': prevSlideIndex + 2 === index || (prevSlideIndex + 2 === linkList.length && index === 0),
            }">
                {{ slide.text }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import canChangeSlide from '../composables/canChangeSlide'
import type { ListItem } from '../types'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const emit = defineEmits(['update:linkList', 'changeActiveLink'])
const props = defineProps<{
    linkList: Array<ListItem>
}>()

const { linkListComputed,
    onChangeActiveLink,
} = canChangeSlide(props.linkList, emit)

const prevSlideIndex = computed(() => {
    const activeSlideIndex = linkListComputed.value.findIndex((slide) => slide.active)
    return activeSlideIndex === 0 ? linkListComputed.value.length - 1 : activeSlideIndex - 1
})


function runAnimation() {
    gsap.registerPlugin(ScrollTrigger)

    const container = ref<HTMLElement | null>(null)
    const slides = ref<HTMLElement[]>([])

    if (container.value === null) return

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
            start: 'top top',
            end: `+=${slides.value.length * slides.value[0].offsetHeight}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            snap: {
                snapTo: 1 / (slides.value.length - 1),
                duration: 0.5,
            },
            onEnter: () => {
                slides.value.forEach((slide) => {
                    console.log('enter')
                    slide.style.removeProperty('transform')
                })
            },
        },
    })

    tl.to(slides.value, {
        xPercent: -100 * (slides.value.length - 1),
        ease: 'none',
        duration: 1,
    })
}

onMounted(() => {
    runAnimation()
})
</script>

<style scoped lang="scss">
.slider {
    width: 100%;
    height: 100%;
}

.slider__container {
    width: 100%;
    height: 100%;
    position: relative;
}

.slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    pointer-events: none;

    &--active {
        z-index: 2;
        opacity: 1;
        pointer-events: all;
        transform: translateX(0);
    }

    &--prev {
        z-index: 0;
        transform: translateX(-100%);
    }

    &--next {
        z-index: 0;
        transform: translateX(100%);
    }

}
</style>