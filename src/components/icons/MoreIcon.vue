<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="2" fill="currentColor" />
    <circle cx="14" cy="8" r="2" fill="currentColor" />
    <circle cx="2" cy="8" r="2" fill="currentColor" />
  </svg>
</template>

<script lang="ts">
import iconMixin from "../../mixins/iconMixin";

export default {
  name: "StarIcon",
  mixins: [iconMixin],
};
</script>
