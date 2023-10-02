<template>
    <div class="back-section">
        <div class="back-section__container">
            <div @click="scrollToTop()">
                Go to top
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap"

function scrollToTop(): void {
    gsap.to(window, {
        scrollTo: 0
    })
}
</script>

<style lang="scss">
.back-section {
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    background-color: #00677D;

    &__container {

        left: 0;
        bottom: 0;
        z-index: -10;
        width: 100%;
        height: 100%;
    }
}
</style>