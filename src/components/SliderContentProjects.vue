<template>
  <SliderContentContainer class="slider-content--projects">
    <template v-slot:title
      >Projects
      <a
        href="https://github.com/galkowskip?tab=repositories"
        target="_blank"
        class="action"
      >
        View all
      </a>
    </template>
    <template v-slot:content>
      <div class="projects">
        <template v-if="isLoading"> Loading </template>
        <template v-if="projects.length && !projectsFetchError">
          <div class="projects__list">
            <a
              v-for="project in projects"
              :key="project.id"
              :href="project.html_url"
              target="_blank"
              class="project"
            >
              {{ project.name }}
            </a>
          </div>
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

<style scoped lang="scss">
.slider-content {
  &--projects {
    // title
    .slider-content__title {
      .action {
        font-size: 22px;
        color: #ffb800;
        text-decoration: none;
        margin-left: auto;
        &:hover {
        }
      }
    }
    .projects {
      &__list {
        width: 100%;
        gap: 24px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .project {
          display: block;
        }
      }
    }
  }
}
</style>
1
