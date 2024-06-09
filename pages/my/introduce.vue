<template>
  <TopBar title="자기소개 작성 및 수정" />
  <v-main style="background-color: #f2f4f6">
    <v-container>
      <p><span style="color: #79a1e6">nickname</span> 님은</p>
      <p class="mb-7">어떤 유형의 룸메이트 일까요?</p>
      <IntroduceCheck
        question="Q1"
        text="배달음식을 시키고 바로 남은 쓰레기는 바로 치워야한다."
        v-model="q1"
      />
      <IntroduceCheck
        question="Q2"
        text="일주일에 한 번 이상 바닥 청소를 한다."
        v-model="q2"
      />
      <IntroduceCheck
        question="Q3"
        text="한 달에 한 번 이상 화장실 청소를 한다"
        v-model="q3"
      />
      <IntroduceCheck
        question="Q4"
        text="나의 책상 위에는 쓰레기가 있으면 안된다."
        v-model="q4"
      />
      <IntroduceCheck
        question="Q5"
        text="음식을 요리한 뒤에는 바로 설거지를 해야 한다."
        v-model="q5"
      />
      <IntroduceCheck
        question="Q6"
        text="배달음식을 시키고 남은 쓰레기는 하루 이틀 내에 치운다."
        v-model="q6"
      />
      <IntroduceCheck
        question="Q7"
        text="한 달에 한 번 이상 바닥 청소를 한다."
        v-model="q7"
      />
      <IntroduceCheck
        question="Q8"
        text="세 달에 한 번 이상 화장실 청소를 한다"
        v-model="q8"
      />
      <IntroduceCheck
        question="Q9"
        text="내 책상은 깨끗한 편이라고 생각한다."
        v-model="q9"
      />
      <IntroduceCheck
        question="Q10"
        text="음식을 요리하고 하루 이틀 내에 설거지를 한다."
        v-model="q10"
      />
      <IntroduceInput
        question="Q11"
        text="나의 평균 취침시간은?"
        type="number"
        v-model="q11"
      />
      <IntroduceInput
        question="Q12"
        text="나의 평균 수면시간은?"
        type="number"
        v-model="q12"
      />
      <v-card class="px-2 pt-2 mb-5" rounded="15">
        <v-card-text class="pb-0">
          <p class="mb-6">
            <span style="color: #3867e7">Q13</span>
            나의 취미 및 관심사는?
          </p>
          <v-select
            rounded="15"
            density="compact"
            color="#79A1E6"
            :items="[
              '게임',
              '스포츠',
              '독서',
              '미술',
              '영화감상',
              '수집',
              '공예',
              '관찰',
              '여행',
              '음악',
              '요리',
              '사진',
            ]"
          >
            <template v-slot:label>
              <span>선택해주세요</span>
            </template>
          </v-select>
        </v-card-text>
      </v-card>
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
const q2 = ref(null);
const q3 = ref(null);
const q4 = ref(null);
const q5 = ref(null);
const q6 = ref(null);
const q7 = ref(null);
const q8 = ref(null);
const q9 = ref(null);
const q10 = ref(null);
const q11 = ref(null);
const q12 = ref(null);
const q13 = ref(null);
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
