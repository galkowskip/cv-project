<template>
  <div class="project-box">
    <template v-if="loading">
      <div class="project-box__skeleton"></div>
    </template>

    <template v-else>
      <div class="project-box__header">
        <h3 class="project-box__title">{{ project.name }}</h3>
        <a :href="project.html_url" target="_blank" class="project-box__action">
          View
        </a>
      </div>
      <p class="project-box__description" v-if="project.description">
        {{ project.description }}
      </p>
      <div class="project-box__footer">
        <div class="project-box__language" v-if="project.language">
          <span
            class="project-box__language-dot"
            :class="`project-box__language-dot--${project.language.toLowerCase()}`"
          ></span>
          <span class="project-box__language-name">{{ project.language }}</span>
        </div>
        <div class="project-box__stars">
          <span class="project-box__stars-icon">
            <StarIcon />
          </span>
          <span class="project-box__stars-count">{{
            project.stargazers_count
          }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from "vue";
import StarIcon from "./icons/StarIcon.vue";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const loading = ref(false);
</script>

<style scoped lang="scss">
.project-box {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  &__title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    margin-right: 16px;
  }
  &__action {
    font-size: 16px;
    line-height: 24px;
    color: #ffb800;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &__description {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__language {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;

    &-dot {
      width: 8px;
      height: 8px;
      position: absolute;
      left: 0;
      top: 10px;

      border-radius: 50%;
      background-color: #aaa;
      &--javascript {
        background-color: #f1e05a;
      }
      &--typescript {
        background-color: #3178c6;
      }
      &--html {
        background-color: #e34c26;
      }
      &--css {
        background-color: #563d7c;
      }
      &--vue {
        background-color: #75c05e;
      }
      &--scss {
        background-color: #c6538c;
      }
      &--python {
        background-color: #3572a5;
      }
      &--react {
        background-color: #61dafb;
      }
      &--php {
        background-color: #4f5d95;
      }
      &--go {
        background-color: #00add8;
      }
    }
    &-name {
      font-size: 16px;
      line-height: 24px;
      margin-left: 16px;
      font-weight: 400;
    }
  }
  &__stars {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    &-icon {
      width: 16px;
      height: 16px;
      margin-top: 3px;
      display: flex;
      align-items: center;
      background-size: cover;
      color: #ffb800;
    }
    &-count {
      font-size: 16px;
      line-height: 16px;
      font-weight: 400;
    }
  }
}
</style>
