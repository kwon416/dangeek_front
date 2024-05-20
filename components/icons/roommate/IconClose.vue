<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Group 11">
      <line
        id="Line 26"
        x1="21.4995"
        y1="2.7723"
        x2="2.97331"
        y2="21.2985"
        stroke="white"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <line
        id="Line 27"
        x1="2.97335"
        y1="3.29932"
        x2="21.4996"
        y2="21.8255"
        stroke="white"
        stroke-width="1.8"
        stroke-linecap="round"
      />
    </g>
  </svg>
</template>

<script setup>
const props = defineProps({
  viewBox: { type: String, default: "0 0 24 24" },
  iconName: { type: String, default: "" },
  width: { type: [Number, String], default: 24 },
  height: { type: [Number, String], default: 24 },
  iconColor: { type: String, default: "black" },
});
</script>

<style lang="scss" scoped></style>
