<template>
  <v-main>
    <v-app-bar class="px-6">
      <div style="height: 60px; margin-left: 14px; margin-top: auto">
        <p class="title">
          <span style="color: #79a1e6; font-size: 20px">{{
            auth.userInfo.nickname
          }}</span>
          님!
        </p>
        <p class="title">자유롭게 채팅해보세요.</p>
      </div>

      <v-spacer></v-spacer>
      <IconNotification @click="router.push('/notification')" />
      <IconMy class="ms-5" @click="router.push('/my')" />
    </v-app-bar>
    <v-container class="pb-0">
      <v-text-field
        class="mt-4"
        rounded="30"
        label="궁금한 것을 적어보세요!"
        bg-color="#e8e8e8"
      >
        <template v-slot:prepend-inner>
          <IconSearch />
        </template>
      </v-text-field>
    </v-container>
    <v-list bg-color="#fff">
      <v-list-item v-for="i in 8" class="px-0">
        <v-card rounded="15" class="py-0" @click="router.push('/chat/detail')">
          <template v-slot:prepend>
            <IconAvatar1 class="me-2" width="50" height="50" />
          </template>
          <template v-slot:title>
            <div class="d-flex">
              <p class="title-t16-medium me-2">닉네임</p>
              <v-badge color="#FF4841" content="1" inline></v-badge>
            </div>
          </template>
          <template v-slot:subtitle>
            <p class="title-t13-grey mt-2" style="color: #939393">
              000 게시물에 채팅을 신청하셨어요
            </p>
          </template>
          <template v-slot:append>
            <p
              class="title-t11-regular"
              style="color: #b2b2b2; margin-top: 20px"
            >
              2024.05.05
            </p>
          </template>
        </v-card>
        <v-divider class="border-opacity-100" color="#E8E8E8" thickness="1" />
      </v-list-item>
    </v-list>
  </v-main>
</template>

<script setup>
const auth = useAuthStore();
definePageMeta({
  title: "Chat",
  description: "Chat page",
  layout: "home",
});
const router = useRouter();
</script>

<style lang="scss" scoped>
.title {
  color: #121212;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 166.667% */
}
</style>
