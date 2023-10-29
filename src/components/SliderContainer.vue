<template>
  <div class="slider">
    <div class="slider__container" ref="container">
      <div
        ref="slides"
        v-for="(slide, index) in linkList"
        @click="onChangeActiveLink(slide.id)"
        class="slide"
        :class="{
          'slide--active': slide.active,
          'slide--prev': prevSlideIndex === index,
          'slide--next':
            prevSlideIndex + 2 === index ||
            (prevSlideIndex + 2 === linkList.length && index === 0),
        }"
      >
        <slot :name="`item.${slide.name}`" v-bind="{ slide, index }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, nextTick, watch } from "vue";
import canChangeSlide from "../composables/canChangeSlide";
import type { ListItem } from "../types";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const emit = defineEmits([
  "update:linkList",
  "changeActiveLink",
  "update:progress",
]);
const props = defineProps<{
  linkList: Array<ListItem>;
}>();

const { linkListComputed, onChangeActiveLink } = canChangeSlide(
  props.linkList,
  emit
);

const activeSlideIndex = computed(() => {
  return linkListComputed.value.findIndex((slide) => slide.active);
});
const prevSlideIndex = computed(() => {
  return activeSlideIndex.value === 0
    ? linkListComputed.value.length - 1
    : activeSlideIndex.value - 1;
});

const container = ref<HTMLElement | null>(null);
const slides = ref<HTMLElement[]>([]);
const tl = ref<gsap.core.Timeline | null>(null);
const activeSliderItemIndexFromScroll = ref<number>(0);
activeSliderItemIndexFromScroll.value = activeSlideIndex.value;
const lockSlideChangeEventEmit = ref<boolean>(false);

watch(
  () => activeSlideIndex.value,
  (index) => {
    if (activeSliderItemIndexFromScroll.value === index) return;

    if (tl.value === null || tl.value.scrollTrigger === undefined) return;

    lockSlideChangeEventEmit.value = true;
    gsap.to(window, {
      scrollTo: tl.value.scrollTrigger.labelToScroll(`slide-${index}`),
      onComplete: () => {
        lockSlideChangeEventEmit.value = false;
      },
    });
  }
);

function scrollChangeActiveItem(index: number): void {
  activeSliderItemIndexFromScroll.value = index;
  if (lockSlideChangeEventEmit.value) return;
  onChangeActiveLink(linkListComputed.value[index].id);
}

function addOverflowToActiveElement(index: number | false): void {
  if (tl.value === null || tl.value.scrollTrigger === undefined) return;

  if (index === false) {
    slides.value.forEach((slide) => {
      slide.classList.remove("slide--locked");
    });

    return;
  } else {
    slides.value.forEach((slide, slideIndex) => {
      if (slideIndex === index) {
        slide.classList.add("slide--locked");
      } else {
        slide.classList.remove("slide--locked");
      }
    });
    return;
  }
}

function runAnimation(): gsap.core.Timeline | null {
  if (
    container.value === null ||
    !Array.isArray(slides.value) ||
    !slides.value.length
  )
    return null;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.value,
      start: "top top",
      end: `+=${slides.value.length * slides.value[0].offsetHeight}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,

      snap: {
        snapTo: "labels",
        duration: { min: 0.2, max: 0.5 },
      },
      onUpdate(self) {
        emit("update:progress", self.progress.toFixed(2));
      },
    },
  });

  tl.addLabel("start");

  slides.value.forEach((slide, index) => {
    tl.add(() => {
      scrollChangeActiveItem(index);
    });

    if (!index) {
      tl.set(slide, {
        xPercent: 0,
        opacity: 1,
      });
    } else {
      tl.fromTo(
        slide,
        {
          xPercent: -50,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
        }
      );
    }
    tl.add(() => {
      addOverflowToActiveElement(index);
    });
    tl.addLabel(`slide-${index}`);

    tl.addPause(1);

    tl.addLabel(`slide-${index}-end`, `+=${slide.offsetHeight}`);

    tl.add(() => {
      addOverflowToActiveElement(index);
    });

    if (index !== slides.value.length - 1) {
      tl.fromTo(
        slide,
        {
          xPercent: 0,
          opacity: 1,
        },
        {
          xPercent: 50,
          opacity: 0,
        }
      );
    }
    tl.add(() => {
      scrollChangeActiveItem(index);
    });
  });

  return tl;
}

function listenResize(): void {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      if (tl.value === null) {
        tl.value = runAnimation();
      }
    } else {
      if (tl.value !== null) {
        tl.value.kill();
        tl.value = null;
      }
    }
  });
}

onMounted(() => {
  nextTick(() => {
    window.innerWidth > 768 ? (tl.value = runAnimation()) : (tl.value = null);
    listenResize();
  });
});
</script>

<style scoped lang="scss">
.slider {
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    height: fit-content;
  }
}

.slider__container {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: white;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}

.slide {
  width: 100%;
  height: 100%;
  padding: 0 24px;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  cursor: default;
  transition: all 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  // opacity: 0;
  pointer-events: none;
  max-width: 100vw;

  @media (max-width: 768px) {
    position: static;
    pointer-events: all;
    max-height: unset;
  }

  &--active {
    //     z-index: 2;
    //     opacity: 1;
    pointer-events: all;
    //     transform: translateX(0);
  }
  &--locked {
    overflow-y: auto;
  }

  // &--prev {
  //     z-index: 0;
  //     transform: translateX(-100%);
  // }

  // &--next {
  //     z-index: 0;
  //     transform: translateX(100%);
  // }

  @media (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding: 48px 24px;
  }
}
</style>
