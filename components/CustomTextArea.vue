<template>
  <v-textarea
    bg-color="#F2F4F6"
    :label="label"
    rounded="10"
    base-color="#F2F4F6"
    type="text"
    v-model="model"
  >
  </v-textarea>
</template>

<script setup>
const model = defineModel({ required: true, default: "" });
const props = defineProps({
  label: {
    type: String,
    default: "입력하세요",
  },
});
</script>

<style lang="scss" scoped></style>
