<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="18.5" cy="18.5" r="18.5" fill="#3867E7" />
    <path
      d="M18.5 19C20.9853 19 23 16.9853 23 14.5C23 12.0147 20.9853 10 18.5 10C16.0147 10 14 12.0147 14 14.5C14 16.9853 16.0147 19 18.5 19Z"
      fill="white"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.6792 33.5069C9.37257 27.3751 13.8094 23 19.006 23C24.0233 23 28.3324 27.0784 30.1418 32.8787C26.9626 35.4559 22.9117 37 18.5002 37C14.4598 37 10.722 35.7048 7.6792 33.5069Z"
      fill="white"
    />
  </svg>
</template>

<script setup>
const props = defineProps({
  viewBox: { type: String, default: "0 0 37 37" },
  iconName: { type: String, default: "" },
  width: { type: [Number, String], default: 37 },
  height: { type: [Number, String], default: 37 },
  iconColor: { type: String, default: "black" },
});
</script>

<style lang="scss" scoped></style>
