<template>
  <div class="projects">
    <template v-if="isLoading">
      <div class="projects__loading">
        <Loader />
      </div>
    </template>
    <template v-else-if="projects.length && !projectsFetchError">
      <div class="projects__list">
        <ProjectBox
          v-for="project in activeProjects"
          :key="project.id"
          :project="project"
        />
      </div>
      <div class="projects__list-controler" v-if="displayListControllers">
        <button
          class="projects__list-controler-button"
          :disabled="currentPage === 1"
          @click="changeCurrentPage(currentPage - 1)"
        >
          <ChevronLeftIconVue />
        </button>

        <div class="projects__list-controler-pages">
          <span
            class="projects__list-controler-page"
            :class="{
              'projects__list-controler-page--active': currentPage === page,
            }"
            v-for="page in pages"
            @click="changeCurrentPage(page)"
          >
            {{ page }}
          </span>
        </div>

        <button
          class="projects__list-controler-button"
          :disabled="currentPage === pages"
          @click="changeCurrentPage(currentPage + 1)"
        >
          <ChevronRightIconVue />
        </button>
      </div>
    </template>
    <template v-else-if="projectsFetchError">
      <div class="projects__error">
        There was an error while fetching data. Please refresh this page.
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { GithubProject } from "../types";

import ProjectBox from "./ProjectBox.vue";
import Loader from "./icons/Loader.vue";

import ChevronLeftIconVue from "./icons/ChevronLeftIcon.vue";
import ChevronRightIconVue from "./icons/ChevronRightIcon.vue";

// GET: https://api.github.com/users/galkowskip/repos
let projects: GithubProject[] = [];

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

// control pages
const itemsPerPage = ref(6);

const displayListControllers = computed(() => {
  return projects.length > itemsPerPage.value &&
    !projectsFetchError.value &&
    !isLoading.value
    ? true
    : false;
});

const currentPage = ref(1);
const pages = computed(() => {
  return Math.ceil(projects.length / 4);
});
const activeProjects = computed(() => {
  return projects.slice(
    (currentPage.value - 1) * itemsPerPage.value,
    currentPage.value * itemsPerPage.value
  );
});

function changeCurrentPage(page: number) {
  if (page < 1 || page > pages.value) return;
  currentPage.value = page;
}

//OnMounted

onMounted(() => {
  getProjects();
});
</script>

<style lang="scss">
.projects {
  width: 100%;
  &__list {
    width: 100%;
    gap: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 130px);
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: unset;
    }
  }
  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 300px;
    color: var(--main-color);
  }
  &__error {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    min-height: 300px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
  }
  &__list-controler {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 24px;
    margin-left: auto;
    &-button {
      padding: 4px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      -webkit-appearance: none;
      color: var(--main-color);
      &:disabled {
        cursor: not-allowed;
        color: #aaa;
      }
    }
    &-pages {
      display: flex;
      align-items: center;
      gap: 8px;
      line-height: 16px;
      color: #000;
    }
    &-page {
      font-size: 16px;
      line-height: 24px;
      cursor: pointer;
      font-weight: 400;
      transition: color 0.2s ease-in-out;
      &:hover,
      &--active {
        color: var(--main-color);
      }
    }
  }
}
</style>
