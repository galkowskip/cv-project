<template>
  <SliderContentContainer>
    <template v-slot:title>Projects</template>
    <template v-slot:content>
      <div class="projects">
        <template v-if="isLoading"> Loading </template>
        <template v-if="projects.length && !projectsFetchError">
          <ul>
            <li v-for="project in projects" :key="project.id">
              <a :href="project.html_url" target="_blank">
                {{ project.name }}
              </a>
            </li>
          </ul>
        </template>
        <template v-if="projectsFetchError"> {{ `Error :(` }} </template>
      </div>
    </template>
  </SliderContentContainer>
</template>

<script setup>
import SliderContentContainer from "./SliderContentContainer.vue";
import { ref, onMounted } from "vue";

// GET: https://api.github.com/users/galkowskip/repos
let projects = [];
const projectsFetchError = ref(false);
const isLoading = ref(true);

const getProjects = async () => {
  try {
    isLoading.value = true;
    const response = await fetch(
      "https://api.github.com/users/galkowskip/repos"
    );
    projects = await response.json();
  } catch (error) {
    projectsFetchError.value = true;
  }

  isLoading.value = false;
};

onMounted(() => {
  getProjects();
});
</script>

<style scoped></style>
