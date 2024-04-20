<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 36626">
      <path
        id="Vector"
        d="M20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20C15.7467 20 20 15.7467 20 10.5Z"
        fill="#79A1E6"
        stroke="#79A1E6"
        stroke-width="1.5"
      />
      <path
        id="Vector 1"
        d="M5.52444 10.1768L9.47325 14.2187L15.061 6.71511"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<script setup>
const props = defineProps({
  viewBox: { type: String, default: "0 0 21 21" },
  iconName: { type: String, default: "" },
  width: { type: [Number, String], default: 21 },
  height: { type: [Number, String], default: 21 },
  iconColor: { type: String, default: "black" },
});
</script>

<style lang="scss" scoped></style>
