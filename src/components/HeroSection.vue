<template>
    <div class="hero-section">
        <div class="hero-section__container">
            <div class="hero-section__title">
                Hi, I'm <span class="hero-section__title--highlighted">Paweł Gałkowski</span>
            </div>
            <div class="hero-section__text">
                I'm a <span class="hero-section__text--highlighted">Frontend Developer,</span> and this is my resume.
            </div>
        </div>
        <div class="hero-section__background">
            <img src="../assets/images/hero-section-background.svg" alt="hero section background">
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero-section {
    height: 600px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-color: #286675;
    padding: 200px 48px;
    display: flex;
    flex-direction: column;

    &__container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    &__title {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 800;
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
        margin-bottom: 32px;

        &--highlighted {
            color: #FFB800;
        }
    }
}
</style>