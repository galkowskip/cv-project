<template>
  <div class="hero-section">
    <div class="hero-section__container">
      <div class="hero-section__content">
        <div class="hero-section__title">
          Hi, I'm
          <span class="hero-section__title--highlighted">Paweł Gałkowski</span>
        </div>
        <div class="hero-section__text">
          I'm a
          <span class="hero-section__text--highlighted"
            >Frontend Developer,</span
          >
          and this is my resume.
        </div>
        <p class="hero-section__paragraph">
          I am a Frontend Developer with 3 years of experience but my interest
          in programming runs much deeper than that. In commercial and private
          projects my go-to Frontend frameworks are Vue and React. I have a
          passion for learning new technologies, I’m always aspiring to better
          myself as a programmer and I do not stop my interests at Frontend
          technologies.
        </p>
      </div>
      <div class="hero-section__background">
        <img
          src="../assets/images/hero-section-background.png"
          alt="hero section background"
        />
      </div>
    </div>
    <div class="hero-section__fab">
      <button @click="scrollToSkillsSection()">
        <ArrowIcon size="24" />
      </button>
    </div>
    <!-- <HeroAnimation /> -->
  </div>
</template>

<script setup lang="ts">
import ArrowIcon from "./icons/ArrowIcon.vue";

// import HeroAnimation from './animations/HeroAnimation.vue';

function scrollToSkillsSection() {
  const skillsSection = document.getElementById("skills-section");
  if (skillsSection) {
    skillsSection.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped lang="scss">
.hero-section {
  min-height: 600px;

  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--dark-color);
  overflow: visible;

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
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    color: white;
    margin-bottom: 16px;

    &--highlighted {
      color: var(--main-color);
    }
  }

  &__text {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: white;

    &--highlighted {
      color: var(--main-color);
    }
  }
  &__paragraph {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    opacity: 0.6;
    color: white;
    text-align: justify;
    font-style: italic;
    margin-top: 24px;
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

  &__fab {
    position: absolute;
    bottom: -24px;
    right: calc(50% - 24px);
    z-index: 10;

    button {
      background-color: var(--main-color);
      border: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 0px 12px 0px rgba(244, 244, 244, 0.25);
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 8px 0px var(--main-color);
      }
    }
  }

  @media (max-width: 992px) {
    min-height: unset;

    &__background {
      img {
        height: 300px;
        width: 300px;
      }
    }
  }
  @media (max-width: 768px) {
    &__container {
      padding: 60px 24px;
      height: 100%;
    }
    &__background {
      img {
        height: 280px;
        width: 280px;
      }
    }
  }

  @media (max-width: 670px) {
    &__container {
      padding: 60px 24px;
      margin: auto 0px;
      grid-template-columns: 1fr;
      gap: 48px;
    }
    &__background {
      img {
        height: 200px;
        width: 200px;
      }
    }

    &__title {
      font-size: 32px;
      line-height: 39px;
    }

    &__text {
      font-size: 18px;
      line-height: 22px;
    }
    &__paragraph {
      font-size: 14px;
    }
  }
}
</style>
