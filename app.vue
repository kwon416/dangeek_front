<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  colorMode: "light",
});
</script>

<style>
@import "@/assets/css/reset.css";
/* IE, Edge, Firefox 스크롤바 숨기기 */
* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Chrome, Safari, Opera 스크롤바 숨기기 */
*::-webkit-scrollbar {
  display: none;
}
</style>
