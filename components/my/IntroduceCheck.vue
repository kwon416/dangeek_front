<template>
  <v-card class="px-2 pt-2 mb-5" rounded="15">
    <v-card-text class="pb-0">
      <p class="mb-6">
        <span style="color: #3867e7">{{ question }}</span> {{ text }}
      </p>
      <v-radio-group class="pb-0" v-model="model" column>
        <div class="radio-wrapper">
          <IconO class="me-4" />
          <p>맞아요</p>
          <v-radio
            :value="'1'"
            class="mr-4"
            style="position: absolute; right: 17px"
          ></v-radio>
        </div>
        <div class="radio-wrapper mt-2">
          <IconX class="me-4" />
          <p>아니에요</p>
          <v-radio
            :value="'0'"
            class="mr-4"
            style="position: absolute; right: 17px"
          ></v-radio>
        </div>
      </v-radio-group>
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  question: {
    type: String,
    default: "Q",
  },
  text: {
    type: String,
    default: "text",
  },
});
const model = defineModel();
</script>

<style lang="scss" scoped>
p {
  font-family: Pretendard;
  font-size: 18px !important;
  font-style: normal;
  font-weight: 600 !important;
  line-height: normal;
}

.radio-wrapper {
  display: flex;
  border-radius: 15px;
  background-color: #f8f8f8;
  width: 100%;
  height: 51px;
  align-items: center;
  padding-left: 16px;
}
</style>
