<template>
    <div class="hero-animation">
        <div ref="animationItem" class="hero-animation__item" v-for="item in 40"></div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"
import { ref } from "vue"

const animationItems = ref()

function runAnnimation(): void {


    
}

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
    background-color: rgb(24, 24, 24);
    display: grid;
    z-index: -1;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 150px);
    gap: 22px;

    &__item {
        width: 100%;
        height: 100%;
        border: 1px solid #FFB800;
        opacity: 0.2;
        border-radius: 8px;
        transform: rotateX(0deg) rotateY(0deg);

    }
}
</style>