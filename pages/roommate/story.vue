<template>
  <v-main style="background-color: #838383">
    <v-app-bar class="px-3" style="background-color: #838383; margin-left: 4px">
      <IconAvatar1 :width="32" :height="32" />
      <p
        class="ms-2"
        style="
          color: #fff;
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Pretendard;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        "
      >
        name
      </p>
      <v-spacer></v-spacer>
      <v-btn icon @click="router.back()" class="me-0">
        <IconClose />
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-card
        class="px-6 mb-4 py-5 mx-auto"
        rounded="20"
        style="justify-content: center; display: flex"
      >
        <div style="display: block; width: fit-content">
          <div class="d-flex" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span class="me-9">이름</span>
              <span>김마틴</span>
            </p>
          </div>
          <div class="d-flex pt-1" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span class="me-9">학과</span>
              <span>컴퓨터공학과</span>
            </p>
          </div>
          <div class="d-flex pt-1" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span class="me-9">학년</span>
              <span>2학년</span>
            </p>
          </div>
          <div class="d-flex pt-1" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span class="me-9">성별</span>
              <span>김마틴</span>
            </p>
          </div>
        </div>
      </v-card>
      <v-card
        class="px-10 mb-4 py-5 mx-auto"
        rounded="20"
        style="justify-content: center; display: flex"
      >
        <div style="display: block; width: fit-content">
          <div class="d-flex" style="justify-content: center">
            <p class="title" style="line-height: 15px; padding-bottom: 6px">
              생활 습관 및 성향
            </p>
          </div>
          <div class="d-flex pt-1" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span
                >흡연자이며 외항형입니다. 잠버릇이 있어 같이 사는 룸메이트가
                예민하지 않은 사람이었으면 좋겠습니다.</span
              >
            </p>
          </div>
        </div>
      </v-card>
      <v-card
        class="px-10 mb-4 py-5 mx-auto"
        rounded="20"
        style="justify-content: center; display: flex"
      >
        <div style="display: block; width: fit-content">
          <div class="d-flex" style="justify-content: center">
            <p class="title" style="line-height: 15px; padding-bottom: 6px">
              취미 및 관심사
            </p>
          </div>
          <div class="d-flex pt-1" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span
                >EPL 경기 관람하는 것을 좋아하고 직접 축구하는 것도 좋아합니다.
              </span>
            </p>
          </div>
        </div>
      </v-card>
      <v-card
        class="px-10 mb-4 py-5 mx-auto"
        rounded="20"
        style="justify-content: center; display: flex"
      >
        <div style="display: block; width: fit-content">
          <div class="d-flex" style="justify-content: center">
            <p class="title" style="line-height: 15px; padding-bottom: 6px">
              기대하는 룸메이트 상
            </p>
          </div>
          <div class="d-flex pt-1" style="justify-content: start">
            <p
              class="title-t18-bold"
              style="line-height: 15px; padding-bottom: 6px"
            >
              <span
                >EPL 경기 관람하는 것을 좋아하고 직접 축구하는 것도 좋아합니다.
              </span>
            </p>
          </div>
        </div>
      </v-card>
      <div style="height: 93px"></div>
    </v-container>
    <div class="pb-10 bottom-btn-wrapper">
      <v-btn block class="v-btn__gradient" rounded="15" height="53">
        <p class="title-t18-bold">채팅 신청하기</p>
      </v-btn>
    </div>
  </v-main>
</template>

<script setup>
const router = useRouter();
</script>

<style lang="scss" scoped>
span {
  color: #121212;
  text-align: justify;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
}

.bottom-btn-wrapper {
  width: 100%;
  padding: 0 24px;
  background-color: #838383;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}
.title {
  color: #79a1e6;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
}
</style>
