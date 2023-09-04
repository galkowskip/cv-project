<template>
    <div class="slider">
        <div class="slider__container" ref="container">
            <div ref="slides" v-for="(slide, index) in linkList" @click="onChangeActiveLink(slide.id)" class="slide" :class="{
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
import { computed, onMounted, ref, nextTick } from 'vue';
import canChangeSlide from '../composables/canChangeSlide'
import type { ListItem } from '../types'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const emit = defineEmits(['update:linkList', 'changeActiveLink', 'update:progress'])
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


const container = ref<HTMLElement | null>(null)
const slides = ref<HTMLElement[]>([])

const tl = ref<gsap.core.Timeline | null>(null)

function runAnimation(): gsap.core.Timeline | null {
    gsap.registerPlugin(ScrollTrigger)

    if (container.value === null || !Array.isArray(slides.value) || !slides.value.length) return null

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container.value,
            start: 'top top',
            end: `+=${slides.value.length * slides.value[0].offsetHeight}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            
            snap: {
                snapTo: 'labels',
                duration: { min: 0.2, max: 0.5 },
            },
            onUpdate(self) {
                emit('update:progress', self.progress.toFixed(2))
            }
        },
    })

    tl.addLabel('start')

    slides.value.forEach((slide, index) => {
        tl.add(() => {
            onChangeActiveLink(linkListComputed.value[index].id)
        })
        if (!index) {
            tl.set(slide, {
                yPercent: 0,
                opacity: 1,
            })
        } else {
            tl.fromTo(slide, {
                yPercent: -50,
                opacity: 0,
            }, {
                yPercent: 0,
                opacity: 1,
            })
        }

        tl.addLabel(`slide-${index}`)
        tl.addPause(1)

        tl.addLabel(`slide-${index}-end`, `+=${slide.offsetHeight}`)

        if (index !== slides.value.length - 1) {
            tl.fromTo(slide, {
                yPercent: 0,
                opacity: 1,
            }, {
                yPercent: 50,
                opacity: 0,
            })
        }
        tl.add(() => {
            onChangeActiveLink(linkListComputed.value[index].id)
        })
    })

    return tl
}

onMounted(() => {
    nextTick(() => {
        tl.value = runAnimation()

        
    })
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
    // opacity: 0;
    // pointer-events: none;

    // &--active {
    //     z-index: 2;
    //     opacity: 1;
    //     pointer-events: all;
    //     transform: translateX(0);
    // }

    // &--prev {
    //     z-index: 0;
    //     transform: translateX(-100%);
    // }

    // &--next {
    //     z-index: 0;
    //     transform: translateX(100%);
    // }

}
</style>