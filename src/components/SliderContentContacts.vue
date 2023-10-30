<template>
  <SliderContentContainer>
    <template v-slot:content>
      <div class="contacts">
        <ContactBox />
      </div>
    </template>
  </SliderContentContainer>
</template>

<script setup>
import ContactBox from "./ContactBox.vue";
import SliderContentContainer from "./SliderContentContainer.vue";
</script>

<style scoped>
.contacts {
  max-width: 480px;
  width: 100%;
  margin: auto;
}
</style>
