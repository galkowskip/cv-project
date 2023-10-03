<template>
    <div class="hero-section">
        <div class="hero-section__container">
            <div class="hero-section__content">
                <div class="hero-section__title">
                    Hi, I'm <span class="hero-section__title--highlighted">Paweł Gałkowski</span>
                </div>
                <div class="hero-section__text">
                    I'm a <span class="hero-section__text--highlighted">Frontend Developer,</span> and this is my resume.
                </div>
            </div>
            <div class="hero-section__background">
                <img src="../assets/images/hero-section-background.png" alt="hero section background">
            </div>
        </div>
        <HeroAnimation />
    </div>
</template>

<script setup>
import HeroAnimation from './animations/HeroAnimation.vue';
</script>

<style scoped lang="scss">
.hero-section {
    min-height: 600px;

    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: rgb(24, 24, 24);

    &__container {
        max-width: 1440px;
        padding: 120px 48px;
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
    }

    &__content {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    &__title {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 59px;
        color: white;
        margin-bottom: 16px;

        &--highlighted {
            color: #FFB800;
        }
    }

    &__text {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: white;

        &--highlighted {
            color: #FFB800;
        }
    }

    &__background {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 320px;
            width: 320px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0px 0px 12px 0px rgba(244, 244, 244, 0.25);
        }
    }

    @media (max-width: 670px) {
        padding: 100px 24px;
        height: 300px;

        &__title {
            font-size: 32px;
            line-height: 39px;
        }

        &__text {
            font-size: 18px;
            line-height: 22px;
        }
    }
}
</style>