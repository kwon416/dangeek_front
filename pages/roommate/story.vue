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
        class="px-6 mb-2 py-5 mx-auto"
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
.bottom-btn-wrapper {
  width: 100%;
  padding: 0 24px;
  background-color: #838383;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
}
</style>
