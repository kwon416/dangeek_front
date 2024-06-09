<template>
  <TopBar title="자기소개 작성 및 수정" />
  <v-main style="background-color: #f2f4f6">
    <v-container>
      <p><span style="color: #79a1e6">nickname</span> 님은</p>
      <p class="mb-7">어떤 유형의 룸메이트 일까요?</p>
      <IntroduceCheck />
    </v-container>

    <div style="height: 133px"></div>
  </v-main>
  <div class="pb-10 pt-10 bottom-btn-wrapper">
    <v-btn
      v-bind="activatorProps"
      block
      class="v-btn__gradient"
      rounded="15"
      height="53"
      @click="router.back()"
    >
      <p class="title-t18-bold">저장하기</p>
    </v-btn>
  </div>
</template>

<script setup>
const router = useRouter();
const q1 = ref(null);
</script>

<style lang="scss" scoped>
p {
  font-family: Pretendard;
  font-size: 18px !important;
  font-style: normal;
  font-weight: 600 !important;
  line-height: normal;
}
.bottom-btn-wrapper {
  width: 100%;
  padding: 0 24px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
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
