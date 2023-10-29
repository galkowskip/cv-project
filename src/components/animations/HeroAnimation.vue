<template>
  <div class="hero-animation">
    <div
      ref="animationItems"
      class="hero-animation__item"
      v-for="item in 10"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const animationItems = ref<[HTMLElement] | undefined>();

function runAnnimation(): void {
  if (animationItems.value === undefined) return;

  const elements = animationItems.value;

  elements.forEach((element, index) => {
    gsap.set(element, {
      x: `${index * (element.clientWidth + 50)}`,
      rotate: "45deg",
    });
  });

  gsap.fromTo(
    elements,
    {
      y: "-100%",
    },
    {
      duration: 1,
      y: "100%",
      x: "+=100",
      ease: "power2.inOut",
      onComplete() {
        // gsap.fromTo(
        //   elements,
        //   {},
        //   {
        //     duration: 3,
        //     ease: "linear",
        //     onComplete() {
        //       runAnnimation();
        //     },
        //   }
        // );
      },
    }
  );
}

onMounted(() => {
  runAnnimation();
});

runAnnimation();
</script>

<style scoped lang="scss">
.hero-animation {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: var(--dark-color);
  z-index: -1;
  &__item {
    width: 10%;
    transform: rotateX(45deg);
    background-color: var(--main-color);
    opacity: 0.1;
    position: absolute;
    height: 120%;
    transform-style: preserve-3d;
    transform-origin: center center;
  }
}
</style>
