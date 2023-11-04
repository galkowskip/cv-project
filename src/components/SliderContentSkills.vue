<template>
  <SliderContentContainer class="slider-content--skills" id="skills-section">
    <template v-slot:title>Skills</template>
    <template v-slot:content>
      <div class="skills">
        <div
          class="skill"
          v-for="(item, index) in skills"
          :key="`${item.name}-${index}`"
        >
          <div class="skill__content">
            <div class="skill__name">{{ item.name }}</div>
            <div class="skill__value">
              <StarIndicator :count="Number(item.value)" />
            </div>
          </div>
          <div class="skill__description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </template>
  </SliderContentContainer>
</template>

<script setup>
import SliderContentContainer from "./SliderContentContainer.vue";
import StarIndicator from "./StarIndicator.vue";

const skills = [
  {
    name: "HTML",
    value: "4",
    description:
      "Proficient in creating accessible web pages using HTML5 newset standards. Familiar with good SEO practices and able to create web pages that are optimized for search engines.",
  },
  {
    name: "CSS",
    value: "4",
    description:
      "Experienced in writing clean, maintainable CSS using modern CSS frameworks such as Tailwind and Bootstrap. Able to create responsive web pages that look great on all devices.",
  },
  {
    name: "JavaScript",
    value: "4",
    description:
      "Knowledgeable in writing clean, maintainable JavaScript code using modern ES6+ syntax. Able to create dynamic and interactive web pages that engage users.",
  },

  {
    name: "Vue",
    value: "4",
    description:
      "Skillful in Vue.js and its component-based architecture. Experienced in using Vue 3 and Nuxt.js to build scalable and performant web applications. Also familiar with Vuex and Vue Router and able to use them to build complex web applications.",
  },
  {
    name: "React",
    value: "3",
    description:
      "Adept with React's architecture, able to create complex components and use them to build scalable and performant web applications.",
  },
  {
    name: "Node",
    value: "2",
    description:
      "Familiar with Node.js and its event-driven, non-blocking I/O model. Able to build scalable and performant server-side applications using Node.js. Continuously learning and improving my Node.js skills.",
  },
];
</script>

<style scoped lang="scss">
.slider-content {
  &--skills {
    .skills {
      display: flex;
      flex-direction: column;
      gap: 24px;
      .skill {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .skill__content {
          display: flex;
          align-content: center;
          justify-content: space-between;
        }
        .skill__name {
          font-size: 22px;
          font-weight: 600;
        }
        .skill__value {
          font-size: 18px;
          font-weight: 400;
          color: var(--main-color);
        }
        .skill__description {
          font-size: 16px;
          font-weight: 400;
          text-align: justify;
        }
      }
    }
  }
}
</style>
