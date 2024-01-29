<template>
  <SliderContentContainer class="slider-content--experiences">
    <template v-slot:title>Experience</template>
    <template v-slot:content>
      <div class="experiences">
        <ExperienceListItem v-for="(item, index) in experiences" :key="index" :position="item.position" :image="item.image"
          :company="item.company" :from="item.from" :to="item.to" :description="item.description" />
      </div>
    </template>
  </SliderContentContainer>
</template>

<script setup>
import ExperienceListItem from "./ExperienceListItem.vue";
import SliderContentContainer from "./SliderContentContainer.vue";

const experiences = [
  {
    image: "all-windows-group.png",
    position: "Frontend Developer",
    company: "All Windows Group",
    from: "January 2024",
    to: "Present",
    description: "I've joined a team of developers working on creating a cutting edge software for a company producing windows and doors. I'm responsible for creating a frontend part of the application using Vue.js from scratch."
  },
  {
    image: "rs-studio.jpeg",
    position: "Frontend Developer",
    company: "RS Studio",
    from: "August 2021",
    to: "November 2023",
    description:
      "As a skilled Frontend Developer, I have successfully created and developed several applications using Vue and Nuxt. Working in teams, I collaborated closely with backend developers to produce customized applications that met the unique needs of our clients. My contributions have led to the successful completion of numerous projects.",
  },
  {
    image: "rs-studio.jpeg",
    position: "Junior Frontend Developer",
    company: "RS Studio",
    from: "November 2020",
    to: "August 2021",
    description:
      "I have been responsible for integrating client websites into custom WHMCS templates and developing Laravel-based websites. I have also created and prepared WHMCS modules for clients, showcasing my expertise in web development and client management.",
  },
  {
    image: "interactive-vision.png",
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
    }
  }
}
</style>
