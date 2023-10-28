<template>
  <svg
    v-if="size === '16'"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00001 3.13262L9.01422 6.25405L9.0928 6.4959H9.34709H12.6292L9.97391 8.42505L9.76819 8.57452L9.84677 8.81636L10.861 11.9378L8.20573 10.0086L8.00001 9.85917L7.79428 10.0086L5.13904 11.9378L6.15325 8.81636L6.23183 8.57452L6.02611 8.42505L3.37086 6.4959H6.65293H6.90722L6.9858 6.25405L8.00001 3.13262Z"
      stroke="currentColor"
      stroke-width="0.7"
    />
  </svg>
  <svg
    v-else-if="size === '24'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.4632 4.61803L14.2216 10.0299L14.3338 10.3754H14.6971H20.3875L15.7839 13.7201L15.49 13.9336L15.6022 14.2791L17.3607 19.691L12.7571 16.3463L12.4632 16.1327L12.1693 16.3463L7.56566 19.691L9.32408 14.2791L9.43634 13.9336L9.14245 13.7201L4.53884 10.3754H10.2292H10.5925L10.7047 10.0299L12.4632 4.61803Z"
      stroke="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import iconMixin from "../../mixins/iconMixin";

export default {
  name: "StarIcon",
  mixins: [iconMixin],
};
</script>
