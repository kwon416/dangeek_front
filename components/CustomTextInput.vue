<template>
  <v-text-field
    bg-color="#F2F4F6"
    :label="label"
    rounded="10"
    base-color="#F2F4F6"
    density="compact"
    :type="type"
    v-model="model"
  >
  </v-text-field>
</template>

<script setup>
const model = defineModel({ required: true, default: "" });
const props = defineProps({
  label: {
    type: String,
    default: "입력하세요",
  },
  type: {
    type: String,
    default: "text",
  },
});
</script>

<style lang="scss" scoped></style>
