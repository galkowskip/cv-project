<template>
  <SliderContentContainer class="slider-content--experiences">
    <template v-slot:title>Experience</template>
    <template v-slot:content>
      <div class="experiences">
        <div class="experience" v-for="(item, index) in experiences">
          <div class="experience__content">
            <div class="experience__name">
              {{ item.company }} - {{ item.position }}
            </div>
            <div class="experience__value">{{ item.from }} - {{ item.to }}</div>
          </div>
          <div class="experience__description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </template>
  </SliderContentContainer>
</template>

<script setup>
import SliderContentContainer from "./SliderContentContainer.vue";

const experiences = [
  {
    position: "Frontend Developer",
    company: "RS Studio",
    from: "August 2021",
    to: "Present",
    description:
      "As a skilled Frontend Developer, I have successfully created and developed several applications using Vue and Nuxt. Working in teams, I collaborated closely with backend developers to produce customized applications that met the unique needs of our clients. My contributions have led to the successful completion of numerous projects.",
  },

  {
    position: "Junior Frontend Developer",
    company: "RS Studio",
    from: "November 2020",
    to: "August 2021",
    description:
      "I have been responsible for integrating client websites into custom WHMCS templates and developing Laravel-based websites. I have also created and prepared WHMCS modules for clients, showcasing my expertise in web development and client management.",
  },
  {
    position: "Junior Frontend Developer",
    company: "Interactive Vision",
    from: "April 2020",
    to: "June 2020",
    description:
      "During my Junior Frontend Developer Internship, I had the opportunity to work with technologies like Vue.js and React. I was responsible for creating websites for the company's clients, showcasing my skills in front-end development, design, and user experience. I was able to learn from experienced developers and gain valuable experience in the industry. It was an exciting and rewarding experience that solidified my passion for web development.",
  },
];
</script>

<style scoped lang="scss">
.slider-content {
  &--experiences {
    .experiences {
      display: flex;
      flex-direction: column;
      gap: 48px;
      .experience {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .experience__content {
          display: flex;
          align-content: center;
          justify-content: space-between;
          @media (max-width: 768px) {
            flex-direction: column;
            gap: 8px;
          }
        }
        .experience__name {
          font-size: 22px;
          font-weight: 600;
        }
        .experience__value {
          font-size: 18px;
          font-weight: 400;
        }
        .experience__description {
          font-size: 16px;
          font-weight: 400;
          text-align: justify;
        }
      }
    }
  }
}
</style>
