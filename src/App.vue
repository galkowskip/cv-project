<template>
  <HeroSection />
  <div class="main-grid">
    <SliderContainer
      v-model:linkList="linkList"
      v-model:progress="timelineProgress"
      @changeActiveLink="changeActiveLink"
    >
      <template v-slot:item.skills="{ slide }">
        <SliderContentSkills :slide="slide" />
      </template>
      <template v-slot:item.experience="{ slide }">
        <SliderContentExperience :slide="slide" />
      </template>
      <template v-slot:item.projects="{ slide }">
        <SliderContentProjects :slide="slide" />
      </template>
      <template v-slot:item.blog="{ slide }">
        <SliderContentBlog :slide="slide" />
      </template>
      <template v-slot:item.contacts="{ slide }">
        <SliderContentContacts :slide="slide" />
      </template>
    </SliderContainer>
  </div>
  <GoBackSection />
</template>

<script setup lang="ts">
// import RightNavbar from './components/RightNavbar.vue'
import { ref } from "vue";

import type { ListItem } from "./types";
import SliderContainer from "./components/SliderContainer.vue";
import HeroSection from "./components/HeroSection.vue";
import GoBackSection from "./components/GoBackSection.vue";

import SliderContentSkills from "./components/SliderContentSkills.vue";
import SliderContentExperience from "./components/SliderContentExperience.vue";
import SliderContentProjects from "./components/SliderContentProjects.vue";
import SliderContentContacts from "./components/SliderContentContacts.vue";
import SliderContentBlog from "./components/SliderContentBlog.vue";

const timelineProgress = ref<number>(0);

const linkList = ref<Array<ListItem>>([
  {
    name: "skills",
    text: "Skills",
    active: false,
    id: "1",
  },
  {
    name: "experience",
    text: "Experience",
    active: false,
    id: "2",
  },
  {
    name: "projects",
    text: "Projects",
    active: false,
    id: "3",
  },
  {
    name: "blog",
    text: "Blog",
    active: false,
    id: "4",
  },
  {
    name: "contacts",
    text: "Contacts",
    active: false,
    id: "5",
  },
]);

function changeActiveLink(id: string): void {
  linkList.value.forEach((item) => {
    if (item.id === id) {
      item.active = true;
    } else {
      item.active = false;
    }
  });
}
</script>

<style scoped lang="scss">
@import "./assets/styles/variables.scss";
.main-grid {
  top: 600px;
  margin-top: 600px;
  margin-bottom: 100vh;
  min-height: fit-content;
  display: grid;
  grid-template-rows: 100vh;
  position: relative;
  @media (max-width: 768px) {
    // top: 0px;
  }
}
</style>
