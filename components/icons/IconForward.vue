<template>
  <svg
    width="8"
    height="20"
    viewBox="0 0 8 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 12L6.28711 6.7L1 1.413"
      :stroke="iconColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  iconColor: { type: String, default: "#707070" },
});
</script>

<style lang="scss" scoped></style>
