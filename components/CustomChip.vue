<template>
  <div class="container">
    <div class="text-wrapper">{{ text }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
});
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  background-color: #ffffff;
  border: 1.5px dashed;
  border-color: #ced3dc;
  border-radius: 30px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px 10px;
  justify-content: center;
  overflow: hidden;
  padding: 8px 20px;
  position: relative;
  width: auto;
}

.container .text-wrapper {
  color: #585858;
  font-family: "Pretendard-SemiBold", Helvetica;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1.5px;
  position: relative;
  width: fit-content;
}
</style>
