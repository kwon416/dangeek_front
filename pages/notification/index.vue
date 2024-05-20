<template>
  <v-main style="background-color: #f2f4f6">
    <v-app-bar app :elevation="0" style="background-color: #f2f4f6">
      <v-btn icon @click="router.back()">
        <IconBackBtn />
      </v-btn>
      <v-app-bar-title class="text-center mx-0"> 알림 </v-app-bar-title>
      <v-btn icon disabled />
    </v-app-bar>
    <v-list bg-color="#f2f4f6">
      <v-list-item v-for="i in 8">
        <v-card rounded="15" class="py-2 my-1">
          <template v-slot:prepend>
            <IconAvatar1 />
          </template>
          <template v-slot:title>
            <p class="title-t14-medium">상대방 닉네임</p>
          </template>
          <template v-slot:subtitle>
            <p class="title-t13-grey" style="color: #939393">
              000 게시물에 채팅을 신청하셨어요
            </p>
          </template>
          <template v-slot:append>
            <p
              class="title-t11-regular"
              style="color: #3867e7; margin-bottom: 20px"
            >
              10분전
            </p>
          </template>
        </v-card>
      </v-list-item>
    </v-list>
  </v-main>
</template>

<script setup>
const router = useRouter();
</script>

<style lang="scss" scoped></style>
