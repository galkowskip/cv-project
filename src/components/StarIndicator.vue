<template>
  <div class="star-indicator">
    <StarIcon
      size="24"
      v-for="index in fullStarsCount"
      :key="`full-${index}`"
    />
    <StarAltIcon
      size="24"
      v-for="index in emptyStarsCount"
      :key="`empty-${index}`"
    />
  </div>
</template>

<script setup lang="ts">
import StarIcon from "./icons/StarIcon.vue";
import StarAltIcon from "./icons/StarAltIcon.vue";

import { ref, onMounted } from "vue";

const props = defineProps({
  count: {
    type: Number,
    required: false,
    default: 0,
  },
  maxCount: {
    type: Number,
    required: false,
    default: 5,
  },
});

const fullStarsCount = ref(0);
const emptyStarsCount = ref(0);

onMounted(() => {
  if (props.count > props.maxCount) {
    throw new Error(
      `StarIndicator: count prop cannot be greater than maxCount prop`
    );
  }
  fullStarsCount.value = Math.floor(props.count);
  emptyStarsCount.value = props.maxCount - fullStarsCount.value;
});
</script>

<style>
.star-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: inherit;
}
</style>
