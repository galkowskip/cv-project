<template>
    <div class="hero-animation">
        <div class="hero-animation__item" v-for="item in 40"></div>
    </div>
</template>

<style scoped lang="scss">
.hero-animation {
    width: 100%;
    height: 100%;
    position: sticky;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: rgb(24, 24, 24);
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 1fr);
    transform: rotateZ(45deg);

    &__item {
        width: 100%;
        height: 100%;
        border: 1px solid #FFB800;
        border-radius: 8px;
    }
}
</style>