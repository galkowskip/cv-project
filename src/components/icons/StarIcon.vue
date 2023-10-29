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
      d="M8.00001 2L9.34709 6.1459H13.7063L10.1796 8.7082L11.5267 12.8541L8.00001 10.2918L4.4733 12.8541L5.82038 8.7082L2.29367 6.1459H6.65293L8.00001 2Z"
      fill="currentColor"
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
      d="M12.4632 3L14.6971 9.87539H21.9263L16.0778 14.1246L18.3117 21L12.4632 16.7508L6.61461 21L8.84855 14.1246L3 9.87539H10.2292L12.4632 3Z"
      fill="currentColor"
    />
  </svg>
</template>

<script lang="ts">
import iconMixin from "../../mixins/iconMixin";

export default {
  mixins: [iconMixin],
};
</script>
