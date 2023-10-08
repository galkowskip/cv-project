<template>
  <div class="slider-content">
    <h2 class="slider-content__title">
      <slot name="title"></slot>
    </h2>

    <div class="slider-content__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.slider-content {
  max-width: 100%;
  width: 800px;
  &__title {
    margin-bottom: 32px;
  }
}
</style>
