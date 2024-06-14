<template>
  <v-card class="px-2 pt-2 mb-5" rounded="15">
    <v-card-text class="pb-0">
      <p class="mb-6">
        <span style="color: #3867e7">{{ question }}</span> {{ text }}
      </p>
      <v-radio-group class="pb-0" column>
        <CustomTextInput
          v-model="model"
          label="1~24 사이의 숫자를 입력해주세요"
        />
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
