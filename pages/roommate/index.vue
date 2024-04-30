<template>
  <v-main>
    <v-app-bar class="px-6">
      <IconConfetti />
      <div style="height: 60px; margin-left: 14px; margin-top: auto">
        <p class="title">
          <span style="color: #79a1e6; font-size: 20px">name</span> 님을 위한
        </p>
        <p class="title">룸메이트 추천!</p>
      </div>

      <v-spacer></v-spacer>
      <IconNotification />
      <IconMy class="ms-5" />
    </v-app-bar>
    <v-slide-group v-if="true" :show-arrows="false" class="mt-9">
      <v-slide-group-item v-for="i in 5">
        <v-avatar class="me-5">
          <v-img src="@/assets/icons/avatar/avatar_1.svg"></v-img>
        </v-avatar>
      </v-slide-group-item>
    </v-slide-group>
    <div v-else>자기소개 작성하러 가기</div>
    <v-container> </v-container>
  </v-main>
</template>

<script setup></script>

<style lang="scss" scoped>
.title {
  color: #121212;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 166.667% */
}
.slider_item {
  margin-right: 1.2rem;
  width: 24.3rem;
  height: 15.7rem;
}
</style>
