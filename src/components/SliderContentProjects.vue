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
      <ProjectsTable />
    </template>
  </SliderContentContainer>
</template>

<script setup>
import SliderContentContainer from "./SliderContentContainer.vue";
import ProjectsTable from "./ProjectsTable.vue";
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
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
