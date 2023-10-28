<template>
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="loader"
  >
    <circle cx="40" cy="24" r="3" fill="currentColor" fill-opacity="0.0" />
    <circle cx="35" cy="13" r="3" fill="currentColor" fill-opacity="0.125" />
    <circle cx="24" cy="8" r="3" fill="currentColor" fill-opacity="0.25" />
    <circle cx="13" cy="13" r="3" fill="currentColor" fill-opacity="0.375" />
    <circle cx="8" cy="24" r="3" fill="currentColor" fill-opacity="0.5" />
    <circle
      opacity="0.625"
      cx="13"
      cy="35"
      r="3"
      transform="rotate(-180 13 35)"
      fill="currentColor"
    />
    <circle
      opacity="0.75"
      cx="24"
      cy="40"
      r="3"
      transform="rotate(-180 24 40)"
      fill="currentColor"
    />
    <circle
      opacity="0.875"
      cx="35"
      cy="35"
      r="3"
      transform="rotate(-180 35 35)"
      fill="currentColor"
    />
  </svg>
</template>

<style lang="scss" scoped>
@keyframes opacitySpin {
  0% {
    fill-opacity: 0;
  }
  50% {
    fill-opacity: 1;
  }
  100% {
    fill-opacity: 0;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  animation: spin 10s linear infinite;
  circle {
    animation: opacitySpin 2s ease-in-out infinite;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.25;
    }
    &:nth-child(3) {
      animation-delay: 0.5s;
    }
    &:nth-child(4) {
      animation-delay: 0.75s;
    }
    &:nth-child(5) {
      animation-delay: 1s;
    }
    &:nth-child(6) {
      animation-delay: 1.25s;
    }
    &:nth-child(7) {
      animation-delay: 1.5s;
    }
    &:nth-child(8) {
      animation-delay: 1.75s;
    }
  }
}
</style>
